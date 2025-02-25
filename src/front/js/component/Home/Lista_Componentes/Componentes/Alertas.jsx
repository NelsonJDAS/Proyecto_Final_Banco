import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import { IoAlertCircleSharp } from "react-icons/io5";

const Alertas = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className={`bg-alertas animacion-contenedor align-content-center hover contenedor-componente-interactivo my-2 text-center fw-bold ${store.borde} text-white d-flex flex-column`} onClick={() => {
            actions.CambiarNotificaciones(false)
        }}>
            <p className="fs-1 objeto-animado"><IoAlertCircleSharp /></p>
            <p className="mb-auto my-2 objeto-animado">Alertas</p>
            <p className="enlace-claro">Haz clic en el componente</p>
            <p className="enlace-claro">para modificar tus Notificaciones.</p>
        </div >
    )
}

export default Alertas