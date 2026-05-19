export interface CompetenceData {
  id: string;
  titre: string;
  sousTitre: string;
  type: "technique" | "humaine";
  definition: string[];
  elementsDePreuve: { titre: string; contenu: string[] }[];
  autocritique: {
    niveau: string[];
    margeProgression: string[];
    contextualisation: string[];
    placeProfil: string[];
    vitesseAcquisition: string[];
  };
  evolution: {
    projection: string[];
    formation: string[];
  };
  realisationsAssociees: string;
  competencesLiees: string;
}

export const competences: CompetenceData[] = [
  // ======== T1 : Python & FastAPI ========
  {
    id: "python-fastapi",
    titre: "Python & FastAPI",
    sousTitre: "Langage central de développement backend et cybersécurité",
    type: "technique",
    definition: [
      "Python est un langage de programmation interprété, généraliste et orienté objet, créé par Guido van Rossum en 1991. Sa philosophie repose sur la lisibilité du code et la simplicité syntaxique : le fameux 'Zen of Python'. Ces caractéristiques en font le langage de référence pour le développement backend, la data science, l'automatisation et, de façon croissante, la cybersécurité offensive. En 2025, Python est le langage le plus utilisé au monde selon l'index TIOBE.",
      "Dans l'écosystème de la sécurité offensive, Python occupe une place centrale : Metasploit Framework intègre des modules Python pour l'exploitation de vulnérabilités, la majorité des outils de pentest populaires — Impacket, Scapy, SQLMap, Volatility — sont écrits en Python, et les scripts d'exploitation de CVE publiés sur Exploit-DB utilisent Python dans la grande majorité des cas.",
      "FastAPI est un framework web Python moderne, créé en 2018, basé sur les standards OpenAPI et JSON Schema. Sa particularité est de combiner des performances natives très élevées — comparables à NodeJS et Go — avec une validation automatique des données via Pydantic et une documentation interactive générée automatiquement via Swagger UI. Pour le développement d'API REST sécurisées, FastAPI impose une rigueur de typage et de validation qui réduit significativement les risques d'injection et de comportements inattendus.",
    ],
    elementsDePreuve: [
      {
        titre: "Développement du backend complet de la plateforme OpenCyberAI (R1)",
        contenu: [
          "J'ai conçu et développé l'ensemble du backend REST de la plateforme en Python avec FastAPI depuis mars 2023. Cela comprend l'authentification JWT avec tokens d'accès et de renouvellement, le contrôle des accès par rôle (RBAC), le moteur de scoring dynamique, la gestion des parcours utilisateurs, les endpoints de communication avec les modules IA, et l'intégration avec la base de données MariaDB via SQLAlchemy.",
          "Un problème concret qui m'a particulièrement marqué : les modules IA, scoring et backend utilisaient des conventions JSON incompatibles. J'ai analysé les trois formats, proposé un format unifié et supervisé son adoption par toute l'équipe. Ce backend est aujourd'hui en production avec plus de 12 000 utilisateurs actifs et un temps de réponse inférieur à 100 ms.",
        ],
      },
      {
        titre: "Module de chiffrement AES-GCM en Python (R2)",
        contenu: [
          "J'ai développé le module de chiffrement RGPD entièrement en Python, en utilisant la bibliothèque cryptography (PyCA) pour implémenter AES-GCM. Ce projet m'a permis d'explorer les couches bas niveau de Python : gestion de la mémoire sécurisée, manipulation de bytes, génération d'aléatoire cryptographique via os.urandom, et gestion des exceptions cryptographiques. Le temps de traitement obtenu — inférieur à 120 ms par transaction — prouve l'efficacité de l'implémentation.",
        ],
      },
      {
        titre: "Benchmark et prototypage IA Agentique en Python (R4)",
        contenu: [
          "La mission R&D IA Agentique a été conduite entièrement en Python : notebooks Jupyter pour les expérimentations, scripts d'évaluation des frameworks agentiques, et prototype d'intégration avec le backend FastAPI existant. Ce contexte m'a exposé à des usages avancés de Python que le développement backend n'implique pas : appels asynchrones, gestion de contextes de conversation, traitement de flux de tokens.",
        ],
      },
    ],
    autocritique: {
      niveau: [
        "Je me situe honnêtement au niveau autonome sur Python et FastAPI. Je suis capable de développer des applications backend complètes en production, de résoudre des problèmes techniques complexes et de faire des choix d'architecture argumentés. Mais je travaille encore avec effort sur certains sujets avancés : optimisation des performances sous forte charge, conception de tests automatisés complets, et maîtrise des patterns asynchrones avancés.",
      ],
      margeProgression: [
        "Ma principale lacune identifiée est l'absence d'une suite de tests automatisés complète sur le backend d'OpenCyberAI. Je réalise des tests fonctionnels manuels mais je n'ai pas encore mis en place une suite pytest couvrant les endpoints critiques. Cette lacune ralentit les phases de refactoring et rend certains déploiements plus risqués qu'ils ne devraient l'être. C'est mon prochain chantier technique prioritaire.",
      ],
      contextualisation: [
        "Ma maîtrise de Python est très opérationnelle — ancrée dans le développement backend et la cybersécurité. Elle est moins développée sur d'autres usages courants de Python comme la data science, le machine learning ou le scripting d'administration système avancé. Dans le contexte du pentesting, Python est le langage de prédilection pour l'automatisation des phases de reconnaissance et d'exploitation — un usage que je commence à explorer dans ma préparation à l'OSCP.",
      ],
      placeProfil: [
        "Python est le langage central de mon profil. C'est avec lui que j'ai développé la majorité de mes réalisations, que je forme mes étudiants à YNOV et EPSI, et que je prépare mes outils de pentesting. Il est à la fois mon outil de production quotidien et mon langage d'apprentissage pour les nouvelles technologies.",
      ],
      vitesseAcquisition: [
        "J'ai progressé vite sur Python grâce à une exposition en production dès le début de mon alternance. Travailler sur un backend réel avec des contraintes de performance, de sécurité et de délais m'a fait progresser bien plus vite qu'une formation académique seule. Ma vitesse d'acquisition est élevée quand je suis en situation réelle ; plus lente quand je travaille sur des exercices sans enjeu concret.",
      ],
    },
    evolution: {
      projection: [
        "À moyen terme, je vise le niveau confirmé sur Python et FastAPI. Les deux axes prioritaires sont : mettre en place une suite de tests automatisés pytest complète sur le backend d'OpenCyberAI, et maîtriser les patterns asynchrones avancés (asyncio, background tasks, websockets) pour les fonctionnalités temps réel de la plateforme. À plus long terme, Python sera mon langage principal pour les outils de pentest dans le cadre de l'OSCP et pour le backend du cabinet de conseil en Afrique centrale.",
      ],
      formation: [
        "Je développe cette compétence par trois pratiques complémentaires. La pratique quotidienne en production chez OpenCyberAI : chaque nouveau besoin fonctionnel est une occasion d'approfondir ma maîtrise. La préparation à l'OSCP, qui implique d'écrire des scripts Python pour automatiser les phases de reconnaissance, d'exploitation et de post-exploitation — un usage très différent du développement backend qui élargit ma vision du langage. Et la lecture de la documentation officielle FastAPI et des PEPs Python pour comprendre les choix de conception du langage et du framework, pas seulement leur utilisation.",
      ],
    },
    realisationsAssociees: "R1 : Backend OpenCyberAI · R2 : Chiffrement RGPD · R4 : R&D IA Agentique · R5 : Contrat MEN",
    competencesLiees: "T2 : Sécurité des Systèmes · T4 : IaC Terraform/Ansible · T5 : Chiffrement & Cryptographie · H2 : Autonomie",
  },

  // ======== T2 : Sécurité des Systèmes ========
  {
    id: "securite-systemes",
    titre: "Sécurité des Systèmes",
    sousTitre: "Cybersécurité offensive et défensive",
    type: "technique",
    definition: [
      "La sécurité des systèmes est la discipline qui vise à protéger les infrastructures informatiques contre les accès non autorisés, les intrusions, les détournements de fonction et les attaques malveillantes. Elle couvre un spectre très large : depuis la sécurisation des systèmes d'exploitation et des réseaux jusqu'à l'analyse des vulnérabilités, le pentest, la réponse aux incidents et la gouvernance de la sécurité.",
      "Ma définition de cette compétence inclut à la fois la sécurité défensive — hardening, détection, réponse — et la sécurité offensive — reconnaissance, exploitation, post-exploitation. Je considère qu'un ingénieur en cybersécurité doit maîtriser les deux approches pour être pleinement efficace : on ne défend bien que ce qu'on sait attaquer, et on n'attaque efficacement que si on comprend les mécanismes de défense.",
    ],
    elementsDePreuve: [
      {
        titre: "Sécurisation du backend OpenCyberAI — approche DevSecOps (R1)",
        contenu: [
          "J'ai implémenté une approche DevSecOps sur le backend : filtres d'entrée Pydantic pour valider chaque requête, scan de vulnérabilités Safety en CI/CD pour bloquer les dépendances à risque, journalisation structurée JSON pour une future intégration SIEM. Cette approche défensive systématique a permis de maintenir un niveau de sécurité élevé tout en permettant un déploiement rapide des fonctionnalités.",
        ],
      },
      {
        titre: "Analyse de vulnérabilités et pentest interne",
        contenu: [
          "J'ai conduit des analyses de vulnérabilités sur la plateforme OpenCyberAI en utilisant des outils standards : Nmap pour la cartographie des ports et services, Nessus pour l'identification des vulnérabilités connues, et Burp Suite pour l'analyse des flux HTTP/HTTPS. Ces analyses ont permis d'identifier et de corriger plusieurs failles de sécurité avant qu'elles ne soient exploitables. J'ai également participé à des exercices de Red Team/Blue Team internes pour tester la résilience de la plateforme face à des attaques simulées.",
        ],
      },
      {
        titre: "Préparation aux certifications et pratique CTF",
        contenu: [
          "Je me prépare activement à la certification OSCP (Offensive Security Certified Professional), qui est la référence dans le domaine du pentesting. J'ai déjà obtenu les certifications CompTIA Security+ et Cisco CyberOps Associate, qui valident mes connaissances fondamentales en sécurité des systèmes et en opérations de sécurité. Je pratique régulièrement sur des plateformes de CTF (Capture The Flag) comme HackTheBox et TryHackMe pour maintenir et améliorer mes compétences offensives.",
        ],
      },
    ],
    autocritique: {
      niveau: [
        "Je me situe au niveau autonome, en progression vers confirmé. Je maîtrise les fondamentaux de la sécurité offensive et défensive, je suis capable de conduire des analyses de vulnérabilités de façon autonome, et je comprends les mécanismes de sécurité des systèmes d'exploitation modernes. Ma préparation à l'OSCP me fera passer au niveau confirmé sur la dimension offensive.",
      ],
      margeProgression: [
        "Mon principal axe de progression est l'exploitation avancée et la post-exploitation, que je développe dans le cadre de ma préparation à l'OSCP. Je progresse également sur l'analyse de malwares, un domaine dans lequel j'ai des connaissances théoriques solides mais une pratique encore limitée. Enfin, la réponse aux incidents et la forensique sont des domaines que je souhaite approfondir à moyen terme.",
      ],
      contextualisation: [
        "Ma sécurité des systèmes est ancrée dans le contexte web et cloud. Je suis plus à l'aise sur la sécurité des applications web et des API que sur la sécurité des réseaux traditionnels ou des systèmes industriels. Dans le contexte d'OpenCyberAI, cette spécialisation est pertinente car la plateforme est une application web. Mais pour mon projet de cabinet de conseil en Afrique centrale, je devrai élargir ma maîtrise à des contextes d'infrastructure plus hétérogènes.",
      ],
      placeProfil: [
        "La sécurité des systèmes est le cœur de mon métier de Cyber Security Engineer. C'est la compétence qui justifie mon titre et ma mission chez OpenCyberAI. Elle est le socle sur lequel toutes mes autres compétences techniques se construisent : le développement Python est sécurisé, l'IaC inclut des contrôles de sécurité, et la cryptographie est une spécialisation de la sécurité des systèmes.",
      ],
      vitesseAcquisition: [
        "J'ai progressé rapidement sur cette compétence grâce à une immersion totale dans un environnement de start-up en cybersécurité. Chaque jour apporte son lot de nouveaux problèmes de sécurité à résoudre, ce qui crée une accélération naturelle de l'apprentissage. Ma préparation aux certifications structure cette progression et me permet de combler les lacunes de manière ciblée.",
      ],
    },
    evolution: {
      projection: [
        "À moyen terme, je vise la certification OSCP, qui validera mon niveau confirmé sur la sécurité offensive. À plus long terme, je veux développer une expertise en analyse de malwares et en forensique, deux domaines complémentaires qui renforcent considérablement la capacité d'un consultant en cybersécurité à répondre à des incidents complexes.",
      ],
      formation: [
        "Ma formation se fait principalement par la pratique sur des plateformes CTF (HackTheBox, TryHackMe) et par la préparation aux certifications. Je lis également régulièrement les publications de recherche en sécurité et je suis les annonces de vulnérabilités pour rester à jour sur les menaces émergentes.",
      ],
    },
    realisationsAssociees: "R1 : Backend OpenCyberAI · R2 : Chiffrement RGPD · R4 : R&D IA Agentique",
    competencesLiees: "T1 : Python/FastAPI · T4 : IaC Terraform/Ansible · T5 : Chiffrement & Cryptographie · H2 : Autonomie",
  },

  // ======== T3 : Prompt Engineering ========
  {
    id: "prompt-engineering",
    titre: "Prompt Engineering & Conception IA",
    sousTitre: "Discipline d'ingénierie pour modèles de langage",
    type: "technique",
    definition: [
      "Le prompt engineering est la discipline qui consiste à concevoir, structurer et optimiser les instructions données à un modèle de langage pour obtenir des sorties précises, reproductibles et exploitables. C'est bien plus qu'une simple question de formulation : un prompt bien conçu définit un rôle clair pour le modèle, pose des contraintes précises, spécifie un format de sortie attendu, et anticipe les comportements non désirés.",
      "Plusieurs techniques structurent cette discipline. Le few-shot prompting consiste à fournir des exemples de sorties attendues dans le prompt pour ancrer le comportement du modèle. Le chain-of-thought pousse le modèle à raisonner étape par étape avant de conclure, réduisant les erreurs de raisonnement. Le role prompting assigne un rôle précis au modèle pour orienter son registre et son niveau d'expertise. La gestion des hallucinations — instructions strictes interdisant d'inventer du contenu absent de la source — est particulièrement critique dans des contextes pédagogiques comme le contrat MEN.",
    ],
    elementsDePreuve: [
      {
        titre: "Pipeline NSI : prompt de transformation automatique (R5)",
        contenu: [
          "Le livrable central du contrat MEN était un prompt capable de transformer automatiquement tout cours NSI brut en Markdown structuré exploitable par le backend. J'ai construit ce prompt en plusieurs blocs : rôle clair donné au modèle (expert pédagogique NSI), règles strictes interdisant d'inventer tout contenu absent du cours source, template Markdown détaillé à respecter, et exemples few-shot pour ancrer le comportement attendu.",
          "J'ai testé sur cinq chapitres NSI différents, analysé les cas d'échec et itéré. Sept versions successives ont été nécessaires avant d'atteindre une version stable et généralisable, validée techniquement par le CTO et déployée en production.",
        ],
      },
      {
        titre: "Benchmark LLM : prompts d'évaluation standardisés (R4)",
        contenu: [
          "Pour comparer objectivement GPT-4o, Claude Sonnet et Gemini sur des tâches de génération pédagogique, j'ai conçu des prompts d'évaluation standardisés identiques soumis à chaque modèle. La standardisation était essentielle : un prompt différent pour chaque modèle aurait rendu la comparaison invalide.",
          "J'ai également conduit le benchmark One API vs Two API sur Gemini 2.5 Pro, qui a démontré que la méthode One API maintient 100% de validité JSON jusqu'à 20 QCM contre 50% pour Two API. Ce résultat, obtenu par une démarche de prompt engineering rigoureuse, est aujourd'hui appliqué en production.",
        ],
      },
      {
        titre: "Ateliers QKD VivaTech : génération de scénarios pédagogiques en amont (R3)",
        contenu: [
          "Dans la phase de préparation des ateliers sur la cryptographie quantique, j'ai utilisé des LLM pour générer des scénarios pédagogiques adaptés à chaque profil de visiteur attendu. En soumettant à Claude et ChatGPT des descriptions précises des profils (étudiant L1, ingénieur réseau, RSSI, décideur non-technique) avec des instructions sur le niveau de technicité attendu, j'ai obtenu des bases de réponses types aux questions les plus fréquentes sur la QKD et Orange Quantum Defender.",
          "Ce travail de préparation m'a permis d'anticiper les objections, d'affiner mes analogies pédagogiques et d'être plus efficace sur le stand. C'est un usage du prompt engineering comme outil de préparation intellectuelle — différent de la génération de contenu en production, mais tout aussi structuré et méthodique.",
        ],
      },
    ],
    autocritique: {
      niveau: [
        "Je me situe au niveau autonome sur cette compétence. Je suis capable de concevoir des prompts complexes pour des cas d'usage précis, de les tester méthodiquement et de les itérer jusqu'à stabilisation. Mais je travaille encore avec effort sur les techniques avancées : chain-of-thought structuré, meta-prompting, et conception de prompts pour architectures multi-agents.",
      ],
      margeProgression: [
        "Mes prompts sont efficaces dans les contextes que j'ai déjà explorés — génération pédagogique, évaluation comparative, préparation d'ateliers. Mais ma pratique reste liée au contexte OpenCyberAI. Je manque d'expérience sur des cas d'usage plus variés : génération de rapports d'audit, automatisation de tâches de reconnaissance en pentest, ou orchestration de workflows complexes dans des architectures multi-agents.",
      ],
      contextualisation: [
        "Le prompt engineering fonctionne différemment selon le modèle utilisé. Un prompt optimisé pour GPT-4o ne produira pas nécessairement les mêmes résultats sur Claude Sonnet ou Gemini — les modèles ont des comportements distincts face aux mêmes instructions. J'ai appris à adapter mes prompts selon le modèle cible, mais je dois encore systématiser cette adaptation sur un plus grand nombre de modèles.",
      ],
      placeProfil: [
        "Le prompt engineering est une compétence émergente dans mon profil — je l'ai développée plus récemment que Python ou la sécurité système. Mais elle prend une importance croissante à mesure que l'IA s'intègre dans les projets d'OpenCyberAI. Sur le contrat MEN, c'est elle qui a rendu possible l'automatisation du pipeline : sans prompt engineering maîtrisé, le projet aurait nécessité une intervention manuelle à chaque transformation.",
      ],
      vitesseAcquisition: [
        "J'ai progressé rapidement sur cette compétence, par immersion directe dans des projets à fort enjeu : pipeline MEN déployé en production, benchmark validé par la direction. La progression est rapide quand les enjeux sont réels et les contraintes précises. Elle est plus lente quand il n'y a pas de mesure objective du résultat.",
      ],
    },
    evolution: {
      projection: [
        "À moyen terme, je vise le niveau confirmé, notamment sur les techniques avancées de prompt engineering pour les architectures agentiques. L'objectif est de concevoir des prompts système robustes pour les agents IA d'OpenCyberAI : des instructions qui définissent précisément le périmètre d'action de l'agent, ses règles de sécurité et ses mécanismes de fallback en cas de situation non prévue. À plus long terme, appliquer le prompt engineering à la cybersécurité offensive — génération automatique de scénarios de pentest, assistance à la rédaction de rapports d'audit — est un axe que je veux explorer.",
      ],
      formation: [
        "La mission R&D IA Agentique (R4) est elle-même une formation continue sur le prompt engineering appliqué aux agents IA. Chaque framework testé — LangChain, AutoGen, UiPath — a ses propres conventions de prompting pour l'orchestration des agents, la définition des outils disponibles et la gestion de la mémoire. Cette exposition à plusieurs approches différentes m'apprend à identifier les invariants du bon prompting au-delà des spécificités de chaque outil. Je complète cette formation par la lecture de la documentation officielle d'Anthropic sur le prompt engineering et des publications de recherche sur les techniques d'optimisation des prompts (DSPy, APE).",
      ],
    },
    realisationsAssociees: "R3 : VivaTech 2025 · R4 : R&D IA Agentique · R5 : Contrat MEN",
    competencesLiees: "T1 : Python/FastAPI · T2 : Sécurité des Systèmes · H3 : Esprit critique · H2 : Autonomie",
  },

  // ======== T4 : Infrastructure as Code ========
  {
    id: "infrastructure-code",
    titre: "Infrastructure as Code",
    sousTitre: "Terraform / Ansible — Automatisation et fiabilité des déploiements",
    type: "technique",
    definition: [
      "L'Infrastructure as Code (IaC) est une approche qui consiste à décrire et gérer une infrastructure informatique via du code versionné, plutôt que par des configurations manuelles. L'idée centrale est simple mais puissante : une infrastructure codifiée se déploie en quelques minutes, se réplique à l'identique entre les environnements, peut être auditée comme n'importe quel code source, et peut être restaurée rapidement en cas d'incident. C'est la condition d'une approche DevSecOps sérieuse.",
      "Terraform, créé par HashiCorp en 2014, est un outil de provisioning déclaratif : il décrit l'état cible de l'infrastructure et calcule automatiquement les actions à effectuer pour l'atteindre. Son approche multi-cloud lui permet de gérer des ressources sur AWS, Azure, Google Cloud ou des infrastructures on-premise avec le même langage HCL. Ansible, créé par Red Hat en 2012, est un outil de configuration et d'automatisation agentless : il se connecte aux serveurs via SSH et applique des playbooks YAML décrivant les configurations attendues. Terraform construit l'infrastructure, Ansible la configure : les deux outils sont complémentaires.",
    ],
    elementsDePreuve: [
      {
        titre: "Formation Terraform à l'ESIEA : debug et GitOps",
        contenu: [
          "C'est à l'ESIEA que j'ai acquis les bases structurées de Terraform. Le cours m'a exposé à deux types d'exercices particulièrement formateurs. Le premier : debugger une stack Terraform volontairement erronée — identifier les erreurs de syntaxe HCL, les dépendances circulaires, les ressources mal référencées. Le second : un hands-on GitOps complet avec ArgoCD, déployant l'application Online Boutique de Google dans deux environnements séparés avec Helm Charts. Ce cours m'a donné une compréhension structurée de Terraform que la pratique seule ne m'aurait pas apportée aussi vite.",
        ],
      },
      {
        titre: "Cloud privé OpenStack : IaC from scratch (Bachelor)",
        contenu: [
          "Avant de connaître Terraform, j'ai créé un cloud privé OpenStack from scratch en Bachelor : installation de DevStack sur Debian, configuration du load balancing, provisioning de 4 Go RAM et 40 Go de stockage, activation des services Horizon, Keystone et OpenRC. Ce projet m'a appris les fondamentaux de l'orchestration d'infrastructure avant même de connaître les outils IaC modernes — ce qui m'a donné une compréhension des mécanismes sous-jacents que beaucoup d'utilisateurs de Terraform n'ont pas.",
        ],
      },
      {
        titre: "Playbooks Ansible en production : OpenCyberAI (R1, R2, R3)",
        contenu: [
          "Chez OpenCyberAI, j'ai développé et maintiens l'ensemble des playbooks Ansible qui automatisent les déploiements de la plateforme sur les trois environnements (test, pré-production, production). Chaque playbook gère : installation des dépendances Python, configuration des variables d'environnement, migrations de base de données MariaDB via Alembic, redémarrage des services avec vérification de santé, et rotation des secrets. Ce travail a réduit le temps de déploiement de 45 minutes en manuel à moins de 8 minutes.",
          "À J-3 de VivaTech 2025, ces playbooks ont permis de redéployer l'environnement de démo corrigé en quelques minutes : sans eux, l'incident aurait pu compromettre la démonstration.",
        ],
      },
      {
        titre: "Provisioning Terraform de l'environnement VivaTech (R3)",
        contenu: [
          "Pour VivaTech 2025, j'ai utilisé Terraform pour provisionner l'environnement de démonstration isolé de la production. Cette approche Infrastructure as Code a garanti que l'environnement de démo présentait exactement les mêmes configurations que ce qui avait été testé et validé, sans risque de dérive manuelle entre les phases de test et le jour J.",
        ],
      },
    ],
    autocritique: {
      niveau: [
        "Je me situe au niveau autonome sur cette compétence. Je suis confirmé sur Ansible : je conçois, maintiens et fais évoluer des playbooks en production depuis plus de deux ans. Je suis autonome sur Terraform : je comprends l'architecture des fichiers HCL, je sais débugger des stacks existantes et provisionner des environnements simples, mais je n'ai pas encore conçu une infrastructure Terraform complexe from scratch en production.",
      ],
      margeProgression: [
        "Ma principale limite sur Terraform est l'absence d'expérience sur la gestion des states en équipe : remote state backend, locking, workspace management — et sur les modules Terraform réutilisables. Sur Ansible, ma limite est la gestion de scénarios d'idempotence complexes et les tests de playbooks via Molecule. Ces lacunes seront adressées lors de la migration vers l'architecture Kubernetes proposée pour OpenCyberAI.",
      ],
      contextualisation: [
        "Ma maîtrise de l'IaC est ancrée dans un contexte Linux/cloud avec des infrastructures de taille moyenne. Elle est moins développée sur les environnements Windows Server et les très grandes infrastructures multi-régions. Dans mon futur rôle de consultant en Afrique centrale, je devrai adapter mes pratiques IaC à des contextes d'infrastructure hétérogènes et parfois limités en ressources cloud.",
      ],
      placeProfil: [
        "L'IaC est la compétence qui rend mes déploiements fiables et reproductibles. Sans les playbooks Ansible, chaque déploiement d'OpenCyberAI serait une opération manuelle risquée. Sans Terraform, l'environnement de démo VivaTech n'aurait pas pu être provisionné avec la même configuration que la production. C'est une compétence d'infrastructure qui amplifie l'efficacité de toutes les autres.",
      ],
      vitesseAcquisition: [
        "J'ai progressé vite sur Ansible grâce à la pratique quotidienne en production : chaque déploiement est une occasion d'améliorer les playbooks existants. Sur Terraform, ma progression a été plus lente, car les opportunités de pratique sont moins fréquentes. Le cours ESIEA a été déterminant pour structurer mes connaissances théoriques et combler les lacunes que la pratique seule n'adresse pas.",
      ],
    },
    evolution: {
      projection: [
        "À moyen terme, je vise le niveau confirmé sur les deux outils. L'objectif concret est de déployer l'architecture Kubernetes proposée pour OpenCyberAI : Helm Charts indépendants par microservice, ArgoCD pour le GitOps, NetworkPolicies et security contexts configurés via Terraform. Ce projet, s'il aboutit, constituera ma preuve de niveau confirmé sur l'ensemble de la chaîne IaC.",
      ],
      formation: [
        "Le cours Terraform de l'ESIEA a été la formation la plus structurante sur cette compétence. Il m'a donné un cadre méthodologique que la pratique seule ne m'aurait pas apporté : comprendre le cycle plan/apply/destroy, maîtriser la gestion des dépendances entre ressources, et appréhender les bonnes pratiques de modularisation. Je continue à approfondir via la documentation officielle HashiCorp et les hands-on labs Terraform Associate, avec l'objectif à moyen terme de passer la certification Terraform Associate.",
      ],
    },
    realisationsAssociees: "R1 : Backend OpenCyberAI · R2 : Chiffrement RGPD · R3 : VivaTech 2025 · R5 : Contrat MEN",
    competencesLiees: "T1 : Python/FastAPI · T2 : Sécurité des Systèmes · H2 : Autonomie · H4 : Travail sous pression",
  },

  // ======== T5 : Chiffrement & Cryptographie ========
  {
    id: "chiffrement-crypto",
    titre: "Chiffrement & Cryptographie",
    sousTitre: "Primitives cryptographiques modernes — Du AES-GCM à la cryptographie post-quantique",
    type: "technique",
    definition: [
      "La cryptographie est la science qui permet de sécuriser les communications et les données en les transformant de façon à ce qu'elles ne soient lisibles que par les personnes autorisées. Elle repose sur des algorithmes mathématiques et des protocoles qui garantissent trois propriétés fondamentales : la confidentialité (seul le destinataire légitime peut lire le message), l'intégrité (toute modification du message est détectable) et l'authenticité (on peut vérifier l'identité de l'émetteur).",
      "On distingue trois grandes familles de cryptographie. La cryptographie symétrique utilise la même clé pour chiffrer et déchiffrer — rapide et efficace pour les grandes quantités de données, mais pose le problème de l'échange sécurisé de la clé. AES en est le représentant le plus utilisé, notamment en mode GCM qui ajoute l'authentification intégrée. La cryptographie asymétrique utilise une paire de clés — une publique pour chiffrer, une privée pour déchiffrer. La cryptographie post-quantique est un domaine émergent qui vise à concevoir des algorithmes résistants aux ordinateurs quantiques, capables de casser RSA grâce à l'algorithme de Shor.",
    ],
    elementsDePreuve: [
      {
        titre: "Implémentation AES-GCM en production : module RGPD (R2)",
        contenu: [
          "J'ai développé le module de chiffrement RGPD d'OpenCyberAI entièrement en Python, basé sur AES-256-GCM via la bibliothèque cryptography (PyCA). Le choix d'AES-GCM plutôt qu'AES-CBC n'était pas arbitraire : AES-GCM est un mode AEAD (Authenticated Encryption with Associated Data) qui garantit simultanément la confidentialité et l'intégrité, contrairement à AES-CBC vulnérable aux attaques par oracle de padding.",
          "L'implémentation comprend la génération de clés temporaires via os.urandom(32), la gestion des nonces via os.urandom(12) avec vérification d'unicité, et la détection automatique de toute altération via le tag d'authentification GCM. Ce module a été déployé en production avec un temps de traitement inférieur à 120 ms par transaction.",
        ],
      },
      {
        titre: "Ateliers Quantum Key Distribution : VivaTech 2025 (R3)",
        contenu: [
          "J'ai animé des ateliers sur la Quantum Key Distribution en lien avec Orange Quantum Defender. La QKD exploite les propriétés quantiques de la lumière pour distribuer des clés cryptographiques : toute tentative d'interception modifie l'état quantique des photons, rendant l'espionnage physiquement détectable. Préparer et animer ces ateliers m'a obligé à maîtriser les protocoles BB84 et E91, les limites théoriques de la QKD, et son articulation avec les standards post-quantiques du NIST.",
        ],
      },
      {
        titre: "Analyse cryptographique offensive : reverse engineering (R1)",
        contenu: [
          "En tant que Cyber Security Engineer chez OpenCyberAI, j'ai participé à des sessions d'analyse de malwares avec IDA Pro et Ghidra, centrées sur la façon dont ces malwares détournent ou contournent les primitives cryptographiques. J'ai également utilisé Wireshark pour analyser des captures de trafic TLS et identifier des configurations faibles ou des certificats mal configurés, et Burp Suite pour tester des mécanismes d'authentification JWT et détecter des failles dans l'implémentation des tokens.",
        ],
      },
    ],
    autocritique: {
      niveau: [
        "Je me situe au niveau autonome, en cours de progression active. Je maîtrise la cryptographie symétrique appliquée : AES-GCM en production, gestion des clés et des nonces, détection d'altération. Je suis en cours de formation sur la cryptographie asymétrique avancée et la cryptographie post-quantique, avec un accompagnement de mes supérieurs chez OpenCyberAI.",
      ],
      margeProgression: [
        "Trois axes de progression identifiés. Le premier : la cryptographie asymétrique avancée — je comprends RSA et les courbes elliptiques dans leurs usages courants (TLS, JWT), mais pas encore dans leurs failles exploitables. Le deuxième : le déploiement d'une PKI complète — je comprends l'architecture théorique mais je n'ai pas encore déployé une PKI de bout en bout en production. Le troisième : la cryptographie post-quantique au-delà de la QKD — les algorithmes CRYSTALS-Kyber et CRYSTALS-Dilithium standardisés par le NIST en 2024.",
      ],
      contextualisation: [
        "Ma compétence en cryptographie fonctionne très bien dans les contextes applicatifs que je maîtrise : chiffrement de données en Python, analyse de trafic TLS, tests JWT. Elle est moins développée dans les contextes de cryptographie matérielle (HSM, TPM, cartes à puce) et dans les protocoles de consensus blockchain, qui reposent sur des primitives cryptographiques spécifiques.",
      ],
      placeProfil: [
        "La cryptographie est la compétence la plus spécialisée de mon profil. Elle me différencie des ingénieurs qui connaissent la sécurité en général mais ne sont pas à l'aise avec les primitives cryptographiques. En combinant une expérience d'implémentation en production (AES-GCM), une dimension pédagogique (ateliers QKD VivaTech) et une dimension offensive (reverse engineering de malwares), j'ai une vision à 360° de la cryptographie que peu d'ingénieurs en début de carrière possèdent.",
      ],
      vitesseAcquisition: [
        "La cryptographie est la compétence sur laquelle j'apprends le plus vite dans mon alternance, précisément parce que je bénéficie d'un encadrement direct de supérieurs expérimentés chez OpenCyberAI. Chaque projet — module RGPD, ateliers QKD, analyse de malwares — m'a apporté une couche de compréhension que je n'aurais pas pu acquérir seul aussi rapidement.",
      ],
    },
    evolution: {
      projection: [
        "À moyen terme, je vise le niveau confirmé, avec trois jalons concrets. Implémenter un système d'authentification par certificats X.509 pour le backend OpenCyberAPI — ce qui nécessite de déployer une PKI complète. Maîtriser les attaques cryptographiques classiques dans le cadre de l'OSCP : oracle de padding sur AES-CBC, attaques sur RSA mal implémenté, analyse de protocoles TLS avec des suites de chiffrement faibles. Et approfondir les algorithmes post-quantiques standardisés par le NIST : CRYSTALS-Kyber pour l'échange de clés, CRYSTALS-Dilithium pour les signatures — dans la continuité des ateliers QKD animés à VivaTech 2025.",
      ],
      formation: [
        "Ma formation sur la cryptographie est continue et structurée sur deux axes. L'axe interne : l'accompagnement de mes supérieurs chez OpenCyberAI, notamment sur l'analyse algorithmique avec le CTO — comprendre les cas limites de chaque primitive cryptographique, identifier les scénarios d'attaque non anticipés, et valider mes choix d'implémentation avant déploiement. L'axe externe : la préparation à l'OSCP via HackTheBox et TryHackMe, qui inclut des modules dédiés aux attaques cryptographiques : oracle de padding, bit-flipping AES-CBC, weak RSA — directement applicables en conditions réelles d'audit.",
      ],
    },
    realisationsAssociees: "R1 : Backend OpenCyberAI · R2 : Chiffrement RGPD · R3 : VivaTech 2025 · R4 : R&D IA Agentique",
    competencesLiees: "T1 : Python/FastAPI · T2 : Sécurité des Systèmes · H3 : Esprit critique · H5 : Communication technique",
  },

  // ======== H1 : Coordination ========
  {
    id: "coordination",
    titre: "Coordination",
    sousTitre: "Faciliter l'harmonie collective pour atteindre les objectifs",
    type: "humaine",
    definition: [
      "La coordination est la capacité à faciliter l'harmonie dans un collectif en favorisant le progrès par un engagement actif. Un coordinateur ne se contente pas de répartir les tâches : il anticipe les blocages, propose des solutions, s'assure que chacun dispose des ressources nécessaires pour avancer, et intervient de façon décisive quand la situation l'exige.",
      "Dans le contexte d'une start-up en forte croissance comme OpenCyberAI, la coordination est essentielle. Les équipes sont petites, les ressources limitées, les délais serrés, et les enjeux élevés. Un défaut de coordination ne se traduit pas par un retard anodin : il peut compromettre une démonstration stratégique, retarder un déploiement critique, ou créer des frustrations qui affectent la cohésion d'équipe.",
    ],
    elementsDePreuve: [
      {
        titre: "Préparation et coordination de VivaTech 2025 (R3)",
        contenu: [
          "La préparation de VivaTech 2025 est la démonstration la plus complète de ma capacité à coordonner. Pendant plusieurs semaines, j'ai planifié les jalons de préparation, supervisé la finalisation technique de la plateforme, animé les réunions hebdomadaires de suivi, et servi d'intermédiaire entre les équipes techniques et la direction. J'ai défini les rôles de chaque membre de l'équipe pour le salon, identifié les points de friction dans les parcours utilisateurs, et priorisé les correctifs selon leur impact sur la démonstration.",
          "Lorsque des blocages apparaissaient, je ne me contentais pas de les signaler : je proposais une solution et je m'assurais qu'elle était implémentée. La gestion de l'incident à J-3 en est l'illustration parfaite : isolation du problème, mobilisation du bon développeur, suivi en temps réel, validation du correctif. Résultat : 450 nouveaux utilisateurs acquis, discussions stratégiques avec Google Learning et Orange CyberDefense.",
        ],
      },
    ],
    autocritique: {
      niveau: [
        "Je me situe au niveau confirmé sur cette compétence. J'ai plusieurs preuves concrètes en production : la coordination de VivaTech 2025, la gestion de l'incident à J-3, la supervision des déploiements en parallèle. Ces capacités sont prouvées dans des contextes réels à fort enjeu, pas seulement en théorie.",
      ],
      margeProgression: [
        "Ma principale limite est la coordination à distance et asynchrone. J'excelle dans la coordination en présentiel — réunions, échanges directs, observation des signaux non-verbaux — mais je suis moins efficace dans la coordination d'équipes distribuées géographiquement. C'est une compétence que je devrai développer pour mon projet de cabinet de conseil en Afrique centrale, où les équipes seront nécessairement dispersées.",
      ],
      contextualisation: [
        "Ma coordination fonctionne très bien dans les contextes de start-up agile, où la réactivité et l'adaptabilité sont primordiales. Elle serait moins efficace dans des contextes très hiérarchisés et procéduriers, où la coordination suit des protocoles stricts et où l'initiative individuelle est plus limitée. Je m'adapte au contexte, mais je suis plus à l'aise dans des environnements qui valorisent la prise d'initiative.",
      ],
      placeProfil: [
        "La coordination est une compétence différenciante dans mon profil. Beaucoup d'ingénieurs en cybersécurité sont forts techniquement mais moins à l'aise sur la dimension collective et organisationnelle. Ma capacité à coordonner tout en restant profondément technique me permet d'occuper une position unique : je comprends les enjeux techniques ET je sais les traduire en actions collectives efficaces.",
      ],
      vitesseAcquisition: [
        "Cette compétence s'est développée très vite chez moi, par nécessité : dans une start-up en croissance, si personne ne coordonne, rien n'avance. Chaque événement préparé, chaque déploiement supervisé, chaque incident géré a renforcé ma confiance et ma capacité à coordonner des équipes sous pression.",
      ],
    },
    evolution: {
      projection: [
        "À moyen terme, je vise un niveau expert sur cette compétence : non seulement coordonner des équ techniques, mais coordonner des projets complexes impliquant plusieurs organisations (clients, partenaires, sous-traitants). Dans mon projet de cabinet de conseil en Afrique centrale, cette capacité sera absolument essentielle.",
      ],
      formation: [
        "Je développe cette compétence principalement par la pratique : chaque projet chez OpenCyberAI est une occasion de coordonner. Je complète par la lecture sur la gestion de projet agile et la coordination d'équipes techniques. Je prévois également de suivre une formation sur la gestion de crise et la coordination d'urgence à moyen terme.",
      ],
    },
    realisationsAssociees: "R1 : Backend OpenCyberAI · R3 : VivaTech 2025 · R5 : Contrat MEN",
    competencesLiees: "H2 : Autonomie · H4 : Travail sous pression · H5 : Communication technique · T4 : IaC Terraform/Ansible",
  },

  // ======== H2 : Autonomie ========
  {
    id: "autonomie",
    titre: "Autonomie",
    sousTitre: "Capacité à piloter des projets complexes sans supervision quotidienne",
    type: "humaine",
    definition: [
      "L'autonomie est la capacité à s'engager et à faire des choix propres pour conduire ses missions de la manière dont on estime la plus appropriée, sans dépendre excessivement des autres. Un professionnel autonome sait trouver par lui-même les ressources nécessaires pour accomplir une tâche, s'attribuer des responsabilités de façon proactive, et respecter ses engagements dans les délais fixés — même sans supervision directe.",
      "Dans le contexte d'une start-up comme OpenCyberAI, l'autonomie n'est pas une qualité souhaitable : c'est une condition de survie. Avec une équipe réduite, des missions souvent inédites et des délais serrés, attendre qu'on vous dise quoi faire est un luxe qu'on ne peut pas se permettre. L'autonomie, c'est aussi savoir identifier ses propres lacunes et les combler par ses propres moyens, sans attendre que quelqu'un d'autre le fasse à votre place.",
    ],
    elementsDePreuve: [
      {
        titre: "Mission R&D IA Agentique sans feuille de route (R4)",
        contenu: [
          "Lorsqu'Armand Taheri m'a confié la mission de benchmark et de prototypage de l'IA Agentique, il m'a donné une orientation stratégique claire — identifier la meilleure solution pour personnaliser les parcours d'apprentissage via des agents IA — mais aucune feuille de route technique. J'ai structuré moi-même la démarche : cartographie de l'écosystème, définition des critères d'évaluation, sélection des frameworks à tester, conduite des benchmarks, production des livrables. Sur plusieurs mois, sans encadrement quotidien, j'ai produit un benchmark documenté, un module de formation en sept chapitres et des recommandations actionnables validées par la direction. C'est la démonstration la plus complète de mon autonomie professionnelle.",
        ],
      },
      {
        titre: "Module de chiffrement RGPD de bout en bout (R2)",
        contenu: [
          "Le développement du module AES-GCM a été conduit principalement en autonomie. J'ai mené l'analyse des besoins, le choix algorithmique, le développement, les tests de sécurité et l'automatisation Ansible sans intervention quotidienne de l'équipe. J'ai su identifier les deux moments où solliciter un regard extérieur : la validation du choix AES-GCM par le CTO en début de projet, et la validation RGPD par le CEO avant le déploiement — sans dépendre d'eux pour les étapes intermédiaires.",
        ],
      },
      {
        titre: "Remise à niveau proactive sur Terraform et Kubernetes",
        contenu: [
          "Sans que personne me le demande, j'ai initié une démarche personnelle de montée en compétences sur Terraform et Kubernetes pour combler une lacune que j'avais identifiée dans mon profil. Cette remise à niveau m'a permis de proposer l'architecture Kubernetes pour OpenCyberAI : une proposition qui n'aurait pas été possible si j'avais attendu qu'on me forme. Identifier ses propres lacunes et les combler par ses propres moyens : c'est ça, l'autonomie.",
        ],
      },
    ],
    autocritique: {
      niveau: [
        "Je me situe au niveau confirmé sur cette compétence. Je suis capable de conduire des missions complexes de bout en bout sans supervision quotidienne, d'identifier mes lacunes et de les combler par moi-même, et de prendre des décisions techniques engageantes en assumant les conséquences. J'ai plusieurs preuves concrètes en production qui le démontrent.",
      ],
      margeProgression: [
        "Ma principale limite est une tendance à vouloir tout maîtriser avant de déléguer ou de passer la main. Cette posture, qui est une force en début de projet, devient un frein quand les projets grandissent et nécessitent de faire confiance à d'autres. Apprendre à déléguer sans perdre le contrôle de la qualité est mon prochain axe de progression sur cette compétence.",
      ],
      contextualisation: [
        "Mon autonomie fonctionne très bien dans les contextes où les objectifs sont clairs mais les moyens sont libres — ce qui est typique d'une start-up. Elle est plus difficile à exercer dans des contextes très contraints procéduralement, comme les projets institutionnels avec le Ministère de l'Éducation Nationale, où l'autonomie doit s'exercer dans un cadre de validation formelle à chaque étape. J'apprends à adapter mon autonomie au contexte.",
      ],
      placeProfil: [
        "L'autonomie est une compétence centrale dans mon profil : c'est probablement celle qui m'a le plus fait progresser techniquement. Sans elle, je n'aurais pas conduit la mission R&D IA Agentique, développé le module de chiffrement de bout en bout, ni proposé l'architecture Kubernetes. Elle est le moteur de ma montée en compétences.",
      ],
      vitesseAcquisition: [
        "L'autonomie s'est développée chez moi progressivement, par accumulation d'expériences. Chaque mission réussie seul a renforcé ma confiance pour en prendre une plus complexe ensuite. Ma vitesse d'acquisition sur cette compétence est élevée : je progresse significativement d'un projet à l'autre.",
      ],
    },
    evolution: {
      projection: [
        "À moyen terme, je vise un niveau expert-autonome : être capable non seulement de conduire mes propres missions en autonomie complète, mais aussi de guider d'autres personnes vers plus d'autonomie. Dans mon projet de cabinet de conseil en Afrique centrale, l'autonomie sera une compétence absolument fondamentale : je devrai construire une structure opérationnelle dans un contexte peu structuré, avec des ressources limitées et sans filet de sécurité institutionnel.",
      ],
      formation: [
        "Le programme MSIT de l'École des Mines renforcera cette compétence sur deux axes complémentaires : d'une part, la capacité à piloter des projets complexes de façon autonome avec des méthodologies structurées (gestion de projet, prise de décision en incertitude) ; d'autre part, la capacité à déléguer et à faire confiance — ce qui est précisément ma limite actuelle. En parallèle, ma préparation à l'OSCP est elle-même un exercice d'autonomie : un environnement de test d'intrusion où on opère seul, sans aide, avec des objectifs précis et des délais contraints.",
      ],
    },
    realisationsAssociees: "R2 : Chiffrement RGPD · R4 : R&D IA Agentique · R5 : Contrat MEN",
    competencesLiees: "H3 : Esprit critique · H1 : Coordination · T1 : Python/FastAPI · T4 : IaC Terraform/Ansible",
  },

  // ======== H3 : Esprit Critique ========
  {
    id: "esprit-critique",
    titre: "Esprit Critique",
    sousTitre: "Analyse rigoureuse et prise de décision éclairée",
    type: "humaine",
    definition: [
      "L'esprit critique est la capacité à analyser des faits pour formuler un jugement rigoureux, à examiner la valeur logique d'un propos et à remettre en question les évidences. Ce n'est pas une posture de méfiance systématique : c'est une discipline intellectuelle qui consiste à distinguer ce qui est démontré de ce qui est supposé, ce qui est pertinent de ce qui est superflu, et ce qui est fiable de ce qui est biaisé.",
      "Dans le domaine de la cybersécurité, l'esprit critique n'est pas une qualité souhaitable : c'est une exigence de survie. Un ingénieur qui accepte les architectures par convention plutôt que par raisonnement introduit des failles qu'il ne voit pas. Un développeur qui choisit un algorithme parce qu'il est populaire plutôt que parce qu'il est adapté crée des vulnérabilités évitables. En cybersécurité offensive comme défensive, chaque hypothèse doit être questionnée, chaque choix argumenté, chaque résultat vérifié.",
    ],
    elementsDePreuve: [
      {
        titre: "Choix AES-GCM vs AES-CBC : module chiffrement RGPD (R2)",
        contenu: [
          "Lors du développement du module de chiffrement, j'aurais pu choisir AES-CBC par défaut : c'est l'algorithme le plus répandu et le plus documenté. J'ai refusé cette facilité et conduit une analyse comparative rigoureuse. AES-CBC garantit la confidentialité mais pas l'intégrité des données : il est vulnérable aux attaques par oracle de padding. AES-GCM, en mode AEAD, protège simultanément la confidentialité et l'intégrité, et détecte toute tentative d'altération. Ce choix, argumenté et documenté, a été validé par le CTO. Sans esprit critique, j'aurais déployé une solution techniquement insuffisante pour un contexte de production réelle.",
        ],
      },
      {
        titre: "Benchmark IA Agentique : résistance aux effets de mode (R4)",
        contenu: [
          "Au démarrage de la mission R&D, j'avais une préférence initiale pour LangChain : le framework le plus médiatisé, le plus présent dans les articles et les conférences. J'ai choisi de construire une évaluation impartiale basée sur des critères objectifs : compatibilité FastAPI, capacités RAG, gouvernance, facilité d'intégration. Les données m'ont conduit à une conclusion contre-intuitive : UiPath Agent Builder, solution moins connue dans les cercles open source, obtient 22/25 contre 17/25 pour LangChain. J'ai suivi les données, pas la popularité. C'est la définition même de l'esprit critique appliqué.",
        ],
      },
      {
        titre: "Benchmark QCM One API vs Two API : Gemini 2.5 Pro (R4/R5)",
        contenu: [
          "Face à l'intuition initiale que deux appels API séparés seraient plus stables qu'un seul appel complexe, j'ai conduit un benchmark empirique sur six volumes différents. Les données ont démontré l'inverse : la méthode Two API se dégrade à 50% de validité JSON au-delà de 15 QCM, contre 100% stable pour One API. Sans cette démarche de vérification systématique, une mauvaise hypothèse aurait été déployée en production.",
        ],
      },
    ],
    autocritique: {
      niveau: [
        "Je me situe au niveau confirmé sur cette compétence. Je suis capable d'analyser des alternatives techniques de façon structurée, de documenter mes raisonnements et de défendre mes conclusions face à des interlocuteurs expérimentés comme le CTO d'OpenCyberAI. Mes choix techniques en production — AES-GCM, One API Call, UiPath — sont tous des exemples d'esprit critique appliqué avec des conséquences mesurables.",
      ],
      margeProgression: [
        "Ma principale limite est une tendance à sur-pondérer les informations qui confirment mes hypothèses initiales — ce que les psychologues appellent le biais de confirmation. Je l'ai identifié sur le benchmark LangChain : j'avais une préférence initiale et j'ai dû faire un effort conscient pour construire une évaluation vraiment impartiale. Je travaille à systématiser la recherche d'arguments contraires avant de conclure.",
      ],
      contextualisation: [
        "Mon esprit critique fonctionne bien sur les sujets techniques où je dispose de données mesurables : choix algorithmiques, benchmarks, architecture. Il est plus difficile à exercer sur des sujets où les données sont ambiguës ou subjectives, comme l'évaluation de la qualité pédagogique d'un contenu ou la pertinence d'un choix stratégique commercial. C'est un axe de progression important pour mon futur rôle de consultant.",
      ],
      placeProfil: [
        "L'esprit critique est une compétence centrale dans mon profil : elle conditionne la qualité de tous mes choix techniques. Sans elle, le backend serait moins sécurisé, le module de chiffrement moins robuste, et le benchmark IA moins fiable. C'est la compétence qui transforme un technicien en ingénieur.",
      ],
      vitesseAcquisition: [
        "L'esprit critique se développe chez moi par exposition répétée à des choix techniques engageants. Chaque décision en production — où une erreur a des conséquences réelles — renforce ma rigueur d'analyse. Ma vitesse de progression est constante mais demande de la pratique régulière : c'est une compétence qui s'émousse si on ne la sollicite pas.",
      ],
    },
    evolution: {
      projection: [
        "À moyen terme, je vise un niveau expert sur cette compétence, notamment sur l'analyse de complexité algorithmique et l'évaluation des cas limites. Dans mon projet de cabinet de conseil en Afrique centrale, l'esprit critique sera une compétence différenciante : savoir analyser des architectures existantes pour identifier leurs failles réelles — pas seulement les failles évidentes — est le cœur du métier de consultant en cybersécurité.",
      ],
      formation: [
        "Je bénéficie d'un accompagnement interne par Gatien Goteni, CTO d'OpenCyberAI, centré sur l'analyse algorithmique appliquée à la sécurité. Cette formation informelle mais très concrète m'apprend à systématiquement analyser le meilleur et le pire cas possible pour chaque algorithme ou architecture, à évaluer la complexité temporelle et spatiale, et à identifier les scénarios d'attaque qui exploitent les cas limites non anticipés. Cette approche — toujours penser à ce qui peut mal se passer avant de valider ce qui fonctionne — est fondatrice d'un esprit critique mature en cybersécurité. Le programme MSIT de l'École des Mines complétera cet axe avec une dimension analytique plus large, couvrant l'analyse de risques et la prise de décision en environnement incertain.",
      ],
    },
    realisationsAssociees: "R2 : Chiffrement RGPD · R4 : R&D IA Agentique · R5 : Contrat MEN",
    competencesLiees: "H2 : Autonomie · H4 : Travail sous pression · T5 : Chiffrement & Cryptographie · T3 : Prompt Engineering",
  },

  // ======== H4 : Gestion de la Pression ========
  {
    id: "gestion-pression",
    titre: "Gestion de la Pression",
    sousTitre: "Résilience et performance sous contrainte",
    type: "humaine",
    definition: [
      "La capacité à travailler sous pression est la capacité à bien gérer son temps et ses priorités dans des situations contraintes, à faire avec les imprévus qui sont en dehors de son contrôle, à gérer les urgences et à garder son calme. Il est important de distinguer deux formes de pression : la pression ponctuelle, liée à un incident ou une échéance critique, et la pression chronique, liée à un volume de travail élevé sur la durée. Les deux nécessitent des stratégies différentes.",
      "La résistance au stress est passive : on supporte. La capacité à travailler sous pression est active : on maintient une méthode, on priorise, on produit malgré les contraintes. Dans une start-up comme OpenCyberAI, la pression n'est pas un état exceptionnel : c'est le mode de fonctionnement normal. Des délais serrés, des incidents imprévus, des pivots stratégiques de dernière minute — cette réalité forge une capacité à opérer efficacement dans l'incertitude que peu de contextes professionnels permettent de développer aussi vite.",
    ],
    elementsDePreuve: [
      {
        titre: "Incident critique à J-3 de VivaTech 2025 : pression ponctuelle (R3)",
        contenu: [
          "Trois jours avant l'ouverture du salon, une régression critique est apparue dans le module de scoring. La démonstration live devant Orange Business et Google Learning était directement menacée. Face à cette situation à fort enjeu, j'ai appliqué une méthode structurée : isoler et reproduire le problème, délimiter son périmètre exact, mobiliser rapidement la bonne personne, suivre l'avancement en temps réel, valider la correction avant déploiement. Résultat : correctif livré en moins de 4 heures, démonstration sans incident. La clé n'était pas l'héroïsme : c'était la méthode.",
        ],
      },
      {
        titre: "Triple engagement simultané sur la durée : pression chronique",
        contenu: [
          "Pendant deux ans, j'ai maintenu simultanément mon alternance chez OpenCyberAI à temps plein, mes cours à l'ESIEA, et mon activité de formateur cybersécurité à YNOV et EPSI. Cette triple contrainte chronique m'a forcé à développer une gestion rigoureuse de mon temps et de mes priorités. J'ai appris à distinguer l'urgent de l'important, à bloquer des plages de travail profond pour les tâches complexes, et à accepter que certaines choses moins prioritaires attendent. Cette discipline est aujourd'hui ancrée dans mon mode de fonctionnement quotidien.",
        ],
      },
      {
        titre: "Déploiement du backend sous contrainte VivaTech (R1)",
        contenu: [
          "Dans les semaines précédant VivaTech 2025, j'ai conduit en parallèle la stabilisation du backend, la création de l'environnement de démonstration et la préparation des ateliers QKD. Chacune de ces tâches aurait justifié une attention exclusive. J'ai dû maintenir une qualité de travail suffisante sur les trois fronts simultanément, en priorisant selon l'impact sur la démonstration finale. C'est cette capacité à maintenir la performance sous contrainte multiple qui a permis de tenir le délai.",
        ],
      },
      {
        titre: "Contrat MEN : jalons fixes et travail en parallèle sous pression (R5)",
        contenu: [
          "Sur le pipeline NSI, les jalons de validation imposés par Armand Taheri étaient non négociables : je ne pouvais passer à l'étape suivante qu'après validation écrite du livrable précédent. En parallèle, Sriramsourya travaillait sur les mêmes étapes, ce qui créait une pression de comparaison implicite sur la qualité et la rapidité de mes livrables. J'ai maintenu mon rythme de travail en structurant chaque semaine autour des jalons à venir, en anticipant les points de blocage potentiels et en ne laissant jamais une validation en suspens plus d'un jour. Résultat : tous les jalons ont été respectés, le pipeline est déployé en production et le contrat MEN honoré dans les délais.",
        ],
      },
    ],
    autocritique: {
      niveau: [
        "Je me situe au niveau confirmé sur cette compétence. Je suis capable de gérer des incidents critiques avec méthode et de maintenir une performance stable sous pression chronique sur de longues périodes. Ces capacités sont prouvées en conditions réelles, pas seulement en simulation.",
      ],
      margeProgression: [
        "Sur les projets longs, j'ai tendance à reporter la récupération — à accumuler de la fatigue cognitive sans la compenser par des pauses structurées. Cette stratégie fonctionne à court terme mais finit par affecter la qualité de mes décisions sur les tâches complexes. J'apprends à intégrer des cycles de récupération intentionnels dans mon organisation du travail, plutôt que de récupérer seulement quand je n'ai plus le choix.",
      ],
      contextualisation: [
        "Ma capacité à travailler sous pression fonctionne mieux sur les pressions ponctuelles et définies — un incident, une deadline précise — que sur les pressions diffuses et prolongées sans horizon visible. Dans le second cas, le manque de repères temporels rend la priorisation plus difficile et augmente le risque d'épuisement. C'est un axe de travail personnel important.",
      ],
      placeProfil: [
        "Cette compétence est centrale dans mon profil de Cyber Security Engineer en start-up. La cybersécurité est un domaine où les incidents arrivent sans prévenir et où la capacité à opérer efficacement sous pression peut faire la différence entre un incident contenu et une crise majeure. Elle est aussi indispensable dans mon futur rôle de consultant, où je devrai gérer simultanément plusieurs clients avec des urgences concurrentes.",
      ],
      vitesseAcquisition: [
        "Cette compétence s'est développée rapidement chez moi, par immersion dans un contexte start-up à forte exigence. Les situations de pression répétées ont progressivement transformé des réactions instinctives en réflexes méthodiques. Ma progression a été rapide précisément parce que le contexte ne me laissait pas le choix de procrastiner.",
      ],
    },
    evolution: {
      projection: [
        "À moyen terme, je vise un niveau expert sur cette compétence : non seulement gérer ma propre pression, mais être capable d'aider une équipe à maintenir sa performance collective sous pression. La gestion de crise à J-3 de VivaTech m'a montré que le calme d'un coordinateur est contagieux — comme peut l'être la panique. Dans mon projet de cabinet de conseil en Afrique centrale, je devrai souvent opérer dans des contextes où les ressources sont limitées et les délais compressés : cette compétence sera structurante.",
      ],
      formation: [
        "En l'absence de formation formelle sur ce sujet, je développe cette compétence par trois pratiques personnelles délibérées. La pratique du sport — football américain, badminton, boxe — m'entraîne à maintenir des décisions précises sous pression physique et temporelle. La simulation de vol me forme à gérer des situations d'urgence avec des procédures strictes, sans improvisation. Et la préparation à l'OSCP — un examen de 24 heures en conditions offensives réelles — est conçu précisément pour tester la capacité à opérer efficacement sous une pression intense et prolongée. Ces trois pratiques constituent mon programme d'entraînement personnel sur cette compétence.",
      ],
    },
    realisationsAssociees: "R1 : Backend OpenCyberAI · R3 : VivaTech 2025 · R5 : Contrat MEN",
    competencesLiees: "H1 : Coordination · H2 : Autonomie · H3 : Esprit critique",
  },

  // ======== H5 : Communication Technique ========
  {
    id: "communication-technique",
    titre: "Communication Technique",
    sousTitre: "Expliquer la complexité avec clarté et impact",
    type: "humaine",
    definition: [
      "La communication technique est la capacité à transmettre une information complexe de manière claire, précise et adaptée à son interlocuteur. Ce qui la distingue d'une simple explication, c'est la capacité à faire comprendre non seulement ce qu'est une technologie, mais pourquoi elle est importante et ce qu'elle change concrètement pour l'interlocuteur. Un bon communicant technique ne simplifie pas : il adapte. Il dit la même chose de façons différentes selon qui il a en face de lui, sans jamais trahir la réalité technique sous-jacente.",
      "Dans le domaine de la cybersécurité, la communication technique est une compétence critique et souvent négligée. Un ingénieur incapable d'expliquer les risques d'une architecture à un décideur non-technique ne peut pas obtenir les ressources nécessaires pour les corriger. Un formateur incapable d'adapter son niveau à ses étudiants ne transmet rien. Et un consultant incapable de rendre ses recommandations compréhensibles et actionnables pour son client ne produit aucune valeur. La communication technique est ce qui transforme une expertise technique en impact réel.",
    ],
    elementsDePreuve: [
      {
        titre: "Ateliers QKD à VivaTech 2025 : adaptation en temps réel (R3)",
        contenu: [
          "Le même jour à VivaTech, j'ai expliqué la Quantum Key Distribution à un étudiant de L1 — un système de verrou dont la clé est physiquement impossible à copier sans laisser de traces — et j'ai discuté de stratégie de migration post-quantique avec un RSSI d'une grande entreprise, en citant les délais de transition recommandés par l'ANSSI et l'impact sur les contrats fournisseurs. Ces deux conversations se sont déroulées dans le même créneau de deux heures. Adapter le même concept complexe en temps réel selon les signaux de compréhension de l'interlocuteur : c'est la définition même de la communication technique maîtrisée.",
        ],
      },
      {
        titre: "Formateur cybersécurité à YNOV et EPSI",
        contenu: [
          "J'enseigne la cybersécurité à des étudiants de niveaux différents dans deux établissements. Concevoir un cours qui soit à la fois assez précis pour que les étudiants réussissent les manipulations techniques, et assez clair pour qu'ils comprennent les enjeux de ce qu'ils font, est un exercice quotidien de communication technique. J'ai appris à calibrer le niveau d'abstraction selon le public, à utiliser des analogies ancrées dans leur quotidien, et à détecter les signaux de non-compréhension avant qu'ils ne deviennent des blocages.",
        ],
      },
      {
        titre: "Synthèse exécutive du benchmark IA Agentique (R4)",
        contenu: [
          "Après plusieurs mois de benchmark technique dense, j'ai dû présenter mes conclusions à Armand Taheri, CEO non-technique. J'ai structuré ma présentation en trois niveaux : recommandation claire en une phrase (UiPath Agent Builder + One API Call), raisonnement condensé en cinq minutes (pourquoi ces choix, quels critères, quels scores), et risques identifiés avec plan de mitigation. Ce format m'a permis de transformer un benchmark de plusieurs semaines en une décision actionnable en quinze minutes. Le CEO a validé les recommandations séance tenante.",
        ],
      },
      {
        titre: "Présentation de la plateforme sur le stand VivaTech (R3)",
        contenu: [
          "Sur le stand d'Orange Business, j'ai présenté la plateforme OpenCyberAI à des profils extrêmement variés : des lycéens, des étudiants en informatique, des ingénieurs d'Orange CyberDefense, des représentants de Google Learning, et des décideurs non-techniques. Pour chaque profil, j'adaptais l'accroche, les exemples et le niveau de détail — en identifiant en moins d'une minute ce qui allait résonner pour cette personne spécifique. Cette capacité d'adaptation rapide a contribué directement à l'acquisition de 450 nouveaux utilisateurs en quelques jours.",
        ],
      },
    ],
    autocritique: {
      niveau: [
        "Je me situe au niveau expert sur cette compétence. Je suis capable d'expliquer des concepts de cryptographie quantique à un public non-initié, de convaincre un CEO non-technique sur des choix d'architecture complexes, et de former des étudiants sur des sujets que je maîtrise. Ces capacités sont prouvées dans des contextes réels à fort enjeu.",
      ],
      margeProgression: [
        "Ma principale limite est une tendance à être trop exhaustif dans mes communications écrites. À l'oral, j'adapte naturellement mon niveau selon les retours visuels de l'interlocuteur. À l'écrit, je tends à documenter selon ma propre logique plutôt que selon les besoins du lecteur — ce qui produit des documents complets mais parfois trop longs pour le public visé. Apprendre à hiérarchiser l'information selon l'importance pour le lecteur est mon axe de progression principal.",
      ],
      contextualisation: [
        "Ma communication technique fonctionne très bien à l'oral dans des contextes dynamiques : présentations, ateliers, formations. Elle est plus difficile à calibrer dans les communications écrites formelles destinées à des audiences très larges et hétérogènes, comme des rapports institutionnels ou des documentations publiques. C'est un contexte que je rencontrerai davantage dans mon rôle de consultant.",
      ],
      placeProfil: [
        "La communication technique est la compétence qui me différencie le plus dans mon profil. Beaucoup d'ingénieurs en cybersécurité maîtrisent les aspects techniques ; moins nombreux sont ceux capables d'expliquer la QKD à un lycéen et de discuter de stratégie post-quantique avec un RSSI dans le même créneau. C'est cette polyvalence communicationnelle qui fait la valeur d'un consultant par rapport à un technicien.",
      ],
      vitesseAcquisition: [
        "Cette compétence s'est développée très vite chez moi, par exposition à des publics très variés dès le début de mon alternance. Enseigner à YNOV et EPSI en parallèle de mon travail chez OpenCyberAI m'a forcé à développer rapidement une double posture : technicien et pédagogue — que peu de contextes permettent d'acquérir aussi tôt dans une carrière.",
      ],
    },
    evolution: {
      projection: [
        "À moyen terme, je vise un niveau expert en contexte international et anglophone, notamment en anglais. La majorité de mes preuves actuelles sont en français. Dans mon projet de cabinet de conseil en Afrique centrale, je devrai communiquer techniquement avec des interlocuteurs francophones et anglophones, des décideurs locaux et des partenaires internationaux, dans des contextes culturels très différents du contexte français. Développer ma communication technique en anglais est un axe prioritaire.",
      ],
      formation: [
        "Je développe cette compétence par trois pratiques délibérées. Continuer à enseigner à YNOV et EPSI : chaque session est une opportunité de tester de nouvelles façons d'expliquer des concepts complexes et de mesurer leur efficacité sur les étudiants. Participer à des événements technologiques : VivaTech, conférences cybersécurité — pour m'exposer à des publics toujours plus variés. Et rédiger ce portfolio, qui est lui-même un exercice de communication technique écrite : expliquer mes réalisations de façon structurée, précise et accessible à un jury académique non-technique sur certains aspects.",
      ],
    },
    realisationsAssociees: "R3 : VivaTech 2025 · R4 : R&D IA Agentique · R5 : Contrat MEN",
    competencesLiees: "H1 : Coordination · H3 : Esprit critique · T3 : Prompt Engineering · T5 : Chiffrement & Cryptographie",
  },
];
