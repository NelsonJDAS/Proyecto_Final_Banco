import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import ContenedorLogin from "../component/Login/Contenedor-Login.jsx"

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5 test">
      <ContenedorLogin></ContenedorLogin>
    </div>
  );
};
