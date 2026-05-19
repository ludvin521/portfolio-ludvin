import { useParams, Link } from "react-router-dom";
import { competences } from "../data/competences";
import { realisations } from "../data/realisations";
import AmberCascades from "../sections/AmberCascades";
import RichText from "../components/RichText";

// Mapping: compétence ID → réalisation IDs
const circulaireMap: Record<string, string[]> = {
  "python-fastapi": ["backend-opencyberai", "chiffrement-rgpd", "ia-agentique", "contrat-men"],
  "securite-systemes": ["backend-opencyberai", "chiffrement-rgpd", "vivatech-2025", "ia-agentique"],
  "prompt-engineering": ["vivatech-2025", "ia-agentique", "contrat-men"],
  "infrastructure-code": ["backend-opencyberai", "chiffrement-rgpd", "vivatech-2025", "contrat-men"],
  "chiffrement-crypto": ["backend-opencyberai", "chiffrement-rgpd", "vivatech-2025", "ia-agentique"],
  "coordination": ["backend-opencyberai", "vivatech-2025", "contrat-men"],
  "autonomie": ["chiffrement-rgpd", "ia-agentique", "contrat-men"],
  "esprit-critique": ["chiffrement-rgpd", "ia-agentique", "contrat-men"],
  "gestion-pression": ["backend-opencyberai", "vivatech-2025", "contrat-men"],
  "communication-technique": ["vivatech-2025", "ia-agentique", "contrat-men"],
};

