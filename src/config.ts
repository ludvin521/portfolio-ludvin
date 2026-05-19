import type {
  SiteConfig,
  NavigationConfig,
  HeroConfig,
  CapabilitiesConfig,
  CapabilityDetailConfig,
  ArchitectureConfig,
  ResearchConfig,
  FooterConfig,
} from "./types/config";

export const siteConfig: SiteConfig = {
  language: "fr",
  brandName: "LUDVIN GATSE",
};

export const navigationConfig: NavigationConfig = {
  links: [
    { label: "Présentation", href: "#/presentation" },
    { label: "Réalisations", href: "#/realisations" },
    { label: "Compétences", href: "#/competences" },
    { label: "Parcours", href: "#/parcours" },
    { label: "Contact", href: "#/contact" },
  ],
  ctaText: "Me contacter",
};

export const heroConfig: HeroConfig = {
  title: "Ludvin GATSE",
  subtitleLine1: "Cyber Security Engineer — ESIEA Paris",
  subtitleLine2: "Mastère Expert Cybersécurité · Titre RNCP Niveau 7",
  ctaText: "Découvrir mon parcours",
  profilePhoto: "images/profile-photo.jpg",
};

export const capabilitiesConfig: CapabilitiesConfig = {
  sectionLabel: "Compétences",
  items: [
    {
      title: "Python & FastAPI",
      slug: "python-fastapi",
      description:
        "Langage central de mon activité : backend REST sécurisé (JWT, RBAC, OAuth2), module AES-GCM, benchmark IA. Python est aussi mon outil de prédilection pour la cybersécurité offensive. Niveau autonome, en progression vers confirmé.",
      image: "images/capability-1.jpg",
    },
    {
      title: "Sécurité des Systèmes",
      slug: "securite-systemes",
      description:
        "Approche offensive et défensive : reconnaissance (Nmap, TheHarvester), vulnérabilités (Nessus, Metasploit, Burp Suite), hardening, Active Directory. Préparation OSCP, CTF réguliers sur TryHackMe et HackTheBox.",
      image: "images/capability-2.jpg",
    },
    {
      title: "Infrastructure as Code",
      slug: "infrastructure-code",
      description:
        "Terraform et Ansible en production : playbooks de déploiement (45 min à 8 min), provisioning cloud, CI/CD GitLab, Docker. Cours Terraform ESIEA, cloud privé OpenStack en Bachelor. IaC comme socle DevSecOps.",
      image: "images/capability-3.jpg",
    },
    {
      title: "Chiffrement & Cryptographie",
      slug: "chiffrement-crypto",
      description:
        "Cryptographie symétrique (AES-256-GCM), asymétrique (RSA, courbes elliptiques), post-quantique (QKD, Kyber, Dilithium). Implémentation en production, ateliers VivaTech 2025, reverse engineering de malwares.",
      image: "images/capability-4.jpg",
    },
    {
      title: "Prompt Engineering",
      slug: "prompt-engineering",
      description:
        "Conception de prompts complexes : few-shot, chain-of-thought, role prompting. Pipeline NSI (7 versions itérées), benchmark LLM standardisés, scénarios pédagogiques VivaTech. Niveau autonome.",
      image: "images/research-4.jpg",
    },
    {
      title: "Coordination",
      slug: "coordination",
      description:
        "Coordination de la préparation VivaTech 2025 : rétroplanning, réunions hebdomadaires, gestion d'incident à J-3, rôles d'équipe. Résultat : 450 utilisateurs acquis, partenariats Orange et Google. Niveau confirmé.",
      image: "images/research-3.jpg",
    },
    {
      title: "Autonomie",
      slug: "autonomie",
      description:
        "Mission R&D IA Agentique sans feuille de route : structuration de la démarche, sélection des frameworks, benchmarks et livrables sur plusieurs mois. Module RGPD de bout en bout. Niveau confirmé.",
      image: "images/research-1.jpg",
    },
    {
      title: "Esprit Critique",
      slug: "esprit-critique",
      description:
        "Choix AES-GCM vs AES-CBC argumenté et validé par le CTO. Benchmark IA : UiPath (22/25) préféré à LangChain (17/25) malgré la mode. One API Call validé contre l'intuition. Niveau confirmé.",
      image: "images/research-2.jpg",
    },
    {
      title: "Gestion de la Pression",
      slug: "gestion-pression",
      description:
        "Incident critique J-3 VivaTech : correctif en 4h, méthode structurée. Triple engagement alternance + ESIEA + formation sur 2 ans. Déploiement backend + ateliers QKD + démo simultanés. Niveau confirmé.",
      image: "images/research-3.jpg",
    },
    {
      title: "Communication Technique",
      slug: "communication-technique",
      description:
        "QKD expliquée à un L1 et à un RSSI dans le même créneau. Formateur YNOV et EPSI. Synthèse benchmark pour CEO non-technique : décision en 15 min. 450 utilisateurs acquis à VivaTech. Niveau expert.",
      image: "images/research-4.jpg",
    },
  ],
};

