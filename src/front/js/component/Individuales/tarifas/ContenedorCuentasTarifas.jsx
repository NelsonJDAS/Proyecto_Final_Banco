import React, { useEffect, useRef, useState } from "react";
import ContenedorCuadrado from "../ContenedorCuadrado.jsx";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BsCreditCard2Back } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

const ContenedorCuentasTarifas = () => {
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
            <h1 className={`text-center titulo-politica ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>Cuentas Bancarias</h1>
            <p className={`fs-3 text-center ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>
                En GeekBank, trabajamos incansablemente para garantizar que nuestros clientes tengan acceso a información clara,
                precisa y completamente transparente sobre nuestras tarifas y comisiones. Nos enorgullece ofrecer una experiencia
                bancaria excepcional que prioriza la confianza y la claridad en cada interacción. Sabemos que entender los costos asociados
                con los servicios bancarios es fundamental para tomar decisiones informadas, por lo que nos aseguramos de que toda la información
                relacionada con nuestras tarifas y comisiones sea presentada de manera detallada, comprensible y sin sorpresas.
            </p>
            <div className="row">
                <div className="col-12 col-lg-4"><ContenedorCuadrado position="left" text="5 € mensuales, exento con saldo promedio mayor a 1,000 €." title="Mantenimiento de cuenta" logo={<BsCreditCard2Back />} /></div>
                <div className="col-12 col-md-6 col-lg-4"><ContenedorCuadrado position="left" text="Sin costo. Puedes enviar dinero entre cuentas del mismo banco de forma gratuita" title="Transferencias internas" logo={<FaMoneyBillTransfer />} /></div>
                <div className="col-12 col-md-6 col-lg-4"><ContenedorCuadrado position="left" text="15 € por transacción. Este costo se aplica cuando realizas transferencias a bancos en otros países" title="Transferencias internacionales" logo={<TbWorld />} /></div>
            </div>
        </div>
    )
}

export default ContenedorCuentasTarifas
