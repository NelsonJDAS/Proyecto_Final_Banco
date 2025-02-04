import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import GraficaHome from "../graficas/GraficaHome.jsx";

const SaldoUsuario = () => {
    const { store, actions } = useContext(Context);
    const [userLoad, SetUserLoad] = useState("elemento-segundario");

    useEffect(() => {
        SetUserLoad("elemento-segundario visible")


    }, [actions.fetchUserDetails])

    return (<div className={`container my-3 p-3 color-principal w-100 rounded-3 hover contenedor-saldo ${store.borde} ${userLoad} text-white`}>
        <div className="row">
            <div className="col-12">
                <div className="row">
                    <div className="col-xl-8 col-8 d-flex justify-content-center">
                        <div className="d-flex flex-column">
                            <p className="fs-1 fw-light">Hola, <span className="fw-bold">{store.cliente.nombre == undefined ? ". . . . . . " : store.cliente.nombre}</span></p>
                        </div>
                        <span className="admin-class mx-2">admin</span>
                    </div>
                    <div className="col-4 col-xl-4 text-end"><span className="hover fs-3" onClick={() => {
                        actions.CambiarIncognito(!store.hidden)
                    }}>{store.hidden ? <FaEyeSlash /> : <FaEye />}</span></div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-6 col-xl-4 d-flex flex-column">
                <div className="row">
                    <div className="col-6 px-1 text-end"><p className="fw-light my-2 saldo-disponible">Saldo Disponible:</p></div>
                    <div className={`col-6  px-1 text-start ${store.hidden ? "desenfoque" : ""}`}><span className="fs-3 fw-bold num-saldo">{store.cuentas.saldo == undefined ? "* * *" : parseInt(store.cuentas.saldo).toFixed(0)}</span></div>
                </div>
                <div className="row">
                    <div className="col-6 px-1 text-end"><p className="fw-light my-2 saldo-disponible">Saldo Retenido: </p></div>
                    <div className={`col-6  px-1 text-start ${store.hidden ? "desenfoque" : ""}`}><span className="fs-3 fw-bold num-saldo">{store.cuentas.saldo == undefined ? "* * *" : parseInt(store.cuentas.saldo_retenido).toFixed(0)}</span></div>
                </div>
            </div>
            <div className="col-12">
                <div className={`container contenedor-grafica-home  ${store.hidden ? "desenfoque" : ""}`}>
                    <GraficaHome />
                </div>
            </div>
        </div>
    </div>)
}

export default SaldoUsuario