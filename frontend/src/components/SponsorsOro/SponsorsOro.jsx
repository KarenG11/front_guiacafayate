import './SponsorsOro.css';
import useSponsors from '../../hooks/useSponsors';

function SponsorsOro() {
  const { sponsors, loading, error } = useSponsors();

  if (loading) return <p>Cargando sponsors...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="sponsors-oro">
      <h2>Sponsor Destacado</h2>

      <div className="sponsors-oro-grid">
        {sponsors.map((item, index) => {
          const nombre = item.nombre || item.name;
          const descripcion = item.descripcion || item.description;
          const direccion = item.direccion || item.address || item.direccion
            || (item.social && item.social.address);
          const whatsapp = item.whatsapp || (item.social && item.social.whatsapp);
          const instagram = item.instagram || (item.social && item.social.instagram);

          return (
            <div key={index} className="sponsor-oro-card">

              <div className="sponsor-oro-topline" />

              {/* Imagen destacada arriba (img1) */}
              {(() => {
                const imgs = item.images && Array.isArray(item.images) ? item.images : (item.images ? [item.images] : []);
                const firstImg = imgs && imgs.length > 0 ? imgs[0] : null;
                // Construir la URL completa del backend
                const imageUrl = firstImg ? `http://localhost:5000${firstImg.startsWith('/') ? '' : '/'}${firstImg}` : null;
                return imageUrl ? (
                  <div className="sponsor-oro-image">
                    <img src={imageUrl} alt={nombre} />
                  </div>
                ) : (
                  <div className="sponsor-oro-image placeholder" />
                );
              })()}

              <div className="sponsor-oro-body">
                <div className="sponsor-oro-logo">
                  {item.logo && <img src={`http://localhost:5000${item.logo.startsWith('/') ? '' : '/'}${item.logo}`} alt={`${nombre} logo`} />}
                </div>

                <div className="sponsor-oro-info">
                  <h3>{nombre}</h3>
                  {descripcion && <p className="sponsor-description">{descripcion}</p>}
                  {direccion && <p className="sponsor-address">📍 {direccion}</p>}
                  {item.verificado && <span className="sponsor-verified">✔ Verificado</span>}

                  <div className="sponsor-actions">
                    {whatsapp && (
                      <a
                        href={`https://wa.me/${whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-whatsapp"
                      >
                        WhatsApp
                      </a>
                    )}

                    {instagram && (
                      <a
                        href={instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-instagram"
                      >
                        Instagram
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SponsorsOro;


