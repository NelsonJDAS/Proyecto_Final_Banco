import React, { useContext } from "react";
import { FaCcMastercard } from "react-icons/fa";
import { LuNfc } from "react-icons/lu";
import { RiMastercardFill } from "react-icons/ri";
import { Context } from "../../../store/appContext";

const TarjetaTarifa = ({ titulo, cuota, beneficio, ventaja, retiros, userload, background }) => {
    const { store, actions } = useContext(Context);

    return (
        <div className={`${background} animacion-contenedor hover contenedor-componente-interactivo my-2 badge  text-center fw-bold text-white d-flex flex-column ${store.borde} ${userload ? "animacion-izq visible" : "animacion-izq"}`}>
            <div className="d-flex justify-content-between"> <p className="text-start m-2">Geek Card</p> <p className="my-1 mx-2 objeto-animado"><FaCcMastercard /></p></div>
            <span className="align-content-start mb-auto my-1 fs-2">{titulo}</span>
            <div className="d-flex flex-column">
                <p>Cuota anual: {cuota}</p>
                <p>Beneficio: {beneficio}</p>
                <p>Ventaja adicional: {ventaja}</p>
                <p>Retiros: {retiros}</p>
            </div>
        </div >
    )
}

export default TarjetaTarifa