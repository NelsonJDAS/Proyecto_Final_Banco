import React from "react";
import "../../styles/individuales.css";
import Presentacion from "../component/Individuales/metodos/Presentacion.jsx";
import TarjetaCoordMetodo from "../component/Individuales/metodos/TarjetaCoordMetodo.jsx";
import TarjetaCoordUso from "../component/Individuales/metodos/TarjetaCoordUso.jsx";
import VerificacionSMS from "../component/Individuales/metodos/VerificacionSMS.jsx";
import VerificacionSMSUso from "../component/Individuales/metodos/VerificacionSMSUso.jsx";

export const Metodos = () => {
    return (
        <div>
            <Presentacion />
            <TarjetaCoordMetodo />
            <TarjetaCoordUso />
            <VerificacionSMS />
            <VerificacionSMSUso />
        </div>
    );
};