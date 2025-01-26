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
    // const storedName = localStorage.getItem("name");
    const storedId = localStorage.getItem("userId")
    actions.fetchUserDetails(storedId)
    console.log("Tarjeta de coordenadas", store.tarjetaCoord)
  }, []);

  return (
    <div className={`${store.texto}`}>
      <button onClick={() => {
        console.log(store)
      }}>ghgfghfghfhgf</button>
      <div className="row p-0 m-0">
        <div className={`col-xl-7 text-end mx-xl-3 col-12 ${store.notificaciones ? "col-xl-12" : ""}`}>
          <SaldoUsuario />
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
