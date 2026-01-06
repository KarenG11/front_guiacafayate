import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Agregar más rutas aquí según sea necesario */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
