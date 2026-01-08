import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Header/Navbar';
import Home from './pages/Home';
import AlojamientosPage from './pages/AlojamientosPage';
import RestaurantesPage from './pages/RestaurantesPage';
import ComerciosPage from './pages/ComerciosPage';
import ServiciosPage from './pages/ServiciosPage';
import TransportePage from './pages/TransportePage';
import TurismoPage from './pages/TurismoPage';
import Login from './components/Auth/Login';
import Registro from './components/Auth/Registro';
import Footer from './components/Footer/Footer';
import './App.css';
import ContactoSection from './pages/ContactoSection';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
            <ScrollToTop />
      
        <div className="app-wrapper">
          <Navbar />
          <main className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/alojamientos" element={<AlojamientosPage />} />
              <Route path="/restaurantes" element={<RestaurantesPage />} />
              <Route path="/comercios" element={<ComerciosPage />} />
              <Route path="/servicios" element={<ServiciosPage />} />
              <Route path="/transporte" element={<TransportePage />} />
              <Route path="/turismo" element={<TurismoPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/contacto" element={<ContactoSection isPage={true} />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

