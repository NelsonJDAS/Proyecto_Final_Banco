import React, { useContext } from "react";
import "../../styles/inversiones.css";
import { Context } from "../store/appContext";
import CabeceraInversiones from "../component/Inversiones/CabeceraInversiones.jsx";
import ListaGraficas from "../component/Inversiones/ListaGraficas.jsx";

export const Inversiones = () => {
    const { store, actions } = useContext(Context);
    return <div>
        <CabeceraInversiones />
        <ListaGraficas />
    </div>;
};
