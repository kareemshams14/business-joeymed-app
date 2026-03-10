import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "JoeyMed for Business — Employer Health Programs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0A0E27 0%, #121837 50%, #1A2042 100%)",
          padding: "60px",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #3B82F6, #06B6D4, #14B8A6)",
            display: "flex",
          }}
        />

        {/* Logo text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
          }}
        >
          <span
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            joey
          </span>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#3B82F6",
              letterSpacing: "12px",
              lineHeight: 1,
            }}
          >
            med
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "3px",
            background: "linear-gradient(90deg, #3B82F6, #06B6D4)",
            marginTop: "32px",
            marginBottom: "32px",
            display: "flex",
          }}
        />

        {/* Title */}
        <span
          style={{
            fontSize: "36px",
            fontWeight: 600,
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          For Business
        </span>

        {/* Subtitle */}
        <span
          style={{
            fontSize: "22px",
            color: "#94A3B8",
            textAlign: "center",
            marginTop: "16px",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Clinically supervised GLP-1, TRT & HRT programs for your workforce
        </span>

        {/* Bottom corner accent */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "60px",
            fontSize: "16px",
            color: "#475569",
            display: "flex",
          }}
        >
          business.joeymed.com
        </div>
      </div>
    ),
    { ...size }
  );
}
