import {
  RadarChart as ReRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { competence: "Python & FastAPI", technique: 80, humaine: 0 },
  { competence: "Sécurité Systèmes", technique: 75, humaine: 0 },
  { competence: "Prompt Engineering", technique: 70, humaine: 0 },
  { competence: "Infra as Code", technique: 75, humaine: 0 },
  { competence: "Chiffrement", technique: 80, humaine: 0 },
  { competence: "Coordination", technique: 0, humaine: 90 },
  { competence: "Autonomie", technique: 0, humaine: 85 },
  { competence: "Esprit Critique", technique: 0, humaine: 85 },
  { competence: "Gestion Pression", technique: 0, humaine: 85 },
  { competence: "Communication", technique: 0, humaine: 95 },
];

export default function CompetenceRadar() {
  return (
    <div style={{ width: "100%", height: 500, margin: "40px 0" }}>
      <h3
        style={{
          fontFamily: "'GeistMono', monospace",
          fontSize: 11,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#D4A853",
          opacity: 0.8,
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        Radar de compétences — Niveau d'expertise (%)
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <ReRadarChart
          cx="50%"
          cy="50%"
          outerRadius="70%"
          data={data}
        >
          <PolarGrid stroke="rgba(255,255,255,0.1)" />
          <PolarAngleAxis
            dataKey="competence"
            tick={{
              fill: "rgba(255,255,255,0.6)",
              fontSize: 11,
              fontFamily: "'GeistMono', monospace",
            }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{
              fill: "rgba(255,255,255,0.3)",
              fontSize: 10,
            }}
            axisLine={false}
          />
          <Radar
            name="Compétences Techniques"
            dataKey="technique"
            stroke="#D4A853"
            fill="#D4A853"
            fillOpacity={0.25}
            strokeWidth={2}
          />
          <Radar
            name="Compétences Humaines"
            dataKey="humaine"
            stroke="#8B9DC3"
            fill="#8B9DC3"
            fillOpacity={0.25}
            strokeWidth={2}
          />
          <Legend
            wrapperStyle={{
              color: "rgba(255,255,255,0.6)",
              fontFamily: "'GeistMono', monospace",
              fontSize: 12,
              paddingTop: 20,
            }}
          />
        </ReRadarChart>
      </ResponsiveContainer>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          color: "rgba(255,255,255,0.35)",
          textAlign: "center",
          marginTop: 8,
        }}
      >
        Échelle : Débutant (0-40%) · Autonome (40-70%) · Confirmé (70-85%) · Expert (85-100%)
      </p>
    </div>
  );
}
