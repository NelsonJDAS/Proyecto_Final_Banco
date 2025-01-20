import React, { useEffect, useRef, useState } from "react";
import ColLateral from "../ColLateral.jsx";

const ContenedorInfoAviso = () => {
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
        <div className="container" ref={sectionRef}>
            <h1 className={`text-center titulo-politica ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>Información Legal y de Contacto de GeekBank</h1>
            <p className={`fs-3 text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                GeekBank es una entidad financiera que opera de manera completamente legítima, cumpliendo con todas las normativas
                legales y regulaciones establecidas por las autoridades competentes. Como institución responsable, nos comprometemos
                a garantizar la seguridad, la transparencia y la confianza de nuestros clientes en cada uno de los servicios que ofrecemos.
                Para más información o consultas, puede ponerse en contacto con nosotros a través de los siguientes medios:
            </p>
            <div className="row my-3">
                <ColLateral width="w-75" text="Dirección  --   Calle Ficticia 123, Ciudad Geek." position="left" userLoad={userLoad} />
                <ColLateral width="w-75" text="Correo electrónico  --  legal@geekbank.com." position="" userLoad={userLoad} />
                <ColLateral width="w-75" text="Teléfono  --  +1 (800) 123-4567." position="left" userLoad={userLoad} />
            </div>
        </div>
    )
}

export default ContenedorInfoAviso
