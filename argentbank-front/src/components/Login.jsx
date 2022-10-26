import { React, useState } from "react";
import { getUserData, loginSuccess } from "../_store/actions";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import "../styles/login.css";
import { tokenFetch, userFetch } from "../utils/fetchData";

export default function Login() {
  //Pour les erreurs d'identifiants sur le formulaire de connexion :
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const messageError = document.querySelector(".error-msg-form");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email, password };

    //Je récupère le token et ainsi l'authentification de l'utilisateur
    //via mon fetch "tokenFetch"
    const dataToken = await tokenFetch(user);

    //Si l'authentification est un succès, je stock le token
    //dans le storage
    if (dataToken.status === 200) {
      localStorage.setItem("token", dataToken.body.token);
      //Sinon, je renvoie un message d'erreur en indiquant
      //que les identifiants sont incorrects
    } else {
      messageError.innerHTML =
        "Utilisateur inconnu : Veuillez de nouveau saisir vos identifiants ";
    }

    //C'est ici que je fait appel à useNavigate pour
    //la redirection vers la page de profil en fonction
    //de l'authentification de l'utilisateur
    const token = localStorage.getItem("token");

    if (token) {
      //Méthode fetch "userFetch" qui va me renvoyer,
      //en fonction du token récupéré,
      //l'identité de l'utilisateur authentifié
      const dataUser = await userFetch(token);
      dispatch(getUserData(dataUser.body.firstName, dataUser.body.lastName));
      //Changement de state : l'utilisateur est authentifié avec succès
      dispatch(loginSuccess());
      //Accès à la page profil
      return navigate("/profile");
    }
  };

  return (
    //Formulaire de connexion
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="email">Username</label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="error-mail"></span>
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="error-psw"></span>
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <p className="error-msg-form"></p>
      <button className="login-btn">sign In</button>
    </form>
  );
}
