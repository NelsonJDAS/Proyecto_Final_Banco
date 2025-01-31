import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../store/appContext";
import Elemento from "./Elemento.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

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
                <div className="row my-3">
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
                <div className="row my-3">
                    <div className="col-12 text-end">
                        <input type="text" placeholder="Buscar" className="mx-3 text-center w-25 py-2 rounded-pill" />
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