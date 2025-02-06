import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { useTranslation } from "react-i18next";

const CabeceraInversiones = () => {
    const { t } = useTranslation()
    const { store, actions } = useContext(Context);

    const [userLoad, SetUserLoad] = useState(false);

    useEffect(() => {
        SetUserLoad(true)
    }, [])

    return (
        <div className={`container contenedor-cabecera  borde-morado ${store.fondo === "fondo-modo-claro" ? "bg-modo-claro" : "bg-modo-oscuro"} ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>
            <div className="row">
                <div className="col-12 text-center titulo-inversiones color-inversion fw-bold"><h1>Geek Invest</h1></div>
                <div className="col-12 text-center mt-3 fs-5">
                    <p>{t('graficaindividual.p2')}</p>
                </div>
            </div>
        </div>
    )
}
export default CabeceraInversiones
