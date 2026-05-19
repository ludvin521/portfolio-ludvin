import { useParams, Link } from "react-router-dom";
import { realisations } from "../data/realisations";
import { competences } from "../data/competences";
import AmberCascades from "../sections/AmberCascades";
import RichText from "../components/RichText";

// Mapping: réalisation ID → compétence IDs (navigation circulaire)
const circulaireMap: Record<string, string[]> = {
  "backend-opencyberai": ["python-fastapi", "securite-systemes", "infrastructure-code", "coordination", "gestion-pression"],
  "chiffrement-rgpd": ["python-fastapi", "securite-systemes", "chiffrement-crypto", "autonomie", "esprit-critique"],
  "vivatech-2025": ["securite-systemes", "chiffrement-crypto", "coordination", "gestion-pression", "communication-technique"],
  "ia-agentique": ["python-fastapi", "prompt-engineering", "autonomie", "esprit-critique", "communication-technique"],
  "contrat-men": ["python-fastapi", "infrastructure-code", "coordination", "autonomie", "communication-technique"],
};

export default function RealisationPage() {
  const { id } = useParams<{ id: string }>();
  const r = realisations.find((x) => x.id === id);

  if (!r) {
    return (
      <div style={{ background: "#030308", color: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 20 }}>
        <h1 style={{ fontFamily: "'GeistMono', monospace", fontSize: 32 }}>Réalisation introuvable</h1>
        <Link to="/" style={{ color: "#D4A853", fontFamily: "'GeistMono', monospace" }}>← Retour à l'accueil</Link>
      </div>
    );
  }

  const prevIndex = realisations.indexOf(r);
  const prev = prevIndex > 0 ? realisations[prevIndex - 1] : null;
  const next = prevIndex < realisations.length - 1 ? realisations[prevIndex + 1] : null;

  return (
    <div style={{ background: "#030308", color: "#fff", minHeight: "100vh" }}>
      <div style={{ position: "relative", height: "40vh", overflow: "hidden" }}>
        <AmberCascades />
        <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 5vw" }}>
          <span style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>
            Réalisation
          </span>
          <h1 style={{ fontFamily: "'EBGaramond', serif", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-1px", maxWidth: 900 }}>
            {r.titre}
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.6)", marginTop: 12, maxWidth: 700 }}>
            {r.sousTitre}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 5vw 80px" }}>
        <Link to="/" style={{ fontFamily: "'GeistMono', monospace", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", display: "inline-block", marginBottom: 48 }}>
          ← Retour à l'accueil
        </Link>

        {/* Introduction */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, marginBottom: 24 }}>
            Introduction
          </h2>
          {r.introduction.map((p, i) => (
            <p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.8)", marginBottom: 16 }}><RichText text={p} /></p>
          ))}
        </section>

        {/* Définition */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, marginBottom: 24 }}>
            Définition du périmètre
          </h2>
          {r.definition.map((p, i) => (
            <p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.75)", marginBottom: 12 }}><RichText text={p} /></p>
          ))}
        </section>

        {/* Objectifs */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, marginBottom: 24 }}>
            Objectifs de cette réalisation
          </h2>
          {r.objectifs.map((obj, i) => (
            <div key={i} style={{ marginBottom: 24 }}>
              <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10 }}>{obj.titre}</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {obj.items.map((item, j) => (
                  <li key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.75)", marginBottom: 8, paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#D4A853" }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Contexte humain */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, marginBottom: 24 }}>
            Contexte humain
          </h2>
          {r.contexteHumain.map((pers, i) => (
            <div key={i} style={{ marginBottom: 20, padding: "16px 20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 6 }}>
              <h3 style={{ fontFamily: "'EBGaramond', serif", fontSize: 18, fontWeight: 500, color: "#fff", marginBottom: 2 }}>
                {pers.nom} <span style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, color: "#D4A853" }}>— {pers.role}</span>
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.6)" }}>{pers.description}</p>
            </div>
          ))}
        </section>

        {/* Contexte technique */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, marginBottom: 24 }}>
            Contexte technique
          </h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {r.contexteTechnique.map((item, i) => (
              <li key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.75)", marginBottom: 8, paddingLeft: 16, position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "#D4A853" }}>•</span> {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Enjeux et risques */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, marginBottom: 24 }}>
            Enjeux et risques
          </h2>
          {r.enjeux.map((section, i) => (
            <div key={i} style={{ marginBottom: 24 }}>
              <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10 }}>{section.titre}</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {section.items.map((item, j) => (
                  <li key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.75)", marginBottom: 8, paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#D4A853" }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Étapes */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, marginBottom: 24 }}>
            Étapes de la réalisation
          </h2>
          {r.etapes.map((etape, i) => (
            <div key={i} style={{ marginBottom: 28, padding: "20px 24px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 6 }}>
              <h3 style={{ fontFamily: "'EBGaramond', serif", fontSize: 18, fontWeight: 500, color: "#D4A853", marginBottom: 10 }}>
                {etape.titre}
              </h3>
              {etape.contenu.map((p, j) => (
                <p key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.75)", marginBottom: 8 }}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          ))}
        </section>

        {/* Résultats */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, marginBottom: 24 }}>
            Résultats
          </h2>
          {r.resultats.map((res, i) => (
            <div key={i} style={{ marginBottom: 24 }}>
              <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10 }}>{res.titre}</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {res.items.map((item, j) => (
                  <li key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.75)", marginBottom: 8, paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#D4A853" }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Lendemains */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, marginBottom: 24 }}>
            Les lendemains de cette réalisation
          </h2>
          {r.lendemains.map((p, i) => (
            <p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.75)", marginBottom: 14 }}><RichText text={p} /></p>
          ))}
        </section>

        {/* Ce que je retiens */}
        <section style={{ marginBottom: 48, padding: "28px 32px", background: "rgba(212, 168, 83, 0.04)", border: "1px solid rgba(212, 168, 83, 0.12)", borderRadius: 6 }}>
          <h2 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "#D4A853", marginBottom: 20 }}>
            Ce que je retiens de cette réalisation
          </h2>
          {r.ceQueJeRetiens.map((p, i) => (
            <p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.8)", marginBottom: 14, fontStyle: "italic" }}>
              « <RichText text={p} /> »
            </p>
          ))}
        </section>

        {/* Navigation circulaire */}
        <section style={{ marginBottom: 48, padding: "28px 32px", background: "rgba(212, 168, 83, 0.04)", border: "1px solid rgba(212, 168, 83, 0.15)", borderRadius: 6 }}>
          <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "#D4A853", marginBottom: 16 }}>
            Navigation circulaire — Compétences mobilisées
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>
            Cette réalisation mobilise les compétences suivantes. Cliquez pour naviguer vers chaque compétence.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {(circulaireMap[r.id] || []).map((cid) => {
              const c = competences.find((x) => x.id === cid);
              if (!c) return null;
              return (
                <Link
                  key={cid}
                  to={`/competence/${cid}`}
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
                  {c.titre} →
                </Link>
              );
            })}
          </div>
        </section>

        {/* Compétences mobilisées texte */}
        <section style={{ marginBottom: 48, padding: "20px 24px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 6 }}>
          <p style={{ fontFamily: "'GeistMono', monospace", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
            <span style={{ color: "#D4A853" }}>Compétences mobilisées :</span> {r.competencesMobilisees}
          </p>
        </section>

        {/* Navigation prev/next */}
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32 }}>
          {prev ? (
            <Link to={`/realisation/${prev.id}`} style={{ textDecoration: "none", maxWidth: "45%" }}>
              <span style={{ fontFamily: "'GeistMono', monospace", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>← Précédent</span>
              <p style={{ fontFamily: "'EBGaramond', serif", fontSize: 18, color: "#D4A853", marginTop: 4 }}>{prev.titre}</p>
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/realisation/${next.id}`} style={{ textDecoration: "none", maxWidth: "45%", textAlign: "right" }}>
              <span style={{ fontFamily: "'GeistMono', monospace", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Suivant →</span>
              <p style={{ fontFamily: "'EBGaramond', serif", fontSize: 18, color: "#D4A853", marginTop: 4 }}>{next.titre}</p>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
