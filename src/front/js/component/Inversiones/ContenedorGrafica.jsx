import React, { useContext, useEffect, useRef, useState } from "react";
import GraficaInversionVista from "../graficas/GraficaInversionVista.jsx";
import { Context } from "../../store/appContext.js";
import { useParams } from "react-router-dom";

const ContenedorGraficas = () => {
    const { store, actions } = useContext(Context);

    const { nombre, simbolo } = useParams();




    const ObtenerDatos = async () => {
        try {
            const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${simbolo}&token=${process.env.FINNHUB_API_KEY}`);
            if (!response.ok) throw new Error('Error fetching data');

            const data = await response.json();


            let datos = [
                data.pc == null || data.pc == "undefined" || data.pc == 0 ? "" : { "time": data.t == 0 ? 170000000 - 4 : data.t - 4, "value": data.pc },
                data.o == null || data.o == "undefined" || data.o == 0 ? "" : { "time": data.t == 0 ? 170000000 - 3 : data.t - 3, "value": data.o },
                data.d == null || data.d == "undefined" || data.d == 0 ? "" : { "time": data.t == 0 ? 170000000 - 2 : data.t - 2, "value": data.d },
                data.c == null || data.c == "undefined" || data.c == 0 ? "" : { "time": data.t == 0 ? 170000000 - 1 : data.t - 1, "value": data.c }
            ]


            datos.pc == 0 || data.o == 0 || data.c == 0 || data.d == 0 || data.t == 0 ? actions.ActualizarGrafica([]) : actions.ActualizarGrafica(datos)

        } catch (error) {
            console.error('Error al obtener datos del backend:', error);
        }

    }

    useEffect(() => {
        actions.Scroll();
        ObtenerDatos()
    }, [])

    return (
        <div className="espaciado-fondo">
            {store.grafica.length == 0 ?
                <div className="row">
                    <div className="col-12 fw-bold fs-2 text-center my-3"><span className="titulo-individual-inversiones">Sin datos sobre la empresa</span></div>
                </div>
                :
                <>
                    <div className="row">
                        <div className="col-12 fw-bold fs-2 text-center my-3"><span className="titulo-individual-inversiones">{nombre}</span></div>
                    </div>
                    <div className={`container-fluid contenedor-grafica animacion-contenedor-inversiones  ${store.fondo === "fondo-modo-claro" ? "bg-modo-claro" : "bg-modo-oscuro"}`}>
                        <GraficaInversionVista />
                    </div>
                </>
            }
        </div>

    )
}
export default ContenedorGraficas
