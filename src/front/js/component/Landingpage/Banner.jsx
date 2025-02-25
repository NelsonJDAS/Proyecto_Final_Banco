import React, { useEffect, useRef, useState } from "react";
import Bannerimg from "../../../img/Bannerimg.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";// importacion de traducción

const Banner = () => {
    const  { t } = useTranslation()
    const [userLoad, SetUserLoad] = useState("animacion-abajo");

    const navigate = useNavigate(null);

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
                threshold: 0.8, // Al menos el 80% del componente debe estar visible
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
            SetUserLoad("animacion-abajo visible")
        }
    }, [isVisible])

    return (
        <div className="contenedor-landing">
            <div className="img-banner w-100 align-content-center text-center text-white" ref={sectionRef} style={{ backgroundImage: `url(${Bannerimg})` }}>
                <div className={`d-flex flex-column contenido-banner ${userLoad}`}>
                    <p>{t('Landing3.p1')}</p>
                    <p className="mx-2 fs-2">{t('Landing3.p2')}</p>
                    <div><button className="rounded-pill btn border-white w-25 fw-bold text-white mx-3 fs-1 btn-landing hover" onClick={() => {
                        navigate("/login")
                    }}>{t('Landing3.btn')}</button></div>
                </div>
            </div>
        </div>)
}

export default Banner




