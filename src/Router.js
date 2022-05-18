import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Landing from './pages/Landing';
import CpTeams from './pages/CpPTeams/CpTeams';
import CpPlayer from './pages/CpPlayer/CpPlayer';
import Footer from './components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />; ;
        <Route path="/compare/player/" element={<CpPlayer />} />;
        <Route path="/teams" element={<CpTeams />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
