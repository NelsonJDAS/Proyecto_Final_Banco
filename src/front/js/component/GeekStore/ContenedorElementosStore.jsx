import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../store/appContext";
import Elemento from "./Elemento.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ContenedorElementosStore = () => {
    const [userLoad, SetUserLoad] = useState(false);
    const { store, actions } = useContext(Context);
    const flechaIzq = useRef(null);
    const flechaDer = useRef(null);


    useEffect(() => {
        actions.Scroll()
        SetUserLoad(true)
    }, [])
    return (
        <div className={`container-fluid w-90 contenedor-elementos-store ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
            <div className="row">
                <div className={`row my-3 ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                    <div className="col-4 text-center">
                        <button className={`hover fs-2 mx-2 flecha-store bg-transparent btn ${store.texto}`} ref={flechaIzq}>
                            <FaArrowLeft />
                        </button>
                    </div>
                    <div className="col-4 text-center align-content-center">
                        <p className="fs-3 mt-3 fw-bold">1</p>
                    </div>
                    <div className="col-4 text-center">
                        <button className={`hover fs-2 mx-2 flecha-store bg-transparent btn ${store.texto}`} ref={flechaDer}>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                <div className={`row my-3 ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                    <div className="align-content-center col-5 text-start">
                        <select className={`py-2 text-center fw-bold text-dark hover w-75 rounded-pill `} aria-label="Small select example">
                            <option className="fw-bold text-dark" value="0" selected>Categoria</option>
                            <option className="fw-bold text-dark" value="1">1</option>
                            <option className="fw-bold text-dark" value="2">2</option>
                            <option className="fw-bold text-dark" value="3">3</option>
                        </select>
                    </div>
                    <div className="align-content-center col-6 text-end">
                        <input type="text" placeholder="Buscar" className="mx-3 text-center w-50 py-2 rounded-pill" />
                    </div>
                    <div className="align-content-center col-1 text-center">
                        <i className="fs-2 my-3 hover"> <AiOutlineShoppingCart /></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <Elemento />
                <Elemento />
                <Elemento />
                <Elemento />
                <Elemento />
                <Elemento />
                <Elemento />
                <Elemento />
                <Elemento />
                <Elemento />
                <Elemento />
                <Elemento />
            </div>
        </div>
    )
}

export default ContenedorElementosStore