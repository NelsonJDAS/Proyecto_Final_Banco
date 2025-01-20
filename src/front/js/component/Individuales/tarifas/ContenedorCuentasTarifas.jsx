import React from "react";

const ContenedorCuentasTarifas = () => {
    return (
        <div className="container">
            <h1 className="text-center">Cuentas Bancarias</h1>
            <p>
                <ul>
                    <li>
                        <strong>Mantenimiento de cuenta:</strong> 5 € mensuales (exento con
                        saldo promedio mayor a 1,000 €).
                    </li>
                    <li>
                        <strong>Transferencias internas:</strong> Sin costo.
                    </li>
                    <li>
                        <strong>Transferencias internacionales:</strong> 15 € por
                        transacción.
                    </li>
                </ul>
            </p>
        </div>
    )
}

export default ContenedorCuentasTarifas