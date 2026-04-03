import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Formation from './pages/Formation';
import Projets from './pages/Projets';
import Infrastructure from './pages/projects/Infrastructure';
import ActiveDirectory from './pages/projects/ActiveDirectory';
import Supervision from './pages/projects/Supervision';
import GLPI from './pages/projects/GLPI';
import Rudder from './pages/projects/Rudder';
import Portfolio from './pages/projects/Portfolio';
import NasSynology from './pages/projects/NasSynology';
import MasterisationIHM from './pages/projects/MasterisationIHM';
import AnalyseTrafic from './pages/projects/AnalyseTrafic';
import Veille from './pages/Veille';
import TableauSynthese from './pages/TableauSynthese';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
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
          <Route path="/projets/portfolio" element={<Portfolio />} />
          <Route path="/veille" element={<Veille />} />
          <Route path="/tableau-synthese" element={<TableauSynthese />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
