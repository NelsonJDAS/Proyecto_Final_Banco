import React, { useContext, useEffect, useState } from "react";
import TablaCol from "../Home/TablaCol.jsx";
import Graficas from "../graficas/Graficas.jsx";
import { Context } from "../../store/appContext.js";

const ContenedorPrincipalMovimientos = () => {
    const { store, actions } = useContext(Context);
    const [userLoad, SetUserLoad] = useState(false);
    const [input, SetInput] = useState("");
    const [select, SetSelect] = useState("fecha");

    const HandleInput = (e) => {
        SetInput(e.target.value.toLowerCase())
        console.log(input)
    }

    const HandleSelect = (e) => {
        SetSelect(e.target.value)
        console.log(select)
    }

    useEffect(() => {
        SetUserLoad(true)
        actions.Scroll()
        const storedId = localStorage.getItem("userId")
        actions.fetchUserDetails(storedId)
    }, [])

    return (
        <>
            <h1 className={`text-center my-3 ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>Movimientos</h1>
            <div className="container">
                <div className="row">
                    <div className="col-7">

                    </div>
                    <div className="col-5 text-end">
                        <div className="d-flex justify-content-end">
                            <input type="text" className="input-movimientos py-2 text-center fw-bold" placeholder="Buscar" onChange={
                                HandleInput
                            } />
                            <select className={`select-movimientos py-2 text-center fw-bold text-dark hover `} onChange={
                                HandleSelect
                                // setTypeDoc(e.target.value)
                            } aria-label="Small select example">
                                <option className="fw-bold text-dark" value="fecha">Fecha</option>
                                <option className="fw-bold text-dark" value="concepto">Concepto</option>
                                <option className="fw-bold text-dark" value="monto">Monto</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <div className="row my-3">
                    <div className="col-3 text-center fw-bold"><p className="cabecera-movimientos">Dia</p></div>
                    <div className="col-3 text-center fw-bold"><p className="cabecera-movimientos"><b className="d-none d-lg-block">Establecimiento / </b>Concepto</p></div>
                    <div className="col-3 text-center fw-bold"><p className="cabecera-movimientos">Importe</p></div>
                    <div className="col-3 text-center fw-bold"><p className="cabecera-movimientos">Saldo</p></div>
                </div>
                <div>
                    {/* <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} /> */}
                    {store.transacciones && store.transacciones.map((transaccion) => (
                        <div className={select === "fecha" ? transaccion.fecha.toLowerCase().includes(input) ? "" : "d-none" : ""}>
                            <div className={select === "concepto" ? transaccion.descripcion.toLowerCase().includes(input) ? "" : "d-none" : ""}>
                                <div className={select === "fecha" ? transaccion.monto.toString().includes(input) ? "" : "d-none" : ""}>
                                    <TablaCol
                                        key={transaccion.id}
                                        fecha={transaccion.fecha}
                                        cuerpo={transaccion.descripcion}
                                        importe={transaccion.monto}
                                        saldo={transaccion.saldo_posterior} // Saldo en el momento de la transacción
                                        tipo={transaccion.tipo} // Tipo de transacción (depósito, retiro, transferencia)
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                </div >
            </div >
        </>
    )
}

export default ContenedorPrincipalMovimientos