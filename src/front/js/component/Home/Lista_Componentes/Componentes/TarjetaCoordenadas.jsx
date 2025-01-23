import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import { FaRegIdCard } from "react-icons/fa6";

const TarjetasCoordenadas = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className={`bg-coordenadas animacion-contenedor align-content-center hover contenedor-componente-interactivo my-2 text-center fw-bold ${store.borde} text-dark d-flex flex-column`}>
            <p className="fs-1 objeto-animado"><FaRegIdCard /></p>
            <p className="mb-auto my-2 objeto-animado">Tarjeta de Coordenadas</p>
            <p className="enlace-claro">Haz clic aquí</p>
            <p className="enlace-claro">Para conseguir tu tarjeta de coordenadas</p>
        </div >
    )
}

export default TarjetasCoordenadas