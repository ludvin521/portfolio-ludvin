import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './sections/Hero';
import Curriculum from './sections/Curriculum';
import CinematicVision from './sections/CinematicVision';
import AlumniArchives from './sections/AlumniArchives';
import CompetencePage from './pages/CompetencePage';
import RealisationPage from './pages/RealisationPage';
import RealisationsPage from './pages/RealisationsPage';
import CompetencesPage from './pages/CompetencesPage';
import PresentationPage from './pages/PresentationPage';
import ParcoursPage from './pages/ParcoursPage';
import ContactPage from './pages/ContactPage';

function HomePage() {
  return (
    <div
      style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <main>
        <Hero />
        <Curriculum />
        <CinematicVision />
        <AlumniArchives />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/competence/:id" element={<CompetencePage />} />
        <Route path="/realisation/:id" element={<RealisationPage />} />
        <Route path="/realisations" element={<RealisationsPage />} />
        <Route path="/competences" element={<CompetencesPage />} />
        <Route path="/presentation" element={<PresentationPage />} />
        <Route path="/parcours" element={<ParcoursPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}
