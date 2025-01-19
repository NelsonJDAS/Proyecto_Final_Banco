import React from "react";
import ContenedorPresentacionTarifas from "../component/Individuales/tarifas/ContenedorPresentacionTarifas.jsx";
import ContenedorCuentasTarifas from "../component/Individuales/tarifas/ContenedorCuentasTarifas.jsx";
import ContenedorTarjetasTarifas from "../component/Individuales/tarifas/ContenedorTarjetasTarifas.jsx";
import ContenedorPrestamosTarifas from "../component/Individuales/tarifas/ContenedorPrestamosTarifas.jsx"
import ContenedorServiciosTarifas from "../component/Individuales/tarifas/ContenedorServiciosTarifas.jsx"
import ContenedorContactoTarifas from "../component/Individuales/tarifas/ContenedorContactoTarifas.jsx";

export const Tarifas = () => {
  return (
    <div>
      <ContenedorPresentacionTarifas />
      <ContenedorCuentasTarifas />
      <ContenedorTarjetasTarifas />
      <ContenedorPrestamosTarifas />
      <ContenedorServiciosTarifas />
      <ContenedorContactoTarifas />
    </div>
  );
};