import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Home from './pages/Home';
import AlojamientosPage from './pages/AlojamientosPage';
import RestaurantesPage from './pages/RestaurantesPage';
import ComerciosPage from './pages/ComerciosPage';
import ServiciosPage from './pages/ServiciosPage';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alojamientos" element={<AlojamientosPage />} />
        <Route path="/restaurantes" element={<RestaurantesPage />} />
        <Route path="/comercios" element={<ComerciosPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

