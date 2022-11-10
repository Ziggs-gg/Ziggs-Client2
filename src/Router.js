import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContentsWrapper from './components/ContentsWrapper';
import MainContents from './components/MainContents';
import Nav from './components/Nav/Nav';
import Landing from './pages/LandingPage/Landing';
import Mobile from './pages/LandingPage/MobileLanding';
import CompareTeam from './pages/CompareTeam/CompareTeam';
import ComparePlayer from './pages/ComparePlayer/ComparePlayer';
import Footer from './components/Footer/Footer';
import MobileFooter from './components/Footer/mobile/MobileFooter';
import { useMediaQuery } from 'react-responsive';
import MobileLanding from './pages/LandingPage/MobileLanding';

function Router() {
  const isMobile = useMediaQuery({
    query: '(max-width:428px)',
  });
  return (
    <BrowserRouter>
      <ContentsWrapper>
        <Nav />
        <MainContents>
          <Routes>
            {isPc && <Route path="" element={<Landing />} />}
            {isMobile && <Route path="" element={<MobileLanding />} />}
            <Route path="/compare/player" element={<ComparePlayer />} />
            <Route path="/compare/team" element={<CompareTeam />} />
          </Routes>
        </MainContents>
        {isMobile ? <MobileFooter /> : <Footer />}
      </ContentsWrapper>
    </BrowserRouter>
  );
}
export default Router;
