import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/argentBankLogo.png";
import "../styles/header.css";
import { logoutSuccess } from "../_store/actions";

export default function Header() {
  //UseSelector : Hook qui va permettre de récupérer les données
  // stockées globalement et ce depuis n'importe quel composant

  //Authentification de l'utilisateur
  const isUserAuth = useSelector((state) => state.logReducer);
  //On récupère l'identité de l'utilisateur s'il est authentifié
  const userName = useSelector((state) => state.userReducer);

  //Hook qui va permettre l'utilisation des actions
  //et ainsi modifier le state global
  const dispatch = useDispatch();

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isUserAuth ? (
          <ul className="main-nav-item">
            <li>
              <Link className="profile-link" to="/profile">
                <i className="fa fa-user-circle sign-in-icon"></i>
                {userName.firstName}
              </Link>
            </li>
            <li>
              <Link
                className="logout-link"
                to="/"
                onClick={() => {
                  //Au clic sur la déconnexion ("Signout")
                  //On vide le storage
                  //Action logoutSuccess où on revient
                  //au state initial, c'est à dire
                  //isUserAUth -> FALSE
                  window.localStorage.clear();
                  dispatch(logoutSuccess());
                }}
              >
                <i className="fa fa-sign-out sign-out-icon"></i>
                <span>Sign Out</span>
              </Link>
            </li>
          </ul>
        ) : (
          <Link to="/login" className="main-nav-item login-link">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <span>Sign In</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
