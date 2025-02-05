import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ColLateral from "../ColLateral.jsx";

const TarjetaCoordUso = () => {
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
        <div className="container espaciado-fondo">
            <h1 className={`text-center titulo-principal-politica ${userLoad ? "animacion-der visible" : "animacion-der"}`}>
                ¿Cómo Usarla de Forma Segura?
            </h1>
            <p className={`fs-3 text-center ${userLoad ? "animacion-der visible" : "animacion-der"}`}>
                Para garantizar la seguridad de tus transacciones, sigue estas recomendaciones:
            </p>
            <div ref={sectionRef} className="row">
                <ColLateral width="w-75" text={"Nunca compartas tu tarjeta de coordenadas con nadie"} position="left" userLoad={userLoad} />
                <ColLateral width="w-75" text={"Evita tomar fotos o almacenarla en dispositivos electrónicos"} position="" userLoad={userLoad} />
                <ColLateral width="w-75" text={"Anotala en un papel nunca en un dispositivo"} position="left" userLoad={userLoad} />
                <ColLateral width="w-75" text={"Solo ingresa coordenadas en sitios oficiales del banco"} position="" userLoad={userLoad} />
            </div >
        </div>
    )
}

export default TarjetaCoordUso
