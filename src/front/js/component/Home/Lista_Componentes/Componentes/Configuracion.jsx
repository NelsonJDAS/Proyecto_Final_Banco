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
                <div class="form-check form-switch">
                    <input class="form-check-input hover my-1 fs-4" type="checkbox" role="switch" />
                    <p>Modo Claro</p>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input hover my-1 fs-4" type="checkbox" role="switch" />
                    <p>Ocultar Saldo</p>
                </div>
            </div>
        </div >
    )
}

export default Configuracion