import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducers } from "../_store/reducer";

//REDUX PERSIST : Permet la sauvegarde de tout ou partie
//du state dans le navigateur -> Conserver par exemple les
//informations de l'utilisateur

//Si je suis connecté et que je rafraichis la page,
//L'état ne change pas et je reste connecté
//Sinon, il faut se reconnecter à chaque fois
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

//configureStore() : Fonction de Redux ToolKit qui va
//fournir une prise en charge automatique de Redux-thunk
//Redux DevTools Extension et transmet le middleware par défaut

//middleware : module redux qui permet d'écrire des fonctions de
//création d'actions qui retournent une fonction ou une Promise
//au lieu de retourner une simple action. Cette fonction retournée
//reçoit les méthodes dispatch et getState du store en paramètre.
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

/*
ERROR MESSAGE IF NOT MIDDLEWARE IN THE STORE CONST :
Uncaught Error: Actions must be plain objects. 
Instead, the actual type was: 'function'. You may need to add middleware to your store setup to handle dispatching other values,
 such as 'redux-thunk' to handle dispatching functions.
*/
