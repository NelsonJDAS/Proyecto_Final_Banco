import React, { useContext, useEffect, useRef, useState } from "react";
import ContenedorCuadrado from "../ContenedorCuadrado.jsx";
import { FaBookOpen } from "react-icons/fa";
import { IoCameraSharp } from "react-icons/io5";
import { FaBitcoin } from "react-icons/fa";

const ContenedorRecursosEducacion = () => {
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
        <div className="container " ref={sectionRef}>
            <h1 className={`text-center titulo-politica ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>Recursos Disponibles</h1>
            <p className={`fs-3 text-center ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>
                En GeekBank, ofrecemos los siguientes recursos para apoyar su educación financiera:
            </p>
            <div className="row">
                <div className="col-12 col-lg-4"><ContenedorCuadrado position="left" text="Contenido sobre préstamos, inversiones y ahorro" title="Guías y artículos" logo={<FaBookOpen />} /></div>
                <div className="col-12 col-md-6 col-lg-4"><ContenedorCuadrado position="bottom" text="Participe en nuestras sesiones gratuitas sobre finanzas personales" title="Simuladores financieros" logo={<FaBitcoin />} /></div>
                <div className="col-12 col-md-6 col-lg-4"><ContenedorCuadrado position="right" text="Herramientas para calcular presupuestos y préstamos" title="Seminarios web" logo={<IoCameraSharp />} /></div>
            </div>
        </div>
    )
}

export default ContenedorRecursosEducacion


