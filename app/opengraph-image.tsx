import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/siteConfig";

export const runtime = "edge";

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
          color: "#fafafa",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            borderRadius: 32,
            border: "2px solid #27272a",
            background: "#18181b",
            padding: "56px",
            justifyContent: "space-between",
          }}
        >
          {/* Accent */}
          <div
            style={{
              width: 96,
              height: 8,
              borderRadius: 9999,
              background: "#3b82f6",
            }}
          />

          {/* Main Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 72,
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              {siteConfig.name}
            </div>

            <div
              style={{
                fontSize: 40,
                color: "#a1a1aa",
                marginTop: 16,
                fontWeight: 600,
              }}
            >
              {siteConfig.jobTitle}
            </div>

            <div
              style={{
                fontSize: 28,
                color: "#d4d4d8",
                marginTop: 28,
                maxWidth: 900,
                lineHeight: 1.4,
              }}
            >
              {siteConfig.tagline}
            </div>
          </div>

          {/* Technology Pills */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {siteConfig.technologies.slice(0, 6).map((technology) => (
              <div
                key={technology}
                style={{
                  display: "flex",
                  padding: "10px 18px",
                  borderRadius: 9999,
                  border: "1px solid #3f3f46",
                  color: "#e4e4e7",
                  fontSize: 20,
                  background: "#27272a",
                }}
              >
                {technology}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#71717a",
              fontSize: 22,
            }}
          >
            <div>{siteConfig.url.replace(/^https?:\/\//, "")}</div>
            <div>{siteConfig.location}</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}