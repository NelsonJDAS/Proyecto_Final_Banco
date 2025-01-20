import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../../store/appContext";
import ColLateral from "../ColLateral.jsx";

const ContenedorUsoInformacion = () => {
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
        <div className="container">
            <h2 className="text-center titulo-politica my-3">Beneficios del Uso de la Información</h2>
            <div ref={sectionRef} className="row">
                <ColLateral width="w-75" text="Proveer y gestionar los servicios bancarios" position="left" userLoad={userLoad} />
                <ColLateral width="w-75" text="Procesar transacciones y pagos" position="" userLoad={userLoad} />
                <ColLateral width="w-75" text=" Mejorar nuestros productos y servicios" position="left" userLoad={userLoad} />
                <ColLateral width="w-75" text="Cumplir con obligaciones legales y regulatorias" position="" userLoad={userLoad} />
            </div >
        </div >
    )
}

export default ContenedorUsoInformacion