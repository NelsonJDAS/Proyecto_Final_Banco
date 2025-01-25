import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import GraficaComponenteInversiones from "../../../graficas/GraficaComponenteInversiones.jsx";
import { RiBtcLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


const Inversiones = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate("")

    return (
        <div className={`bg-dark animacion-contenedor hover contenedor-componente-interactivo my-2 text-center text-white fw-bold ${store.borde} text-white align-content-center`} onClick={() => {
            actions.Scroll()
            navigate("/inversiones")
        }}>
            <div className="row mt-2">
                <div className="col-8 text-center"><p className="objeto-animado">Finance Geeks</p></div>
                <div className="col-4 text-center"><p className="objeto-animado"><i><RiBtcLine /></i></p></div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="container ">
                        <GraficaComponenteInversiones />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Inversiones