import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SaldoUsuario = () => {
    const { store, actions } = useContext(Context);
    const [userLoad, SetUserLoad] = useState("elemento-segundario");
    const [name, SetName] = useState("");

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        SetUserLoad("elemento-segundario visible")
        SetName(storedName)

    }, [])


    return (<div className={`container my-3 p-3 color-principal w-100 rounded-3 ${store.borde} ${userLoad} text-white`}>
        <div className="row">
            <div className="col-12">
                <div className="row">
                    <div className="col-xl-4 col-8 d-flex flex-column text-center">
                        <p className="fs-1 fw-light">Hola, <span className="fw-bold">{name}</span></p>
                    </div>
                    <div className="col-4 col-xl-8 text-end"><span className="hover fs-3" onClick={() => {
                        actions.CambiarIncognito(!store.hidden)
                    }}>{store.hidden ? <FaEyeSlash /> : <FaEye />}</span></div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-6 col-xl-4 d-flex flex-column">
                <div className="row">
                    <div className="col-6 px-1 text-end"><p className="fw-light my-2 saldo-disponible">Saldo Disponible:</p></div>
                    <div className={`col-6  px-1 text-start ${store.hidden ? "desenfoque" : ""}`}><span className="fs-3 fw-bold num-saldo">0</span></div>
                </div>
                <div className="row">
                    <div className="col-6 px-1 text-end"><p className="fw-light my-2 saldo-disponible">Saldo Retenido: </p></div>
                    <div className={`col-6  px-1 text-start ${store.hidden ? "desenfoque" : ""}`}><span className="fs-3 fw-bold num-saldo">0</span></div>
                </div>
            </div>
            <div className="col-8"></div>
        </div>
    </div>)
}

export default SaldoUsuario