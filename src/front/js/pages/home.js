import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import SaldoUsuario from "../component/Home/SaldoUsuario.jsx";
import TablaMovimientosUsuario from "../component/Home/TablaMovimientosUsuario.jsx";
import ListaInteractiva from "../component/Home/Lista_Componentes/ListaInteractiva.jsx";
import ContenedorNotificaciones from "../component/Home/ContenedorNotificaciones.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className={`${store.texto}`}>
      <div className="row">
        <div className="col-9 text-end">
          <SaldoUsuario />
          <TablaMovimientosUsuario />
        </div>
        <div className="col-2 bg-danger text-end">
          <ContenedorNotificaciones />
        </div>
      </div>
      <ListaInteractiva />
      <ListaInteractiva />
      <ListaInteractiva />
    </div>
  );
};
