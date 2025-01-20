import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";// importacion de traducción

const ContenedorPresentacion = () => {
    const { t } = useTranslation();
    const [userLoad, SetUserLoad] = useState(false);

    useEffect(() => {
        SetUserLoad(true)
    }, [])

    return (<div className="contenedor-landing">
        <div className="container">
            <div className="d-flex flex-column text-center">
                <h1 className={`titulo-landing ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}> {t('Landing1.welcome')} </h1>
                <div className={`fs-2 ${userLoad ? "animacion-der visible" : "animacion-der"}`}>
                    <p>{t('Landing1.welcome1')}</p>
                    <p>{t('Landing1.welcome2')}</p>
                    <p>{t('Landing1.welcome3')}</p>
                </div>
            </div>
        </div>
    </div>)
}

export default ContenedorPresentacion
