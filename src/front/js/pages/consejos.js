import React from "react";
import "../../styles/individuales.css";
import ContenedorPresentacionConsejos from "../component/Individuales/consejos/ContenedorPresentacionConsejos.jsx";
import Autenticacion from "../component/Individuales/consejos/Autenticacion.jsx";
import ContenedorPrecaucionConsejos from "../component/Individuales/consejos/ContenedorPrecaucionConsejos.jsx";
import ContenedorDispositivosConsejos from "../component/Individuales/consejos/ContenedorDispositivosConsejos.jsx";

export const Consejos = () => {
  return (
    <div>
      <ContenedorPresentacionConsejos />
      <Autenticacion />
      <ContenedorPrecaucionConsejos />
      <ContenedorDispositivosConsejos />
    </div>
  );
};