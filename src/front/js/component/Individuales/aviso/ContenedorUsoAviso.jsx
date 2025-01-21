import React, { useEffect, useRef, useState } from "react";
import ColLateral from "../ColLateral.jsx";
import { useTranslation } from "react-i18next";

const ContenedorUsoAviso = () => {
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
            <h1 className={`text-center titulo-politica ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>{t('aviso.p7')}</h1>
            <div className="row my-md-3">
                <ColLateral width="w-100" text={t('aviso.c4')} position="left" userLoad={userLoad} />

                <ColLateral width="w-100" text={t('aviso.c5')} position="" userLoad={userLoad} />

                <ColLateral width="w-100" text={t('aviso.c6')} position="left" userLoad={userLoad} />
            </div >
        </div >
    )
}

export default ContenedorUsoAviso

