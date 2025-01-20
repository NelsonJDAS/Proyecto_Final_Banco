import React from "react";
import "../../styles/politicas.css";
import ContenedorPresentacionAviso from "../component/Individuales/aviso/ContenedorPresentacionAviso.jsx";
import ContenedorInfoAviso from "../component/Individuales/aviso/ContenedorInfoAviso.jsx";
import ContenedorPropiedadAviso from "../component/Individuales/aviso/ContenedorPropiedadAviso.jsx";
import ContenedorUsoAviso from "../component/Individuales/aviso/ContenedorUsoAviso.jsx";

export const Aviso = () => {
  return (
    <div>
      <ContenedorPresentacionAviso />
      <ContenedorInfoAviso />
      <ContenedorPropiedadAviso />
      <ContenedorUsoAviso />
    </div>
  );
};
