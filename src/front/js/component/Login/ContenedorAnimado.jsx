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
                    <h1>{t('Register.welcome!')}</h1>
                    <p>{t('Register.cuenta?')}</p>
                    <p className="mx-2">{t('Register.loginfunc')}</p>
                    <span className="link-login fw-bold hover" onClick={() => {
                        funcion(true)
                    }}>{t('Login.login')}</span>
                </div>
                {/* contenedor para ocultar el Crear cuenta cuando el usuario este interactuando con el contenedor Inciar sesion */}
                <div className="d-flex flex-column align-items-center text-center contenedor-derecho">
                    <h1 className="fs-1">{t('Register.hello!')}</h1>
                    <p>{t('Register.sinCuenta')}</p>
                    <p>{t('Register.sinCuenta2')}</p>
                    <p>{t('Register.sinCuenta3')}</p>

                    <span className="link-login fw-bold hover" onClick={() => {
                        funcion(false)
                    }}>{t('Register.register')}</span>
                </div>
            </div>
        </div>
    )
}

export default ContenedorAnimado