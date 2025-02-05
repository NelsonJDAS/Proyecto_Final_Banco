import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Presentacion = () => {
    const { t } = useTranslation()
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
        <div className="container espaciado-fondo" ref={sectionRef}>
            <h1 className={`text-center titulo-principal-politica ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>
                Métodos de Seguridad en Geek Bank
            </h1>
            <p className={`fs-3 text-center ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>
                En GeekBank, protegemos tus transacciones con sistemas de seguridad avanzados.
                Conoce cómo funciona nuestra tarjeta de coordenadas y el nuevo método de código de verificación por
                SMS, que estará disponible próximamente.
            </p>
        </div>
    )
}

export default Presentacion



