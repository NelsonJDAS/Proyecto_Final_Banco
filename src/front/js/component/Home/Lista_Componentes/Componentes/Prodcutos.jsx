import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import { FaHandshakeSimple } from "react-icons/fa6";
const Productos = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className={`bg-productos animacion-contenedor hover contenedor-componente-interactivo my-2 text-center fw-bold ${store.borde} text-white align-content-center`}>
            <div className="d-flex flex-column">
                <p className="my-2 objeto-animado">Productos</p>
                <p className="fs-1 objeto-animado"><FaHandshakeSimple /></p>
            </div>
        </div >
    )
}

export default Productos