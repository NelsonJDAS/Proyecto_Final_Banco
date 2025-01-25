import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import GraficaInversionVista from "../graficas/GraficaInversionVista.jsx";

const ListaGraficas = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid contenedor-cabecera mt-3">
            <div className="row my-3">
                <div className="col-12 text-end">
                    <input type="text" placeholder="Buscar" className="mx-3 text-center w-25 py-2 rounded-pill" />
                </div>
            </div>
            <div className="row separacion-filas">
                <div className="col-6">
                    <div className={`container contenedor-grafica ${store.fondo === "fondo-modo-claro" ? "bg-modo-claro" : "bg-modo-oscuro"}`}>
                        <div className="row">
                            <div className="col-8 fw-bold fs-2 text-center"><p className="my-2">BTC</p></div>
                            <div className="col-4 fw-bold text-end"><p className="my-2">GeekInvest</p></div>
                        </div>
                        <GraficaInversionVista />
                    </div>
                </div>
                <div className="col-6">
                    <div className={`container contenedor-grafica ${store.fondo === "fondo-modo-claro" ? "bg-modo-claro" : "bg-modo-oscuro"}`}>
                        <div className="row">
                            <div className="col-8 fw-bold fs-2 text-center"><p>BTC</p></div>
                            <div className="col-4 fw-bold text-end"><p>GeekInvest</p></div>
                        </div>
                        <GraficaInversionVista />
                    </div>
                </div>
            </div>
            <div className="row separacion-filas">
                <div className="col-6">
                    <div className={`container contenedor-grafica ${store.fondo === "fondo-modo-claro" ? "bg-modo-claro" : "bg-modo-oscuro"}`}>
                        <div className="row">
                            <div className="col-8 fw-bold fs-2 text-center"><p>BTC</p></div>
                            <div className="col-4 fw-bold text-end"><p>GeekInvest</p></div>
                        </div>
                        <GraficaInversionVista />
                    </div>
                </div>
                <div className="col-6">
                    <div className={`container contenedor-grafica ${store.fondo === "fondo-modo-claro" ? "bg-modo-claro" : "bg-modo-oscuro"}`}>
                        <div className="row">
                            <div className="col-8 fw-bold fs-2 text-center"><p>BTC</p></div>
                            <div className="col-4 fw-bold text-end"><p>GeekInvest</p></div>
                        </div>
                        <GraficaInversionVista />
                    </div>
                </div>
            </div>            <div className="row separacion-filas">
                <div className="col-6">
                    <div className={`container contenedor-grafica ${store.fondo === "fondo-modo-claro" ? "bg-modo-claro" : "bg-modo-oscuro"}`}>
                        <div className="row">
                            <div className="col-8 fw-bold fs-2 text-center"><p>BTC</p></div>
                            <div className="col-4 fw-bold text-end"><p>GeekInvest</p></div>
                        </div>
                        <GraficaInversionVista />
                    </div>
                </div>
                <div className="col-6">
                    <div className={`container contenedor-grafica ${store.fondo === "fondo-modo-claro" ? "bg-modo-claro" : "bg-modo-oscuro"}`}>
                        <div className="row">
                            <div className="col-8 fw-bold fs-2 text-center"><p>BTC</p></div>
                            <div className="col-4 fw-bold text-end"><p>GeekInvest</p></div>
                        </div>
                        <GraficaInversionVista />
                    </div>
                </div>
            </div>            <div className="row separacion-filas">
                <div className="col-6">
                    <div className={`container contenedor-grafica ${store.fondo === "fondo-modo-claro" ? "bg-modo-claro" : "bg-modo-oscuro"}`}>
                        <div className="row">
                            <div className="col-8 fw-bold fs-2 text-center"><p>BTC</p></div>
                            <div className="col-4 fw-bold text-end"><p>GeekInvest</p></div>
                        </div>
                        <GraficaInversionVista />
                    </div>
                </div>
                <div className="col-6">
                    <div className={`container contenedor-grafica ${store.fondo === "fondo-modo-claro" ? "bg-modo-claro" : "bg-modo-oscuro"}`}>
                        <div className="row">
                            <div className="col-8 fw-bold fs-2 text-center"><p>BTC</p></div>
                            <div className="col-4 fw-bold text-end"><p>GeekInvest</p></div>
                        </div>
                        <GraficaInversionVista />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListaGraficas
