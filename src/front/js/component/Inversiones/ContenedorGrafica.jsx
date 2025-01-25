import React, { useContext, useEffect, useRef, useState } from "react";
import GraficaInversionVista from "../graficas/GraficaInversionVista.jsx";
import { Context } from "../../store/appContext.js";

const ContenedorGraficas = ({ input, nombre }) => {
    const { store, actions } = useContext(Context);




    return (
        <div className={` separacion-filas col-6 ${nombre.toLowerCase().includes(input) ? "" : "d-none"}`}>
            <div className={`container animacion-contenedor-inversiones contenedor-grafica ${store.fondo === "fondo-modo-claro" ? "bg-modo-claro" : "bg-modo-oscuro"}`}>
                <div className="row">
                    <div className="ol-8 fw-bold fs-2 text-center"><p>{nombre}</p></div>
                    <div className="col-4 fw-bold text-end"><p>GeekInvest</p></div>
                </div>
                <GraficaInversionVista />
            </div>
        </div>
    )
}
export default ContenedorGraficas
