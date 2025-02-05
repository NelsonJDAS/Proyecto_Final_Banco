import React, { useContext, useEffect } from "react";
import "../../styles/inversiones.css";
import { Context } from "../store/appContext.js";
import ContenedorGraficas from "../component/Inversiones/ContenedorGrafica.jsx";

export const GraficaIndividual = () => {
    const { store, actions } = useContext(Context);

    return <div>
        <ContenedorGraficas />
    </div>;
};
