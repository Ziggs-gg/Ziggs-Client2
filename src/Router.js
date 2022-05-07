import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import CpTeams from './pages/CpPTeams/CpTeams';
import CpPlayer from './pages/CpPlayer/CpPlayer';
import Footer from './components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/teams" element={<CpTeams />} />;
        <Route path="/player" element={<CpPlayer />} />;
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
