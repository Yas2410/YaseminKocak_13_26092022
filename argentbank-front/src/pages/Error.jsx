import { Link } from "react-router-dom";
import "../styles/error.css";

//Page erreur qui va retourner la mention
//page inexistante lorsque la route est inconnue
function Error() {
  return (
    <section>
      <div className="error-section">
        <div className="white-bgd">
          <h1 className="error-main">Oups!</h1>
          <h2 className="error-txt">La page demandée n'existe pas</h2>
          <Link className="home-link" to="/">
            Retourner sur la page d'accueil
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Error;
