import propTypes from "prop-types";
import "../styles/banner.css";

//Méthode MAP : itération sur les données du array "subtitles"
//afin de nous retourner un tableau d'éléments en fonction
//des paramètres appliqués
const subtitles = ["No fees.", "No minimum deposit.", "High interest rates."];

export default function Banner() {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        {subtitles.map((subtitle, index) => (
          <p key={index} className="subtitle">
            {subtitle}
          </p>
        ))}
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
}

Banner.propTypes = {
  index: propTypes.number,
  subtitle: propTypes.string,
};

//KEY: Va aider React à identifier les éléments ayant été
//changés, ajoutés ou supprimés
