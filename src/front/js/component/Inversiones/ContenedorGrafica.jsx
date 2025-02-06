import React, { useContext, useEffect, useRef, useState } from "react";
import GraficaInversionVista from "../graficas/GraficaInversionVista.jsx";
import { Context } from "../../store/appContext.js";
import { useNavigate, useParams } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { BiSolidBusiness } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const ContenedorGraficas = () => {
    const { t } = useTranslation()
    const { store, actions } = useContext(Context);

    const [userLoad, SetUserLoad] = useState(false)

    const navigate = useNavigate("");
    const { nombre, simbolo } = useParams();




    const ObtenerDatos = async () => {
        try {
            const response = await fetch(`https://api.twelvedata.com/time_series?symbol=${simbolo}&interval=1day&outputsize=360&apikey=37fe70b9c32245e793edb22641fa8805`);
            if (!response.ok) throw new Error('Error fetching data');

            const data = await response.json();



            let valores = [];
            Object.entries(data.values).map((item) => {
                let datos = { "time": item[1].datetime, "value": parseInt(item[1].close) }
                valores.unshift(datos)
            })


            data.values == undefined ? "" : actions.ActualizarGrafica(valores)



        } catch (error) {
            actions.ActualizarGrafica("")
            console.error('Error al obtener datos del backend:', error);
        }

    }

    useEffect(() => {
        actions.Scroll();
        ObtenerDatos()
        SetUserLoad(true);
    }, [])


    return (
        <div className={`espaciado-fondo ${userLoad ? "animacion-inversiones visible" : "animacion-inversiones"}`}>
            {store.grafica.length == 0 ?
                <div className="row">
                    <div className="col-12 fw-bold fs-2 text-center my-3"><span className="titulo-individual-inversiones">{t('graficaindividual.p1')}</span></div>
                    <div className="col-12 text-center"><i className="color-inversion simbolo-empresa"><BiSolidBusiness /></i></div>
                    <div className="col-12 text-center"><span className="hover fs-1 color-inversion" onClick={() => navigate("/inversiones")}>{t('graficaindividual.atras')}</span></div>
                </div>
                :
                <>
                    <div className="row">
                        <div className="col-11 text-end"> <span className={`color-inversion hover fw-bold`} onClick={() => navigate("/inversiones")}>{t('graficaindividual.atras')}<i><RiArrowGoBackFill /></i></span></div>
                        <div className="col-12 fw-bold fs-2 text-center my-3"><span className={`titulo-individual-inversiones`}>{nombre}</span></div>
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
