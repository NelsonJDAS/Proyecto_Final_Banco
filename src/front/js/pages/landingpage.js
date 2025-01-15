import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/login.css";
import Banner from "../component/Landingpage/Banner.jsx";
import "../../styles/landingPage.css";
import ContenedorPresentacion from "../component/Landingpage/Contenedorpresentacion.jsx";
import ContenidoBeneficios from "../component/Landingpage/ContenedorBeneficios.jsx";

export const Landingpage = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <div>
      <ContenedorPresentacion />
      <ContenidoBeneficios />
      <Banner />
    </div>
  );
};
