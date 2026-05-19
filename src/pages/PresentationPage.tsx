import { Link } from "react-router-dom";
import AmberCascades from "../sections/AmberCascades";

export default function PresentationPage() {
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
            Présentation
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 5vw 120px" }}>
        <Link to="/" style={{ fontFamily: "'GeistMono', monospace", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", display: "inline-block", marginBottom: 60 }}>
          ← Retour à l'accueil
        </Link>

        {/* Intro */}
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.85, color: "rgba(255,255,255,0.85)", marginBottom: 28 }}>
          Je ne me définis pas par une simple suite de compétences, mais par une façon de voir les choses. J'ai toujours été quelqu'un de <strong style={{ color: "#D4A853", fontWeight: 500 }}>persévérant</strong>, <strong style={{ color: "#D4A853", fontWeight: 500 }}>lucide</strong> et <strong style={{ color: "#D4A853", fontWeight: 500 }}>ouvert aux autres</strong>. Quand je fais face à un défi, je ne me voile pas la face : je mesure les obstacles, j'en connais les enjeux, mais je choisis d'y aller. Pas en me surestimant, mais en me disant que si j'échoue, j'apprendrai. Et que si je réussis, ce sera solide.
        </p>

        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.85, color: "rgba(255,255,255,0.85)", marginBottom: 28 }}>
          Ce qui me pousse dans la cybersécurité, c'est <strong style={{ color: "#D4A853", fontWeight: 500 }}>le sens</strong>. Très tôt, j'ai été marqué par les questions de protection des données, d'identité numérique, de fiabilité des systèmes. J'ai grandi dans un environnement où ces enjeux ne sont pas toujours pris au sérieux, et j'ai vu ce que ça coûte : des entreprises fragilisées, des informations exposées, une confiance ébranlée. C'est là que je me suis dit : « Et si je pouvais faire partie de ceux qui construisent un monde numérique plus sûr ? »
        </p>

        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.85, color: "rgba(255,255,255,0.85)", marginBottom: 60 }}>
          Je suis étudiant en dernière année du <strong style={{ color: "#D4A853", fontWeight: 500 }}>Mastère Expert Cybersécurité et Infrastructures des Systèmes d'Information à l'ESIEA Paris</strong>, en alternance chez <strong style={{ color: "#D4A853", fontWeight: 500 }}>OpenCyberAI</strong> depuis mars 2023, où j'occupe le poste de <strong>Cyber Security Engineer</strong>. Mon parcours n'a rien de linéaire : après un baccalauréat Scientifique et un rêve de pilote de ligne, un échec au concours de l'ENAC m'a recentré vers ma passion la plus profonde, l'informatique et surtout la cybersécurité. J'ai enchaîné un DUT Informatique en année spéciale, une Licence Mathématiques-Informatique à l'Université de Lille, puis l'ESIEA pour me former en profondeur. Ces détours ne sont pas des échecs — ce sont des réserves d'expérience que je n'aurais pas accumulées autrement.
        </p>

        {/* Mes valeurs */}
        <h2 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, color: "#D4A853", marginBottom: 28, paddingBottom: 12, borderBottom: "1px solid rgba(212,168,83,0.2)" }}>
          Mes valeurs
        </h2>

        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 24 }}>
          Mes valeurs sont <strong style={{ color: "#fff" }}>la persévérance</strong>, <strong style={{ color: "#fff" }}>l'intégrité</strong> et <strong style={{ color: "#fff" }}>la transmission</strong>. Ce sont les trois piliers qui guident mon travail au quotidien, mes décisions techniques et ma manière d'interagir avec mon équipe.
        </p>

        <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10, letterSpacing: "0.5px" }}>
          La persévérance
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 24 }}>
          La persévérance est la valeur qui me définit le plus profondément. Elle s'est forgée très tôt, face aux obstacles de mon parcours. Dans mon travail chez OpenCyberAI, elle se manifeste concrètement : quand une régression critique est apparue dans le module de scoring à <strong>J-3 de VivaTech 2025</strong>, je n'ai pas cédé à la panique. J'ai isolé le problème, coordonné le correctif, et livré en <strong>4 heures</strong> sans compromettre le reste des préparatifs. La démonstration s'est déroulée sans incident devant Orange Business et Google Learning. Persévérer, c'est maintenir la méthode quand la pression monte.
        </p>

        <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10, letterSpacing: "0.5px" }}>
          L'intégrité
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 24 }}>
          L'intégrité est, pour moi, une exigence professionnelle autant qu'une conviction personnelle. Travailler sur la sécurité des systèmes, c'est travailler sur la confiance que des milliers d'utilisateurs placent dans ces systèmes. Chaque choix d'architecture, chaque décision de déploiement est documentée et assumée. Quand le module de chiffrement RGPD présentait une vulnérabilité théorique dans la gestion des clés, je l'ai signalé au CTO avant même d'avoir la solution. L'intégrité, c'est dire ce qu'on sait, même quand ce n'est pas confortable.
        </p>

        <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10, letterSpacing: "0.5px" }}>
          La transmission
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 60 }}>
          La transmission est la valeur qui donne du sens à tout le reste. Je suis convaincu que ce qu'on ne partage pas reste stérile. C'est pour ça que j'enseigne la cybersécurité à <strong>YNOV et EPSI</strong>, que j'ai animé des ateliers sur la cryptographie quantique à <strong>VivaTech 2025</strong>, et que je documente systématiquement mes choix techniques pour que l'équipe puisse s'en saisir après moi. La transmission, c'est aussi mon projet à long terme : créer un <strong>cabinet de conseil en cybersécurité en Afrique centrale</strong> pour partager des compétences là où elles manquent le plus.
        </p>

        {/* Mes qualités humaines */}
        <h2 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, color: "#D4A853", marginBottom: 28, paddingBottom: 12, borderBottom: "1px solid rgba(212,168,83,0.2)" }}>
          Mes qualités humaines
        </h2>

        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 28 }}>
          Je suis <strong style={{ color: "#fff" }}>persévérant</strong>, <strong style={{ color: "#fff" }}>autonome</strong>, <strong style={{ color: "#fff" }}>coordinateur</strong>, <strong style={{ color: "#fff" }}>critique</strong> et <strong style={{ color: "#fff" }}>communicant</strong>. Ces qualités ne sont pas des traits de caractère abstraits — ce sont des comportements que j'ai développés et que je peux illustrer par des situations concrètes vécues en entreprise.
        </p>

        <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10, letterSpacing: "0.5px" }}>
          Persévérant
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 24 }}>
          La persévérance est ma capacité à maintenir un effort soutenu face aux obstacles. Lors du développement du backend d'OpenCyberAI, j'ai rencontré des bugs d'interopérabilité entre les modules IA, scoring et backend que plusieurs semaines de débogage n'avaient pas résolus. Plutôt que de contourner le problème, j'ai analysé les trois formats JSON en présence, proposé un format unifié, convaincu l'équipe de l'adopter, et suivi sa mise en place. Ce travail de fond a pratiquement éliminé cette catégorie d'erreurs. La persévérance ne consiste pas à s'acharner — c'est savoir changer d'approche tout en restant concentré sur l'objectif.
        </p>

        <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10, letterSpacing: "0.5px" }}>
          Autonome
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 24 }}>
          L'autonomie, c'est la capacité à s'engager et à faire des choix propres pour conduire ses missions de la manière dont on estime la plus appropriée, sans dépendre excessivement des autres. Elle s'est révélée particulièrement lors de la <strong>mission R&D sur l'IA Agentique</strong> : mandaté avec une orientation stratégique sans feuille de route technique, j'ai structuré moi-même la démarche, défini les critères du benchmark, sélectionné les cinq frameworks à évaluer, conduit les tests comparatifs et produit les livrables sur plusieurs mois, sans encadrement quotidien. Je suis également <strong>formateur sans aucun encadrement pédagogique externe</strong> : je conçois mes curricula, je les teste, je les améliore de session en session.
        </p>

        <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10, letterSpacing: "0.5px" }}>
          Coordinateur
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 24 }}>
          La coordination est la capacité à faciliter l'harmonie dans un collectif, en favorisant l'élan et le progrès à travers un engagement actif avec les autres membres. Cette qualité s'est exprimée de façon majeure lors de la <strong>préparation de VivaTech 2025</strong> : pendant plusieurs semaines, j'ai planifié les jalons, supervisé la finalisation technique, animé les réunions hebdomadaires et joué le rôle d'intermédiaire entre les équipes techniques et la direction. Lorsque des blocages apparaissaient, je ne me contentais pas de les signaler — je proposais une solution et je m'assurais qu'elle était implémentée. Résultat : <strong>450 nouveaux utilisateurs conquis</strong> et des discussions stratégiques engagées avec Google Learning et Orange CyberDefense.
        </p>

        <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10, letterSpacing: "0.5px" }}>
          Esprit critique
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 24 }}>
          L'esprit critique est la capacité à analyser des faits pour formuler un jugement rigoureux. Dans mon domaine, c'est une exigence de survie : un ingénieur qui suit des architectures par convention plutôt que par raisonnement introduit des failles qu'il ne voit pas. Lors du développement du module de chiffrement, j'ai analysé les alternatives algorithmiques avant de choisir <strong>AES-GCM plutôt qu'AES-CBC</strong> — non par habitude, mais parce que l'analyse des vecteurs d'attaque démontrait la supériorité du mode authentifié. Lors du benchmark IA Agentique, j'avais une préférence initiale pour LangChain, le framework le plus médiatisé. Les données m'ont conduit à une conclusion différente. J'ai suivi les données.
        </p>

        <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10, letterSpacing: "0.5px" }}>
          Communicant technique
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 60 }}>
          La communication technique est la capacité à transmettre une information complexe de manière claire et adaptée à son interlocuteur. À <strong>VivaTech 2025</strong>, le même jour, j'ai expliqué la Quantum Key Distribution à un étudiant de L1 — un système de verrou dont la clé est physiquement impossible à copier — et j'ai discuté de stratégie de migration post-quantique avec un RSSI de grande entreprise, en citant les délais recommandés par l'ANSSI. Adapter le même message complexe en temps réel selon les signaux de compréhension de l'interlocuteur, c'est ce que je m'efforce de faire chaque jour, en entreprise comme en cours.
        </p>

        {/* Mes centres d'intérêt */}
        <h2 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, color: "#D4A853", marginBottom: 28, paddingBottom: 12, borderBottom: "1px solid rgba(212,168,83,0.2)" }}>
          Mes centres d'intérêt
        </h2>

        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 28 }}>
          Je suis passionné par mon métier, mais ce n'est pas ma seule activité.
        </p>

        <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10, letterSpacing: "0.5px" }}>
          Simulation de vol
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 24 }}>
          La simulation de vol occupe une place importante dans ma vie. Ce n'est pas un simple loisir : piloter un simulateur exige de comprendre le fonctionnement d'un aéronef, de mémoriser des procédures d'urgence, d'anticiper des situations critiques et de prendre des décisions sous pression. Ces mêmes exigences, je les retrouve dans mon quotidien en cybersécurité. Je me fixe des objectifs de progression précis — maîtriser un appareil, réaliser un vol aux instruments sans assistance visuelle — et je m'y tiens jusqu'à les atteindre.
        </p>

        <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10, letterSpacing: "0.5px" }}>
          Sport
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 24 }}>
          Le sport fait également partie de mon équilibre. Je pratique le <strong>football américain</strong> au poste de Right Receiver, le <strong>badminton</strong> et la <strong>boxe anglaise</strong>. Ces trois disciplines partagent la même exigence : lire rapidement une situation, anticiper et réagir de façon précise sous pression. C'est une école mentale que je retrouve directement dans la gestion d'incidents techniques ou la coordination d'équipes en période critique.
        </p>

        <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10, letterSpacing: "0.5px" }}>
          Géopolitique numérique africaine
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 24 }}>
          La géopolitique numérique africaine est un sujet qui me tient profondément à cœur. Je suis les évolutions de la souveraineté technologique en Afrique centrale, les initiatives de régulation du numérique, et les projets d'infrastructure continentaux. Ce n'est pas un intérêt abstrait — c'est une réalité que j'ai vécue. J'ai eu l'occasion d'animer des <strong>masterclasses sur la cybersécurité au Congo pour le compte du ministère de l'Économie</strong>. Cette expérience a confirmé pour moi que mon projet à long terme n'était pas un horizon lointain, mais une direction déjà engagée.
        </p>

        <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10, letterSpacing: "0.5px" }}>
          RC Modeling
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 60 }}>
          Le RC Modeling — la modélisation et le pilotage de maquettes radiocommandées — est une autre passion qui me permet de combiner rigueur technique et créativité. Concevoir, assembler et régler un modèle réduit pour qu'il vole ou roule correctement demande précision, patience et une bonne compréhension des systèmes mécaniques et électroniques.
        </p>

        {/* Projets professionnels et personnels */}
        <h2 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, color: "#D4A853", marginBottom: 28, paddingBottom: 12, borderBottom: "1px solid rgba(212,168,83,0.2)" }}>
          Projets professionnels et personnels
        </h2>

        <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10, letterSpacing: "0.5px" }}>
          À court terme
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 24 }}>
          Mon projet professionnel à court terme est d'acquérir les compétences du pentesting en préparant la certification <strong>OSCP</strong>. Ce n'est pas nécessairement un métier que je vise, mais un socle indispensable pour tout ingénieur en cybersécurité sérieux : comprendre comment un système peut être compromis est la condition pour savoir vraiment le défendre et le conseiller. J'ai déjà validé la certification <strong>CompTIA Security+</strong> comme première étape. Je me documente également sur les certifications Cisco CyberOps et les techniques d'exploitation avancées via des plateformes comme HackTheBox et TryHackMe.
        </p>

        <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10, letterSpacing: "0.5px" }}>
          À moyen terme
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 24 }}>
          Mon ambition est de prendre des responsabilités de <strong>pilotage technique croissantes chez OpenCyberAI</strong>, en conduisant des projets qui combinent innovation technique et impact pédagogique à grande échelle. Depuis plus de deux ans, j'ai évolué d'ingénieur backend à pilote de missions R&D sur l'IA Agentique et coordinateur d'événements stratégiques. Je veux continuer sur cette trajectoire.
        </p>

        <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10, letterSpacing: "0.5px" }}>
          À long terme
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 24 }}>
          Mon projet est de créer un <strong>cabinet de conseil en cybersécurité au Congo-Brazzaville</strong>. J'ai grandi dans un contexte où la transformation numérique s'accélère, mais où les expertises en sécurité sont encore rares et les infrastructures hétérogènes. Je veux proposer des solutions adaptées aux contraintes locales, portées par une compréhension technique profonde et une capacité à former les équipes sur place. Les masterclasses que j'ai animées pour le ministère de l'Économie congolais m'ont montré que les besoins sont réels et que ma contribution peut y être significative.
        </p>

        <h3 style={{ fontFamily: "'GeistMono', monospace", fontSize: 13, color: "#D4A853", marginBottom: 10, letterSpacing: "0.5px" }}>
          Sur le plan personnel
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 60 }}>
          Je souhaite continuer à progresser en simulation de vol, avec l'objectif de maîtriser les vols aux instruments et les procédures d'urgence complexes. Je veux également approfondir mes connaissances en géopolitique numérique africaine et contribuer, à mon échelle, à la sensibilisation aux enjeux de cybersécurité dans les pays francophones d'Afrique centrale.
        </p>

        {/* Back to top */}
        <div style={{ marginTop: 60, textAlign: "center", paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              fontFamily: "'GeistMono', monospace",
              fontSize: 12,
              letterSpacing: "1px",
              color: "#D4A853",
              background: "transparent",
              border: "1px solid rgba(212, 168, 83, 0.3)",
              padding: "12px 24px",
              cursor: "pointer",
            }}
          >
            ↑ Retour en haut
          </button>
        </div>
      </div>
    </div>
  );
}
