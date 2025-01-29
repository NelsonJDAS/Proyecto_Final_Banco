import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";

const CabeceraInversiones = () => {
    const { store, actions } = useContext(Context);

    const [userLoad, SetUserLoad] = useState(false);

    useEffect(() => {
        SetUserLoad(true)
    }, [])

    return (
        <div className={`container contenedor-cabecera ${store.fondo === "fondo-modo-claro" ? "bg-modo-claro" : "bg-modo-oscuro"} ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>
            <div className="row">
                <div className="col-12 text-center titulo-inversiones color-inversion fw-bold"><h1>Geek Invest</h1></div>
                <div className="col-12 text-center mt-3 fs-5">
                    <p>En GeekBank, las gráficas te permiten ver el rendimiento de mas de 20.000 empresas del mercado de manera sencilla
                        y en tiempo real. Con datos actualizados al instante, es fácil seguir las fluctuaciones de las acciones
                        y tomar decisiones informadas. Una herramienta pensada para quienes quieren estar al tanto del mundo de la bolsa de valores de
                        forma clara y accesible.</p>
                </div>
            </div>
        </div>
    )
}
export default CabeceraInversiones
