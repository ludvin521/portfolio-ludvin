import { useNavigate } from "react-router-dom";
import { competences } from "../data/competences";
import AmberCascades from "../sections/AmberCascades";

const images = [
  "images/research-3.jpg",
  "images/research-1.jpg",
  "images/research-2.jpg",
  "images/research-3.jpg",
  "images/research-4.jpg",
];

export default function CompetencesHumainesPage() {
  const navigate = useNavigate();
  const humaines = competences.filter((c) => c.type === "humaine");

  return (
    <div style={{ background: "#030308", color: "#fff", minHeight: "100vh" }}>
      {/* Hero header */}
      <div style={{ position: "relative", height: "50vh", overflow: "hidden" }}>
        <AmberCascades />
        <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0 5vw" }}>
          <span style={{ fontFamily: "'GeistMono', monospace", fontSize: 12, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>
            Portfolio Ludvin GATSE
          </span>
          <h1 style={{
            fontFamily: "'EB Garamond', serif",
            fontSize: "clamp(48px, 10vw, 140px)",
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: "-3px",
            color: "#ffffff",
            margin: 0,
            textAlign: "center",
            textWrap: "balance",
          }}>
            Compétences Humaines
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            marginTop: 24,
            maxWidth: 600,
            textAlign: "center",
            lineHeight: 1.6,
          }}>
            Cinq compétences humaines — la dimension relationnelle et méthodologique de mon expertise
          </p>
        </div>
      </div>

      {/* Liste des compétences */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 5vw 120px" }}>
        <div className="flex flex-col" style={{ gap: 120 }}>
          {humaines.map((c, i) => (
            <div
              key={c.id}
              className="flex flex-col md:flex-row md:items-start cursor-pointer group"
              style={{ gap: "40px" }}
              onClick={() => navigate(`/competence/${c.id}`)}
            >
              <div style={{ flex: "0 0 65%" }}>
                <span style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 11,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#D4A853",
                  opacity: 0.7,
                  display: "block",
                  marginBottom: 12,
                }}>
                  H{i + 1}
                </span>
                <h2 style={{
                  fontFamily: "'EB Garamond', serif",
                  fontWeight: 400,
                  fontSize: "clamp(36px, 5vw, 72px)",
                  lineHeight: 1.05,
                  letterSpacing: "-1.5px",
                  color: "#ffffff",
                  margin: 0,
                  textWrap: "balance",
                  transition: "color 0.4s ease",
                }} className="group-hover:text-amber-300">
                  {c.titre}
                </h2>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 16,
                  color: "rgba(255,255,255,0.45)",
                  marginTop: 12,
                  lineHeight: 1.5,
                }}>
                  {c.sousTitre}
                </p>
              </div>
              <div style={{
                flex: "1 1 35%",
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
                minHeight: 220,
              }}>
                <img
                  src={images[i]}
                  alt={c.titre}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    inset: 0,
                    filter: "grayscale(30%)",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease",
                  }}
                  className="group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Lien vers compétences techniques */}
        <div style={{ marginTop: 120, textAlign: "center", paddingTop: 60, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>
            Découvrez également mes compétences techniques
          </p>
          <button
            onClick={() => navigate("/competences-techniques")}
            style={{
              fontFamily: "'GeistMono', monospace",
              fontSize: 14,
              letterSpacing: "1px",
              color: "#D4A853",
              background: "transparent",
              border: "1px solid rgba(212, 168, 83, 0.3)",
              padding: "14px 32px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            className="hover:bg-amber-900/20"
          >
            ← Voir les Compétences Techniques
          </button>
        </div>
      </div>
    </div>
  );
}
