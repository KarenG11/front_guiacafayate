import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Header/Navbar';
import Home from './pages/Home';
import AlojamientosPage from './pages/AlojamientosPage';
import RestaurantesPage from './pages/RestaurantesPage';
import ComerciosPage from './pages/ComerciosPage';
import ServiciosPage from './pages/ServiciosPage';
import Login from './components/Auth/Login';
import Registro from './components/Auth/Registro';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-wrapper">
          <Navbar />
          <main className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/alojamientos" element={<AlojamientosPage />} />
              <Route path="/restaurantes" element={<RestaurantesPage />} />
              <Route path="/comercios" element={<ComerciosPage />} />
              <Route path="/servicios" element={<ServiciosPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

