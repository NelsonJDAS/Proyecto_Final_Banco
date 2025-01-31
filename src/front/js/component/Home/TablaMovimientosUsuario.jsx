import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import TablaCol from "./TablaCol.jsx";

const TablaMovimientoUsuario = () => {
    const { store, actions } = useContext(Context);
    const [userLoad, SetUserLoad] = useState("elemento-segundario");

    useEffect(() => {
        SetUserLoad("elemento-segundario visible");
        // const storedId = localStorage.getItem("userId");
        // actions.fetchUserDetails(storedId);
    }, []);

    return (
        <div className={`container my-3 p-3 w-100 rounded-3 ${userLoad}`}>
            <div className="row">
                <div className="col-12 text-center fw-bold">
                    <h2>Movimientos</h2>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-3 text-center fw-bold">
                    <p className="cabecera-movimientos">Dia</p>
                </div>
                <div className="col-3 text-center fw-bold">
                    <p className="cabecera-movimientos">
                        <b className="d-none d-lg-block">Establecimiento / </b>Concepto
                    </p>
                </div>
                <div className="col-3 text-center fw-bold">
                    <p className="cabecera-movimientos">Importe</p>
                </div>
                <div className="col-3 text-center fw-bold">
                    <p className="cabecera-movimientos">Saldo</p>
                </div>
            </div>
            <div>
                {store.transacciones && store.transacciones.slice(-5).map((transaccion) => (
                    <TablaCol
                        key={transaccion.id}
                        fecha={transaccion.fecha}
                        cuerpo={transaccion.descripcion}
                        importe={transaccion.monto}
                        saldo={transaccion.saldo_posterior}
                        tipo={transaccion.tipo}
                    />
                ))}
            </div>
        </div>
    );
};

export default TablaMovimientoUsuario;