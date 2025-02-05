import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import { GrConfigure } from "react-icons/gr";

const Configuracion = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className={`bg-configuracion animacion-contenedor hover contenedor-componente-interactivo my-2 text-center fw-bold ${store.borde} text-dark d-flex flex-column`}>
            <p className="fs-1 objeto-animado text-secondary"><GrConfigure /></p>
            <p className="align-content-start objeto-animado">Configuración</p>
            <div className="container w-50">
                <div className="form-check form-switch">
                    {store.fondo === "fondo-modo-claro" ? <>
                        <input className="form-check-input hover my-1 fs-4" type="checkbox" role="switch" checked onClick={() => {
                            actions.CambiarModo(false)
                        }} />
                    </> :
                        <>
                            <input className="form-check-input hover my-1 fs-4" type="checkbox" role="switch" onClick={() => {
                                actions.CambiarModo(true)
                            }} />
                        </>}
                    <p className="texto-componente-configuracion">Modo Claro</p>
                </div>
                <div className="form-check form-switch">
                    {store.hidden ? <>
                        <input className="form-check-input hover my-1 fs-4" type="checkbox" role="switch" checked onClick={() => {
                            actions.CambiarIncognito(!store.hidden)
                        }} />
                    </> : <>
                        <input className="form-check-input hover my-1 fs-4" type="checkbox" role="switch" onClick={() => {
                            actions.CambiarIncognito(!store.hidden)
                        }} />
                    </>}
                    <p className="texto-componente-configuracion">Ocultar Saldo</p>
                </div>
            </div>
        </div >
    )
}

export default Configuracion