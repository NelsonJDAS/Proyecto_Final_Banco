import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../store/appContext";
import { MdOutlinePercent } from "react-icons/md";
import { TbClick } from "react-icons/tb";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { useTranslation } from "react-i18next";// importacion de traducción

const ContenedorBeneficios = () => {
    const { t } = useTranslation();
    const { store, actions } = useContext(Context);

    const [userLoad, SetUserLoad] = useState(false);
    const [userLoadv2, SetUserLoadv2] = useState(false);

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
                threshold: 0.3, // Al menos el 30% del componente debe estar visible
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

    useEffect(() => {
        SetUserLoadv2(true)
    }, [])

    return (
        <div className="contenedor-landing">
            <div className="container" ref={sectionRef}>
                <div className="row my-3">
                    <div className="col-12 text-center"><h2 className={`titulo-landing ${userLoadv2 ? "animacion-izq visible" : "animacion-izq"}`}>{t('Landing2.p1_1')}</h2></div>
                </div>
                <div className="row">
                    <div className="col-lg-3 my-3 col-md-8 col-6">
                        <div className={`mx-0 mx-md-2 my-3 my-md-0 contenedor-ventajas text-info align-content-center ${store.borde} ${userLoad ? "animacion-izq visible" : "animacion-izq"} ${store.fondo === "fondo-modo-claro" ? "bg-dark" : "bg-white"}`}>
                            <div className="d-flex flex-column text-center">
                                <i className="logo-ventajas"><FaUsers /></i>
                                <div className="text-center fs-4 fw-bold">
                                    <p>{t('Landing2.p1_2')}</p>
                                    <p>{t('Landing2.p1_3')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 my-3 col-md-4 col-6">
                        <div className={`mx-0 mx-md-2 my-3 my-md-0 contenedor-ventajas text-info align-content-center ${store.borde} ${userLoad ? "animacion-arriba visible" : "animacion-arriba"} ${store.fondo === "fondo-modo-claro" ? "bg-dark" : "bg-white"}`}>
                            <div className="d-flex flex-column text-center">
                                <i className="logo-ventajas"><BsGraphUpArrow /></i>
                                <div className="text-center fs-4">
                                    <p className="fw-bold">{t('Landing2.p2')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 my-3 col-md-4 col-6">
                        <div className={`mx-0 mx-md-2 my-3 my-md-0 contenedor-ventajas text-info align-content-center ${store.borde} ${userLoad ? "animacion-arriba visible" : "animacion-arriba"} ${store.fondo === "fondo-modo-claro" ? "bg-dark" : "bg-white"}`}>
                            <div className="d-flex flex-column text-center">
                                <i className="logo-ventajas"><MdOutlinePercent /></i>
                                <div className="text-center fs-4">
                                    <p className="fw-bold">{t('Landing2.p3')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 my-3 col-md-8 col-6">
                        <div className={`mx-0 mx-md-2 my-3 my-md-0 contenedor-ventajas text-info align-content-center ${store.borde} ${userLoad ? "animacion-der visible" : "animacion-der"} ${store.fondo === "fondo-modo-claro" ? "bg-dark" : "bg-white"}`}>
                            <div className="d-flex flex-column text-center">
                                <i className="logo-ventajas"><FaRegMoneyBillAlt /></i>
                                <div className="text-center fs-4">
                                    <p className="fw-bold">{t('Landing2.p4')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 my-3 col-md-8 col-6">
                        <div className={`mx-0 mx-md-2 my-3 my-md-0 contenedor-ventajas text-info align-content-center ${store.borde} ${userLoad ? "animacion-izq visible" : "animacion-izq"} ${store.fondo === "fondo-modo-claro" ? "bg-dark" : "bg-white"}`}>
                            <div className="d-flex flex-column text-center">
                                <i className="logo-ventajas"><RiSecurePaymentLine /></i>
                                <div className="text-center fs-4">
                                    <p className="fw-bold">{t('Landing2.p5')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 my-3 col-md-4 col-6">
                        <div className={`mx-0 mx-md-2 my-3 my-md-0 contenedor-ventajas text-info align-content-center ${store.borde} ${userLoad ? "animacion-abajo visible" : "animacion-abajo"} ${store.fondo === "fondo-modo-claro" ? "bg-dark" : "bg-white"}`}>
                            <div className="d-flex flex-column text-center">
                                <i className="logo-ventajas"><MdOutlineSystemSecurityUpdateGood /></i>
                                <div className="text-center fs-4">
                                    <p className="fw-bold">{t('Landing2.p6')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 my-3 col-md-4 col-6">
                        <div className={`mx-0 mx-md-2 my-3 my-md-0 contenedor-ventajas text-info align-content-center ${store.borde} ${userLoad ? "animacion-abajo visible" : "animacion-abajo"} ${store.fondo === "fondo-modo-claro" ? "bg-dark" : "bg-white"}`}>
                            <div className="d-flex flex-column text-center">
                                <i className="logo-ventajas"><AiOutlineGlobal /></i>
                                <div className="text-center fs-4">
                                    <p className="fw-bold">{t('Landing2.p7')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 my-3 col-md-8 col-6">
                        <div className={`mx-0 mx-md-2 my-3 my-md-0 contenedor-ventajas text-info align-content-center ${store.borde} ${userLoad ? "animacion-der visible" : "animacion-der"} ${store.fondo === "fondo-modo-claro" ? "bg-dark" : "bg-white"}`}>
                            <div className="d-flex flex-column text-center">
                                <i className="logo-ventajas"><TbClick /></i>
                                <div className="text-center fs-4">
                                    <p className="fw-bold">{t('Landing2.p8')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContenedorBeneficios
