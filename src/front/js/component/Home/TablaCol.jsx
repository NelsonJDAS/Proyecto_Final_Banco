import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../store/appContext";


const TablaCol = ({ fecha, monto, cuerpo, importe, saldo, tipo }) => {
    const { store, actions } = useContext(Context);

    const [userLoad, SetUserLoad] = useState("elemento-tabla");
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
            SetUserLoad("elemento-tabla visible")
        }
    }, [isVisible])

    // Determinar el color del importe
    const colorImporte = () => {
        if (tipo === "depósito") {
            return "text-success";
        } else if (tipo === "retiro") {
            return "text-danger";
        } else if (tipo === "transferencia") {
            // Las transferencias dependen del signo del importe
            return importe < 0 ? "text-danger" : "text-success";
        } else {
            // Por defecto, usar verde (puedes cambiarlo si lo prefieres)
            return "text-success";
        }
    };

    return (
        <div className={`row fw-bold border-top-0 border-end-0 border-start-0 ${store.borde} ${userLoad} py-2`} ref={sectionRef}>
            <div className="col-3 text-center fw-bold align-content-center cabecera-movimientos">
                <p>{new Date(fecha).toLocaleDateString()}</p> {/* Formatear fecha */}
            </div>
            <div className="col-3 text-center fw-bold align-content-center cabecera-movimientos">
                <p>{cuerpo}</p>
            </div>
            <div className={`col-3 text-center fw-bold align-content-center cabecera-movimientos ${colorImporte()}`}>
                <p className={store.hidden ? "desenfoque text-white" : ""}>
                    {importe}
                </p>
            </div>
            <div className={`col-3 text-center fw-bold align-content-center cabecera-movimientos ${store.hidden ? "desenfoque" : ""}`}>
                <p>{saldo.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default TablaCol;