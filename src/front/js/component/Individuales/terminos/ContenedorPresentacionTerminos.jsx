import React, { useEffect, useRef, useState } from "react";

const ContenedorPresentacionTerminos = () => {
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
            <h1 className={`text-center titulo-principal-politica ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>Términos y Condiciones - GeekBank</h1>
            <p className={`fs-3 text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                Bienvenido a GeekBank. Al acceder y utilizar nuestros servicios, usted acepta cumplir
                con los siguientes términos y condiciones. Estos términos son un acuerdo legal entre usted
                y GeekBank, y su aceptación es necesaria para hacer uso de nuestros productos y servicios. Le recomendamos
                leer detenidamente toda la información contenida en este documento, ya que al utilizar nuestros servicios,
                está aceptando los términos aquí establecidos.
            </p>
        </div>
    )
}

export default ContenedorPresentacionTerminos
