import CardOro from "../Card/Oro/CardOro";
import CardPlata from "../Card/Plata/CardPlata";
import CardBronce from "../Card/Bronce/CardBronce";
import CardGratis from "../Card/Gratis/CardGratis";
import "./Section.css";

function Section({ title, items }) {
  // Definimos el orden de los niveles
  const levelOrder = ["Oro", "Plata", "Bronce", "Gratis"];

  // Ordenamos items según su level
  const sortedItems = [...items].sort((a, b) => {
    const aIndex = levelOrder.indexOf(a.level) !== -1 ? levelOrder.indexOf(a.level) : levelOrder.length;
    const bIndex = levelOrder.indexOf(b.level) !== -1 ? levelOrder.indexOf(b.level) : levelOrder.length;
    return aIndex - bIndex;
  }); 

  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="section-cards">
        {sortedItems.map((item, i) => {
          switch (item.level) {
            case "Oro":
              return <CardOro key={i} item={item} />;
            case "Plata":
              return <CardPlata key={i} item={item} />;
            case "Bronce":
              return <CardBronce key={i} item={item} />;
            default:
              return <CardGratis key={i} item={item} />;
          }
        })}
      </div>
    </section>
  );
}

export default Section;

