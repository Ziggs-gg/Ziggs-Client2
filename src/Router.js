import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import CpTeams from './pages/CpTeams';
import CpPlayer from './pages/CpPlayer';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/teams" element={<CpTeams />} />;
        <Route path="/player" element={<CpPlayer />} />;
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
