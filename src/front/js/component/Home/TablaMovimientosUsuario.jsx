import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";

const TablaMovimientoUsuario = () => {
    const { store, actions } = useContext(Context);


    return (<div className={`container my-3 p-3 w-100 rounded-3 ${store.texto}`}>
        <div className="row">
            <div className="col-12 text-center fw-bold">
                <h2>Movimientos</h2>
            </div>
        </div>
        <div className="row my-3">
            <div className="col-4 text-center fw-bold"><p>Dia</p></div>
            <div className="col-4 text-center fw-bold"><p>Establecimiento / Concepto</p></div>
            <div className="col-4 text-center fw-bold"><p>Monto</p></div>
            <div className="col-12"></div>
        </div>
    </div>)
}

export default TablaMovimientoUsuario