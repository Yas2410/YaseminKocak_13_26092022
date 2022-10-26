import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER_DATA,
  PROFILE_UPDATE,
} from "./types";

import { combineReducers } from "redux";

//Le REDUCER = Le "cerveau" de Redux
//C'est une fonction qui va reçevoir le state et
//une action en paramètre afin de retourner
//UN NOUVEAU STATE

const initialState = {
  firstName: undefined,
  lastName: undefined,
  isLogWrong: false,
};

const initialStateLog = false;

export function userReducer(state = initialState, action) {
  if (action.type === USER_DATA) {
    return {
      ...state,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      token: action.payload.token,
    };
  }
  return state;
}

export function logReducer(state = initialStateLog, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return true;
    case LOGOUT_SUCCESS:
      return false;
    default:
      return state;
  }
}

export function profileReducer(state = initialState, action) {
  if (action.type === PROFILE_UPDATE) {
    return {
      ...state,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      token: action.payload.token,
    };
  }
  return state;
}

//Ici, je regroupe mes reducers dans une
//constante unique que je vais rappeler dans
//les paramètres du store

export const reducers = combineReducers({
  userReducer,
  logReducer,
});
