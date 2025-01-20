import React from "react";
import "../../styles/politicas.css";
import "../../styles/tarifas.css";
import ContenedorPresentacionTarifas from "../component/Individuales/tarifas/ContenedorPresentacionTarifas.jsx";
import ContenedorCuentasTarifas from "../component/Individuales/tarifas/ContenedorCuentasTarifas.jsx";
import ContenedorTarjetasTarifas from "../component/Individuales/tarifas/ContenedorTarjetasTarifas.jsx";
import ContenedorPrestamosTarifas from "../component/Individuales/tarifas/ContenedorPrestamosTarifas.jsx";
import ContenedorServiciosTarifas from "../component/Individuales/tarifas/ContenedorServiciosTarifas.jsx";

export const Tarifas = () => {
  return (
    <div>
      <ContenedorPresentacionTarifas />
      <ContenedorCuentasTarifas />
      <ContenedorTarjetasTarifas />
      <ContenedorPrestamosTarifas />
      <ContenedorServiciosTarifas />
    </div>
  );
};
