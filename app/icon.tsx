import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const size = {
  height: 256,
  width: 256,
};

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#17283B",
          color: "#F59E0B",
          display: "flex",
          fontSize: 84,
          fontWeight: 900,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        OD
      </div>
    ),
    size,
  );
}
