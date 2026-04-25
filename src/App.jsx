import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Suites from './pages/Suites';
import DoubleRoom from './pages/DoubleRoom';
import KingRoom from './pages/KingRoom';
import Gallery from './pages/Gallery';
import Servizi from './pages/Servizi';
import Contatti from './pages/Contatti';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suites" element={<Suites />} />
          <Route path="/suites/double" element={<DoubleRoom />} />
          <Route path="/suites/king" element={<KingRoom />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
