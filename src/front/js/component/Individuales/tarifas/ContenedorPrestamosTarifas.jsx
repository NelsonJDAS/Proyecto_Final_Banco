import React, { useEffect, useRef, useState } from "react";
import ContenedorCuadrado from "../ContenedorCuadrado.jsx";
import { IoRocketOutline } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";
import { FaRegHourglassHalf } from "react-icons/fa6";

const ContenedorPrestamosTarifas = () => {
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
            <h1 className={`text-center titulo-politica ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>Prestamos y Créditos</h1>
            <p className={`fs-3 text-center ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>
                Ofrecemos condiciones claras y flexibles para nuestros préstamos.
            </p>
            <div className="row">
                <div className="col-12 col-lg-4"><ContenedorCuadrado position="left" text="1.5% del monto solicitado" title="Comisión por apertura" logo={<GrMoney />} /></div>
                <div className="col-12 col-md-6 col-lg-4"><ContenedorCuadrado position="left" text="No genera ningún costo adicional" title="Pago anticipado" logo={<IoRocketOutline />} /></div>
                <div className="col-12 col-md-6 col-lg-4"><ContenedorCuadrado position="left" text="3% mensual sobre saldos vencidos" title="Intereses moratorios" logo={<FaRegHourglassHalf />} /></div>
            </div>
        </div>
    )
}

export default ContenedorPrestamosTarifas

