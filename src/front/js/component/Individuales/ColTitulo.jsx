import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../store/appContext";


const ColTitulo = ({ title, position, descripcion, logo }) => {
    const [positionCol, SetPositionCol] = useState(position === "left" ? "animacion-izq-titulo" : "animacion-der-titulo");
    const { store, actions } = useContext(Context);
    const [texto, SetTexto] = useState(false)

    const [userLoad, SetUserLoad] = useState(false);
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
                threshold: 0.1, // Al menos el 10% del componente debe estar visible
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
            SetUserLoad(true)
        } else {
            SetUserLoad(false)
        }
    }, [isVisible])

    useEffect(() => {
        console.log(texto)
    }, [texto])
    return (
        <div className={`col-12 p-3 align-content-center text-center border-top hover border-bottom  d-flex flex-column ${store.fondo === "fondo-modo-claro" ? "text-info bg-dark border-info" : "text-dark bg-white border-dark"} ${userLoad ? `${positionCol} visible` : positionCol}  ${texto ? "contenedor-titulo-expandido" : "contenedor-titulo"} `} ref={sectionRef} onClick={() => SetTexto(!texto)}>
            <i className="icono-titulo">{logo}</i>
            <span className="fs-2 fw-bold">{title}</span>
            <div className={`container d-flex flex-column ${texto ? "texto-titulo visible" : "texto-titulo"}`}>
                <p className="fs-4 fw-bold">{descripcion}</p>
                <p>Ver Documento</p>
            </div>
        </div>

    )
}
export default ColTitulo