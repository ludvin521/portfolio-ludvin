import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import AmberCascades from "../sections/AmberCascades";

interface Experience {
  periode: string;
  poste: string;
  lieu: string;
  logo?: string;
  type: "entreprise" | "formation" | "certification";
  responsabilite?: string;
  statut?: string;
  missions?: string[];
  description?: string;
  realisationsLiees?: string[];
  competencesLiees?: string[];
}

const experiences: Experience[] = [
  {
    periode: "2023 – 2026",
    poste: "Mastère Expert Cybersécurité et Infrastructures des SI",
    lieu: "ESIEA Paris",
    type: "formation",
    description: "Formation de niveau RNCP 7 (Bac+5) combinant fondamentaux techniques (cryptographie, sécurité offensive, réseau), gestion de la sécurité (gouvernance, conformité RGPD, management des risques) et projets pratiques en conditions réelles. L'approche pédagogique repose sur l'apprentissage par projet, en alternance avec OpenCyberAI.",
  },
  {
    periode: "2023 – Aujourd'hui",
    poste: "Cyber Security Engineer",
    lieu: "OpenCyberAI",
    type: "entreprise",
    responsabilite: "Développeur Backend Sécurisé, Coordinateur Technique, Formateur",
    statut: "Alternant",
    missions: [
      "Conception et développement du backend REST Python/FastAPI (12 000+ utilisateurs)",
      "Développement du module de chiffrement RGPD AES-GCM en production",
      "Coordination de la préparation et animation de VivaTech 2025",
      "Mission R&D IA Agentique : benchmark et prototypage",
      "Contrat MEN : pipeline de traitement automatique des cours NSI",
      "Automatisation des déploiements avec Ansible et Terraform",
      "Formation cybersécurité à YNOV et EPSI",
    ],
    realisationsLiees: ["R1", "R2", "R3", "R4", "R5"],
    competencesLiees: ["T1", "T2", "T3", "T4", "T5", "H1", "H2", "H3", "H4", "H5"],
  },
  {
    periode: "2024 – Aujourd'hui",
    poste: "Formateur Cybersécurité",
    lieu: "YNOV & EPSI",
    type: "entreprise",
    statut: "Formateur indépendant",
    missions: [
      "Conception et animation de cours de cybersécurité",
      "Création de curricula pédagogiques autonomes",
      "Évaluation et amélioration continue des sessions",
    ],
  },
  {
    periode: "2022 – 2023",
    poste: "Licence Mathématiques-Informatique",
    lieu: "Université de Lille",
    type: "formation",
    description: "Formation fondamentale en mathématiques et informatique. Acquisition des bases théoriques en algèbre, analyse, algorithmique et programmation. Cette licence a consolidé mon raisonnement logique et ma capacité à abstraire des problèmes complexes.",
  },
  {
    periode: "2021 – 2022",
    poste: "DUT Informatique – Année Spéciale",
    lieu: "IUT de Cergy-Pontoise",
    type: "formation",
    description: "Formation intensive en informatique pour profils en reconversion. Développement web, bases de données, programmation orientée objet, réseaux. Cette année a été le tremplin vers la cybersécurité, confirmant mon choix de carrière après l'échec au concours ENAC.",
  },
  {
    periode: "2020",
    poste: "Baccalauréat Scientifique",
    lieu: "Lycée",
    type: "formation",
    description: "Baccalauréat Scientifique avec option Sciences de l'Ingénieur. Premier contact avec la programmation et les systèmes informatiques.",
  },
  {
    periode: "2023",
    poste: "CompTIA Security+",
    lieu: "CompTIA",
    type: "certification",
  },
  {
    periode: "2023",
    poste: "Cisco CyberOps Associate",
    lieu: "Cisco",
    type: "certification",
  },
];

function TimelineCard({ exp }: { exp: Experience }) {
  const isFormation = exp.type === "formation";
  const isEntreprise = exp.type === "entreprise";

  return (
    <div
      style={{
        padding: "32px 36px",
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 6,
        borderLeft: isEntreprise ? "3px solid #D4A853" : isFormation ? "3px solid rgba(255,255,255,0.15)" : "3px solid rgba(212,168,83,0.3)",
      }}
    >
      {/* 1er niveau de lecture */}
      <span style={{
        fontFamily: "'GeistMono', monospace",
        fontSize: 11,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        color: "#D4A853",
        opacity: 0.7,
        display: "block",
        marginBottom: 8,
      }}>
        {exp.periode}
      </span>

      <h3 style={{
        fontFamily: "'EB Garamond', serif",
        fontSize: 24,
        fontWeight: 400,
        color: "#ffffff",
        margin: 0,
        marginBottom: 4,
        lineHeight: 1.2,
      }}>
        {exp.poste}
      </h3>

      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 15,
        color: "rgba(255,255,255,0.5)",
        margin: 0,
        marginBottom: 16,
      }}>
        {exp.lieu}
        {exp.statut && <span style={{ color: "rgba(255,255,255,0.35)" }}> · {exp.statut}</span>}
      </p>

      {/* 2ème niveau de lecture */}
      {exp.responsabilite && (
        <p style={{ fontFamily: "'GeistMono', monospace", fontSize: 12, color: "#D4A853", marginBottom: 12 }}>
          {exp.responsabilite}
        </p>
      )}

      {exp.description && (
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>
          {exp.description}
        </p>
      )}

      {exp.missions && (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {exp.missions.map((m, i) => (
            <li key={i} style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.6)",
              marginBottom: 6,
              paddingLeft: 14,
              position: "relative",
            }}>
              <span style={{ position: "absolute", left: 0, color: "#D4A853" }}>•</span>
              {m}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ParcoursPage() {
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
            gsap.to(target, { opacity: 1, y: 0, duration: 0.7, delay: index * 0.1, ease: "power3.out" });
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
            Mon Parcours
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            marginTop: 24,
            maxWidth: 600,
            textAlign: "center",
          }}>
            Formations, expériences professionnelles et certifications
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 5vw 120px" }}>
        <Link to="/" style={{ fontFamily: "'GeistMono', monospace", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", display: "inline-block", marginBottom: 60 }}>
          ← Retour à l'accueil
        </Link>

        {/* Anti-chronological timeline */}
        <div style={{ position: "relative" }}>
          {/* Central line */}
          <div style={{
            position: "absolute",
            left: 20,
            top: 0,
            bottom: 0,
            width: 1,
            background: "linear-gradient(to bottom, rgba(212,168,83,0.4), rgba(255,255,255,0.05))",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {experiences.map((exp, i) => (
              <div
                key={i}
                ref={(el) => { cardsRef.current[i] = el; }}
                style={{ position: "relative", paddingLeft: 48 }}
              >
                {/* Dot on timeline */}
                <div style={{
                  position: "absolute",
                  left: 13,
                  top: 36,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: exp.type === "entreprise" ? "#D4A853" : exp.type === "certification" ? "rgba(212,168,83,0.5)" : "rgba(255,255,255,0.2)",
                  border: "2px solid #030308",
                }} />

                <TimelineCard exp={exp} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
