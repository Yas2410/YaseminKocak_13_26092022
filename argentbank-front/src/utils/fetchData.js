/*************API DATAS****************/

//Je récupère l'url de mon fichier.env
//Je n'oublie pas de préfixer par "processenv."
//pour y avoir accès

const URL = process.env.REACT_APP_BASE_URL;

/***************TOKEN******************/
//Je récupère le token pour la
//connexion de l'utilisateur
export const tokenFetch = async (user) => {
  const response = await fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

/*************USER DATA****************/
//En fonction du token (JWT) récupéré,
//je récupère les informations
//de l'utilisateur authentifié
export const userFetch = async (token) => {
  const response = await fetch(`${URL}/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

/********USER PROFILE UPDATE***********/
//Méthode PUT pour la modification du profil
//et l'actualisation de ce dernier
export const profileFetch = async (token, firstName, lastName) => {
  const response = await fetch(`${URL}/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      firstName,
      lastName,
    }),
  });
  return response.json();
};
