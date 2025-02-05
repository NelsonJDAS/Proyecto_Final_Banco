import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const ContenedorPresentacionConsejos = () => {
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
                Consejos de Seguridad Bancaria
            </h1>
            <p className={`fs-3 text-center ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>
                En GeekBank, tu seguridad es nuestra prioridad.
                Queremos que disfrutes de una experiencia bancaria segura y protegida,
                por eso te ofrecemos estas recomendaciones esenciales para evitar fraudes y proteger
                tu información personal y financiera. Siguiendo estas buenas prácticas, puedes reducir
                riesgos y operar con total tranquilidad.
            </p>
        </div>
    )
}

export default ContenedorPresentacionConsejos



