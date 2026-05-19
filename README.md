# Portfolio Ludvin GATSE - Cyber Security Engineer

Portfolio professionnel de Ludvin Nynson Gatse, Cyber Security Engineer en alternance chez OpenCyberAI et etudiant en Mastere Expert Cyberecurite a l'ESIEA Paris.

## Stack technique

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS** + **shadcn/ui**
- **GSAP** pour les animations
- **HashRouter** (react-router-dom) pour la navigation cote client
- **GitHub Pages** pour l'hebergement

## Structure du site

| Page | Route | Contenu |
|------|-------|---------|
| Accueil | `/#/` | Photo, titre, acces aux sections |
| Presentation | `/#/presentation` | Valeurs, qualites humaines, centres d'interet, projets |
| Realisations | `/#/realisation/:id` | 5 realisations professionnelles detaillees |
| Competences | `/#/competences` | Onglet unique avec sous-menu Techniques/Humaines |
| Competence detail | `/#/competence/:id` | 10 competences avec contenu integral |
| Parcours | `/#/parcours` | Frise anti-chronologique formations/experiences |

## Prerequis

- **Node.js** 18+ (verifier avec `node -v`)
- **npm** 9+ (verifier avec `npm -v`)
- Un compte **GitHub**

## Etape 1 : Cloner ou recuperer le projet

Placez-vous dans le dossier du projet :

```bash
cd /mnt/agents/output/app
```

Le dossier contient la structure suivante :

```
my-app/
├── public/
│   ├── images/           # Images du portfolio (8 images)
│   └── videos/           # Video cinematique (1 video)
├── src/
│   ├── components/       # Composants UI (LiquidGlassButton, etc.)
│   ├── data/             # Donnees : competences.ts, realisations.ts
│   ├── pages/            # Pages : Presentation, Competences, Parcours, etc.
│   ├── sections/         # Sections : Hero, Navigation, Footer, etc.
│   ├── types/            # Types TypeScript
│   ├── App.tsx           # Routing principal
│   └── main.tsx          # Point d'entree avec HashRouter
├── dist/                 # Build de production (genere)
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Etape 2 : Installer les dependances

```bash
npm install
```

Si vous n'avez pas acces au dossier `/mnt/agents/output/app`, vous pouvez copier les fichiers sur votre machine et executer `npm install` dans le dossier copie.

## Etape 3 : Installer gh-pages

```bash
npm install --save-dev gh-pages
```

Cela installe le package `gh-pages` qui permet de deployer le dossier `dist/` sur GitHub Pages.

## Etape 4 : Configurer GitHub Pages

### 4.1 Creer un depot GitHub

1. Connectez-vous a [github.com](https://github.com)
2. Cliquez sur **New repository** (bouton vert)
3. Nommez le depot : `portfolio-ludvin-gatse` (ou le nom de votre choix)
4. Laissez **Public** coche
5. Ne cochez **PAS** "Initialize this repository with a README"
6. Cliquez sur **Create repository**

### 4.2 Initialiser Git et pousser le code

Dans le dossier du projet, executez :

```bash
# Initialiser le depot Git
git init

# Ajouter tous les fichiers
git add .

# Creer le premier commit
git commit -m "Initial commit - Portfolio Ludvin GATSE"

# Lier au depot GitHub distant (remplacez USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/USERNAME/portfolio-ludvin-gatse.git

# Pousser le code
git branch -M main
git push -u origin main
```

### 4.3 Activer GitHub Pages

1. Sur la page de votre depot GitHub, cliquez sur **Settings** (onglet en haut)
2. Dans le menu de gauche, cliquez sur **Pages**
3. Dans la section **Source**, selectionnez : **Deploy from a branch**
4. Dans **Branch**, selectionnez : **gh-pages** / **root**
5. Cliquez sur **Save**

> **Important** : Le dossier `gh-pages` sera cree automatiquement lors du premier deploiement (Etape 5). Si vous ne le voyez pas tout de suite, revenez apres avoir execute la commande `npm run deploy`.

## Etape 5 : Deployer

La configuration est deja prete dans le `package.json` :

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Pour deployer, executez simplement :

```bash
npm run deploy
```

Cette commande :
1. Execute `npm run build` pour generer le dossier `dist/`
2. Deploie le contenu de `dist/` sur la branche `gh-pages`

Vous verrez un message comme :

```
Published
```

## Etape 6 : Verifier le deploiement

1. Retournez sur votre depot GitHub
2. Cliquez sur **Settings** > **Pages**
3. Vous devriez voir une URL du type :

```
https://USERNAME.github.io/portfolio-ludvin-gatse/
```

4. Cliquez sur le lien pour verifier que votre portfolio est en ligne

> **Note** : Le deploiement peut prendre 2 a 5 minutes avant d'etre visible.

## Mise a jour du portfolio

Apres avoir modifie le contenu, redeployez avec :

```bash
npm run deploy
```

## Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lancer le serveur de developpement (localhost:5173) |
| `npm run build` | Generer le build de production dans `dist/` |
| `npm run preview` | Previsualiser le build localement |
| `npm run deploy` | Deployer sur GitHub Pages |

## Configuration technique pour GitHub Pages

### HashRouter

Le projet utilise `HashRouter` (et non `BrowserRouter`) pour que les routes fonctionnent correctement sur GitHub Pages sans configuration serveur supplementaire. Les URLs seront de la forme :

```
https://USERNAME.github.io/portfolio-ludvin-gatse/#/presentation
https://USERNAME.github.io/portfolio-ludvin-gatse/#/competences
https://USERNAME.github.io/portfolio-ludvin-gatse/#/parcours
```

### Base relative (vite.config.ts)

Le fichier `vite.config.ts` utilise `base: './'` pour generer des chemins relatifs, compatibles avec GitHub Pages :

```typescript
export default defineConfig({
  base: './',
  // ...
});
```

### Assets statiques

Les images et videos du dossier `public/` sont copiees automatiquement dans `dist/` lors du build. Ne renommez pas les dossiers `public/images/` et `public/videos/`.

## Liste des fichiers a ne pas modifier

| Fichier | Role |
|---------|------|
| `vite.config.ts` | Configuration Vite (base: './') |
| `src/main.tsx` | Point d'entree (HashRouter) |
| `package.json` | Scripts (predeploy, deploy) |
| `public/images/` | Images du portfolio |
| `public/videos/` | Video cinematique |

## Depannage

### Erreur "gh-pages command not found"

```bash
npm install --save-dev gh-pages
```

### Erreur "Permission denied" lors du push Git

Utilisez HTTPS avec un Personal Access Token, ou configurez SSH :

```bash
git remote set-url origin https://USERNAME:TOKEN@github.com/USERNAME/portfolio-ludvin-gatse.git
```

### La page affiche une erreur 404

- Verifiez que GitHub Pages est active dans Settings > Pages
- Attendez 5 minutes apres le deploiement
- Verifiez que la branche `gh-pages` existe bien

### Les images ne s'affichent pas

Verifiez que les fichiers du dossier `public/images/` et `public/videos/` sont bien presents dans le build :

```bash
ls dist/images/
ls dist/videos/
```

---

**Auteur** : Ludvin Nynson Gatse  
**Contact** : ludvingatse93@gmail.com  
**LinkedIn** : https://www.linkedin.com/in/ludvin-gatse-b3a27031b
