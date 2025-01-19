import React from "react";

const ContenedorTarjetasTarifas = () => {
    return (
        <div className="container">
            <h1 className="text-center">Tarjetas de Crédito</h1>
            <p>
                <ul>
                    <li>
                        <strong>Cuota anual:</strong> 50 € (exenta el primer año).
                    </li>
                    <li>
                        <strong>Retiros en cajeros automáticos:</strong> 3% del monto
                        retirado, mínimo 3 €.
                    </li>
                    <li>
                        <strong>Intereses por pagos atrasados:</strong> 2% mensual sobre el
                        saldo pendiente.
                    </li>
                </ul>
            </p>
        </div>
    )
}

export default ContenedorTarjetasTarifas