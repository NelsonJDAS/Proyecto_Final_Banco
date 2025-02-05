import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../../store/appContext";
import ColLateral from "../ColLateral.jsx";
import { useTranslation } from "react-i18next";

const Autenticacion = () => {
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
        <div className="container espaciado-fondo">
            <h2 className={`text-center titulo-principal-politica ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>Autenticación Segura</h2>
            <p className={`fs-3 text-center ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>
                Usa contraseñas seguras y únicas para tu banca en línea.
                Activa la tarjeta de coordenadas para mas seguridad y
                nunca olvides los siguientes dos consejos.
            </p>
            <div ref={sectionRef} className="row">
                <ColLateral width="w-75" text={"Usa contraseñas unicas y fuertes"} position="left" userLoad={userLoad} />
                <ColLateral width="w-75" text={"Nunca compartas tus credenciales"} position="" userLoad={userLoad} />
            </div >
        </div >
    )
}

export default Autenticacion