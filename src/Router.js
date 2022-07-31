import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContentsWrapper from './components/ContentsWrapper';
import MainContents from './components/MainContents';
import Nav from './components/Nav/Nav';
import Landing from './pages/LandingPage/Landing';
import CompareTeam from './pages/CompareTeam/CompareTeam';
import ComparePlayer from './pages/ComparePlayer/ComparePlayer';
import Footer from './components/Footer/Footer';
import MobileFooter from './components/Footer/mobile/MobileFooter';
import { useMediaQuery } from 'react-responsive';

function Router() {
  const isPc = useMediaQuery({
    query: '(min-width:429px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width:428px)',
  });
  return (
    <BrowserRouter>
      <ContentsWrapper>
        <Nav />
        <MainContents>
          <Routes>
            <Route path="" element={<Landing />} />
            <Route path="/compare/player" element={<ComparePlayer />} />
            <Route path="/compare/team" element={<CompareTeam />} />
          </Routes>
        </MainContents>
        {isPc && <Footer />}
        {isMobile && <MobileFooter />}
      </ContentsWrapper>
    </BrowserRouter>
  );
}
export default Router;
