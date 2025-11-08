import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Viet Ecotex — Eco Microfiber Leather";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Symbol/Logo path - Update this if you have a specific symbol file
 * Currently using logo.png, but you can change to a symbol file if available
 */
const SYMBOL_PATH = "/logo.png";

export default async function Image() {
  // Use absolute URL so social scrapers can fetch the symbol reliably
  const symbolUrl = new URL(SYMBOL_PATH, "https://vietecotex.com").toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background:
            "radial-gradient(75% 75% at 50% 50%, #12362a 0%, #0b1f19 100%)",
        }}
      >
        {/* Symbol/Logo */}
        {/* Using an <img> tag is supported by @vercel/og */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={symbolUrl}
          width={220}
          height={220}
          alt=""
          style={{ opacity: 0.95 }}
        />

        {/* Headline */}
        <div
          style={{
            position: "absolute",
            bottom: 76,
            left: 0,
            right: 0,
            textAlign: "center",
            color: "#E6E0CD",
            fontSize: 52,
            fontWeight: 700,
            letterSpacing: 1,
            lineHeight: 1.1,
          }}
        >
          Viet Ecotex
        </div>

        {/* Subheadline */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: 0,
            right: 0,
            textAlign: "center",
            color: "#C9C2AC",
            fontSize: 28,
            letterSpacing: 0.5,
          }}
        >
          Eco Microfiber Leather
        </div>
      </div>
    ),
    { ...size }
  );
}

