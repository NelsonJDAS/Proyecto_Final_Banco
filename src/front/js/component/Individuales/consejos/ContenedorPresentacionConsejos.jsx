import React from "react";
import { useTranslation } from "react-i18next";

const ContenedorPresentacionConsejos = () => {
    const { t } = useTranslation()
    return (
        <div className="container">
            <h1 className="text-center">{t('consejos.p1')}</h1>
                <p>{t('consejos.p2')}</p>
        </div>
    )
}

export default ContenedorPresentacionConsejos