import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import { FaCcMastercard } from "react-icons/fa";
import { LuNfc } from "react-icons/lu";
import { RiMastercardFill } from "react-icons/ri";

const Tarjetas = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className={`bg-tarjetas animacion-contenedor hover contenedor-componente-interactivo my-2 badge  text-center fw-bold ${store.borde} text-white d-flex flex-column`}>
            <div className="d-flex justify-content-between"> <p className="text-start m-2">Geek Card</p> <p className="my-1 mx-2 objeto-animado"><FaCcMastercard /></p></div>
            <div className="d-flex justify-content-between fs-1 mx-2 my-3"><RiMastercardFill /><LuNfc /></div>
            <div className="d-flex justify-content-evenly">
                <p className="fw-bold fs-4">1234</p>
                <p className="fw-bold fs-4">1234</p>
                <p className="fw-bold fs-4">1234</p>
                <p className="fw-bold fs-4">1234</p>
            </div>
            <div className="text-end d-flex justify-content-around">
                <p></p>
                <p>01/26</p>
            </div>
            <span className="align-content-start mb-auto my-1">Tarjetas</span>
        </div >
    )
}

export default Tarjetas