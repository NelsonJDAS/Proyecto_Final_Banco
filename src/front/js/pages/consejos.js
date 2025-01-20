import React from "react";
import ContenedorPresentacionConsejos from "../component/Individuales/consejos/ContenedorPresentacionConsejos.jsx";
import ContenedorProteccionConsejos from "../component/Individuales/consejos/ContenedorProteccionConsejos.jsx";
import ContenedorPrecaucionConsejos from "../component/Individuales/consejos/ContenedorPrecaucionConsejos.jsx";
import ContenedorDispositivosConsejos from "../component/Individuales/consejos/ContenedorDispositivosConsejos.jsx";
import ContenedorInformacionConsejos from "../component/Individuales/consejos/ContenedorInformacionConsejos.jsx";
import ContenedorContactoConsejos from "../component/Individuales/consejos/ContenedorContactoConsejos.jsx";

export const Consejos = () => {
  return (
    <div>
      <ContenedorPresentacionConsejos />
      <ContenedorProteccionConsejos />
      <ContenedorPrecaucionConsejos />
      <ContenedorDispositivosConsejos />
      <ContenedorInformacionConsejos />
      <ContenedorContactoConsejos />
    </div>
  );
};