#!/bin/bash
# Usage: ./scripts/create-image.sh <description> <filename>
# Example: ./scripts/create-image.sh "A retro computer with a glowing screen" images/posts/retro-computer.png
#
# Generates a Hearth-themed image using OpenAI's gpt-image-1 model,
# uploads it to Vercel Blob Storage, and prints the blob URL.
#
# You only need to provide the content description — the script automatically
# injects Hearth's visual style, color palette, and design language.

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

# Hearth style guide — injected into every prompt
STYLE_SUFFIX="Cinematic editorial architectural and product photography in the spirit of Kinfolk and Cereal magazine. Warm, muted palette of cream (#FBF8F3), oat (#F4EFE6), sandstone (#E5D8C2), taupe (#CDBA9B), clay (#7E5E45), and deep espresso brown (#2A1E15). Soft golden-hour light, gentle film grain, shallow depth of field, generous negative space, sophisticated minimalist composition. Honest natural materials: oak, linen, plaster, brushed brass, terracotta, weathered leather. Premium real-estate-magazine aesthetic — calm, inviting, lived-in. No text, no logos, no watermarks, no people unless explicitly requested."

FULL_PROMPT="$DESCRIPTION. $STYLE_SUFFIX"

echo "Generating image..." >&2

RESPONSE=$(curl -s --connect-timeout 30 --max-time 120 -X POST https://api.openai.com/v1/images/generations \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"model\":\"gpt-image-1\",\"prompt\":$(echo "$FULL_PROMPT" | jq -Rs .),\"n\":1,\"size\":\"1536x1024\",\"quality\":\"low\"}")

B64=$(echo "$RESPONSE" | jq -r '.data[0].b64_json // empty')

if [ -z "$B64" ]; then
  echo "Error: Failed to generate image" >&2
  echo "$RESPONSE" | jq '.error // .' 2>/dev/null || echo "$RESPONSE" >&2
  exit 1
fi

echo "$B64" | base64 -d > "$TMPFILE"

# Upload to Vercel Blob if upload.sh is available, otherwise save locally.
if [ -x "$SCRIPT_DIR/upload.sh" ]; then
  echo "Generated image, uploading to blob storage..." >&2
  BLOB_URL=$("$SCRIPT_DIR/upload.sh" "$TMPFILE" "$FILENAME")
  echo "Uploaded: $BLOB_URL" >&2
  echo "$BLOB_URL"
else
  mkdir -p "$(dirname "$FILENAME")"
  cp "$TMPFILE" "$FILENAME"
  echo "Saved: $FILENAME" >&2
  echo "$FILENAME"
fi
