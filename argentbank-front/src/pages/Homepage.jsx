import Feature from "../components/Feature";
import "../styles/homepage.css";
import Banner from "../components/Banner";
import { featuresData } from "../utils/featuresData";

function Homepage() {
  return (
    //Méthode MAP : itération sur les données du fichier featuresData.js
    //afin de nous retourner un tableau d'éléments en fonction
    //des paramètres appliqués
    <main>
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {featuresData.map((item) => (
          <Feature
            key={item.id}
            src={item.icon}
            alt={item.alt}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </main>
  );
}

export default Homepage;
