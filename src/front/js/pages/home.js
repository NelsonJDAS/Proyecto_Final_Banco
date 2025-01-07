import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import ContenedorLoginYRegistro from "../component/Home/ContenedorLogin.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center my-5 contenedor-main">
      <ContenedorLoginYRegistro></ContenedorLoginYRegistro>
    </div>
  );
};
