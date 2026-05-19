export interface RealisationData {
  id: string;
  titre: string;
  sousTitre: string;
  introduction: string[];
  definition: string[];
  objectifs: { titre: string; items: string[] }[];
  contexteHumain: { nom: string; role: string; description: string }[];
  contexteTechnique: string[];
  enjeux: { titre: string; items: string[] }[];
  etapes: { titre: string; contenu: string[] }[];
  resultats: { titre: string; items: string[] }[];
  lendemains: string[];
  ceQueJeRetiens: string[];
  competencesMobilisees: string;
}

export const realisations: RealisationData[] = [
  // ======== R1 : Backend OpenCyberAI ========
  {
    id: "backend-opencyberai",
    titre: "Développement du backend sécurisé de la plateforme OpenCyberAI",
    sousTitre: "Python · FastAPI · DevSecOps · 12 000+ utilisateurs · < 100 ms",
    introduction: [
      "Cette réalisation a été effectuée dans le cadre de mon alternance au sein de la start-up OpenCyberAI, depuis mars 2023 jusqu'à aujourd'hui. OpenCyberAI est une entreprise deeptech basée à Paris qui développe une plateforme web gamifiée destinée à l'apprentissage de la cybersécurité. La plateforme propose des parcours interactifs, des quiz, des défis techniques et des simulations de cyberattaques dans un environnement sécurisé, à destination aussi bien des débutants que des professionnels souhaitant renforcer leurs compétences.",
      "Lorsque j'ai intégré l'entreprise, la plateforme existait sous forme de prototype fonctionnel mais fragile, sans architecture backend structurée, sans automatisation des déploiements et sans mécanismes de sécurité applicative robustes. Ma mission principale a consisté à concevoir et développer le cœur technique du backend, en Python avec le framework FastAPI, depuis la définition de l'architecture jusqu'au déploiement automatisé en production via Ansible.",
      "Ce projet est le plus représentatif de mon activité en alternance. Il mobilise l'ensemble de mes compétences techniques : développement Python, sécurisation des API, automatisation des déploiements — et mes compétences humaines : autonomie, coordination, communication technique. Il est directement lié à quatre autres réalisations de ce portfolio : le module de chiffrement RGPD (R2), la préparation de VivaTech 2025 (R3), la R&D IA Agentique (R4) et le contrat avec le Ministère de l'Éducation Nationale (R5).",
    ],
    definition: [
      "Le backend sécurisé d'OpenCyberAI est une API REST développée en Python 3.10 avec FastAPI, qui constitue le cœur technique de la plateforme. Il gère l'ensemble du cycle de vie utilisateur (authentification, autorisation, parcours, scoring), communique avec les modules IA et statistiques, et expose des endpoints sécurisés pour l'application frontend. L'architecture suit une approche DevSecOps, intégrant la sécurité à chaque étape du développement.",
    ],
    objectifs: [
      {
        titre: "Objectifs techniques",
        items: [
          "Construire une API REST sécurisée, performante et maintenable, capable de supporter la croissance de la plateforme.",
          "Implémenter un système d'authentification robuste (JWT, RBAC) et des contrôles d'accès granulaires.",
          "Assurer la communication fiable entre le backend et les modules IA, scoring et statistiques.",
          "Automatiser les déploiements pour réduire les risques d'erreur humaine et accélérer les mises en production.",
          "Mettre en place une approche DevSecOps : scans de vulnérabilités, journalisation structurée, filtres d'entrée.",
        ],
      },
      {
        titre: "Objectifs organisationnels",
        items: [
          "Structurer les pratiques de développement au sein de l'équipe technique.",
          "Établir des conventions partagées (format JSON unifié, structure des endpoints, gestion des erreurs).",
          "Faciliter la collaboration entre les équipes backend, IA et produit.",
        ],
      },
    ],
    contexteHumain: [
      { nom: "Gatien Goteni", role: "CTO", description: "A assuré la revue de code et l'alignement avec la vision technique globale. Chaque semaine, je lui présentais l'avancement des fonctionnalités développées et nous ajustions ensemble les choix d'architecture. C'est lui qui m'a formé directement sur les pratiques DevSecOps." },
      { nom: "Armand Taheri", role: "CEO / RGPD", description: "A validé les choix architecturaux liés à la protection des données utilisateurs. Nous avons échangé régulièrement pour nous assurer que les fonctionnalités respectaient les exigences légales, notamment sur la gestion des données personnelles et le droit à l'oubli." },
      { nom: "Équipe IA", role: "2 ingénieurs", description: "M'a fourni les spécifications des flux de données nécessaires aux modules de recommandation et de génération de contenu. C'est en collaborant avec eux que j'ai identifié le problème d'incompatibilité des formats JSON entre modules." },
    ],
    contexteTechnique: [
      "Langage et framework : Python 3.10 avec FastAPI (ASGI, Pydantic, Swagger UI).",
      "Base de données : MariaDB avec SQLAlchemy comme ORM.",
      "Authentification : JWT avec tokens d'accès à durée limitée et refresh tokens.",
      "Déploiement : Ansible pour l'automatisation sur trois environnements (test, pré-prod, production). GitLab CI/CD pour l'intégration continue et les scans de vulnérabilités.",
      "Infrastructure : serveurs Linux Ubuntu Server, Docker, reverse proxy Nginx.",
      "Contrainte majeure : l'interopérabilité entre les modules — chaque équipe avait développé ses services avec ses propres conventions JSON incompatibles.",
    ],
    enjeux: [
      {
        titre: "Enjeux",
        items: [
          "Enjeu stratégique : la qualité du backend conditionne la crédibilité d'OpenCyberAI auprès de ses partenaires et investisseurs. VivaTech 2025 représentait une vitrine stratégique majeure.",
          "Enjeu réglementaire : la plateforme collecte des données personnelles. Un défaut d'architecture exposait l'entreprise à des sanctions RGPD pouvant atteindre 4% du chiffre d'affaires annuel.",
          "Enjeu de scalabilité : l'architecture devait absorber une montée en charge rapide lors des événements promotionnels.",
        ],
      },
      {
        titre: "Risques",
        items: [
          "Risque d'interopérabilité : les conventions JSON incompatibles créaient des bugs systémiques difficiles à tracer.",
          "Risque de performance : sans tests de charge préalables, le comportement sous forte simultanéité était imprévisible.",
          "Risque de sécurité : une API REST exposée sans contrôle d'accès robuste représente une surface d'attaque importante.",
          "Risque de délai : la date de VivaTech 2025 constituait une échéance ferme et non négociable.",
        ],
      },
    ],
    etapes: [
      {
        titre: "Analyse des besoins et conception de l'architecture",
        contenu: [
          "J'ai proposé une architecture en trois couches : routes (exposition des endpoints), services (logique métier) et repositories (accès aux données). Cette séparation facilite les tests unitaires, la maintenance et l'évolution indépendante de chaque couche.",
          "J'ai rédigé un document d'architecture technique définissant les conventions de nommage, les codes HTTP attendus, la structure des objets JSON et les règles de gestion des erreurs.",
        ],
      },
      {
        titre: "Développement des endpoints critiques",
        contenu: [
          "J'ai implémenté un système JWT complet avec tokens d'accès (1 heure) et refresh tokens (7 jours), stockés de façon sécurisée côté serveur.",
          "Le contrôle des accès par rôle (RBAC) a été développé sur l'ensemble des endpoints sensibles via des middlewares de vérification des droits.",
          "Le moteur de scoring dynamique calcule les points en temps réel selon le type de question, le niveau de difficulté, le temps de réponse et la progression globale de l'utilisateur.",
        ],
      },
      {
        titre: "Résolution du problème d'interopérabilité JSON",
        contenu: [
          "J'ai analysé les trois formats JSON en présence (camelCase, snake_case, structures imbriquées différentes), identifié les besoins communs et les spécificités de chaque module, puis proposé un format JSON unifié adopté comme standard.",
          "J'ai documenté ce format dans un fichier de spécification partagé dans le repository GitLab et organisé une session de présentation avec toute l'équipe. Ce travail a pratiquement éliminé cette catégorie de bugs d'intégration.",
        ],
      },
      {
        titre: "Intégration de la sécurité et approche DevSecOps",
        contenu: [
          "Filtres d'entrée stricts via Pydantic : tout format invalide retourne une erreur 422 sans jamais exposer les détails de l'implémentation interne.",
          "Scan de vulnérabilités Safety en CI/CD : analyse automatique des dépendances à chaque push, blocage du déploiement si une dépendance vulnérable est détectée.",
          "Journalisation structurée JSON de tous les événements critiques pour une future intégration SIEM.",
        ],
      },
      {
        titre: "Automatisation des déploiements avec Ansible",
        contenu: [
          "J'ai écrit des playbooks Ansible couvrant l'intégralité du processus : installation des dépendances, configuration des variables d'environnement, migrations MariaDB via Alembic, redémarrage des services avec vérification de santé, rotation des tokens et certificats.",
          "Temps de déploiement réduit de 45 minutes à moins de 8 minutes. Ces playbooks se sont révélés décisifs à J-3 de VivaTech 2025.",
        ],
      },
      {
        titre: "Tests de charge et optimisation",
        contenu: [
          "J'ai conduit des tests de charge révélant deux points de contention : les requêtes de scoring simultanées et les appels au module IA lors des pics d'activité.",
          "Mise en cache des résultats fréquemment demandés et file d'attente asynchrone avec gestion de priorité. Temps de réponse moyen inférieur à 100 ms sous charge normale.",
        ],
      },
    ],
    resultats: [
      {
        titre: "Résultats pour moi",
        items: [
          "Maîtrise opérationnelle complète du cycle de vie d'un backend en production.",
          "Expérience concrète sur la gestion d'incidents en conditions réelles, la négociation de standards techniques en équipe pluridisciplinaire, et l'équilibre entre vitesse de développement et rigueur sécuritaire.",
          "Renforcement de ma capacité à communiquer techniquement avec des profils très différents.",
        ],
      },
      {
        titre: "Résultats pour l'entreprise",
        items: [
          "Plateforme stable en production : plus de 12 000 utilisateurs actifs, temps de réponse moyen inférieur à 100 ms, zéro incident majeur depuis le déploiement stabilisé.",
          "Réduction du temps de déploiement de plus de 80% (45 min → 8 min) grâce aux playbooks Ansible.",
          "VivaTech 2025 réussie : démonstration live sans incident devant Orange Business et Google Learning, contribution à l'acquisition de 450 nouveaux utilisateurs.",
          "Base technique solide permettant de construire le module RGPD, le pipeline NSI et les modules IA Agentique sans refonte majeure.",
        ],
      },
    ],
    lendemains: [
      "J'ai entamé la mise en place d'une suite de tests automatisés sur les endpoints critiques pour pouvoir refactoriser le code avec confiance.",
      "J'ai formulé une proposition de migration vers une architecture Kubernetes : microservices indépendants avec Helm Charts, ArgoCD pour le GitOps avec self-healing automatique. Cette proposition est en cours d'évaluation par Armand Taheri et Gatien Goteni.",
      "Les compétences développées constituent le socle de mon projet de cabinet de conseil en cybersécurité en Afrique centrale.",
    ],
    ceQueJeRetiens: [
      "On ne sécurise bien que ce qu'on a d'abord su construire soi-même. Avoir conçu le backend de bout en bout me donne une vision précise de ses points forts et de ses vulnérabilités potentielles.",
      "J'aurais dû mettre en place les tests automatisés dès le début du projet. L'absence d'une suite de tests complète a ralenti certaines phases de refactoring et rendu les déploiements plus risqués qu'ils ne devraient l'être.",
      "L'adoption du format JSON unifié n'était pas seulement un choix technique, c'était une décision d'équipe. Sans la capacité à expliquer clairement le problème et à convaincre mes collègues, ce bug systémique aurait continué à nous coûter du temps. La communication technique est une compétence de développeur, pas seulement une compétence de manager.",
    ],
    competencesMobilisees: "Python / FastAPI (T1), Sécurité des Systèmes et Infrastructure (T2), Infrastructure as Code / Ansible (T4), Autonomie (H2), Coordination (H1), Communication technique (H5).",
  },

  // ======== R2 : Chiffrement RGPD ========
  {
    id: "chiffrement-rgpd",
    titre: "Module de chiffrement RGPD AES-GCM",
    sousTitre: "Cryptographie appliquée · Conformité réglementaire · < 120 ms/transaction",
    introduction: [
      "Cette réalisation a été effectuée dans le cadre de mon alternance chez OpenCyberAI, sur une période de plus de trois mois. Elle porte sur la conception, le développement et le déploiement d'un module de chiffrement temporaire des données sensibles des utilisateurs de la plateforme, conforme aux exigences du Règlement Général sur la Protection des Données (RGPD).",
      "Ce projet est né d'un besoin précis identifié lors du développement du backend (R1) : la plateforme OpenCyberAI doit extraire temporairement des données utilisateurs pour les traiter par différents modules — moteur IA, scoring, statistiques — sans jamais exposer ces données en clair. Il fallait concevoir un mécanisme garantissant simultanément la confidentialité, l'intégrité, la traçabilité et la suppression automatique de ces données après usage.",
      "J'ai développé ce module principalement en autonomie, avec le support de l'équipe sur certaines parties spécifiques, notamment la validation des choix cryptographiques par le CTO et la vérification de la conformité RGPD par le CEO. Le module a été mis en production et a fonctionné sur la plateforme pendant plusieurs mois avant d'être remplacé par une solution plus intégrée dans l'architecture globale.",
    ],
    definition: [
      "Le module de chiffrement RGPD est un composant logiciel Python indépendant, conçu pour sécuriser les données sensibles des utilisateurs d'OpenCyberAI lors de leur extraction temporaire à des fins de traitement analytique ou d'IA. Il s'agit d'un module de chiffrement symétrique authentifié basé sur l'algorithme AES-GCM (Advanced Encryption Standard — Galois/Counter Mode), intégré au backend FastAPI de la plateforme et automatisé via des playbooks Ansible.",
      "Périmètre fonctionnel : chiffrement et déchiffrement des données sensibles à la volée, gestion du cycle de vie des clés temporaires, verrouillage exclusif des fichiers pendant les opérations, journalisation de toutes les opérations sensibles, et suppression automatique planifiée des fichiers chiffrés après leur durée de vie maximale.",
      "Périmètre technique : Python 3.10, bibliothèque cryptography (PyCA), algorithme AES-256-GCM, intégration dans le backend FastAPI, automatisation Ansible, déployé sur infrastructure Linux Ubuntu Server. Durée de développement : plus de trois mois.",
    ],
    objectifs: [
      {
        titre: "Objectifs techniques",
        items: [
          "Confidentialité : les données utilisateurs extraites ne doivent jamais être accessibles en clair, ni pendant le transit, ni pendant leur stockage temporaire.",
          "Intégrité : toute tentative de modification ou d'altération des données chiffrées doit être détectable — nécessitant un mode AEAD (Authenticated Encryption with Associated Data).",
          "Traçabilité : chaque opération sur les données sensibles doit être journalisée de façon exhaustive pour répondre aux obligations de traçabilité du RGPD.",
          "Suppression automatique : les fichiers chiffrés doivent être supprimés automatiquement après leur durée de vie maximale, sans intervention humaine.",
        ],
      },
      {
        titre: "Objectifs de conformité RGPD",
        items: [
          "Mettre OpenCyberAI en conformité avec les articles 25 (protection des données dès la conception), 32 (sécurité du traitement) et 17 (droit à l'effacement) du RGPD.",
          "Condition préalable à tout déploiement institutionnel de la plateforme, notamment dans les établissements scolaires.",
        ],
      },
    ],
    contexteHumain: [
      { nom: "Gatien Goteni", role: "CTO", description: "A joué un rôle de référent technique sur les choix cryptographiques. Notre collaboration prenait la forme de revues de code hebdomadaires où je présentais les choix d'implémentation et les alternatives écartées. C'est lors d'une de ces revues qu'il a validé le choix d'AES-GCM par rapport à AES-CBC." },
      { nom: "Armand Taheri", role: "CEO / RGPD", description: "A été impliqué à deux moments clés : en début de développement pour les exigences RGPD précises et les points de contrôle CNIL, et en fin de projet pour une session de validation d'une demi-journée point par point. Sa validation formelle était la condition de la mise en production." },
      { nom: "Équipe IA", role: "2 ingénieurs", description: "Consultée en début de projet lors de deux sessions de travail collaboratif pour cartographier précisément les flux de données sensibles : quelles données sont extraites, par quel module, avec quelle fréquence, dans quel format et pour quelle durée." },
    ],
    contexteTechnique: [
      "Langage : Python 3.10, compatible avec le backend FastAPI existant.",
      "Bibliothèque cryptographique : cryptography (PyCA), bibliothèque Python de référence.",
      "Algorithme : AES-GCM (Advanced Encryption Standard — Galois/Counter Mode), un algorithme symétrique authentifié qui garantit simultanément confidentialité et intégrité.",
      "Automatisation : Ansible pour la planification des tâches de purge automatique.",
      "Intégration : interface programmatique Python importable directement dans le backend FastAPI, sans dépendance à un service externe.",
    ],
    enjeux: [
      {
        titre: "Enjeux",
        items: [
          "Enjeu juridique : une non-conformité RGPD expose l'entreprise à des sanctions pouvant atteindre 4% du chiffre d'affaires annuel mondial.",
          "Enjeu stratégique : la conformité RGPD documentée était une condition contractuelle pour le déploiement dans les lycées dans le cadre du contrat MEN.",
          "Enjeu de performance : le module devait être suffisamment performant pour ne pas dégrader l'expérience utilisateur.",
        ],
      },
      {
        titre: "Risques",
        items: [
          "Risque cryptographique : un mauvais choix d'algorithme ou une implémentation incorrecte de la gestion des nonces pouvait rendre le chiffrement inefficace.",
          "Risque de concurrence : sans mécanisme de verrouillage, plusieurs processus pouvaient accéder simultanément à un fichier chiffré.",
          "Risque de perte de données : si les clés temporaires étaient perdues avant le déchiffrement, les données devenaient irrécupérables.",
          "Risque de non-conformité résiduelle : journalisation incomplète ou délais de suppression non respectés.",
        ],
      },
    ],
    etapes: [
      {
        titre: "Analyse des besoins et choix algorithmique (3 semaines)",
        contenu: [
          "J'ai cartographié l'ensemble des flux de données sensibles dans l'architecture avec l'équipe IA et le CTO.",
          "Évaluation de deux algorithmes candidats : AES-CBC (confidentialité sans intégrité, vulnérable aux attaques par oracle de padding) et AES-GCM (mode AEAD avec tag d'authentification détectant toute altération). Le CTO a validé le choix d'AES-GCM lors de notre revue hebdomadaire.",
        ],
      },
      {
        titre: "Développement du module de chiffrement (6 semaines)",
        contenu: [
          "Générateur de clés temporaires : clé AES-256 aléatoire via os.urandom(32), stockée en mémoire uniquement pendant la durée de l'opération.",
          "Gestionnaire de nonces : générateur de nonces de 96 bits via os.urandom(12), avec vérification d'unicité.",
          "Mécanisme de verrouillage : fichier .lock avec bloc try/finally garantissant la libération du verrou même en cas d'erreur.",
          "Journalisation sécurisée : logs structurés JSON avec horodatage, identifiant de l'opération, identifiant du processus et résultat.",
        ],
      },
      {
        titre: "Intégration dans le backend FastAPI",
        contenu: [
          "Le module expose une interface programmatique Python importable dans les services FastAPI.",
          "Gestion explicite des erreurs cryptographiques : si le tag d'authentification est invalide, le système retourne une erreur 500 côté client et journalise l'incident complet côté serveur.",
        ],
      },
      {
        titre: "Automatisation de la purge avec Ansible",
        contenu: [
          "Playbook Ansible exécuté via crontab : parcours du répertoire de stockage, identification des fichiers dépassant la durée de vie maximale, suppression avec enregistrement dans le journal de traçabilité.",
        ],
      },
      {
        titre: "Tests, validation et mise en production",
        contenu: [
          "Tests fonctionnels : chiffrement et déchiffrement dans tous les cas normaux et d'erreur.",
          "Tests sécuritaires : altération volontaire confirmant la détection par le tag AES-GCM, scénarios d'accès concurrents validant le verrouillage.",
          "Tests de performance : temps de traitement inférieur à 120 ms par transaction confirmé.",
          "Session de validation avec Armand Taheri puis déploiement en production via Ansible.",
        ],
      },
    ],
    resultats: [
      {
        titre: "Résultats pour moi",
        items: [
          "Maîtrise opérationnelle de la cryptographie appliquée, bien au-delà des connaissances théoriques.",
          "Capacité à raisonner sur les vecteurs d'attaque spécifiques à chaque mode de chiffrement et à faire des choix algorithmiques argumentés.",
          "Capacité à travailler en autonomie sur un projet à fort enjeu réglementaire, en sachant solliciter les bonnes personnes au bon moment.",
        ],
      },
      {
        titre: "Résultats pour l'entreprise",
        items: [
          "Conformité RGPD documentée : démonstration de conformité aux articles 25 et 32 du RGPD, condition nécessaire à la signature du contrat MEN.",
          "Réduction du volume de données persistées de plus de 70% grâce à la suppression automatique.",
          "Performances validées : temps de traitement inférieur à 120 ms par transaction, sans impact mesurable sur l'expérience utilisateur.",
          "Traçabilité complète permettant de répondre à toute demande de contrôle de la CNIL.",
        ],
      },
    ],
    lendemains: [
      "Le module a rempli sa mission pendant plusieurs mois avant d'être remplacé par une solution plus intégrée. Les apprentissages ont directement influencé la nouvelle approche : le choix d'AES-GCM a été conservé, les mécanismes de verrouillage ont été généralisés, et la journalisation structurée a été étendue à l'ensemble des opérations sensibles.",
      "Les compétences en cryptographie appliquée ont été directement mobilisées lors de la préparation des ateliers QKD à VivaTech 2025 (R3) et constituent aujourd'hui un axe majeur de ma préparation à la certification OSCP.",
    ],
    ceQueJeRetiens: [
      "La cryptographie n'est pas seulement une discipline mathématique : c'est une discipline de conception. Choisir le bon algorithme est nécessaire, mais insuffisant — c'est l'ensemble du schéma (gestion des clés, des nonces, des accès concurrents, des erreurs et de la journalisation) qui détermine le niveau de sécurité réel.",
      "J'aurais dû anticiper plus tôt la question de l'évolutivité du module. En le concevant comme un composant autonome, j'ai facilité son intégration initiale mais compliqué sa généralisation ultérieure.",
      "Travailler sur un sujet à fort enjeu réglementaire exige une posture différente du développement classique : chaque décision doit être documentée, justifiée et validée. Ce n'est pas une contrainte : c'est une discipline qui améliore la qualité globale du travail.",
    ],
    competencesMobilisees: "Chiffrement et Cryptographie (T5), Python / FastAPI (T1), Infrastructure as Code / Ansible (T4), Autonomie (H2), Esprit critique (H3).",
  },

  // ======== R3 : VivaTech 2025 ========
  {
    id: "vivatech-2025",
    titre: "Préparation et animation du salon VivaTech 2025",
    sousTitre: "Coordination · QKD · Animation · 450 utilisateurs acquis",
    introduction: [
      "Cette réalisation a été effectuée dans le cadre de mon alternance chez OpenCyberAI, du premier trimestre 2025 au mois de mai 2025, date du salon VivaTech. VivaTech est le plus grand salon européen dédié à l'innovation technologique et aux start-up, qui se tient chaque année à Paris Expo Porte de Versailles. Pour OpenCyberAI, participer à VivaTech représente une opportunité stratégique majeure : présenter la plateforme devant des investisseurs, des partenaires industriels, des établissements d'enseignement et des profils techniques de haut niveau.",
      "J'ai été impliqué dans cette réalisation à trois niveaux complémentaires. D'abord, j'ai coordonné la préparation technique de la plateforme en amont du salon — planification des jalons, suivi des fonctionnalités critiques, tests de charge et préparation de l'environnement de démonstration. Ensuite, j'ai participé activement aux ateliers de présentation sur le stand d'Orange Business et Orange CyberDefense, en animant des démonstrations de cryptographie quantique (Quantum Key Distribution) en collaboration avec Orange Quantum Defender. Enfin, j'ai contribué au débriefing post-salon en répertoriant les nouveaux utilisateurs acquis et les partenariats engagés.",
      "Cette réalisation est directement liée au développement du backend (R1) sur lequel reposait la démonstration, au module de chiffrement RGPD (R2) dont les ateliers QKD constituaient la démonstration concrète, et à la R&D IA Agentique (R4) dont certains résultats ont été présentés lors du salon.",
    ],
    definition: [
      "La préparation de VivaTech 2025 couvre l'ensemble des activités nécessaires pour qu'OpenCyberAI puisse présenter sa plateforme de façon professionnelle et efficace lors du salon : coordination technique de la préparation, animation des démonstrations sur le stand, et suivi des résultats post-salon. Elle inclut la planification des jalons de développement, la stabilisation du backend, la création d'un environnement de démonstration isolé, la préparation des ateliers de cryptographie quantique en collaboration avec Orange, l'animation sur le stand, et le débriefing stratégique.",
      "Périmètre humain : coordination avec le CEO, le CTO, l'équipe IA et les partenaires Orange. Périmètre technique : provisioning Terraform de l'environnement de démo, tests de charge du backend, préparation des scénarios de démonstration. Durée : environ trois mois de préparation plus les cinq jours du salon.",
    ],
    objectifs: [
      {
        titre: "Objectifs techniques",
        items: [
          "Disposer d'un environnement de démonstration stable, isolé de la production, identique à ce qui avait été testé et validé.",
          "Assurer que le backend supporterait la charge générée par les démonstrations simultanées sans dégradation de performance.",
          "Préparer des scénarios de démonstration variés adaptés aux différents profils de visiteurs.",
        ],
      },
      {
        titre: "Objectifs stratégiques",
        items: [
          "Présenter la plateforme d'OpenCyberAI de manière professionnelle devant des partenaires clés (Orange Business, Google Learning).",
          "Acquérir de nouveaux utilisateurs et engager des partenariats stratégiques.",
          "Renforcer la crédibilité d'OpenCyberAI auprès des investisseurs et des institutions éducatives.",
          "Présenter les ateliers de cryptographie quantique en collaboration avec Orange Quantum Defender.",
        ],
      },
    ],
    contexteHumain: [
      { nom: "Armand Taheri", role: "CEO", description: "Supervisait l'orientation stratégique de la participation à VivaTech, validait les choix de présentation et assurait les rendez-vous avec les partenaires prioritaires. C'est lui qui m'a confié la responsabilité de la coordination technique de la préparation." },
      { nom: "Gatien Goteni", role: "CTO", description: "Assurait l'alignement technique, validait les choix d'architecture pour l'environnement de démo et supervisait les tests de charge. Nous avions des points de suivi hebdomadaires pendant les deux mois précédant le salon." },
      { nom: "Équipe IA", role: "2 ingénieurs", description: "A travaillé en parallèle sur la stabilisation des modules IA et scoring qui alimentaient la démonstration. Notre collaboration a été particulièrement critique lors de l'incident à J-3." },
      { nom: "Partenaires Orange", role: "Orange Quantum Defender", description: "Collaboration sur les ateliers de cryptographie quantique. Ils fournissaient l'expertise et les équipements de démonstration QKD, je contribuais à l'animation pédagogique et à l'articulation avec la plateforme OpenCyberAI." },
    ],
    contexteTechnique: [
      "Backend : API REST Python/FastAPI (R1), stabilisé et optimisé pour la charge du salon.",
      "Environnement de démo : provisionné via Terraform, isolé de la production, identique à la configuration validée.",
      "Infrastructure : serveurs Linux Ubuntu, Docker, Nginx, MariaDB. Playbooks Ansible pour le déploiement rapide.",
      "Ateliers QKD : collaboration avec Orange Quantum Defender pour les démonstrations de cryptographie quantique.",
      "Contrainte majeure : la date du salon était immuable — aucun délai n'était possible.",
    ],
    enjeux: [
      {
        titre: "Enjeux",
        items: [
          "Enjeu de crédibilité : VivaTech est la vitrine technologique européenne. Une démonstration ratée aurait un impact négatif durable sur la réputation d'OpenCyberAI.",
          "Enjeu commercial : les partenariats engagés à VivaTech — notamment avec Orange et Google Learning — conditionnent la croissance de l'entreprise sur les 12 prochains mois.",
          "Enjeu technique : le backend devait fonctionner parfaitement sous la charge de dizaines de démonstrations simultanées pendant cinq jours.",
        ],
      },
      {
        titre: "Risques",
        items: [
          "Risque technique : régression dans le module de scoring à J-3 (risque réalisé et géré avec succès).",
          "Risque de performance : charge imprévisible liée au nombre de visiteurs sur le stand.",
          "Risque d'image : une démonstration qui plante devant un partenaire stratégique crée une impression négative difficile à effacer.",
          "Risque de coordination : avec plusieurs équipes impliquées (technique, commerciale, partenaires Orange), les dysfonctionnements de communication pouvaient compromettre la préparation.",
        ],
      },
    ],
    etapes: [
      {
        titre: "Planification des jalons de préparation (mois -3 à -2)",
        contenu: [
          "Définition des jalons critiques en collaboration avec le CEO et le CTO : stabilisation du backend, création de l'environnement de démo, préparation des scénarios de démonstration, tests de charge, répétitions.",
          "Réunions hebdomadaires de suivi avec l'ensemble des parties prenantes pour identifier les points de blocage et ajuster les priorités.",
        ],
      },
      {
        titre: "Stabilisation technique et création de l'environnement de démo (mois -2 à -1)",
        contenu: [
          "Correction des bugs prioritaires identifiés lors des tests fonctionnels. Focus particulier sur le module de scoring et les flux de données entre le backend et les modules IA.",
          "Provisioning via Terraform d'un environnement de démonstration isolé, identique à la production. Les playbooks Ansible ont permis un déploiement rapide et reproductible.",
        ],
      },
      {
        titre: "Tests de charge et préparation des scénarios (mois -1)",
        contenu: [
          "Tests de charge simulant la charge attendue pendant le salon. Deux points de contention identifiés : requêtes de scoring simultanées et appels au module IA lors des pics.",
          "Mise en cache des résultats fréquemment demandés et file d'attente asynchrone avec gestion de priorité.",
          "Préparation des scénarios de démonstration adaptés à chaque profil de visiteur : débutants, profils techniques, décideurs, partenaires potentiels.",
        ],
      },
      {
        titre: "Gestion de l'incident à J-3",
        contenu: [
          "Trois jours avant le salon, une régression critique est apparue dans le module de scoring. La démonstration live devant Orange Business et Google Learning était directement menacée.",
          "Méthode structurée appliquée : isoler et reproduire le problème, délimiter le périmètre exact, mobiliser rapidement le bon développeur, suivre l'avancement en temps réel, valider la correction avant déploiement. Résultat : correctif livré en moins de 4 heures, démonstration sans incident.",
        ],
      },
      {
        titre: "Animation sur le stand et ateliers QKD (5 jours de salon)",
        contenu: [
          "Animation des démonstrations de la plateforme sur le stand d'Orange Business et Orange CyberDefense. Adaptation en temps réel du niveau technique selon le profil du visiteur.",
          "Animation des ateliers de cryptographie quantique en collaboration avec Orange Quantum Defender. Présentation de la QKD à des profils variés : étudiants, ingénieurs RSSI, décideurs non-techniques.",
        ],
      },
      {
        titre: "Débriefing post-salon",
        contenu: [
          "Répertoriement des nouveaux utilisateurs acquis : 450 inscriptions directement attribuables au salon.",
          "Identification des partenariats engagés : discussions stratégiques avec Google Learning et Orange CyberDefense, ouvertures commerciales concrètes.",
          "Retour d'expérience structuré pour capitaliser sur les apprentissages pour l'édition suivante.",
        ],
      },
    ],
    resultats: [
      {
        titre: "Résultats pour moi",
        items: [
          "Développement significatif de ma capacité à coordonner des équipes pluridisciplinaires sous forte contrainte temporelle.",
          "Maîtrise de la gestion de crise technique : l'incident à J-3 m'a appris à structurer ma réponse sous pression.",
          "Renforcement de ma communication technique : adapter mon discours à des profils très variés en temps réel.",
          "Première expérience significative de présentation publique d'un produit technologique devant des partenaires stratégiques.",
        ],
      },
      {
        titre: "Résultats pour l'entreprise",
        items: [
          "450 nouveaux utilisateurs acquis directement lors du salon.",
          "Partenariats stratégiques engagés avec Google Learning et Orange CyberDefense.",
          "Démonstration live réussie sans incident technique devant les partenaires prioritaires.",
          "Renforcement significatif de la crédibilité et de la visibilité d'OpenCyberAI sur la scène européenne.",
        ],
      },
    ],
    lendemains: [
      "Les partenariats initiés à VivaTech 2025 sont en cours de formalisation. Les discussions avec Google Learning pourraient déboucher sur une intégration de la plateforme OpenCyberAI dans leur catalogue de formations. Le partenariat avec Orange CyberDefense ouvre des perspectives de collaboration sur la cryptographie post-quantique.",
      "Sur le plan technique, les playbooks Ansible développés pour l'environnement de démo ont été réutilisés pour automatiser les déploiements de démonstration lors d'autres événements. L'expérience de gestion de crise à J-3 a conduit à l'instauration d'une procédure formelle de gestion d'incident avant les événements stratégiques.",
      "Les compétences développées — coordination, communication technique, gestion de crise — sont directement transférables à mon projet de cabinet de conseil en Afrique centrale, où je devrai présenter des solutions techniques à des interlocuteurs variés dans des contextes à fort enjeu.",
    ],
    ceQueJeRetiens: [
      "La coordination n'est pas une qualité optionnelle dans une start-up : c'est une condition de survie. Sans une planification rigoureuse et une réactivité face aux imprévus, VivaTech aurait pu devenir un échec coûteux au lieu d'un succès stratégique.",
      "L'incident à J-3 m'a montré que la gestion de crise est une compétence qui se prépare avant la crise. Avoir des procédures, des contacts et une méthode structurée m'a permis de réagir en 4 heures au lieu de 4 jours.",
      "J'ai sous-estimé la charge cognitive de coordonner en parallèle la préparation technique, la communication avec les partenaires et l'animation des ateliers. Pour l'édition suivante, je prévoirai des périodes de récupération entre les phases intenses.",
    ],
    competencesMobilisees: "Coordination (H1), Communication technique (H5), Travail sous pression (H4), Python / FastAPI (T1), Infrastructure as Code / Terraform (T4), Chiffrement et Cryptographie (T5).",
  },

  // ======== R4 : R&D IA Agentique ========
  {
    id: "ia-agentique",
    titre: "R&D IA Agentique — Benchmark et Prototypage",
    sousTitre: "LangChain · AutoGen · UiPath · RAG · Benchmark standardisé",
    introduction: [
      "Cette réalisation a été effectuée dans le cadre de mon alternance chez OpenCyberAI, sur une période de six mois, de novembre 2024 à mai 2025. Elle porte sur une mission de recherche et développement confiée par Armand Taheri, CEO d'OpenCyberAI : évaluer les solutions d'IA agentique pour personnaliser les parcours d'apprentissage sur la plateforme, et produire un benchmark documenté ainsi qu'un prototype d'intégration.",
      "L'IA agentique représente une évolution majeure de l'intelligence artificielle : au lieu de modèles passifs qui répondent à des prompts, des agents autonomes capables de percevoir leur environnement, prendre des décisions et exécuter des actions pour atteindre des objectifs. Pour OpenCyberAI, enjeu stratégique majeur : la personnalisation adaptative des parcours d'apprentissage est le différenciateur clé face à la concurrence.",
      "J'ai été le seul responsable de cette mission, sans encadrement technique quotidien. Armand Taheri me fixait les objectifs stratégiques et validait les livrables, mais la méthode, le calendrier et les choix techniques étaient entièrement de ma responsabilité. Cette autonomie totale a été à la fois un défi et une opportunité de développement majeur.",
    ],
    definition: [
      "La mission R&D IA Agentique consistait en trois livrables principaux. Un benchmark documenté de cinq frameworks agentiques — LangChain, AutoGen, CrewAI, UiPath Agent Builder et une solution propriétaire — évalués sur des critères objectifs : compatibilité FastAPI, capacités RAG (Retrieval Augmented Generation), gouvernance, facilité d'intégration, qualité des sorties. Un prototype d'intégration avec le backend FastAPI existant, démontrant la faisabilité technique de l'approche retenue. Et un module de formation structuré en sept chapitres, destiné à l'équipe technique pour partager les apprentissages de la mission.",
      "Périmètre humain : mission autonome sous la supervision stratégique du CEO. Périmètre technique : Python 3.10, FastAPI, intégration avec GPT-4 et Claude via API, tests de charge sur les endpoints d'agent. Durée : six mois.",
    ],
    objectifs: [
      {
        titre: "Objectifs techniques",
        items: [
          "Évaluer objectivement cinq frameworks d'IA agentique sur des critères pertinents pour l'architecture OpenCyberAI existante.",
          "Produire un benchmark reproductible et documenté, utilisable comme référence pour les futures décisions techniques.",
          "Développer un prototype d'intégration fonctionnel entre l'agent IA retenu et le backend FastAPI.",
          "Capitaliser les apprentissages via un module de formation interne.",
        ],
      },
      {
        titre: "Objectifs stratégiques",
        items: [
          "Identifier la solution la plus adaptée pour la personnalisation adaptative des parcours d'apprentissage.",
          "Positionner OpenCyberAI sur un créneau technologique émergent (IA agentique) face à la concurrence.",
          "Développer en interne l'expertise sur une technologie que l'entreprise ne maîtrisait pas encore.",
        ],
      },
    ],
    contexteHumain: [
      { nom: "Armand Taheri", role: "CEO", description: "A défini l'orientation stratégique de la mission, validé les livrables à chaque étape clé, et pris les décisions finales sur les recommandations. Nous avions des points de suivi hebdomadaires où je présentais l'avancement et les blocages rencontrés." },
      { nom: "Gatien Goteni", role: "CTO", description: "A assuré l'alignement technique des choix d'architecture, notamment sur la faisabilité de l'intégration avec le backend FastAPI existant. Il a également validé la qualité technique du benchmark et du prototype." },
      { nom: "Équipe IA", role: "2 ingénieurs", description: "A fourni le contexte sur les modules IA existants et leurs contraintes d'intégration. Leur expertise sur les modèles de langage et les embeddings a été précieuse pour évaluer les capacités RAG de chaque framework." },
    ],
    contexteTechnique: [
      "Backend existant : API REST Python/FastAPI (R1), avec authentification JWT et contrôle d'accès RBAC.",
      "Frameworks évalués : LangChain, AutoGen, CrewAI, UiPath Agent Builder, solution propriétaire.",
      "Modèles de langage : GPT-4 via API OpenAI, Claude via API Anthropic, pour les tests de génération et d'orchestration.",
      "Capacité RAG : évaluation de la capacité de chaque framework à enrichir les réponses des LLM avec des données contextuelles provenant de bases de connaissances externes.",
      "Contrainte majeure : l'intégration devait être compatible avec l'architecture FastAPI existante sans refonte majeure.",
    ],
    enjeux: [
      {
        titre: "Enjeux",
        items: [
          "Enjeu stratégique : la personnalisation adaptative est le différenciateur clé d'OpenCyberAI. Choisir la mauvaise technologie aurait un impact durable sur la capacité de l'entreprise à innover.",
          "Enjeu de crédibilité interne : en tant que profil junior menant une mission R&D autonome, la qualité de mon travail conditionnait la confiance que la direction me accorderait sur des missions futures.",
          "Enjeu de capitalisation : les apprentissages devaient être partagés avec l'équipe, pas seulement acquis individuellement.",
        ],
      },
      {
        titre: "Risques",
        items: [
          "Risque de biais : ma préférence initiale pour LangChain — le framework le plus médiatisé — aurait pu biaiser l'évaluation.",
          "Risque de sur-optimisme : l'enthousiasme pour une technologie émergente aurait pu conduire à sous-estimer les difficultés d'intégration en production.",
          "Risque de délai : six mois pour évaluer cinq frameworks, développer un prototype et produire un module de formation était un calendrier ambitieux.",
          "Risque d'obsolescence rapide : le domaine de l'IA agentique évolue extrêmement vite. Un benchmark réalisé en début 2025 pourrait être partiellement obsolète fin 2025.",
        ],
      },
    ],
    etapes: [
      {
        titre: "Phase 1 : Cartographie de l'écosystème et définition des critères (semaines 1-4)",
        contenu: [
          "Identification des cinq frameworks à évaluer : LangChain (plus mature), AutoGen (Microsoft), CrewAI (spécialisé multi-agents), UiPath Agent Builder (approche RPA), et une solution propriétaire en développement interne.",
          "Définition des critères d'évaluation en collaboration avec le CTO : compatibilité FastAPI, capacités RAG, gouvernance des agents, facilité d'intégration, qualité des sorties générées, et maintenabilité du code.",
          "Construction d'une grille d'évaluation normalisée pour garantir l'objectivité comparative.",
        ],
      },
      {
        titre: "Phase 2 : Évaluation technique des cinq frameworks (semaines 5-16)",
        contenu: [
          "Pour chaque framework : installation, configuration, développement d'un scénario de test identique (personnalisation d'un parcours d'apprentissage), mesure des performances, évaluation de la qualité des sorties.",
          "Tests d'intégration avec le backend FastAPI existant : authentification JWT, contrôle d'accès RBAC, gestion des erreurs, performance sous charge.",
          "Documentation systématique des résultats dans le benchmark.",
        ],
      },
      {
        titre: "Phase 3 : Analyse comparative et recommandation (semaines 17-20)",
        contenu: [
          "Analyse comparative des résultats selon la grille d'évaluation normalisée. Synthèse des forces et faiblesses de chaque framework.",
          "Rédaction de la recommandation finale : UiPath Agent Builder comme solution privilégiée pour la première phase, avec un plan de migration progressive vers une solution plus intégrée à long terme.",
          "Présentation au CEO et au CTO, discussion des résultats, ajustement de la recommandation.",
        ],
      },
      {
        titre: "Phase 4 : Prototypage d'intégration (semaines 21-22)",
        contenu: [
          "Développement d'un prototype fonctionnel intégrant UiPath Agent Builder avec le backend FastAPI. Le prototype démontre la personnalisation d'un parcours d'apprentissage en temps réel via un agent autonome.",
          "Tests de charge et validation technique avec le CTO.",
        ],
      },
      {
        titre: "Phase 5 : Capitalisation — Module de formation (semaines 23-24)",
        contenu: [
          "Rédaction d'un module de formation structuré en sept chapitres couvrant : fondamentaux de l'IA agentique, présentation de chaque framework évalué, méthodologie du benchmark, résultats et recommandations, guide d'intégration technique, bonnes pratiques de gouvernance des agents, et perspectives d'évolution.",
          "Session de formation interne avec l'équipe technique pour partager les apprentissages et valider la compréhension collective.",
        ],
      },
    ],
    resultats: [
      {
        titre: "Résultats pour moi",
        items: [
          "Développement significatif de mon autonomie professionnelle : conduire une mission R&D de six mois sans encadrement technique quotidien.",
          "Maîtrise opérationnelle de cinq frameworks d'IA agentique et de leurs patterns d'intégration.",
          "Capacité à produire un benchmark technique documenté et reproductible, reconnu comme référence interne.",
          "Renforcement de ma communication technique : présenter des résultats complexes à un CEO non-technique et les rendre actionnables.",
        ],
      },
      {
        titre: "Résultats pour l'entreprise",
        items: [
          "Benchmark documenté de cinq frameworks, reconnu comme référence interne pour les futures décisions sur l'IA agentique.",
          "Recommandation validée par la direction : UiPath Agent Builder pour la première phase, avec plan de migration.",
          "Prototype fonctionnel démontrant la faisabilité technique de l'intégration.",
          "Module de formation en sept chapitres, capitalisant les apprentissages au-delà de la mission individuelle.",
          "Positionnement stratégique d'OpenCyberAI sur le créneau de l'IA agentique pour l'apprentissage.",
        ],
      },
    ],
    lendemains: [
      "La recommandation d'UiPath Agent Builder est en cours d'implémentation par l'équipe IA, avec une première phase de déploiement prévue pour le quatrième trimestre 2025. Le benchmark sera mis à jour semestriellement pour intégrer les nouvelles versions des frameworks évalués et les nouveaux entrants sur le marché.",
      "Le module de formation est devenu la référence interne sur l'IA agentique et sera complété par de nouveaux chapitres à mesure que l'entreprise gagne en expérience sur le sujet. Sur le plan personnel, cette mission a confirmé ma capacité à conduire des projets autonomes complexes et a renforci la confiance de la direction en mon jugement technique.",
    ],
    ceQueJeRetiens: [
      "L'autonomie ne s'improvise pas : elle se construit par accumulation de preuves. Cette mission de six mois, sans encadrement technique quotidien, m'a appris à structurer ma propre démarche, à identifier mes propres lacunes et à solliciter de l'aide de façon ciblée.",
      "Le benchmark m'a montré l'importance de l'objectivité méthodologique. Ma préférence initiale pour LangChain, le framework le plus médiatisé, aurait pu biaiser toute l'évaluation. La grille de critères normalisée m'a forcé à évaluer chaque solution sur les mêmes bases, indépendamment de sa popularité.",
      "Six mois pour évaluer cinq frameworks, prototyper et former l'équipe, c'était ambitieux. J'aurais dû anticiper plus tôt la charge de documentation du benchmark, qui a représenté plus de temps que prévu. Pour les missions R&D futures, je prévoirai une marge de sécurité de 20% sur la phase de documentation.",
    ],
    competencesMobilisees: "Autonomie (H2), Esprit critique (H3), Communication technique (H5), Python / FastAPI (T1), Prompt Engineering (T3).",
  },

  // ======== R5 : Contrat MEN Pipeline NSI ========
  {
    id: "contrat-men",
    titre: "Contrat MEN — Pipeline NSI",
    sousTitre: "IA Générative · Éducation · Prompt Engineering · Qualité de sortie",
    introduction: [
      "Cette réalisation a été effectuée dans le cadre de mon alternance chez OpenCyberAI, sur une période de plusieurs semaines au printemps 2025. Elle porte sur la mise en place d'un pipeline de traitement automatique des cours de Numérique et Sciences Informatiques (NSI) du programme officiel du Ministère de l'Éducation Nationale, dans le cadre d'un contrat entre OpenCyberAI et le MEN.",
      "Le contrat avec le Ministère de l'Éducation Nationale représente une opportunité stratégique majeure pour OpenCyberAI : intégrer les cours NSI officiels dans la plateforme permet de proposer un contenu pédagogique structuré et reconnu, renforçant la crédibilité de l'entreprise auprès des établissements scolaires. Ma mission consistait à concevoir et déployer un pipeline capable de transformer automatiquement les cours NSI bruts en contenu formaté exploitable par la plateforme, en utilisant l'IA générative.",
      "J'ai travaillé en étroite collaboration avec Armand Taheri (CEO) pour la définition des objectifs et la validation des livrables, et avec Sriramsourya (ingénieur IA) pour la coordination technique avec les modules IA existants. Les jalons de validation étaient non négociables : chaque étape devait être validée avant de passer à la suivante.",
    ],
    definition: [
      "Le pipeline NSI est un système de traitement automatique des cours de Numérique et Sciences Informatiques du programme officiel MEN, utilisant l'IA générative pour transformer les documents sources en contenu structuré et formaté exploitable par la plateforme OpenCyberAI. Il comprend : extraction du contenu des documents sources, transformation automatique via des modèles de langage, structuration en format compatible avec la base de données de la plateforme, validation qualité automatique, et intégration dans le backend FastAPI.",
      "Périmètre fonctionnel : traitement automatique de l'ensemble des chapitres NSI du programme officiel, avec structuration cohérente et respect des standards pédagogiques. Périmètre technique : Python 3.10, API OpenAI (GPT-4), backend FastAPI existant, base de données MariaDB. Durée : plusieurs semaines avec des jalons de validation hebdomadaires.",
    ],
    objectifs: [
      {
        titre: "Objectifs techniques",
        items: [
          "Concevoir un pipeline capable de transformer automatiquement les cours NSI bruts en contenu structuré exploitable.",
          "Assurer la qualité des sorties générées par l'IA : exactitude technique, cohérence pédagogique, conformité au programme officiel.",
          "Intégrer le pipeline avec le backend FastAPI existant et la base de données MariaDB.",
          "Documenter le pipeline pour permettre sa maintenance et son évolution par l'équipe technique.",
        ],
      },
      {
        titre: "Objectifs organisationnels",
        items: [
          "Respecter les jalons de validation imposés par le CEO, condition de la continuité du contrat MEN.",
          "Coordonner avec l'équipe IA pour assurer la compatibilité technique avec les modules existants.",
          "Capitaliser la méthodologie pour d'autres projets d'intégration de contenu pédagogique.",
        ],
      },
    ],
    contexteHumain: [
      { nom: "Armand Taheri", role: "CEO", description: "A défini les objectifs stratégiques du contrat MEN, imposé les jalons de validation hebdomadaires et validé chaque livrable avant passage à l'étape suivante. Sa validation formelle était la condition de la continuité du contrat." },
      { nom: "Gatien Goteni", role: "CTO", description: "A assuré l'alignement technique du pipeline avec l'architecture existante et validé les choix d'intégration avec le backend FastAPI." },
      { nom: "Sriramsourya", role: "Ingénieur IA", description: "A travaillé en parallèle sur les mêmes étapes techniques, ce qui créait une pression de comparaison implicite. Notre collaboration a été essentielle pour assurer la compatibilité du pipeline avec les modules IA existants." },
    ],
    contexteTechnique: [
      "Langage : Python 3.10, intégration avec le backend FastAPI existant (R1).",
      "Modèle de langage : GPT-4 via API OpenAI, avec prompts optimisés pour la transformation de contenu pédagogique.",
      "Base de données : MariaDB, avec schéma de données compatible avec le backend existant.",
      "Pipeline : architecture en séquence — extraction, transformation, structuration, validation, intégration.",
      "Contrainte majeure : la qualité des sorties devait être validée par le CEO à chaque jalon, avec des critères de exactitude technique et cohérence pédagogique très stricts.",
    ],
    enjeux: [
      {
        titre: "Enjeux",
        items: [
          "Enjeu stratégique : le contrat MEN est un contrat institutionnel majeur qui ouvre le marché de l'éducation nationale à OpenCyberAI. Une défaillance sur ce projet aurait un impact négatif sur la crédibilité de l'entreprise auprès des institutions.",
          "Enjeu pédagogique : les cours NSI sont le programme officiel de référence. Toute erreur dans la transformation automatique des contenus aurait un impact direct sur la qualité de l'apprentissage des élèves.",
          "Enjeu technique : le pipeline devait être robuste, maintenable et évolutif pour pouvoir traiter les mises à jour du programme NSI.",
        ],
      },
      {
        titre: "Risques",
        items: [
          "Risque de qualité : l'IA générative peut produire des sorties incorrectes, incohérentes ou hors sujet — ce qui est inacceptable pour du contenu pédagogique.",
          "Risque de délai : les jalons de validation imposés par le CEO compressaient le calendrier et ne laissaient pas de marge pour des itérations prolongées.",
          "Risque de coordination : travailler en parallèle avec Sriramsourya sur les mêmes étapes créait un risque de divergence technique.",
          "Risque de conformité : le contenu généré devait respecter strictement le programme officiel MEN, sans ajout ni omission.",
        ],
      },
    ],
    etapes: [
      {
        titre: "Analyse des documents sources et définition du format cible (semaine 1)",
        contenu: [
          "Analyse des documents NSI fournis par le MEN : structure, contenu, standards pédagogiques. Identification des éléments à extraire et des formats de sortie attendus par la plateforme OpenCyberAI.",
          "Définition du format cible en collaboration avec le CTO et l'équipe IA : structure JSON, champs obligatoires, règles de validation.",
        ],
      },
      {
        titre: "Conception des prompts et premiers tests (semaines 2-3)",
        contenu: [
          "Conception des prompts GPT-4 pour la transformation automatique : définition du rôle, des contraintes, du format de sortie et des exemples few-shot. Tests sur un échantillon de chapitres pour valider l'approche.",
          "Itération sur les prompts pour améliorer la qualité des sorties : ajustement des instructions, ajout d'exemples, affinement des contraintes.",
        ],
      },
      {
        titre: "Développement du pipeline (semaines 4-5)",
        contenu: [
          "Développement du pipeline Python en séquence : extraction du contenu des documents sources, appel à l'API GPT-4 avec les prompts optimisés, structuration de la sortie au format JSON cible, validation automatique de la qualité (vérification de la présence des champs obligatoires, cohérence technique basique).",
          "Intégration avec le backend FastAPI existant pour l'insertion en base de données MariaDB.",
        ],
      },
      {
        titre: "Tests, validation et itération (semaines 6-7)",
        contenu: [
          "Tests du pipeline sur l'ensemble des chapitres NSI. Validation de la qualité des sorties par le CEO à chaque jalon.",
          "Itération sur les prompts et le pipeline pour corriger les erreurs identifiées. Coordination avec Sriramsourya pour assurer la compatibilité technique.",
        ],
      },
      {
        titre: "Déploiement et documentation (semaine 8)",
        contenu: [
          "Déploiement du pipeline en production. Documentation complète : architecture technique, guide d'utilisation, guide de maintenance, procédure de mise à jour pour les futures versions du programme NSI.",
          "Session de transfert de connaissances avec l'équipe technique pour assurer la pérennité du pipeline.",
        ],
      },
    ],
    resultats: [
      {
        titre: "Résultats pour moi",
        items: [
          "Développement de mon expertise en prompt engineering appliqué à la transformation de contenu pédagogique.",
          "Expérience concrète de la gestion de projet avec des jalons de validation non négociables.",
          "Renforcement de ma capacité à travailler sous pression chronique avec des délais serrés et des critères de qualité stricts.",
          "Apprentissage de la coordination avec un collègue travaillant en parallèle sur les mêmes objectifs.",
        ],
      },
      {
        titre: "Résultats pour l'entreprise",
        items: [
          "Pipeline déployé en production, traitant l'ensemble des chapitres NSI du programme officiel MEN.",
          "Qualité des sorties validée par le CEO et conforme aux standards pédagogiques attendus.",
          "Contrat MEN honoré dans les délais, renforçant la crédibilité d'OpenCyberAI auprès du Ministère de l'Éducation Nationale.",
          "Documentation complète permettant la maintenance et l'évolution du pipeline par l'équipe technique.",
          "Méthodologie capitalisable pour d'autres projets d'intégration de contenu pédagogique.",
        ],
      },
    ],
    lendemains: [
      "Le pipeline NSI est opérationnel en production et traite les mises à jour du programme officiel à chaque rentrée scolaire. La méthodologie développée pour ce contrat a été réutilisée pour d'autres projets d'intégration de contenu pédagogique, notamment pour des partenariats avec des éditeurs de manuels scolaires.",
      "Les compétences développées en prompt engineering appliqué à l'éducation sont directement transférables au projet de cabinet de conseil en Afrique centrale, où la création de contenu pédagogique adapté aux contextes locaux sera un axe majeur. La gestion de projet avec des jalons stricts est également une compétence précieuse pour tout projet de consulting.",
    ],
    ceQueJeRetiens: [
      "La qualité des sorties d'un pipeline IA est directement proportionnelle à la qualité des prompts. Passer du temps à concevoir des prompts précis, avec des exemples few-shot pertinents et des contraintes explicites, est un investissement qui se rentabilise massivement en réduisant le nombre d'itérations nécessaires.",
      "Les jalons de validation non négociables imposés par le CEO m'ont paru contraignants au début, mais ils m'ont finalement rendu plus efficace. En devant valider chaque étape avant de passer à la suivante, j'ai évité des erreurs qui auraient été coûteuses à corriger plus tard.",
      "Travailler en parallèle avec Sriramsourya sur les mêmes étapes a créé une dynamique positive de compétition saine. Cependant, j'aurais dû formaliser plus tôt les interfaces techniques entre nos deux travaux pour éviter les divergences.",
    ],
    competencesMobilisees: "Prompt Engineering (T3), Python / FastAPI (T1), Coordination (H1), Travail sous pression (H4), Communication technique (H5).",
  },
];
