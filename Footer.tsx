import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { realisations } from "../data/realisations";
import AmberCascades from "../sections/AmberCascades";

const images = [
  "images/research-1.jpg",
  "images/research-2.jpg",
  "images/research-3.jpg",
  "images/research-4.jpg",
  "images/research-1.jpg",
];

const badges = [
  { label: "R1", color: "#D4A853" },
  { label: "R2", color: "#D4A853" },
  { label: "R3", color: "#D4A853" },
  { label: "R4", color: "#D4A853" },
  { label: "R5", color: "#D4A853" },
];

export default function RealisationsPage() {
  const navigate = useNavigate();
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    cards.forEach((card) => gsap.set(card, { opacity: 0, y: 40 }));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            const index = cards.indexOf(target);
            gsap.to(target, { opacity: 1, y: 0, duration: 0.7, delay: index * 0.15, ease: "power3.out" });
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "#030308", color: "#fff", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ position: "relative", height: "45vh", overflow: "hidden" }}>
        <AmberCascades />
        <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0 5vw" }}>
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(48px, 10vw, 140px)", fontWeight: 400, lineHeight: 1.0, letterSpacing: "-3px", color: "#ffffff", margin: 0, textAlign: "center" }}>
            Réalisations
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.5)", marginTop: 24, maxWidth: 700, textAlign: "center" }}>
            Cinq réalisations professionnelles chez OpenCyberAI
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 5vw 120px" }}>
        <Link to="/" style={{ fontFamily: "'GeistMono', monospace", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", display: "inline-block", marginBottom: 48 }}>
          ← Retour à l'accueil
        </Link>

        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", marginBottom: 60, maxWidth: 700 }}>
          Chaque réalisation est documentée dans son intégralité — contexte, étapes, résultats et apprentissages. Cliquez sur une carte pour accéder au détail complet.
        </p>

        {/* 5 réalisations */}
        <div className="flex flex-col" style={{ gap: 80 }}>
          {realisations.map((r, i) => (
            <div
              key={r.id}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="flex flex-col md:flex-row md:items-start cursor-pointer group"
              style={{ gap: "40px" }}
              onClick={() => navigate(`/realisation/${r.id}`)}
            >
              {/* Image */}
              <div style={{ flex: "0 0 40%", position: "relative", overflow: "hidden", borderRadius: 4, minHeight: 240 }}>
                <img
                  src={images[i]}
                  alt={r.titre}
                  style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0, filter: "grayscale(30%)", transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease" }}
                  className="group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>

              {/* Text */}
              <div style={{ flex: "1 1 60%" }}>
                <span style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: badges[i].color, opacity: 0.8, display: "block", marginBottom: 10 }}>
                  {badges[i].label}
                </span>
                <h2 style={{ fontFamily: "'EB Garamond', serif", fontWeight: 400, fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.05, letterSpacing: "-1px", color: "#ffffff", margin: 0, transition: "color 0.4s ease" }} className="group-hover:text-amber-300">
                  {r.titre}
                </h2>
                <p style={{ fontFamily: "'GeistMono', monospace", fontSize: 12, color: "#D4A853", marginTop: 8, marginBottom: 12 }}>
                  {r.sousTitre}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>
                  {r.introduction[0]}
                </p>
                <span style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, color: "#D4A853", opacity: 0.6, display: "inline-block" }}>
                  Voir le détail →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
