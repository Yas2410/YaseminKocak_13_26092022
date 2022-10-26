import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { profileFetch } from "../utils/fetchData";
import { getUserData } from "../_store/actions";
import UserAccount from "../components/UserAccount";
import { userAccountData } from "../utils/userAccountData";
import "../styles/profile.css";

export default function Profile() {
  const [firstNameUpdate, setFirstNameUpdate] = useState();
  const [lastNameUpdate, setLastNameUpdate] = useState();
  const [isEditing, setEditing] = useState(false);

  //Authentification de l'utilisateur
  const isUserAuth = useSelector((state) => state.logReducer);
  //On récupère l'identité de l'utilisateur s'il est authentifié
  const userData = useSelector((state) => state.userReducer);

  //Hook qui va permettre l'utilisation des actions
  //et ainsi modifier le state global
  const dispatch = useDispatch();

  const handleChange = async () => {
    const token = localStorage.getItem("token");

    //Je récupère le token et ainsi l'authentification de l'utilisateur
    //via mon fetch "profileFetch"
    const profileEdition = await profileFetch(
      token,
      firstNameUpdate,
      lastNameUpdate
    );
    dispatch(
      getUserData(profileEdition.body.firstName, profileEdition.body.lastName)
    );
    setEditing(false);
  };

  //Route protégée afin d'éviter qu"un utilisateur non connecté
  //ne puisse accéder à la page profil
  //!isUserAuth => Message d'erreur "ACCESS DENIED"
  //Avec possibilité d'accéder au formulaire de connexion

  return (
    <main>
      {isUserAuth ? (
        <div className="account-section">
          <section>
            {isEditing ? (
              <div className="profile-header">
                <h1 className="welcome welcome-unchanged">Welcome back</h1>
                <div>
                  <input
                    className="editName-input"
                    type="text"
                    id="firstname"
                    defaultValue={userData.firstName}
                    onChange={(e) => {
                      setFirstNameUpdate(e.target.value);
                    }}
                  />
                  <input
                    className="editName-input"
                    type="text"
                    id="lastname"
                    defaultValue={userData.lastName}
                    onChange={(e) => {
                      setLastNameUpdate(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <button className="edit-btn save-btn" onClick={handleChange}>
                    Save
                  </button>
                  <button
                    className="edit-btn cancel-btn"
                    onClick={() => setEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h1 className="welcome">Welcome back</h1>
                <div className="userName">
                  {userData.firstName} {userData.lastName} !
                </div>

                <button
                  className="edit-btn"
                  onClick={() => {
                    setEditing(true);
                  }}
                >
                  EDIT NAME
                </button>
              </div>
            )}
          </section>

          <section>
            <h2 className="sr-only">Accounts</h2>
            {userAccountData.map((item) => (
              <UserAccount
                key={item.id}
                title={item.title}
                amount={"$" + item.amount}
                description={item.description}
              />
            ))}
          </section>
        </div>
      ) : (
        <div className="access-denied">
          <div className="white-bgd">
            <i className="fa fa-ban"></i>
            <div className="access-denied-txt">
              Accès refusé
              <span className="access-denied-connect">
                Veuillez vous connecter pour accéder à votre profil
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
