import React, { useEffect, useRef, useState } from "react";

const ContenedorPresentacionPoliticas = () => {
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
            <h1 className={`text-center titulo-principal-politica ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>Politicas de Privacidad</h1>
            <p className={`fs-3 text-center ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>
                En GeekBank, valoramos profundamente y protegemos con el máximo compromiso
                la privacidad de todos y cada uno de nuestros clientes. Somos conscientes de
                que la confianza que depositan en nosotros es fundamental para construir relaciones
                sólidas y duraderas. Por ello, implementamos políticas estrictas para garantizar que
                su información personal esté siempre protegida. Esta política de privacidad tiene como
                objetivo detallar cómo recopilamos, usamos, almacenamos y salvaguardamos su información
                personal, asegurando que se trate con total cuidado, respeto y confidencialidad.
            </p>
        </div>
    )
}

export default ContenedorPresentacionPoliticas