import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const BloqueoDesbloqueoCuentas = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate("");

    return (
        <div className={`bg-cuentas animacion-contenedor hover contenedor-componente-interactivo my-2 text-center fw-bold ${store.borde} text-white d-flex flex-column`} onClick={() => {
            navigate("/perfil")
        }}>
            <span className="align-content-start mb-auto my-2">Perfil</span>

            <p className="fs-1 objeto-animado"><MdAccountCircle /></p>
            <p className="objeto-animado">Modifica tu perfil aqui!</p>
            <p>Solo tomara unos minutos</p>

        </div >
    )
}

export default BloqueoDesbloqueoCuentas