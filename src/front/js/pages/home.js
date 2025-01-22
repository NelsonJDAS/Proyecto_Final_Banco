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
    const getUserData = async () => {
      const token = localStorage.getItem("token");
      const storedUserName = localStorage.getItem("name");

      if (!token) {
        navigate("/login", { replace: true });
        alert("No ha iniciado sesion. Redirigiendo al login...");
        return;
      }

      const response = await fetch(process.env.BACKEND_URL + "/api/private", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        console.log("privado con jwt");
        actions.fetchUserDetails()

        // setUserName(storedUserName);
        // setLoading(false);
      }
    };

    getUserData();
  }, [navigate]);

  return (
    <div className={`${store.texto}`}>
      <div className="row p-0 m-0">
        <div className="col-xl-7 text-end mx-xl-3 col-12">
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
