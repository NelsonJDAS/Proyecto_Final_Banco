import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../store/appContext";
import { IoIosNotificationsOutline } from "react-icons/io";

const NotificacionCol = ({ cuerpo, leida, id, onMarcarComoLeida }) => {
    const { store, actions } = useContext(Context);

    const [userLoad, SetUserLoad] = useState("desvanecer-noti");
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
            SetUserLoad("desvanecer-noti visible")
        } else {
            SetUserLoad("desvanecer-noti")
        }
    }, [isVisible])


    return (
        <div className={`col-12 text-center fw-bold align-content-center border-top-0 border-end-0 border-start-0 my-3 ${store.borde} py-3 my-2 ${leida ? "text-muted" : ""} ${userLoad}`} ref={sectionRef}>
            <div className="row">
                {/* Ícono de notificación */}
                <div className="align-content-center text-center col-1 fs-3">
                    <i>
                        <IoIosNotificationsOutline
                            onClick={() => {
                                if (!leida) { // Solo permite marcar como leída si no está leída
                                    onMarcarComoLeida(id);
                                }
                            }}
                            style={{ cursor: leida ? "default" : "pointer" }} // Cambia el cursor si está leída
                        />
                    </i>
                </div>

                {/* Mensaje de la notificación */}
                <div className="align-content-center text-center col-11">
                    <p className="m-0">{cuerpo}</p>
                </div>
            </div>
        </div>
    );
};

export default NotificacionCol;