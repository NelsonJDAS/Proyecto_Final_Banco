import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import SaldoUsuario from "../component/Home/SaldoUsuario.jsx";
import TablaMovimientosUsuario from "../component/Home/TablaMovimientosUsuario.jsx";
import ListaInteractiva from "../component/Home/Lista_Componentes/ListaInteractiva.jsx";
import ContenedorNotificaciones from "../component/Home/ContenedorNotificaciones.jsx";

export const Home = () => {
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
    <div className={`${store.texto}`}>
      <div className="container">
        <SaldoUsuario />
      </div>
      <div className="row contenedor-noti-movimientos p-0 m-0">
        <div className={`col-xl-7 text-end mx-xl-3 col-12 ${store.notificacionesHidden ? "col-xl-12" : ""}`}>
          <TablaMovimientosUsuario />
        </div>
        <div className="col-4 text-end mx-3 d-none d-xl-block">
          <ContenedorNotificaciones />
        </div>
      </div>
      <ListaInteractiva />
    </div>
  );
};
