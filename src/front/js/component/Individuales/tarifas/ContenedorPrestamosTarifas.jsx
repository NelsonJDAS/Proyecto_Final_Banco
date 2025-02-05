import React, { useEffect, useRef, useState } from "react";
import ContenedorCuadrado from "../ContenedorCuadrado.jsx";
import { IoRocketOutline } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const ContenedorPrestamosTarifas = () => {
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
        <div className="container" ref={sectionRef}>
            <h1 className={`text-center titulo-politica ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>{t('tarifas.p7')}</h1>
            <p className={`fs-3 text-center ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>{t('tarifas.p8')}</p>
            <div className="row">
                <div className="col-12 col-lg-4 my-3 my-lg-0"><ContenedorCuadrado position="left" text={t('tarifas.text4')} title={t('tarifas.t4')} logo={<GrMoney />} /></div>
                <div className="col-12 col-md-6 col-lg-4 my-3 my-lg-0"><ContenedorCuadrado position="left" text={t('tarifas.text5')} title={t('tarifas.t5')} logo={<IoRocketOutline />} /></div>
                <div className="col-12 col-md-6 col-lg-4 my-3 my-lg-0"><ContenedorCuadrado position="left" text={t('tarifas.text6')} title={t('tarifas.t6')} logo={<FaRegHourglassHalf />} /></div>
            </div>
        </div>
    )
}

export default ContenedorPrestamosTarifas

