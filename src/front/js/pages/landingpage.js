import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/login.css";
import Banner from "../component/Landingpage/Banner.jsx";
import "../../styles/landingPage.css";
import ContenedorPresentacion from "../component/Landingpage/ContenedorPresentacion.jsx";
import ContenedorVentajas from "../component/Landingpage/ContenedorVentajas.jsx";
import ContenedorBeneficios from "../component/Landingpage/ContenedorBeneficios.jsx";

export const Landingpage = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <div>
      <ContenedorPresentacion />
      <ContenedorBeneficios />
      <Banner />
      <ContenedorVentajas />
    </div>
  );
};