export const capabilityDetailConfig: CapabilityDetailConfig = {
  sectionLabel: "Compétence",
  backLinkText: "Retour à l'accueil",
  prevLabel: "Précédent",
  nextLabel: "Suivant",
  notFoundText: "Compétence introuvable.",
  capabilities: {
    "python-fastapi": {
      title: "Python & FastAPI",
      subtitle: "Backend sécurisé pour l'industrie IoT et la cybersécurité",
      paragraphs: [
        "Python est le langage central de mon activité chez OpenCyberAI depuis mars 2023. J'ai conçu et développé l'ensemble du backend REST en Python avec FastAPI : authentification JWT avec tokens d'accès et de renouvellement, contrôle d'accès par rôle (RBAC), moteur de scoring dynamique, gestion des parcours utilisateurs, endpoints IA, et intégration MariaDB via SQLAlchemy.",
        "Un problème majeur résolu : les modules IA, scoring et backend utilisaient des conventions JSON incompatibles (camelCase vs snake_case, structures imbriquées différentes). J'ai analysé les trois formats, proposé un format unifié, documenté les spécifications et convaincu l'équipe de l'adopter. Ce travail a pratiquement éliminé les bugs d'intégration.",
        "Le backend est aujourd'hui en production avec plus de 12 000 utilisateurs actifs et un temps de réponse inférieur à 100 ms. J'ai également développé le module de chiffrement AES-GCM (R2) et conduit le benchmark IA Agentique (R4) entièrement en Python. Ma principale marge de progression : mettre en place une suite de tests automatisés pytest couvrant les endpoints critiques.",
        "Réalisations associées : R1 Backend OpenCyberAI, R2 Chiffrement RGPD, R4 R&D IA Agentique, R5 Contrat MEN. Compétences liées : Sécurité des Systèmes, IaC, Chiffrement, Autonomie.",
      ],
    },
    "securite-systemes": {
      title: "Sécurité des Systèmes",
      subtitle: "Cybersécurité offensive et défensive",
      paragraphs: [
        "Ma maîtrise couvre l'ensemble du spectre sécurité, de l'offensif au défensif. En reconnaissance : Nmap, TheHarvester, Shodan pour la cartographie d'infrastructure. En analyse de vulnérabilités : Nessus, OpenVAS, Metasploit pour l'exploitation. En tests d'intrusion : Burp Suite, OWASP ZAP pour les applications web. En hardening : CIS Benchmarks, sécurisation Windows/Linux, Active Directory.",
        "Côté défensif, j'ai implémenté une approche DevSecOps sur le backend d'OpenCyberAI : filtres d'entrée Pydantic, scan de vulnérabilités Safety en CI/CD, journalisation structurée JSON pour intégration SIEM future. J'ai également participé à des sessions d'analyse de malwares avec IDA Pro et Ghidra.",
        "Je prépare activement la certification OSCP (Offensive Security Certified Professional), j'ai déjà validé CompTIA Security+ et Cisco CyberOps Associate. Je pratique régulièrement sur TryHackMe (top 5%) et HackTheBox, résolvant des machines de difficulté moyenne à difficile. Mon objectif : maîtriser les techniques d'exploitation avancées et les post-exploitation.",
        "Réalisations associées : R1 Backend OpenCyberAI, R2 Chiffrement RGPD, R3 VivaTech 2025, R4 R&D IA Agentique. Compétences liées : Python, IaC, Chiffrement, Esprit critique.",
      ],
    },
    "infrastructure-code": {
      title: "Infrastructure as Code",
      subtitle: "Automatisation et cloud sécurisé",
      paragraphs: [
        "Cette compétence s'est développée en quatre étapes. Formation Terraform à l'ESIEA : debug de stacks HCL erronées, hands-on GitOps complet avec ArgoCD déployant l'application Online Boutique de Google dans deux environnements via Helm Charts. Cloud privé OpenStack en Bachelor : installation from scratch de DevStack sur Debian.",
        "Chez OpenCyberAI, j'ai développé et maintiens l'ensemble des playbooks Ansible couvrant les trois environnements (test, pré-production, production). Chaque playbook gère : installation des dépendances Python, configuration des variables d'environnement, migrations MariaDB via Alembic, redémarrage des services avec vérification de santé, et rotation des secrets. Résultat : le temps de déploiement est passé de 45 minutes à moins de 8 minutes.",
        "Pour VivaTech 2025, j'ai utilisé Terraform pour provisionner un environnement de démonstration isolé, identique à la production. Cette approche a été décisive à J-3 quand une régression critique a nécessité un redéploiement complet en moins de 4 heures. À moyen terme, je vise la certification Terraform Associate et la migration vers Kubernetes avec Helm Charts et ArgoCD.",
        "Réalisations associées : R1 Backend OpenCyberAI, R2 Chiffrement RGPD, R3 VivaTech 2025, R5 Contrat MEN. Compétences liées : Python, Sécurité des Systèmes, Autonomie, Gestion de la pression.",
      ],
    },
    "chiffrement-crypto": {
      title: "Chiffrement & Cryptographie",
      subtitle: "Primitives modernes et conformité RGPD",
      paragraphs: [
        "La cryptographie est la compétence la plus spécialisée de mon profil. J'ai développé le module de chiffrement RGPD d'OpenCyberAI basé sur AES-256-GCM via la bibliothèque cryptography (PyCA). Le choix d'AES-GCM (mode AEAD) plutôt qu'AES-CBC n'était pas arbitraire : AES-CBC est vulnérable aux attaques par oracle de padding, tandis qu'AES-GCM garantit simultanément confidentialité et intégrité via un tag d'authentification.",
        "L'implémentation comprend : génération de clés temporaires via os.urandom(32), gestion des nonces via os.urandom(12) avec vérification d'unicité, mécanisme de verrouillage des fichiers, journalisation structurée JSON de toutes les opérations, et suppression automatique planifiée via Ansible. Temps de traitement : inférieur à 120 ms par transaction. Conformité RGPD validée par le CEO (articles 25, 32, 17).",
        "J'ai animé des ateliers sur la Quantum Key Distribution à VivaTech 2025 en lien avec Orange Quantum Defender, maîtrisant les protocoles BB84 et E91. En offensive, j'analyse des captures TLS avec Wireshark, teste des mécanismes JWT avec Burp Suite, et participe à du reverse engineering de malwares avec IDA Pro et Ghidra. En veille : algorithmes post-quantiques CRYSTALS-Kyber et CRYSTALS-Dilithium du NIST.",
        "Réalisations associées : R1 Backend OpenCyberAI, R2 Chiffrement RGPD, R3 VivaTech 2025, R4 R&D IA Agentique. Compétences liées : Python, Sécurité des Systèmes, Esprit critique, Communication technique.",
      ],
    },
    "prompt-engineering": {
      title: "Prompt Engineering & Conception IA",
      subtitle: "Optimisation des modèles LLM pour la cybersécurité et l'éducation",
      paragraphs: [
        "Le prompt engineering est pour moi une discipline d'ingénierie à part entière. Sur le contrat MEN (R5), j'ai conçu un prompt de transformation automatique de cours NSI en Markdown structuré : rôle clair, règles strictes interdisant toute invention, template détaillé, exemples few-shot. Sept versions itérées avant stabilisation, validées sur cinq chapitres NSI différents.",
        "Pour le benchmark IA Agentique (R4), j'ai conçu des prompts d'évaluation standardisés identiques soumis à GPT-4o, Claude et Gemini pour garantir l'objectivité comparative. Le benchmark One API vs Two API sur Gemini 2.5 Pro a démontré que One API maintient 100% de validité JSON jusqu'à 20 QCM contre 50% pour Two API. Résultat directement appliqué en production.",
        "En préparation de VivaTech (R3), j'ai utilisé des LLM pour générer des scénarios pédagogiques adaptés à chaque profil de visiteur (étudiant L1, ingénieur, RSSI, décideur non-technique). Ma projection : concevoir des prompts système robustes pour agents IA autonomes, et appliquer le prompt engineering à la cybersécurité offensive. Compétences liées : Python, Sécurité des Systèmes, Esprit critique, Autonomie.",
      ],
    },
    "coordination": {
      title: "Coordination",
      subtitle: "Faciliter l'harmonie collective pour atteindre les objectifs",
      paragraphs: [
        "La coordination est la capacité à faciliter l'harmonie dans un collectif en favorisant le progrès par un engagement actif. Cette qualité s'est pleinement exprimée lors de la préparation de VivaTech 2025. Pendant plusieurs semaines, j'ai planifié les jalons, supervisé la finalisation technique, animé les réunions hebdomadaires et servi d'intermédiaire entre équipes techniques et direction.",
        "Lorsque des blocages apparaissaient, je ne me contentais pas de les signaler : je proposais une solution et je m'assurais qu'elle était implémentée. La gestion de l'incident à J-3 en est l'illustration parfaite : isolement du problème, mobilisation du bon développeur, suivi en temps réel, validation du correctif. Résultat : 450 nouveaux utilisateurs, discussions stratégiques avec Google Learning et Orange CyberDefense.",
        "Je suis persuadé que la coordination n'est pas un rôle passif. C'est anticiper ce qui pourrait mal se passer, créer les conditions pour que chacun donne le meilleur de lui-même, et intervenir de façon décisive quand la situation l'exige. Niveau confirmé. Compétences liées : Gestion de la pression, Communication technique, Esprit critique.",
      ],
    },
    "autonomie": {
      title: "Autonomie",
      subtitle: "Capacité à piloter des projets complexes sans supervision quotidienne",
      paragraphs: [
        "L'autonomie est la compétence que j'ai le plus mobilisée au quotidien. La démonstration la plus complète : la mission R&D IA Agentique (R4). Mandaté avec une orientation stratégique sans feuille de route technique, j'ai structuré moi-même la démarche : cartographie de l'écosystème, définition des critères d'évaluation, sélection des cinq frameworks, conduite des benchmarks, production des livrables sur plusieurs mois sans encadrement quotidien.",
        "Le développement du module de chiffrement RGPD (R2) a été conduit principalement en autonomie : analyse des besoins, choix algorithmique, développement, tests de sécurité et automatisation Ansible. J'ai su identifier les deux moments où solliciter un regard extérieur : la validation du choix AES-GCM par le CTO en début de projet, et la validation RGPD par le CEO avant déploiement. C'est la marque d'une vraie maturité dans l'autonomie.",
        "Sans que personne me le demande, j'ai initié une remise à niveau proactive sur Terraform et Kubernetes pour combler une lacune identifiée. Cette démarche m'a permis de proposer l'architecture Kubernetes pour OpenCyberAI. Ma limite actuelle : une tendance à vouloir tout maîtriser avant de déléguer. Niveau confirmé. Compétences liées : Esprit critique, Coordination, Python, IaC.",
      ],
    },
    "esprit-critique": {
      title: "Esprit Critique",
      subtitle: "Analyse rigoureuse et prise de décision éclairée",
      paragraphs: [
        "L'esprit critique est une exigence de survie en cybersécurité. Lors du développement du module de chiffrement (R2), j'aurais pu choisir AES-CBC par défaut, l'algorithme le plus répandu. J'ai refusé cette facilité et conduit une analyse comparative rigoureuse : AES-CBC garantit la confidentialité mais pas l'intégrité (vulnérable aux attaques par oracle de padding). AES-GCM en mode AEAD protège les deux. Choix argumenté, documenté et validé par le CTO.",
        "Sur le benchmark IA Agentique (R4), j'avais une préférence initiale pour LangChain, le framework le plus médiatisé. J'ai construit une évaluation impartiale basée sur des critères objectifs : compatibilité FastAPI, capacités RAG, gouvernance, facilité d'intégration. Les données ont conduit à une conclusion contre-intuitive : UiPath Agent Builder (22/25) contre 17/25 pour LangChain. J'ai suivi les données, pas la popularité.",
        "Le benchmark QCM One API vs Two API (R4/R5) a démontré l'inverse de l'intuition initiale : Two API se dégrade à 50% de validité au-delà de 15 QCM, contre 100% stable pour One API. Cette démarche de vérification systématique a évité une mauvaise hypothèse en production. Niveau confirmé. Compétences liées : Autonomie, Gestion de la pression, Chiffrement, Prompt Engineering.",
      ],
    },
    "gestion-pression": {
      title: "Gestion de la Pression",
      subtitle: "Résilience et performance sous contrainte",
      paragraphs: [
        "Quatre situations illustrent cette compétence. Incident critique à J-3 de VivaTech 2025 : régression dans le module de scoring menaçant la démonstration live. J'ai isolé et reproduit le problème, mobilisé le bon développeur, suivi l'avancement en temps réel, validé la correction. Résultat : correctif livré en moins de 4 heures, démo sans incident.",
        "Pendant deux ans, j'ai maintenu simultanément mon alternance chez OpenCyberAI à temps plein, mes cours à l'ESIEA, et mon activité de formateur à YNOV et EPSI. Cette triple contrainte m'a forcé à distinguer l'urgent de l'important, bloquer des plages de travail profond pour les tâches complexes, et accepter que certaines choses moins prioritaires attendent. Cette discipline est aujourd'hui ancrée dans mon fonctionnement.",
        "Sur le contrat MEN (R5), les jalons de validation étaient non négociables et un collègue travaillait en parallèle sur les mêmes étapes, créant une pression de comparaison implicite. J'ai structuré chaque semaine autour des jalons, anticipé les blocages et maintenu mon rythme. Résultat : tous les jalons respectés, pipeline déployé. Niveau confirmé. Compétences liées : Coordination, Autonomie, Esprit critique.",
      ],
    },
    "communication-technique": {
      title: "Communication Technique",
      subtitle: "Expliquer la complexité avec clarté et impact",
      paragraphs: [
        "La communication technique est ce qui transforme une expertise technique en impact réel. À VivaTech 2025 (R3), j'ai expliqué la Quantum Key Distribution à un étudiant de L1 (analogie du verrou physiquement impossible à copier) et discuté de stratégie de migration post-quantique avec un RSSI (délais ANSSI, impact contrats fournisseurs) dans le même créneau de deux heures. Adapter le même concept complexe en temps réel selon l'interlocuteur.",
        "Je suis formateur en cybersécurité à YNOV et EPSI sans aucun encadrement pédagogique externe : je conçois mes curricula, je les teste, je les améliore de session en session. La synthèse exécutive du benchmark IA (R4) a transformé un benchmark de plusieurs semaines en une décision actionnable en quinze minutes pour le CEO non-technique. Sur le stand VivaTech, l'adaptation rapide a contribué à l'acquisition de 450 utilisateurs.",
        "Ma limite actuelle : une tendance à l'exhaustivité dans mes communications écrites. Je progresse sur l'art de hiérarchiser l'information selon l'importance pour le lecteur. Mon projet à long terme : développer cette compétence en anglais pour un contexte international. Niveau expert. Compétences liées : Coordination, Esprit critique, Prompt Engineering, Chiffrement.",
      ],
    },
  },
};

