import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Formation from './pages/Formation';
import Projets from './pages/Projets';
import Contact from './pages/Contact';
import Engagement from './pages/Engagement';
import NotFound from './pages/NotFound';

const Infrastructure = lazy(() => import('./pages/projects/Infrastructure'));
const ActiveDirectory = lazy(() => import('./pages/projects/ActiveDirectory'));
const Supervision = lazy(() => import('./pages/projects/Supervision'));
const GLPI = lazy(() => import('./pages/projects/GLPI'));
const Rudder = lazy(() => import('./pages/projects/Rudder'));
const Portfolio = lazy(() => import('./pages/projects/Portfolio'));
const NasSynology = lazy(() => import('./pages/projects/NasSynology'));
const MasterisationIHM = lazy(() => import('./pages/projects/MasterisationIHM'));
const AnalyseTrafic = lazy(() => import('./pages/projects/AnalyseTrafic'));
const BookStack = lazy(() => import('./pages/projects/BookStack'));
const Ntopng = lazy(() => import('./pages/projects/Ntopng'));
const Homelab = lazy(() => import('./pages/projects/Homelab'));
const Videosurveillance = lazy(() => import('./pages/projects/Videosurveillance'));
const Veille = lazy(() => import('./pages/Veille'));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<div className="min-h-[50vh]"></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/projets/infrastructure" element={<Infrastructure />} />
            <Route path="/projets/active-directory" element={<ActiveDirectory />} />
            <Route path="/projets/supervision" element={<Supervision />} />
            <Route path="/projets/glpi" element={<GLPI />} />
            <Route path="/projets/rudder" element={<Rudder />} />
            <Route path="/projets/nas-synology" element={<NasSynology />} />
            <Route path="/projets/masterisation-ihm" element={<MasterisationIHM />} />
            <Route path="/projets/analyse-trafic" element={<AnalyseTrafic />} />
            <Route path="/projets/bookstack" element={<BookStack />} />
            <Route path="/projets/ntopng" element={<Ntopng />} />
            <Route path="/projets/portfolio" element={<Portfolio />} />
            <Route path="/projets/homelab" element={<Homelab />} />
            <Route path="/projets/videosurveillance" element={<Videosurveillance />} />
            <Route path="/veille" element={<Veille />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/engagement" element={<Engagement />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
