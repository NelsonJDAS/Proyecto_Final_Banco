import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../store/appContext";
import NotificacionCol from "./NotificacionCol.jsx";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ContenedorNotificaciones = () => {
    const { store, actions } = useContext(Context);

    const [pagination, SetPagination] = useState([0, 5])
    const flechaDer = useRef("");
    const flechaIzq = useRef("");
    const [notificaciones, setNotificaciones] = useState("");

    const [userLoad, SetUserLoad] = useState("elemento");
    useEffect(() => {
        SetUserLoad("elemento visible");
    }, []);

    useEffect(() => {
        setNotificaciones(store.listaNotificaciones);
    }, [store.listaNotificaciones]);



    useEffect(() => {
        console.log(pagination)
        console.log(notificaciones.length)
        if (pagination[0] - 5 < 0) {
            flechaDer.current.classList.remove("flecha-cancelada");
            flechaIzq.current.classList.add("flecha-cancelada");
        } else if (pagination[0] + 5 >= Math.ceil(store.listaNotificaciones.length / 5)) {
            flechaIzq.current.classList.remove("flecha-cancelada");
            flechaDer.current.classList.add("flecha-cancelada");
        } else {
            flechaIzq.current.classList.remove("flecha-cancelada");
            flechaDer.current.classList.remove("flecha-cancelada");
        }
    }, [])

    // Función para marcar una notificación como leída
    const onMarcarComoLeida = async (notificacionId) => {
        // Llama a la acción en el flux para marcar la notificación como leída
        await actions.marcarNotificacionComoLeida(notificacionId);

        // Actualiza el store localmente
        const notificacionesActualizadas = store.listaNotificaciones.map((notificacion) =>
            notificacion.id === notificacionId ? { ...notificacion, leida: true } : notificacion
        );
        actions.setNotificaciones(notificacionesActualizadas); // Actualiza el store
    };

    return (
        <div className={store.notificacionesHidden ? "d-none" : ""}>
            <div className="row">
                <div className="col-12 text-center fw-bold">
                    <h3 className="text-center">Notificaciones</h3>
                    <div className="row">
                        <div className="col-4 text-center">
                            <i className="mx-2 hover fs-3" ref={flechaIzq} onClick={() => { SetPagination([pagination[0] - 5, pagination[1] - 5]) }}><IoIosArrowBack /></i>
                        </div>
                        <div className="col-4 text-center">
                            <p className="mt-2 fw-bold">{pagination[1] / 5} / {Math.ceil(store.listaNotificaciones.length / 5)}</p>
                        </div>
                        <div className="col-4 text-center">
                            <i className="mx-2 hover fs-3" ref={flechaDer} onClick={() => { SetPagination([pagination[0] + 5, pagination[1] + 5]) }}><IoIosArrowForward /></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`row fw-bold ${store.borde} ${userLoad} py-2 px-3 contenedor-notificaciones`}>
                {/* Mapeo de notificaciones */}
                <div className="row h-75 mx-0 px-0">
                    {store.listaNotificaciones && store.listaNotificaciones.length > 0 ? (
                        store.listaNotificaciones.slice(pagination[0], pagination[1]).map((listaNotificaciones) => (
                            <NotificacionCol
                                key={listaNotificaciones.id}
                                id={listaNotificaciones.id} // Pasar el ID de la notificación
                                cuerpo={listaNotificaciones.mensaje}
                                leida={listaNotificaciones.leida}
                                onMarcarComoLeida={onMarcarComoLeida} // Pasar la función
                            />
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <p>Cargando Notificaciones</p>
                        </div> // Mensaje si no hay notificaciones
                    )}
                </div>
            </div>
        </div >
    )
}

export default ContenedorNotificaciones;