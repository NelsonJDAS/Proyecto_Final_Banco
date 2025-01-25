import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import NotificacionCol from "./NotificacionCol.jsx";


const ContenedorNotificaciones = () => {
    const { store, actions } = useContext(Context);

    const [userLoad, SetUserLoad] = useState("elemento");
    useEffect(() => {
        SetUserLoad("elemento visible")
    }, [])
    return (
        <>
            <div className="row">
                <div className="col-12 text-center fw-bold"><h3 className="text-center">Notificaciones</h3></div>
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
                            onMarcarComoLeida={actions.marcarNotificacionComoLeida} // Pasar la función
                        />
                    ))
                ) : (
                    <p>No hay notificaciones.</p> // Mensaje si no hay notificaciones
                )}
            </div>
            {/* <div className={`row fw-bold ${store.borde} ${userLoad} py-2 px-3 scroll`}>
                <NotificacionCol cuerpo="No te olvides de solicitar tu tarjeta de coordenadas" />
                <NotificacionCol cuerpo="Si eres nuevo usuario puedes modificar tus configuraciones en el componente de abajo" />
                <NotificacionCol cuerpo="Necesitas ayuda? no dudes en contactar con nuestro Chat" />
                <NotificacionCol cuerpo="Tranferencia realizada hace 10 minutos" />
            </div> */}
        </>
    )
}

export default ContenedorNotificaciones