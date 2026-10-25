import { ImageResponse } from "next/og";

export const alt = "AMG Garaj Düzce — Mercedes-Benz Özel Servis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "#09090b",
          color: "#ffffff",
        }}
      >
        <div style={{ width: 120, height: 10, background: "#c8161f", marginBottom: 40 }} />
        <div style={{ fontSize: 150, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>
          AMG GARAJ
        </div>
        <div style={{ fontSize: 44, marginTop: 28, color: "#d4d4d8" }}>
          Düzce · Mercedes-Benz Özel Servis
        </div>
      </div>
    ),
    { ...size },
  );
}
