import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER_DATA,
  PROFILE_UPDATE,
} from "./types";

//Les actions vont être déclenchées afin de
//modifier le State global
//Type : propriété obligatoire
//Payload : propriété contenant des données additionnelles

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function getUserData(firstName, lastName) {
  return {
    type: USER_DATA,
    payload: { firstName, lastName },
  };
}

export function profileUpdate(firstName, lastName) {
  return {
    type: PROFILE_UPDATE,
    payload: { firstName, lastName },
  };
}