export default function CompetencePage() {
  const { id } = useParams<{ id: string }>();
  const competence = competences.find((c) => c.id === id);

  if (!competence) {
    return (
      <div style={{ background: "#030308", color: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 20 }}>
        <h1 style={{ fontFamily: "'GeistMono', monospace", fontSize: 32 }}>Compétence introuvable</h1>
        <Link to="/" style={{ color: "#D4A853", fontFamily: "'GeistMono', monospace" }}>← Retour à l'accueil</Link>
      </div>
    );
  }

  const prevIndex = competences.indexOf(competence);
  const prev = prevIndex > 0 ? competences[prevIndex - 1] : null;
  const next = prevIndex < competences.length - 1 ? competences[prevIndex + 1] : null;

  return (
    <div style={{ background: "#030308", color: "#fff", minHeight: "100vh" }}>
      <div style={{ position: "relative", height: "40vh", overflow: "hidden" }}>
        <AmberCascades />
        <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 5vw" }}>
          <span style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>
            {competence.type === "technique" ? "Compétence Technique" : "Compétence Humaine"}
          </span>
          <h1 style={{ fontFamily: "'EBGaramond', serif", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-1px", maxWidth: 800 }}>
            {competence.titre}
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.6)", marginTop: 12, maxWidth: 600 }}>
            {competence.sousTitre}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 5vw 80px" }}>
        <Link to="/" style={{ fontFamily: "'GeistMono', monospace", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", display: "inline-block", marginBottom: 48 }}>
          ← Retour à l'accueil
        </Link>

        {/* Définition */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, marginBottom: 24 }}>
            Ma définition
          </h2>
          {competence.definition.map((p, i) => (
            <p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.8)", marginBottom: 16 }}>
              <RichText text={p} />
            </p>
          ))}
        </section>

        {/* Éléments de preuve */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, marginBottom: 24 }}>
            Mes éléments de preuve
          </h2>
          {competence.elementsDePreuve.map((ep, i) => (
            <div key={i} style={{ marginBottom: 32, padding: "24px 28px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 6 }}>
              <h3 style={{ fontFamily: "'EBGaramond', serif", fontSize: 20, fontWeight: 500, color: "#D4A853", marginBottom: 12 }}>
                {ep.titre}
              </h3>
              {ep.contenu.map((p, j) => (
                <p key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.75)", marginBottom: 10 }}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          ))}
        </section>

        {/* Autocritique */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, marginBottom: 24 }}>
            Mon autocritique
          </h2>

          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 8 }}>Mon niveau de maîtrise</h3>
            {competence.autocritique.niveau.map((p, i) => (
              <p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.75)", marginBottom: 10 }}><RichText text={p} /></p>
            ))}
          </div>

          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 8 }}>Ma marge de progression</h3>
            {competence.autocritique.margeProgression.map((p, i) => (
              <p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.75)", marginBottom: 10 }}><RichText text={p} /></p>
            ))}
          </div>

          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 8 }}>La contextualisation</h3>
            {competence.autocritique.contextualisation.map((p, i) => (
              <p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.75)", marginBottom: 10 }}><RichText text={p} /></p>
            ))}
          </div>

          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 8 }}>Place dans mon profil d'Expert actuel</h3>
            {competence.autocritique.placeProfil.map((p, i) => (
              <p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.75)", marginBottom: 10 }}><RichText text={p} /></p>
            ))}
          </div>

          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 8 }}>Ma vitesse d'acquisition</h3>
            {competence.autocritique.vitesseAcquisition.map((p, i) => (
              <p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.75)", marginBottom: 10 }}><RichText text={p} /></p>
            ))}
          </div>
        </section>

        {/* Évolution */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, marginBottom: 24 }}>
            Mon évolution dans cette compétence
          </h2>

          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 8 }}>Ma projection à moyen terme</h3>
            {competence.evolution.projection.map((p, i) => (
              <p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.75)", marginBottom: 10 }}><RichText text={p} /></p>
            ))}
          </div>

          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 8 }}>Ma formation en cours</h3>
            {competence.evolution.formation.map((p, i) => (
              <p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.75)", marginBottom: 10 }}><RichText text={p} /></p>
            ))}
          </div>
        </section>

        {/* Navigation circulaire */}
        <section style={{ marginBottom: 48, padding: "28px 32px", background: "rgba(212, 168, 83, 0.04)", border: "1px solid rgba(212, 168, 83, 0.15)", borderRadius: 6 }}>
          <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "#D4A853", marginBottom: 16 }}>
            Navigation circulaire — Réalisations liées
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>
            Cette compétence est illustrée par les réalisations suivantes. Cliquez pour naviguer vers chaque réalisation.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {(circulaireMap[competence.id] || []).map((rid) => {
              const r = realisations.find((x) => x.id === rid);
              if (!r) return null;
              return (
                <Link
                  key={rid}
                  to={`/realisation/${rid}`}
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 12,
                    color: "#D4A853",
                    textDecoration: "none",
                    padding: "8px 16px",
                    border: "1px solid rgba(212, 168, 83, 0.3)",
                    borderRadius: 4,
                    transition: "all 0.3s ease",
                    display: "inline-block",
                  }}
                  className="hover:bg-amber-900/20"
                >
                  {r.titre} →
                </Link>
              );
            })}
          </div>
        </section>

        {/* Liens */}
        <section style={{ marginBottom: 48, padding: "24px 28px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 6 }}>
          <p style={{ fontFamily: "'GeistMono', monospace", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>
            <span style={{ color: "#D4A853" }}>Réalisations associées :</span> {competence.realisationsAssociees}
          </p>
          <p style={{ fontFamily: "'GeistMono', monospace", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
            <span style={{ color: "#D4A853" }}>Compétences liées :</span> {competence.competencesLiees}
          </p>
        </section>

        {/* Navigation prev/next */}
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32 }}>
          {prev ? (
            <Link to={`/competence/${prev.id}`} style={{ textDecoration: "none", maxWidth: "45%" }}>
              <span style={{ fontFamily: "'GeistMono', monospace", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>← Précédent</span>
              <p style={{ fontFamily: "'EBGaramond', serif", fontSize: 18, color: "#D4A853", marginTop: 4 }}>{prev.titre}</p>
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/competence/${next.id}`} style={{ textDecoration: "none", maxWidth: "45%", textAlign: "right" }}>
              <span style={{ fontFamily: "'GeistMono', monospace", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Suivant →</span>
              <p style={{ fontFamily: "'EBGaramond', serif", fontSize: 18, color: "#D4A853", marginTop: 4 }}>{next.titre}</p>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
