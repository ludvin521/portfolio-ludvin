import { Link } from "react-router-dom";
import AmberCascades from "../sections/AmberCascades";

export default function ContactPage() {
  return (
    <div style={{ background: "#030308", color: "#fff", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ position: "relative", height: "45vh", overflow: "hidden" }}>
        <AmberCascades />
        <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0 5vw" }}>
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(48px, 10vw, 140px)", fontWeight: 400, lineHeight: 1.0, letterSpacing: "-3px", color: "#ffffff", margin: 0, textAlign: "center" }}>
            Contact
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.5)", marginTop: 24, maxWidth: 600, textAlign: "center" }}>
            Disponible pour échanger sur la cybersécurité, l'ingénierie et les projets
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 5vw 120px" }}>
        <Link to="/" style={{ fontFamily: "'GeistMono', monospace", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", display: "inline-block", marginBottom: 60 }}>
          ← Retour à l'accueil
        </Link>

        {/* Coordoonnées */}
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {/* Identité */}
          <div style={{ padding: "32px 36px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 6, borderLeft: "3px solid #D4A853" }}>
            <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "#D4A853", marginBottom: 16 }}>
              Identité
            </h3>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 28, fontWeight: 400, color: "#fff", marginBottom: 8 }}>Ludvin Nynson Gatse</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.5)" }}>Cyber Security Engineer — ESIEA Paris</p>
          </div>

          {/* Email */}
          <div style={{ padding: "32px 36px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 6, borderLeft: "3px solid #D4A853" }}>
            <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "#D4A853", marginBottom: 16 }}>
              Email professionnel
            </h3>
            <a href="mailto:ludvin.gatse@opencyberai.com" style={{ fontFamily: "'Inter', sans-serif", fontSize: 20, color: "#D4A853", textDecoration: "none" }}>
              ludvin.gatse@opencyberai.com
            </a>
          </div>

          {/* Téléphone */}
          <div style={{ padding: "32px 36px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 6, borderLeft: "3px solid rgba(255,255,255,0.15)" }}>
            <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>
              Téléphone
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.7)" }}>+33 7 69 25 90 48</p>
          </div>

          {/* Localisation */}
          <div style={{ padding: "32px 36px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 6, borderLeft: "3px solid rgba(255,255,255,0.15)" }}>
            <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>
              Localisation
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.7)" }}>Île-de-France, France</p>
          </div>

          {/* LinkedIn & GitHub */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="https://www.linkedin.com/in/ludvin-gatse-b3a27031b" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", textDecoration: "none", padding: "14px 28px", border: "1px solid rgba(212, 168, 83, 0.3)", borderRadius: 4, transition: "all 0.3s ease" }} className="hover:bg-amber-900/20">
              LinkedIn →
            </a>
            <a href="https://github.com/ludvingatse" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", textDecoration: "none", padding: "14px 28px", border: "1px solid rgba(212, 168, 83, 0.3)", borderRadius: 4, transition: "all 0.3s ease" }} className="hover:bg-amber-900/20">
              GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
