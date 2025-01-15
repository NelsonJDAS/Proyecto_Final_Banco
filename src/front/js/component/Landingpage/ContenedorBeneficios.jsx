import React, { useEffect, useRef, useState } from "react";
import Bannerimg from "../../../img/Bannerimg.png";

const ContenedorBeneficios = () => {

    const [userLoad, SetUserLoad] = useState("animacion-banner");

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
                threshold: 0.4, // Al menos el 40% del componente debe estar visible
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
            SetUserLoad("animacion-banner visible")
        }
    }, [isVisible])

    return (<div className="container">
        <div className="row">
            <div className="col-12 text-center"><h2 className={`titulo-landing ${userLoad ? "animacion-der visible" : "animacion-der"}`}>¿Por qué elegir Geek Bank?</h2></div>
        </div>
        <div className="row">
            <div className="col-4"><div className="bg-light mx-2 contenedor-beneficios">adasojdaoi</div></div>
            <div className="col-4"><div className="bg-light mx-2 contenedor-beneficios">adasojdaoi</div></div>
            <div className="col-4"><div className="bg-light mx-2 contenedor-beneficios">adasojdaoi</div></div>
        </div>
    </div>)
}

export default ContenedorBeneficios
