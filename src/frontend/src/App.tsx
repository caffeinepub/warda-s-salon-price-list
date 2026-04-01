import { Printer } from "lucide-react";

const GOLD = "#C8A24A";
const GOLD_LIGHT = "#D9BF74";
const BLACK = "#0B0B0B";
const CORNER_STYLE: React.CSSProperties = {
  position: "absolute",
  width: 9,
  height: 9,
  background: GOLD,
  transform: "rotate(45deg)",
};

const services = [
  {
    category: "Waxing",
    items: [
      { name: "Eyebrows", price: "$10" },
      { name: "Upper Lip", price: "$07" },
      { name: "Forehead", price: "$15" },
      { name: "Side Bun", price: "$20" },
      { name: "Chin", price: "$10" },
      { name: "Full Cheeks", price: "$10" },
      { name: "Full Face", price: "$40" },
      { name: "Full Eyebrow Tweeze", price: "$15" },
      { name: "Nostril", price: "$10" },
      { name: "Ears", price: "$12" },
      { name: "Half Arms", price: "$25" },
      { name: "Full Arms", price: "$40" },
      { name: "Half Legs", price: "$45" },
      { name: "Full Legs", price: "$60" },
      { name: "Abdomen", price: "$15" },
      { name: "Inner Thighs", price: "$15" },
      { name: "Butt", price: "$25" },
      { name: "Full Back", price: "$50" },
      { name: "Lower Back", price: "$25" },
      { name: "Stomach", price: "$30" },
      { name: "Chest", price: "$40" },
      { name: "Brazilian", price: "$60" },
      { name: "French Bikini", price: "$40" },
      { name: "Bikini Line", price: "$25" },
    ],
  },
  {
    category: "Threading",
    items: [
      { name: "Eyebrow", price: "$10" },
      { name: "Upper Lip", price: "$05" },
      { name: "Forehead", price: "$07" },
      { name: "Side Buns", price: "$10" },
      { name: "Chin", price: "$07" },
      { name: "Neck", price: "$08" },
      { name: "Full Face", price: "$35" },
    ],
  },
  {
    category: "Facials",
    items: [
      { name: "Cleansing", price: "$25" },
      { name: "Skin Polish", price: "$35" },
      { name: "Herbal Facial", price: "$55" },
      { name: "Derma Plan Facial", price: "$65" },
      { name: "Whitening Facial", price: "$75" },
      { name: "Gold Facial", price: "$85" },
    ],
  },
];

function GoldDivider() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        margin: "10px 0",
      }}
    >
      <div
        style={{
          flex: 1,
          height: 1,
          background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
        }}
      />
      <div
        style={{
          width: 5,
          height: 5,
          background: GOLD,
          transform: "rotate(45deg)",
        }}
      />
      <div
        style={{
          flex: 1,
          height: 1,
          background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
        }}
      />
    </div>
  );
}

function OrnamentalDivider() {
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: 6, margin: "6px 0" }}
    >
      <div style={{ flex: 1, height: 0.5, background: GOLD, opacity: 0.5 }} />
      <div
        style={{
          width: 4,
          height: 4,
          border: `1px solid ${GOLD}`,
          transform: "rotate(45deg)",
        }}
      />
      <div
        style={{
          width: 3,
          height: 3,
          background: GOLD,
          transform: "rotate(45deg)",
        }}
      />
      <div
        style={{
          width: 4,
          height: 4,
          border: `1px solid ${GOLD}`,
          transform: "rotate(45deg)",
        }}
      />
      <div style={{ flex: 1, height: 0.5, background: GOLD, opacity: 0.5 }} />
    </div>
  );
}

function PageBorder() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 14,
        border: `1.5px solid ${GOLD}`,
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <div style={{ ...CORNER_STYLE, top: -5, left: -5 }} />
      <div style={{ ...CORNER_STYLE, top: -5, right: -5 }} />
      <div style={{ ...CORNER_STYLE, bottom: -5, left: -5 }} />
      <div style={{ ...CORNER_STYLE, bottom: -5, right: -5 }} />
    </div>
  );
}

