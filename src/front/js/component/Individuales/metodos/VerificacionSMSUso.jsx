import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ContenedorCuadrado from "../ContenedorCuadrado.jsx";
import { MdOutlineSms } from "react-icons/md";
import { TbPassword } from "react-icons/tb";
import { PiIdentificationCard } from "react-icons/pi";

const VerificacionSMSUso = () => {
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
            <h1 className={`text-center titulo-principal-politica ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>{t('metodos.p9')}</h1>
            <div className="row">
                <div className="col-12 col-lg-4 my-3 mb-lg-3"><ContenedorCuadrado position="left" text={t('metodos.text1')} title={t('metodos.ti1')} logo={<MdOutlineSms />} /></div>
                <div className="col-12 col-md-6 col-lg-4 my-3 mb-lg-3"><ContenedorCuadrado position="bottom" text={t('metodos.text2')} title={t('metodos.ti2')} logo={<TbPassword />} /></div>
                <div className="col-12 col-md-6 col-lg-4 my-3 mb-lg-3"><ContenedorCuadrado position="right" text={t('metodos.text3')} title={t('metodos.ti3')} logo={<PiIdentificationCard />} /></div>
            </div>
        </div>
    )
}

export default VerificacionSMSUso



