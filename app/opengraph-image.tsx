import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/siteConfig";

export const runtime = "edge";

export const alt = `${siteConfig.name} Portfolio`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#09090b",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
          padding: 56,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            maxWidth: 1020,
            padding: "72px 80px",
            borderRadius: 32,
            background: "#18181b",
            border: "1px solid #3f3f46",
            boxShadow: "0 30px 80px rgba(0,0,0,.45)",
          }}
        >
          {/* Accent */}

          <div
            style={{
              display: "flex",
              width: 96,
              height: 8,
              borderRadius: 9999,
              background: "#60a5fa",
              marginBottom: 40,
            }}
          />

          {/* Name */}

          <div
            style={{
              display: "flex",
              color: "#fafafa",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            {siteConfig.name}
          </div>

          {/* Title */}

          <div
            style={{
              display: "flex",
              marginTop: 20,
              color: "#60a5fa",
              fontSize: 34,
              fontWeight: 600,
            }}
          >
            {siteConfig.title}
          </div>

          {/* Tagline */}

          <div
            style={{
              display: "flex",
              marginTop: 28,
              maxWidth: 760,
              color: "#a1a1aa",
              fontSize: 28,
              lineHeight: 1.45,
            }}
          >
            {siteConfig.tagline}
          </div>

          {/* Technologies */}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: 48,
              gap: 14,
            }}
          >
            {siteConfig.technologies.slice(0, 6).map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 18px",
                  borderRadius: 9999,
                  background: "#27272a",
                  border: "1px solid #3f3f46",
                  color: "#e4e4e7",
                  fontSize: 22,
                  fontWeight: 500,
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Footer */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 72,
              paddingTop: 28,
              borderTop: "1px solid #3f3f46",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#71717a",
                fontSize: 22,
              }}
            >
              {siteConfig.url.replace(/^https?:\/\//, "")}
            </div>

            <div
              style={{
                display: "flex",
                gap: 24,
                color: "#71717a",
                fontSize: 20,
              }}
            >
              <span>GitHub</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}