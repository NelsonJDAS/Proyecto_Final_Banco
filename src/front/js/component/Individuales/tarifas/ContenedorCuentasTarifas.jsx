import React, { useEffect, useRef, useState } from "react";
import ContenedorCuadrado from "../ContenedorCuadrado.jsx";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BsCreditCard2Back } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const ContenedorCuentasTarifas = () => {
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
            <h1 className={`text-center titulo-politica ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>{t('tarifas.p3')}</h1>
            <p className={`fs-3 text-center ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>{t('tarifas.p4')}</p>
            <div className="row">
                <div className="col-12 col-lg-4"><ContenedorCuadrado position="left" text={t('tarifas.text1')} title={t('tarifas.t1')} logo={<BsCreditCard2Back />} /></div>
                <div className="col-12 col-md-6 col-lg-4"><ContenedorCuadrado position="left" text={t('tarifas.text2')} title={t('tarifas.t2')} logo={<FaMoneyBillTransfer />} /></div>
                <div className="col-12 col-md-6 col-lg-4"><ContenedorCuadrado position="left" text={t('tarifas.text3')} title={t('tarifas.t3')} logo={<TbWorld />} /></div>
            </div>
        </div>
    )
}

export default ContenedorCuentasTarifas
