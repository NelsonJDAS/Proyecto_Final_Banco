import React, { useEffect, useRef, useState } from "react";

const ContenedorPresentacionEducacion = () => {
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
            <h1 className={`text-center titulo-principal-politica ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>Educación Financiera - GeekBank</h1>
            <p className={`fs-3 text-center ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>

                En GeekBank, creemos que la educación financiera es clave para ayudar a nuestros clientes a tomar
                decisiones informadas y gestionar su dinero de manera eficiente. Nos comprometemos a ser más que una institución financiera,
                ofreciendo recursos educativos diseñados para todos los niveles de conocimiento. Desde guías sobre presupuestos, ahorro e inversiones,
                hasta herramientas interactivas y consejos sobre planificación financiera, estamos aquí para brindarle el apoyo necesario en cada paso.
                Nuestro objetivo es asegurarnos de que pueda tomar decisiones con confianza, con acceso a la información más relevante y actualizada para mejorar
                su salud financiera y alcanzar sus metas.
            </p>
        </div>
    )
}

export default ContenedorPresentacionEducacion



