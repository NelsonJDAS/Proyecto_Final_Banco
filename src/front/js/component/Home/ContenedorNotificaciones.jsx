import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import NotificacionCol from "./NotificacionCol.jsx";

const ContenedorNotificaciones = () => {
    const { store, actions } = useContext(Context);

    const [userLoad, SetUserLoad] = useState("elemento");
    useEffect(() => {
        SetUserLoad("elemento visible");
    }, []);

    // Función para marcar una notificación como leída
    const onMarcarComoLeida = async (notificacionId) => {
        // Llama a la acción en el flux para marcar la notificación como leída
        await actions.marcarNotificacionComoLeida(notificacionId);

        // Actualiza el store localmente
        const notificacionesActualizadas = store.notificaciones.map((notificacion) =>
            notificacion.id === notificacionId ? { ...notificacion, leida: true } : notificacion
        );
        actions.setNotificaciones(notificacionesActualizadas); // Actualiza el store
    };

    return (
        <>
            <div className="row">
                <div className="col-12 text-center fw-bold">
                    <h3 className="text-center">Notificaciones</h3>
                </div>
            </div>
            <div className={`row fw-bold ${store.borde} ${userLoad} py-2 px-3 scroll`}>
                {/* Mapeo de notificaciones */}
                {store.notificaciones && store.notificaciones.length > 0 ? (
                    store.notificaciones.map((notificacion) => (
                        <NotificacionCol
                            key={notificacion.id}
                            id={notificacion.id} // Pasar el ID de la notificación
                            cuerpo={notificacion.mensaje}
                            leida={notificacion.leida}
                            onMarcarComoLeida={onMarcarComoLeida} // Pasar la función
                        />
                    ))
                ) : (
                    <p>No hay notificaciones.</p> // Mensaje si no hay notificaciones
                )}
            </div>
        </>
    );
};

export default ContenedorNotificaciones;