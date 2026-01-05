import Banner from '../components/Header/Banner';
import QuickAccess from '../components/QuickAccess/QuickAccess';

function Home() {
  return (
    <>
      <Banner />
      <main className="main-container">
        {/* Sección de acceso rápido con cards */}
        <QuickAccess />
      </main>
    </>
  );
}

export default Home;
