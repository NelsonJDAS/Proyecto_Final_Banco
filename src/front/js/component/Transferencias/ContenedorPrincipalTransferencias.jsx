import React, { useEffect, useState } from "react";
import { MdOutlineEuroSymbol } from "react-icons/md";

const ContenedorPrincipalTransferencias = () => {

    const [userLoad, SetUserLoad] = useState(false);

    useEffect(() => {
        SetUserLoad(true)
    }, [])

    return (
        <>
            <h1 className={`text-center titulo-transferencia ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>Transferencias</h1>
            <div className={`container contenedor-principal-transferencias text-dark ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                <div className="row">
                    <div className={`my-2 col-lg-6 d-flex flex-column text-center ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>
                        <label className="my-1 fw-bold fs-4 label-t">Cuenta Remitente</label>
                        <input className="mx-md-3 text-center py-1 rounded-3 bg-white border-1 border-white text-dark bg-opacity-50 fs-4 fw-bold input-transferencias" type="text" />
                        <label className="my-1 fw-bold text-end label-t mx-3">Saldo:  6000</label>
                    </div>
                    <div className={`my-md-2  col-lg-6 d-flex flex-column text-center ${userLoad ? "animacion-der visible" : "animacion-der"}`}>
                        <label className="fw-bold fs-3 label-t">Monto</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text py-2"><MdOutlineEuroSymbol /></span>
                            <input type="text" className="form-control  text-center bg-white text-dark bg-opacity-50 fs-4 fw-bold input-transferencias" aria-label="Amount (to the nearest dollar)" />
                            <span className="input-group-text py-2">.00</span>
                        </div>
                    </div>
                    <div className={`my-2 col-lg-6 d-flex flex-column text-center ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>
                        <label className="fw-bold fs-3 label-t">Nombre Destinario</label>
                        <input className="mx-md-3 text-center py-1 rounded-1 bg-white border-1 border-white text-dark bg-opacity-50 fs-4 fw-bold input-transferencias" type="text" />
                    </div>
                    <div className={`my-2 col-lg-6 d-flex flex-column text-center ${userLoad ? "animacion-der visible" : "animacion-der"}`}>
                        <label className="my-1 fw-bold fs-4 label-t">Cuenta Destinario</label>
                        <input className="mx-md-3 text-center py-1 rounded-3 bg-white border-1 border-white text-dark bg-opacity-50 fs-4 fw-bold input-transferencias" type="text" />
                    </div>
                    <div className={`my-1 col-12 d-flex flex-column text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                        <label className="my-1 fw-bold fs-4 label-t">Concepto (opcional)</label>
                        <textarea className="mx-md-3 concepto-transferencias rounded-1 bg-white border-1 border-white text-dark bg-opacity-50 fs-4 fw-bold input-transferencias" type="text" />
                    </div>
                    <div className={`col-12 mt-3 d-flex flex-column text-center  ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                        <button className="btn btn-transferencias">Enviar Transferencia</button>
                    </div>
                </div>
                <div className="row"></div>
                <div className="row"></div>
                <div className="row"></div>
            </div >
        </>
    )
}

export default ContenedorPrincipalTransferencias