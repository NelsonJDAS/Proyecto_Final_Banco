import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../../store/appContext";
import ColLateral from "../ColLateral.jsx";
import { useTranslation } from "react-i18next";

const ContenedorUsoInformacion = () => {
    const { t } = useTranslation()
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
            <h2 className="text-center titulo-politica my-3">{t('Politicas.p5')}</h2>
            <div ref={sectionRef} className="row">
                <ColLateral width="w-75" text={t('Politicas.c1')} position="left" userLoad={userLoad} />
                <ColLateral width="w-75" text={t('Politicas.c2')} position="" userLoad={userLoad} />
                <ColLateral width="w-75" text={t('Politicas.c3')} position="left" userLoad={userLoad} />
                <ColLateral width="w-75" text={t('Politicas.c4')} position="" userLoad={userLoad} />
            </div >
        </div >
    )
}

export default ContenedorUsoInformacion