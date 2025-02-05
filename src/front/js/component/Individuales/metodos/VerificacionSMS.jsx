import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ColLateral from "../ColLateral.jsx";

const VerificacionSMS = () => {
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
            <h1 className={`text-center titulo-principal-politica ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>
                Código de Verificación por SMS
            </h1>
            <p className={`fs-3 text-center ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>
                Estamos implementando un nuevo sistema de seguridad basado en códigos de verificación únicos (OTP - One-Time Password), enviados a tu número de celular registrado. Podras disfrutar de los siguientes beneficios:
            </p>
            <div ref={sectionRef} className="row">
                <ColLateral width="w-75" text={"Mayor seguridad en cada transacción"} position="left" userLoad={userLoad} />
                <ColLateral width="w-75" text={"Protección adicional contra accesos no autorizados"} position="" userLoad={userLoad} />
                <ColLateral width="w-75" text={"No requiere almacenamiento físico"} position="left" userLoad={userLoad} />
            </div >
        </div>
    )
}

export default VerificacionSMS



