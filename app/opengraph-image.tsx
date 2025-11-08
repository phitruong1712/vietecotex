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
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(75% 75% at 50% 50%, #12362a 0%, #0b1f19 100%)",
        }}
      >
        {/* Main Content Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "50px",
            paddingTop: "80px",
            paddingBottom: "100px",
          }}
        >
          {/* Symbol/Logo - Centered */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={symbolUrl}
            width={180}
            height={180}
            alt=""
            style={{
              opacity: 0.95,
            }}
          />

          {/* Text Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            {/* Headline */}
            <div
              style={{
                color: "#E6E0CD",
                fontSize: 60,
                fontWeight: 700,
                letterSpacing: "3px",
                lineHeight: "1.1",
              }}
            >
              Viet Ecotex
            </div>

            {/* Subheadline */}
            <div
              style={{
                color: "#C9C2AC",
                fontSize: 36,
                letterSpacing: "1.5px",
                lineHeight: "1.2",
              }}
            >
              Eco Microfiber Leather
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

