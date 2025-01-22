import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../store/appContext";


const TablaCol = ({ fecha, monto, cuerpo, importe, saldo }) => {
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

    return (
        <div className={`row fw-bold border-top-0 border-end-0 border-start-0 ${store.borde} ${userLoad} py-2`} ref={sectionRef}>
            <div className="col-3 text-center fw-bold align-content-center cabecera-movimientos"><p>{fecha}</p></div>
            <div className="col-3 text-center fw-bold align-content-center  cabecera-movimientos"><p>{cuerpo}</p></div>
            <div className={`col-3 text-center fw-bold align-content-center  cabecera-movimientos ${monto === undefined ? "text-danger" : "text-success"}`}><p className={store.hidden ? "desenfoque text-white" : ""}>{monto === undefined ? importe : monto}</p></div>
            <div className={`col-3 text-center fw-bold align-content-center  cabecera-movimientos ${store.hidden ? "desenfoque" : ""}`}><p>{monto === undefined ? saldo - importe : monto + saldo}</p></div>
        </div >
    )
}

export default TablaCol