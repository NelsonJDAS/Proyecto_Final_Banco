import React from "react";
import { useTranslation } from "react-i18next";// importacion de traducción

const ContenedorAnimado = ({ funcion }) => {
    const { t } = useTranslation();
    // contenedor animado
    return (
        <div className="contenedor-principal text-white">
            <div className="contenedor-interactivo">
                {/* contenedor para ocultar el iniciar sesion cuando el usuario este interactuando con el contenedor crear usuario */}
                <div className="d-flex flex-column align-items-center text-center contenedor-izquierdo">
                    <h1>{t('Welcome!')}</h1>
                    <p>{t('cuenta?')}</p>
                    <p className="mx-2">{t('Login to access all your web functionalities')}</p>
                    <span className="link-login fw-bold hover" onClick={() => {
                        funcion(true)
                    }}>{t('Login')}</span>
                </div>
                {/* contenedor para ocultar el Crear cuenta cuando el usuario este interactuando con el contenedor Inciar sesion */}
                <div className="d-flex flex-column align-items-center text-center contenedor-derecho">
                    <h1 className="fs-1">{t('Hello!')}</h1>
                    <p>{t('SinCuenta')}</p>
                    <p>{t('SinCuenta2')}</p>
                    <p>{t('SinCuenta3')}</p>

                    <span className="link-login fw-bold hover" onClick={() => {
                        funcion(false)
                    }}>{t('Register')}</span>
                </div>
            </div>
        </div>
    )
}

export default ContenedorAnimado