import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          color: "white",
          background: "linear-gradient(135deg,#020b18,#006ebc)",
        }}
      >
        <div style={{ fontSize: 36, color: "#e9b955", fontWeight: 700 }}>
          Set Apart Plumbing
        </div>
        <div style={{ marginTop: 28, fontSize: 76, fontWeight: 800, lineHeight: 1 }}>
          Honest, Reliable Plumbing Across the Central Coast
        </div>
        <div style={{ marginTop: 34, fontSize: 30, color: "#eef2f5" }}>
          0422 131 659 | NSW Licence 250695C
        </div>
      </div>
    ),
    size,
  );
}
