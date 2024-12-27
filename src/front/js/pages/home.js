import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import ContenedorPrincipal from "../component/Home/ContenedorPrincipal.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5 test">
      <ContenedorPrincipal></ContenedorPrincipal>
    </div>
  );
};
