import React, { useEffect, useRef, useState } from "react";
import BloqueoDesbloqueoCuentas from "./Componentes/BloqueoDesbloqueoCuentas.jsx";
import HistorialTransacciones from "./Componentes/HistorialTransacciones.jsx";
import Tarjetas from "./Componentes/Tarjetas.jsx";
import Alertas from "./Componentes/Alertas.jsx";
import Tienda from "./Componentes/Tienda.jsx";
import Productos from "./Componentes/Prodcutos.jsx";
import Configuracion from "./Componentes/Configuracion.jsx";
import AtencionCliente from "./Componentes/AtencionCliente.jsx";
import RedesSociales from "./Componentes/RedesSociales.jsx";
import Divisas from "./Componentes/Divisas.jsx";

const ListaInteractiva = () => {

    const [firstCol, SetFirstCol] = useState("componente-izquierdo")
    const [thCol, SetThCol] = useState("componente-izquierdov2");;
    const [secCol, SetSecCol] = useState("componente-derecho");
    const [FoCol, SetFoCol] = useState("componente-derechov2");

    // logica para mostrar el conteindo si el usuario esta en la seccion del componente
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // controla la variable para cambiarla si el usuario se encuentra encima del componente
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // entry.isIntersecting indica si el elemento es visible
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null, // Usar la ventana como viewport
                rootMargin: '0px', // Sin márgenes
                threshold: 0, // Al menos el 1% del componente debe estar visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current); // Observar el componente
        }

        return () => {
            // Limpiar el observer al desmontar el componente
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            SetFirstCol("componente-izquierdo visible")
            SetSecCol("componente-derecho visible")
            SetThCol("componente-izquierdov2 visible")
            SetFoCol("componente-derechov2 visible")
        } else {
            SetFirstCol("componente-izquierdo")
            SetSecCol("componente-derecho")
            SetThCol("componente-izquierdov2")
            SetFoCol("componente-derechov2")
        }
    }, [isVisible])

    return (
        <div className="container-fluid w-85" ref={sectionRef}>
            <div className="row">
                <div className={`col-12 col-xl-3 ${firstCol}`}><HistorialTransacciones /></div>
                <div className={`col-6 col-xl-3 ${thCol}`}><BloqueoDesbloqueoCuentas /></div>
                <div className={`col-6 col-xl-3 ${FoCol}`}><Alertas /></div>
                <div className={`col-12 col-xl-3 ${secCol}`}><Tarjetas /></div>
            </div>
            <div className="row">
                <div className={`col-6 col-xl-4 ${firstCol}`}><Tienda /></div>
                <div className={`col-6 col-xl-2 ${thCol}`}><Productos /></div>
                <div className={`col-6 col-xl-4 ${FoCol}`}><Configuracion /></div>
                <div className={`col-6 col-xl-2 ${secCol}`}><AtencionCliente /></div>
            </div>
            <div className="row">
                <div className={`col-6 col-xl-3 ${firstCol}`}><div className="color-principal contenedor-componente-interactivo my-2 rounded">Inversiones</div></div>
                <div className={`col-6 col-xl-4 ${thCol}`}><div className="color-principal contenedor-componente-interactivo my-2 rounded">Tarjeta de Cordenadas</div></div>
                <div className={`col-6 col-xl-3 ${FoCol}`}><Divisas /></div>
                <div className={`col-6 col-xl-2 ${secCol}`}><RedesSociales /></div>
            </div>
        </div>
    )
}

export default ListaInteractiva

