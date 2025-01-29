import React, { useContext, useEffect, useRef, useState } from "react";
import GraficaInversionVista from "../graficas/GraficaInversionVista.jsx";
import { Context } from "../../store/appContext.js";
import { useParams } from "react-router-dom";

const ContenedorGraficas = () => {
    const { store, actions } = useContext(Context);

    const { nombre, simbolo } = useParams();




    const ObtenerDatos = async () => {
        try {
            const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${simbolo}&token=cud24s9r01qigebprf90cud24s9r01qigebprf9g`);
            if (!response.ok) throw new Error('Error fetching data');

            const data = await response.json();

            const fecha = new Date(data.t * 1000);

            console.log(data, fecha)

            // Obtener el formato de fecha deseado (YYYY-MM-DD)
            const formattedDate = fecha.toISOString().split('T')[0];

            let datos = [
                { "time": data.t - 4, "value": data.pc },
                { "time": data.t - 3, "value": data.o },
                { "time": data.t - 2, "value": data.d },
                { "time": data.t - 1, "value": data.c },
            ]



            actions.ActualizarGrafica(datos)


            console.log(data)
        } catch (error) {
            console.error('Error al obtener datos del backend:', error);
        }

    }

    useEffect(() => {
        ObtenerDatos()
    }, [])

    return (
        <div className="espaciado-fondo">
            <div className="row">
                <div className="col-12 fw-bold fs-2 text-center my-3"><span className="titulo-individual-inversiones">{nombre}</span></div>
            </div>
            <div className={`container-fluid contenedor-grafica animacion-contenedor-inversiones  ${store.fondo === "fondo-modo-claro" ? "bg-modo-claro" : "bg-modo-oscuro"}`}>
                <GraficaInversionVista />
            </div>
        </div>

    )
}
export default ContenedorGraficas
