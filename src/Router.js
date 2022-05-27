import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Landing from './pages/Landing';
import CompareTeam from './pages/CompareTeam/CompareTeam';
import ComparePlayer from './pages/ComparePlayer/ComparePlayer';
import Footer from './components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />; ;
        <Route path="/compare/player/" element={<ComparePlayer />} />;
        <Route path="/teams" element={<CompareTeam />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
