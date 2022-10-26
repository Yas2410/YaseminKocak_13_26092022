import PropTypes from "prop-types";
import "../styles/feature.css";

function Feature(props) {
  //Je récupère mes éléments
  //en fonction des props, c'est à dire des
  //propriétés passées au composant

  //Méthode map appliquée dans le fichier Homepage.jsx
  return (
    <div className="feature-item">
      <img className="feature-icon" src={props.src} alt={props.alt} />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

Feature.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Feature;
