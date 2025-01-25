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
                <div className="col-12 text-center titulo-inversiones "><h1>Geek Invest</h1></div>
                <div className="col-12 text-center mt-3 fs-5">
                    <p>En GeekBank, las gráficas de criptomonedas permiten ver el rendimiento del mercado de manera sencilla
                        y en tiempo real. Con datos actualizados al instante, es fácil seguir las fluctuaciones de las criptos
                        y tomar decisiones informadas. Una herramienta pensada para quienes quieren estar al tanto del mundo cripto de
                        forma clara y accesible.</p>
                </div>
            </div>
        </div>
    )
}
export default CabeceraInversiones
