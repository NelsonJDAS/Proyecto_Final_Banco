import React, { useContext, useEffect } from "react";
import "../../styles/perfil.css";
import ContenedorPrincipalPerfil from "../component/Individuales/Perfil/ContenedorPrincipalPerfil.jsx";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Perfil = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await actions.verifyToken();

      if (!authStatus.authenticated) {
        navigate("/login");
      } else {
        const storedId = localStorage.getItem("userId");
        actions.fetchUserDetails(storedId);
        actions.getUserConfig(storedId);
      }
    };
    checkAuth();
  }, []);
  return (
    <>
      <ContenedorPrincipalPerfil />
    </>
  );
};
