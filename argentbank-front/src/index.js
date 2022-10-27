import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./_store/_store";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/*
Le store =  objet JavaScript qui va contenir les différentes
informations ( de tous les composants) stockées globalement
Il équivaut à State Global 
(Magasin qui contient tout l'arbre d'état de l'application React)

Le provider quant à lui va permettre à tous les 
composants qui en ont besoin d'accéder au store
*/
