import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import { GrConfigure } from "react-icons/gr";

const Configuracion = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className={`bg-configuracion animacion-contenedor hover contenedor-componente-interactivo my-2 text-center fw-bold ${store.borde} text-dark d-flex flex-column`}>
            <p className="fs-1 objeto-animado text-secondary"><GrConfigure /></p>
            <span className="align-content-start my-3">Configuración</span>
            <p className="mx-3 mt-3">Aquí puedes ajustar y personalizar tu configuración.</p>
        </div >
    )
}

export default Configuracion