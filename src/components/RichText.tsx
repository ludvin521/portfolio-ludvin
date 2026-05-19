import { Link } from "react-router-dom";

// Mapping des mentions vers les routes
const linkMap: Record<string, { to: string; label: string }> = {
  // Réalisations
  "VivaTech 2025": { to: "/realisation/vivatech-2025", label: "VivaTech 2025" },
  "Vivatech 2025": { to: "/realisation/vivatech-2025", label: "VivaTech 2025" },
  "backend d'OpenCyberAI": { to: "/realisation/backend-opencyberai", label: "backend d'OpenCyberAI" },
  "Backend OpenCyberAI": { to: "/realisation/backend-opencyberai", label: "Backend OpenCyberAI" },
  "module de chiffrement": { to: "/realisation/chiffrement-rgpd", label: "module de chiffrement" },
  "module de chiffrement RGPD": { to: "/realisation/chiffrement-rgpd", label: "module de chiffrement RGPD" },
  "Chiffrement RGPD": { to: "/realisation/chiffrement-rgpd", label: "Chiffrement RGPD" },
  "mission R&D IA Agentique": { to: "/realisation/ia-agentique", label: "mission R&D IA Agentique" },
  "R&D IA Agentique": { to: "/realisation/ia-agentique", label: "R&D IA Agentique" },
  "Contrat MEN": { to: "/realisation/contrat-men", label: "Contrat MEN" },
  "pipeline NSI": { to: "/realisation/contrat-men", label: "pipeline NSI" },
  "benchmark IA Agentique": { to: "/realisation/ia-agentique", label: "benchmark IA Agentique" },
  "ateliers QKD": { to: "/realisation/vivatech-2025", label: "ateliers QKD" },
  "OpenCyberAI": { to: "/realisation/backend-opencyberai", label: "OpenCyberAI" },

  // Compétences
  "Python & FastAPI": { to: "/competence/python-fastapi", label: "Python & FastAPI" },
  "Sécurité des Systèmes": { to: "/competence/securite-systemes", label: "Sécurité des Systèmes" },
  "Prompt Engineering": { to: "/competence/prompt-engineering", label: "Prompt Engineering" },
  "Infrastructure as Code": { to: "/competence/infrastructure-code", label: "Infrastructure as Code" },
  "Chiffrement & Cryptographie": { to: "/competence/chiffrement-crypto", label: "Chiffrement & Cryptographie" },
  "Coordination": { to: "/competence/coordination", label: "Coordination" },
  "Autonomie": { to: "/competence/autonomie", label: "Autonomie" },
  "Esprit Critique": { to: "/competence/esprit-critique", label: "Esprit Critique" },
  "Gestion de la Pression": { to: "/competence/gestion-pression", label: "Gestion de la Pression" },
  "Communication Technique": { to: "/competence/communication-technique", label: "Communication Technique" },
};

function renderText(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let keyIndex = 0;

  // Sort links by length (longest first) to avoid partial matches
  const sortedLinks = Object.entries(linkMap).sort((a, b) => b[0].length - a[0].length);

  while (remaining.length > 0) {
    let earliestMatch: { key: string; to: string; label: string; index: number } | null = null;

    for (const [key, value] of sortedLinks) {
      const idx = remaining.indexOf(key);
      if (idx !== -1 && (earliestMatch === null || idx < earliestMatch.index)) {
        earliestMatch = { key, to: value.to, label: value.label, index: idx };
      }
    }

    if (earliestMatch) {
      // Add text before the match
      if (earliestMatch.index > 0) {
        parts.push(<span key={keyIndex++}>{remaining.slice(0, earliestMatch.index)}</span>);
      }
      // Add the link
      parts.push(
        <Link
          key={keyIndex++}
          to={earliestMatch.to}
          style={{ color: "#D4A853", textDecoration: "none", borderBottom: "1px solid rgba(212, 168, 83, 0.3)" }}
          className="hover:border-amber-500"
        >
          {earliestMatch.label}
        </Link>
      );
      remaining = remaining.slice(earliestMatch.index + earliestMatch.key.length);
    } else {
      // No more matches
      parts.push(<span key={keyIndex++}>{remaining}</span>);
      break;
    }
  }

  return parts;
}

export default function RichText({ text, style }: { text: string; style?: React.CSSProperties }) {
  return (
    <span style={style}>
      {renderText(text)}
    </span>
  );
}
