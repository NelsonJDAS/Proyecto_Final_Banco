import React from "react";
import ContenedorPresentacionAviso from "../component/Individuales/aviso/ContenedorPresentacionAviso.jsx";
import ContenedorInfoAviso from "../component/Individuales/aviso/ContenedorInfoAviso.jsx";
import ContenedorPropiedadAviso from "../component/Individuales/aviso/ContenedorPropiedadAviso.jsx";
import ContenedorUsoAviso from "../component/Individuales/aviso/ContenedorUsoAviso.jsx";
import ContenedorLimitacionAviso from "../component/Individuales/aviso/ContenedorLimitacionAviso.jsx";
import ContenedorLegislacionAviso from "../component/Individuales/aviso/ContenedorLegislacionAviso.jsx";

export const Aviso = () => {
  return (
    <div>
      <ContenedorPresentacionAviso />
      <ContenedorInfoAviso />
      <ContenedorPropiedadAviso />
      <ContenedorUsoAviso />
      <ContenedorLimitacionAviso />
      <ContenedorLegislacionAviso />
    </div>
  );
};