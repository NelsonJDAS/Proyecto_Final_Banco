import React, { useContext, useEffect, useRef, useState } from "react";
import { TbCertificate } from "react-icons/tb";
import { Context } from "../../store/appContext";


const ColTitulo = ({ title, position }) => {
    const [positionCol, SetPositionCol] = useState(position === "left" ? "animacion-izq-titulo" : "animacion-der-titulo");
    const { store, actions } = useContext(Context);

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
        <div className={`col-12 p-3 align-content-center text-center border-top border-bottom  d-flex flex-column contenedor-titulo ${store.fondo === "fondo-modo-claro" ? "text-info bg-dark border-info" : "text-dark bg-white border-dark"} ${userLoad ? `${positionCol} visible` : positionCol} `} ref={sectionRef}>
            <i className="icono-titulo"><TbCertificate /></i>
            <span className="fs-2">{title}</span>
        </div>

    )
}
export default ColTitulo