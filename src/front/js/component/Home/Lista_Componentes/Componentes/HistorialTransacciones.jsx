import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import { BiTransfer } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const HistorialTransacciones = () => {
    const { store, actions } = useContext(Context);

    const navigate = useNavigate("")
    return (
        <div className={`bg-transferencias animacion-contenedor hover contenedor-componente-interactivo my-2 text-center fw-bold ${store.borde} text-dark d-flex flex-column`} onClick={() => {
            navigate("/movimientos")
        }}>
            <p className="fs-1 objeto-animado"><BiTransfer /></p>
            <p>Movimientos</p>
            <p>con cada transferencia</p>
            <p className="align-content-start mb-auto my-2 objeto-animado">Historial De Transacciones</p>
        </div >
    )
}

export default HistorialTransacciones