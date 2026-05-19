import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import gsap from "gsap";
import { competences } from "../data/competences";
import AmberCascades from "../sections/AmberCascades";
import CompetenceRadar from "../components/CompetenceRadar";

const imagesTech = [
  "images/capability-1.jpg",
  "images/capability-2.jpg",
  "images/capability-3.jpg",
  "images/capability-4.jpg",
  "images/research-4.jpg",
];

const imagesHum = [
  "images/research-3.jpg",
  "images/research-1.jpg",
  "images/research-2.jpg",
  "images/research-3.jpg",
  "images/research-4.jpg",
];

const niveauxTech = [
  "Autonome",
  "Autonome",
  "Autonome",
  "Autonome",
  "Autonome",
];

const niveauxHum = [
  "Confirmé",
  "Confirmé",
  "Confirmé",
  "Confirmé",
  "Expert",
];

export default function CompetencesPage() {
  const navigate = useNavigate();
  const techniques = competences.filter((c) => c.type === "technique");
  const humaines = competences.filter((c) => c.type === "humaine");
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState<"tech" | "humain">("tech");

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    cards.forEach((card) => gsap.set(card, { opacity: 0, y: 40 }));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            const index = cards.indexOf(target);
            gsap.to(target, { opacity: 1, y: 0, duration: 0.7, delay: index * 0.1, ease: "power3.out" });
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [activeTab]);

  const currentList = activeTab === "tech" ? techniques : humaines;
  const currentImages = activeTab === "tech" ? imagesTech : imagesHum;
  const prefix = activeTab === "tech" ? "T" : "H";

  return (
    <div style={{ background: "#030308", color: "#fff", minHeight: "100vh" }}>
      {/* Hero header */}
      <div style={{ position: "relative", height: "45vh", overflow: "hidden" }}>
        <AmberCascades />
        <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0 5vw" }}>
          <h1 style={{
            fontFamily: "'EB Garamond', serif",
            fontSize: "clamp(48px, 10vw, 140px)",
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: "-3px",
            color: "#ffffff",
            margin: 0,
            textAlign: "center",
          }}>
            Compétences
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            marginTop: 24,
            maxWidth: 700,
            textAlign: "center",
          }}>
            Cinq compétences techniques et cinq compétences humaines — mon profil d'expert en cybersécurité
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 5vw 120px" }}>
        <Link to="/" style={{ fontFamily: "'GeistMono', monospace", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", display: "inline-block", marginBottom: 48 }}>
          ← Retour à l'accueil
        </Link>

        {/* Tab switcher */}
        <div style={{
          display: "flex",
          gap: 0,
          marginBottom: 60,
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 4,
          overflow: "hidden",
        }}>
          <button
            onClick={() => setActiveTab("tech")}
            style={{
              flex: 1,
              fontFamily: "'GeistMono', monospace",
              fontSize: 13,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "16px 24px",
              background: activeTab === "tech" ? "rgba(212, 168, 83, 0.15)" : "transparent",
              color: activeTab === "tech" ? "#D4A853" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              borderBottom: activeTab === "tech" ? "2px solid #D4A853" : "2px solid transparent",
            }}
          >
            Compétences Techniques (5)
          </button>
          <button
            onClick={() => setActiveTab("humain")}
            style={{
              flex: 1,
              fontFamily: "'GeistMono', monospace",
              fontSize: 13,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "16px 24px",
              background: activeTab === "humain" ? "rgba(212, 168, 83, 0.15)" : "transparent",
              color: activeTab === "humain" ? "#D4A853" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              borderBottom: activeTab === "humain" ? "2px solid #D4A853" : "2px solid transparent",
            }}
          >
            Compétences Humaines (5)
          </button>
        </div>

        {/* Description */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 17,
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.55)",
          marginBottom: 60,
          maxWidth: 700,
        }}>
          {activeTab === "tech"
            ? "Cinq compétences techniques centrées sur le développement logiciel sécurisé, la cryptographie appliquée, l'automatisation des infrastructures et l'ingénierie des modèles de langage."
            : "Cinq compétences humaines — la dimension relationnelle et méthodologique de mon expertise, animée par la conviction que la cybersécurité repose avant tout sur les personnes."}
        </p>

        {/* Radar Chart */}
        <CompetenceRadar />

        {/* List */}
        <div className="flex flex-col" style={{ gap: 80 }}>
          {currentList.map((c, i) => (
            <div
              key={c.id}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="flex flex-col md:flex-row md:items-start cursor-pointer group"
              style={{ gap: "40px" }}
              onClick={() => navigate(`/competence/${c.id}`)}
            >
              <div style={{ flex: "0 0 60%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 11,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#D4A853",
                    opacity: 0.7,
                  }}>
                    {prefix}{i + 1}
                  </span>
                  <span style={{
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 10,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: (activeTab === "tech" ? niveauxTech[i] : niveauxHum[i]) === "Expert" ? "#D4A853" : (activeTab === "tech" ? niveauxTech[i] : niveauxHum[i]) === "Confirmé" ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.35)",
                    border: `1px solid ${(activeTab === "tech" ? niveauxTech[i] : niveauxHum[i]) === "Expert" ? "rgba(212,168,83,0.4)" : (activeTab === "tech" ? niveauxTech[i] : niveauxHum[i]) === "Confirmé" ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)"}`,
                    borderRadius: 3,
                    padding: "3px 10px",
                  }}>
                    {activeTab === "tech" ? niveauxTech[i] : niveauxHum[i]}
                  </span>
                </div>
                <h2 style={{
                  fontFamily: "'EB Garamond', serif",
                  fontWeight: 400,
                  fontSize: "clamp(32px, 4.5vw, 64px)",
                  lineHeight: 1.05,
                  letterSpacing: "-1.5px",
                  color: "#ffffff",
                  margin: 0,
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
                <span style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 11,
                  color: "#D4A853",
                  marginTop: 16,
                  display: "inline-block",
                  opacity: 0.6,
                }}>
                  Voir le détail →
                </span>
              </div>
              <div style={{
                flex: "1 1 40%",
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
                minHeight: 200,
              }}>
                <img
                  src={currentImages[i]}
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
      </div>
    </div>
  );
}
