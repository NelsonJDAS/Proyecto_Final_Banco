import React, { useContext, useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Context } from "../../../store/appContext";

const Mensaje = ({ textoBot, textoUser }) => {
    const [userLoad, SetUserLoad] = useState(false)

    const { store, actions } = useContext(Context);

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
        }
    }, [isVisible])

    return (
        <div ref={sectionRef}>
            <div className="row my-2">
                <div className="col-4"></div>
                <div className="col-8">
                    <div className={`mensaje-chat ${userLoad ? "mensaje-chat-animacion visible" : ""}`}>
                        <div className="row">
                            <div className="col-12 text-end"><p className="mx-2"> (Tu) </p></div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <p className={`fw-bold ${store.fondo === "fondo-modo-claro" ? "text-info" : " "} ${userLoad ? "animacion-mensaje visible" : "animacion-mensaje"}`}>{textoUser}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-8">
                    <div className={`mensaje-chat ${userLoad ? "mensaje-chat-animacion visible" : ""}`}>
                        <div className="row">
                            <div className="col-12"><p className="mx-2"> IA-lejandro <i><FaUserCircle /></i> </p></div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <p className={`fw-bold ${store.fondo === "fondo-modo-claro" ? "text-info" : " "} ${userLoad ? "animacion-mensaje visible" : "animacion-mensaje"}`}>{textoBot}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}

export default Mensaje