export default function App() {
  const handlePrint = () => window.print();

  const pageWidth = 595;
  const pageHeight = 842;

  // Split waxing into two columns, threading and facials side by side
  const waxing = services[0];
  const threading = services[1];
  const facials = services[2];
  const waxingMid = Math.ceil(waxing.items.length / 2);
  const waxingCol1 = waxing.items.slice(0, waxingMid);
  const waxingCol2 = waxing.items.slice(waxingMid);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#1a1a1a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "32px 16px",
      }}
    >
      {/* Print button */}
      <div className="no-print" style={{ marginBottom: 32 }}>
        <button
          type="button"
          data-ocid="print.primary_button"
          onClick={handlePrint}
          style={{
            background: GOLD,
            color: BLACK,
            border: "none",
            borderRadius: 2,
            padding: "12px 32px",
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: "0.1em",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 10,
            textTransform: "uppercase",
            boxShadow: "0 2px 20px rgba(200,162,74,0.25)",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <Printer size={18} />
          Download / Print as PDF
        </button>
      </div>

      {/* Pages */}
      <div
        className="page-container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 32,
          alignItems: "center",
        }}
      >
        {/* PAGE 1: Front Cover */}
        <div
          className="pdf-page"
          style={{
            width: pageWidth,
            height: pageHeight,
            background: BLACK,
            position: "relative",
            boxShadow:
              "0 8px 40px 0 rgba(0,0,0,0.7), 0 2px 8px 0 rgba(200,162,74,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <PageBorder />
          <div
            style={{
              position: "absolute",
              inset: 22,
              border: `0.5px solid ${GOLD}`,
              opacity: 0.4,
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              padding: 40,
            }}
          >
            <img
              src="/assets/uploads/7b529444-2078-42d9-b820-eb0aa14be314-019d3c1a-da93-76fa-9506-41ebcf05dc9a-1.jpeg"
              alt="Warda's Salon"
              style={{
                maxWidth: 460,
                maxHeight: 680,
                width: "100%",
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
        </div>

        {/* PAGE 2: Price List */}
        <div
          className="pdf-page"
          style={{
            width: pageWidth,
            height: pageHeight,
            background: BLACK,
            position: "relative",
            boxShadow:
              "0 8px 40px 0 rgba(0,0,0,0.7), 0 2px 8px 0 rgba(200,162,74,0.1)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: "Georgia, serif",
          }}
        >
          <PageBorder />
          <div
            style={{
              position: "absolute",
              inset: 22,
              border: `0.5px solid ${GOLD}`,
              opacity: 0.3,
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: "36px 44px 32px",
            }}
          >
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 8 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    height: 1,
                    width: 80,
                    background: `linear-gradient(to right, transparent, ${GOLD})`,
                  }}
                />
                <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                  <div
                    style={{
                      width: 4,
                      height: 4,
                      background: GOLD,
                      transform: "rotate(45deg)",
                    }}
                  />
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      border: `1.5px solid ${GOLD}`,
                      transform: "rotate(45deg)",
                    }}
                  />
                  <div
                    style={{
                      width: 4,
                      height: 4,
                      background: GOLD,
                      transform: "rotate(45deg)",
                    }}
                  />
                </div>
                <div
                  style={{
                    height: 1,
                    width: 80,
                    background: `linear-gradient(to left, transparent, ${GOLD})`,
                  }}
                />
              </div>

              <div
                style={{
                  fontSize: 10,
                  letterSpacing: "0.35em",
                  color: GOLD_LIGHT,
                  textTransform: "uppercase",
                  fontFamily: "Georgia, serif",
                  marginBottom: 4,
                }}
              >
                Luxury Beauty & Wellness
              </div>

              <h1
                style={{
                  fontSize: 34,
                  fontWeight: 800,
                  color: GOLD,
                  fontFamily: '"Playfair Display", Georgia, serif',
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  margin: 0,
                  lineHeight: 1.1,
                  textShadow: "0 0 40px rgba(200,162,74,0.3)",
                }}
              >
                Warda&apos;s Salon
              </h1>

              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.5em",
                  color: GOLD_LIGHT,
                  textTransform: "uppercase",
                  fontFamily: "Georgia, serif",
                  marginTop: 6,
                  marginBottom: 6,
                }}
              >
                Price List
              </div>

              <GoldDivider />
            </div>

            {/* Waxing Section - full width with 2 columns */}
            <div style={{ marginBottom: 10 }}>
              <h2
                style={{
                  fontSize: 12,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: GOLD,
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 700,
                  margin: "0 0 3px 0",
                }}
              >
                Waxing
              </h2>
              <div
                style={{
                  height: 1,
                  background: `linear-gradient(to right, ${GOLD}, transparent)`,
                  marginBottom: 5,
                }}
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0 32px",
                }}
              >
                <div>
                  {waxingCol1.map((item) => (
                    <div
                      key={item.name}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "2px 0",
                        borderBottom: "0.5px solid rgba(200,162,74,0.15)",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 10.5,
                          color: "#e8e8e8",
                          fontFamily: "Georgia, serif",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {item.name}
                      </span>
                      <span
                        style={{
                          fontSize: 10.5,
                          color: GOLD_LIGHT,
                          fontFamily: "Georgia, serif",
                          fontWeight: 700,
                          whiteSpace: "nowrap",
                          marginLeft: 8,
                        }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  {waxingCol2.map((item) => (
                    <div
                      key={item.name}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "2px 0",
                        borderBottom: "0.5px solid rgba(200,162,74,0.15)",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 10.5,
                          color: "#e8e8e8",
                          fontFamily: "Georgia, serif",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {item.name}
                      </span>
                      <span
                        style={{
                          fontSize: 10.5,
                          color: GOLD_LIGHT,
                          fontFamily: "Georgia, serif",
                          fontWeight: 700,
                          whiteSpace: "nowrap",
                          marginLeft: 8,
                        }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Threading and Facials side by side */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0 32px",
                marginBottom: 10,
              }}
            >
              {[threading, facials].map((cat) => (
                <div key={cat.category}>
                  <h2
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: GOLD,
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontWeight: 700,
                      margin: "0 0 3px 0",
                    }}
                  >
                    {cat.category}
                  </h2>
                  <div
                    style={{
                      height: 1,
                      background: `linear-gradient(to right, ${GOLD}, transparent)`,
                      marginBottom: 5,
                    }}
                  />
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "2px 0",
                        borderBottom: "0.5px solid rgba(200,162,74,0.15)",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 10.5,
                          color: "#e8e8e8",
                          fontFamily: "Georgia, serif",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {item.name}
                      </span>
                      <span
                        style={{
                          fontSize: 10.5,
                          color: GOLD_LIGHT,
                          fontFamily: "Georgia, serif",
                          fontWeight: 700,
                          whiteSpace: "nowrap",
                          marginLeft: 8,
                        }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div style={{ textAlign: "center", marginTop: "auto" }}>
              <OrnamentalDivider />
              <p
                style={{
                  fontSize: 11,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: GOLD,
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontStyle: "italic",
                  margin: "8px 0 3px",
                }}
              >
                Book your appointment today
              </p>
              <p
                style={{
                  fontSize: 10,
                  color: GOLD_LIGHT,
                  letterSpacing: "0.12em",
                  fontFamily: "Georgia, serif",
                  margin: "0 0 2px",
                }}
              >
                631-552-7250
              </p>
              <p
                style={{
                  fontSize: 9.5,
                  color: GOLD_LIGHT,
                  opacity: 0.7,
                  letterSpacing: "0.1em",
                  fontFamily: "Georgia, serif",
                  margin: 0,
                  textTransform: "uppercase",
                }}
              >
                Home Based Licensed &bull; Separate Entry &bull; Parking
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="no-print"
        style={{
          marginTop: 40,
          textAlign: "center",
          fontSize: 12,
          color: "rgba(200,162,74,0.4)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        &copy; {new Date().getFullYear()}. Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          style={{ color: "rgba(200,162,74,0.6)", textDecoration: "none" }}
          target="_blank"
          rel="noreferrer"
        >
          caffeine.ai
        </a>
      </div>
    </div>
  );
}
