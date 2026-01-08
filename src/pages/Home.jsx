import Banner from '../components/Header/Banner';
import QuickAccess from '../components/QuickAccess/QuickAccess';
import ContactoSection from './ContactoSection';

function Home() {
  return (
    <>
      <Banner />
      <main className="main-container">
        {/* Sección de acceso rápido con cards */}
        <QuickAccess />
        <ContactoSection></ContactoSection>
      </main>
    </>
  );
}

export default Home;
