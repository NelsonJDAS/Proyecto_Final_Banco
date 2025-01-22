import React, { useEffect, useState } from "react";
import TablaCol from "../Home/TablaCol.jsx";

const ContenedorPrincipalMovimientos = () => {

    const [userLoad, SetUserLoad] = useState(false);

    useEffect(() => {
        SetUserLoad(true)
    }, [])

    return (
        <>
            <h1 className={`text-center my-3 ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>Movimientos</h1>
            <div className="container my-3">
                <div className="row my-3">
                    <div className="col-3 text-center fw-bold"><p className="cabecera-movimientos">Dia</p></div>
                    <div className="col-3 text-center fw-bold"><p className="cabecera-movimientos"><b className="d-none d-lg-block">Establecimiento / </b>Concepto</p></div>
                    <div className="col-3 text-center fw-bold"><p className="cabecera-movimientos">Importe</p></div>
                    <div className="col-3 text-center fw-bold"><p className="cabecera-movimientos">Saldo</p></div>
                </div>
                <div>
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Transferencia" importe={200} saldo={600} />
                    <TablaCol fecha="01/03/2024" cuerpo="Alquiler" importe={800} saldo={1400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Nomina" monto={1000} saldo={400} />
                    <TablaCol fecha="01/03/2024" cuerpo="Mc Donalds / Sevilla" importe={12.9} saldo={400} />
                </div>
            </div>
        </>
    )
}

export default ContenedorPrincipalMovimientos