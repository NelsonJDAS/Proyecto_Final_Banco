import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import { IoIosChatboxes } from "react-icons/io";


const AtencionCliente = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className={`bg-atencion animacion-contenedor hover contenedor-componente-interactivo my-2 text-center fw-bold ${store.borde} text-white align-content-center`}>
            <div className="d-flex flex-column">
                <p className="my-2 objeto-animado">Atencion Cliente</p>
                <p className="fs-1 objeto-animado"><IoIosChatboxes /></p>
            </div>
        </div >
    )
}

export default AtencionCliente