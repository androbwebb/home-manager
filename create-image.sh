#!/bin/bash
# Usage: ./scripts/create-image.sh <description> <filename>
# Example: ./scripts/create-image.sh "A retro computer with a glowing screen" images/posts/retro-computer.png
#
# Generates a blog-themed image using OpenAI's gpt-image-2 model,
# uploads it to Vercel Blob Storage, and prints the blob URL.
#
# You only need to provide the content description — the script automatically
# injects the blog's visual style, color palette, and design language.

set -e

if [ $# -lt 2 ]; then
  echo "Usage: $0 <description> <filename>" >&2
  echo "  description - What the image should depict (content only, style is auto-injected)" >&2
  echo "  filename    - Blob storage path (e.g. images/posts/my-image.png)" >&2
  exit 1
fi

DESCRIPTION="$1"
FILENAME="$2"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
TMPFILE=$(mktemp /tmp/blog-image-XXXXXX.png)
trap 'rm -f "$TMPFILE"' EXIT

if [ -z "$OPENAI_API_KEY" ]; then
  echo "Error: OPENAI_API_KEY environment variable is not set" >&2
  exit 1
fi

# 90s Blog style guide — injected into every prompt
STYLE_SUFFIX="Retro 1990s web aesthetic illustration. Nostalgic GeoCities-era style with hard edges, zero rounded corners, and bold 2px black outlines. Use a pastel palette: mint green (#B8E8D0), slate gray (#C8D6E0), soft pink (#F5C6D0), yellow (#F9E97E), sand beige (#E8DCC8) on a cream (#F5F2ED) background. Accent with teal (#0D7377), warm amber (#D97706), and blue (#2563EB). Pixel-art inspired flat shapes, chunky geometric forms, and a playful retro-computing vibe reminiscent of Windows 95 and early internet culture. No text, words, or letters in the image."

FULL_PROMPT="$DESCRIPTION. $STYLE_SUFFIX"

echo "Generating image..." >&2

RESPONSE=$(curl -s --connect-timeout 30 --max-time 120 -X POST https://api.openai.com/v1/images/generations \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"model\":\"gpt-image-2\",\"prompt\":$(echo "$FULL_PROMPT" | jq -Rs .),\"n\":1,\"size\":\"1536x1024\",\"quality\":\"low\",\"background\":\"transparent\"}")

B64=$(echo "$RESPONSE" | jq -r '.data[0].b64_json // empty')

if [ -z "$B64" ]; then
  echo "Error: Failed to generate image" >&2
  echo "$RESPONSE" | jq '.error // .' 2>/dev/null || echo "$RESPONSE" >&2
  exit 1
fi

echo "$B64" | base64 -d > "$TMPFILE"
echo "Generated image, uploading to blob storage..." >&2

BLOB_URL=$("$SCRIPT_DIR/upload.sh" "$TMPFILE" "$FILENAME")

echo "Uploaded: $BLOB_URL" >&2
echo "$BLOB_URL"
