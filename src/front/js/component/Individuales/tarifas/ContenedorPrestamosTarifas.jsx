import React from "react";

const ContenedorPrestamosTarifas = () => {
    return (
        <div className="container">
            <h1 className="text-center">Préstamos y Créditos</h1>
            <p>
                <ul>
                    <li>
                        <strong>Comisión por apertura:</strong> 1.5% del monto del préstamo.
                    </li>
                    <li>
                        <strong>Pago anticipado:</strong> Sin costo.
                    </li>
                    <li>
                        <strong>Intereses moratorios:</strong> 3% mensual sobre el saldo
                        vencido.
                    </li>
                </ul>
            </p>
        </div>
    )
}

export default ContenedorPrestamosTarifas