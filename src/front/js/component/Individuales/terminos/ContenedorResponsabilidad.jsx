import React, { useContext, useEffect, useRef, useState } from "react";
import ContenedorCuadrado from "../ContenedorCuadrado.jsx";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoDocumentOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { useTranslation } from "react-i18next";

const ContenedorResponsabilidad = () => {
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
        <div className="container">
            <h1 className={`text-center titulo-politica ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>{t('terminos.p5')}</h1>
            <p className={`fs-3 text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`} ref={sectionRef}>{t('terminos.p6')}</p>
            <div className="row">
                <div className="col-12 col-lg-4 my-3 m-lg-0"><ContenedorCuadrado position="left" text={t('terminos.text1')} title={t('terminos.ti1')} logo={<IoDocumentOutline />} /></div>
                <div className="col-12 col-md-6 col-lg-4 my-3 m-lg-0"><ContenedorCuadrado position="bottom" text={t('terminos.text2')} title={t('terminos.ti2')} logo={<CiLock />} /></div>
                <div className="col-12 col-md-6 col-lg-4 my-3 m-lg-0"><ContenedorCuadrado position="right" text={t('terminos.text3')} title={t('terminos.ti3')} logo={<IoIosInformationCircleOutline />} /></div>
            </div>
        </div>
    )
}

// logo, position, text, title, userLoad

{/* <li>Proveer información veraz y actualizada.</li>
<li>Proteger la confidencialidad de sus credenciales de acceso.</li>
<li>
    Notificar inmediatamente cualquier uso no autorizado de su cuenta.
</li> */}

export default ContenedorResponsabilidad