export const architectureConfig: ArchitectureConfig = {
  sectionLabel: "Parcours",
  videoPath: "/videos/cinematic-vision.mp4",
  title: "Un parcours entre technique, transmission et engagement",
  description:
    "Je m'appelle Ludvin Nynson Gatse. Mon parcours n'a rien de linéaire : après un bac Scientifique et un rêve de pilote de ligne, un échec au concours de l'ENAC m'a recentré vers ma passion la plus profonde, la cybersécurité. J'ai enchaîné un DUT Informatique, une Licence Mathématiques-Informatique à l'Université de Lille, puis l'ESIEA pour me former en profondeur. Ces détours ne sont pas des échecs : ce sont des réserves d'expérience. De l'installation de bornes de recharge en Afrique de l'Ouest au développement de solutions de cybersécurité post-quantique chez OpenCyberAI, je suis convaincu que la sécurité de l'information est avant tout une affaire d'humains. Mes valeurs : la persévérance, l'intégrité et la transmission. Mon projet à long terme : créer un cabinet de conseil en cybersécurité au Congo-Brazzaville.",
};

export const researchConfig: ResearchConfig = {
  sectionLabel: "Réalisations",
  projects: [
    {
      title: "R1 — Backend sécurisé OpenCyberAI",
      year: "2023–2025",
      discipline: "Python · FastAPI · DevSecOps",
      image: "images/research-1.jpg",
    },
    {
      title: "R2 — Chiffrement RGPD AES-GCM",
      year: "2025",
      discipline: "Cryptographie · Conformité",
      image: "images/research-2.jpg",
    },
    {
      title: "R3 — VivaTech 2025",
      year: "2025",
      discipline: "Stand Orange · Ateliers QKD · Coordination",
      image: "images/research-3.jpg",
    },
    {
      title: "R4 — R&D IA Agentique",
      year: "2024–2025",
      discipline: "Benchmark · Prototypage",
      image: "images/research-4.jpg",
    },
    {
      title: "R5 — Contrat MEN : Pipeline NSI",
      year: "2025",
      discipline: "IA Générative · Éducation Nationale",
      image: "images/research-1.jpg",
    },
  ],
};

export const footerConfig: FooterConfig = {
  heading: "Construisons ensemble la cybersécurité de demain.",
  columns: [
    {
      title: "CONTACT",
      links: [
        "Ludvin Nynson Gatse",
        "ludvin.gatse@opencyberai.com",
        "+33 7 69 25 90 48",
        "Île-de-France, France",
      ],
    },
    {
      title: "FORMATION",
      links: [
        "ESIEA Paris — Mastère Expert Cybersécurité",
        "Titre RNCP Niveau 7 (2023–2026)",
        "Université de Lille — Licence MI",
        "DUT Informatique — Année spéciale",
      ],
    },
    {
      title: "CERTIFICATIONS",
      links: [
        "CompTIA Security+ (validée)",
        "Cisco CyberOps Associate (validée)",
        "OSCP — en préparation",
        "Terraform Associate — en préparation",
      ],
    },
  ],
  copyright: "\u00A9 2026 Ludvin GATSE. Tous droits réservés.",
  bottomLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ludvin-gatse-b3a27031b" },
    { label: "GitHub", href: "https://github.com/ludvingatse" },
  ],
};
