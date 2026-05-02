import { ImageResponse } from "next/og";

export const runtime = "edge";

const SIZE = {
  width: 1200,
  height: 630,
};

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #E8D2B2 0%, transparent 70%), linear-gradient(180deg, #FBF8F3 0%, #F4EFE6 50%, #E5D8C2 100%)",
          fontFamily: "serif",
          color: "#1B130D",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "28px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#2A1E15",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background:
                "radial-gradient(circle at 30% 30%, #C7A982, #2A1E15)",
            }}
          />
          <span style={{ fontWeight: 600 }}>Hearth</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "140px",
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              fontWeight: 300,
              color: "#1B130D",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>EVERY HOME,</span>
            <span>
              HANDLED
              <sup
                style={{
                  fontSize: "0.35em",
                  fontWeight: 400,
                  verticalAlign: "super",
                }}
              >
                ®
              </sup>
            </span>
          </div>

          <div
            style={{
              marginTop: "32px",
              fontSize: "30px",
              letterSpacing: "0.04em",
              color: "rgba(42, 30, 21, 0.7)",
            }}
          >
            / The AI maintenance coordinator /
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "20px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(42, 30, 21, 0.65)",
          }}
        >
          <span>Short-term rentals · Landlords · Homeowners</span>
          <span>home-manager-two.vercel.app</span>
        </div>
      </div>
    ),
    {
      ...SIZE,
    },
  );
}
