import Banner from '../components/Header/Banner';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import QuickAccess from '../components/QuickAccess/QuickAccess';
import ContactoSection from './ContactoSection';

function Home() {
  return (
    <>
      <Banner />
      <div className="gallery-overlay-home">
        <h2>✨ ¿Qué hay hoy en Cafayate?</h2>
        <p>Eventos, cultura y experiencias para disfrutar</p>
      </div>
      <ImageGallery />
      <main className="main-container">
        {/* Sección de acceso rápido con cards */}
        <QuickAccess />
        <ContactoSection></ContactoSection>
      </main>
    </>
  );
}

export default Home;
