import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../store/appContext";


const ContenedorCuadrado = ({ logo, position, text, title }) => {
    const { store, actions } = useContext(Context);
    const [positionCol, SetPositionCol] = useState(position === "left" ? "animacion-izq" : "" || position === "bottom" ? "animacion-abajo" : "" || position === "up" ? "animacion-arriba" : "" || position === "right" ? "animacion-der" : "");


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
    return (
        <div className={`mx-md-2 contenedor-cuadrado espaciado-abajo  text-warning align-content-center ${store.borde} ${userLoad ? `${positionCol} visible` : positionCol} ${store.fondo === "fondo-modo-claro" ? "bg-dark text-white" : "bg-white text-dark"}`} ref={sectionRef}>
            <div className="d-flex flex-column text-center">
                {logo === null ? "" : <i className="logo-ventajas">{logo}</i>}
                <div className="text-center fs-4">
                    {title === null ? "" : <span className="fw-bold my-2">{title}</span>}
                    {text === null ? "" : <p>{text}</p>}
                </div>
            </div>
        </div>
    )
}
export default ContenedorCuadrado
