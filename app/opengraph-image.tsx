import { ImageResponse } from "next/og";

export const alt = "OrderDesk POS cafe-first POS for Indian cafes";
export const contentType = "image/png";
export const size = {
  height: 630,
  width: 1200,
};

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#FFF9F2",
          color: "#17283B",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ color: "#F59E0B", fontSize: 28, fontWeight: 800 }}>
            OrderDesk POS
          </div>
          <div style={{ fontSize: 78, fontWeight: 900, lineHeight: 1.05, maxWidth: 880 }}>
            Cafe POS with QR ordering and billing.
          </div>
          <div style={{ color: "#667085", fontSize: 32, lineHeight: 1.35, maxWidth: 850 }}>
            QR ordering, live orders, tables, billing, reports and purchases in
            one cafe-first POS for Indian cafes.
          </div>
        </div>
        <div
          style={{
            background: "#17283B",
            borderRadius: 28,
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginLeft: 60,
            padding: 28,
            width: 290,
          }}
        >
          {["Table 3", "Preparing", "Rs. 840"].map((item, index) => (
            <div
              key={item}
              style={{
                background: index === 1 ? "#F59E0B" : "#FFFFFF",
                borderRadius: 16,
                color: index === 1 ? "#17283B" : "#17283B",
                fontSize: 28,
                fontWeight: 800,
                padding: "18px 20px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
