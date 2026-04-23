import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Daksha — Full-Service Digital Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(63,63,70,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(63,63,70,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Logo / wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, position: "relative" }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "rgba(245,158,11,0.15)",
              border: "1px solid rgba(245,158,11,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f59e0b",
              fontSize: 20,
              fontWeight: 800,
            }}
          >
            D
          </div>
          <span style={{ color: "#fafafa", fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>
            DAKSHA
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, position: "relative" }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#f59e0b",
            }}
          >
            Full-Service Digital Agency
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#fafafa",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 800,
            }}
          >
            We build products that move fast.
          </div>
          <div style={{ fontSize: 22, color: "#a1a1aa", maxWidth: 640, lineHeight: 1.5 }}>
            Mobile apps, web platforms, brands, and growth systems for startups and solopreneurs.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            position: "relative",
          }}
        >
          {["Mobile Apps", "Web Platforms", "Branding", "Marketing"].map((tag) => (
            <div
              key={tag}
              style={{
                fontSize: 14,
                color: "#71717a",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{ width: 4, height: 4, borderRadius: "50%", background: "#f59e0b" }}
              />
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
