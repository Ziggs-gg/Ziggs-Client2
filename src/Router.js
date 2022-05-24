import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Landing from './pages/Landing';
import CpTeams from './pages/CpPTeams/CpTeams';
import ComparePlayer from './pages/ComparePlayer/ComparePlayer';
import Footer from './components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />; ;
        <Route path="/compare/player/" element={<ComparePlayer />} />;
        <Route path="/teams" element={<CpTeams />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
