import React, { useEffect, useState } from "react";
import ColTitulo from "../ColTitulo.jsx";
import { MdOutlineSecurity } from "react-icons/md";
import { useTranslation } from "react-i18next";

const ContenedorPrincipalSeguridad = () => {
    const [userLoad, SetUserLoad] = useState(false);
    const { t } = useTranslation()

    useEffect(() => {
        SetUserLoad(true)
    }, [])

    return (
        <>
            <div className={`container ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>
                <h1 className="titulo-principal-politica text-center">{t('titulos.p1')}</h1>
                <p className="fs-2 text-center">{t('titulos.p2')}</p>
            </div>
            <div className="container espaciado-fondo-titulos">
                <div className="row">
                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title={t('titulos.colti1')}
                        position="left"
                        descripcion={t('titulos.coldes1')}
                    />

                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title={t('titulos.colti2')}
                        position=""
                        descripcion={t('titulos.coldes2')}
                    />

                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title={t('titulos.colti3')}
                        position="left"
                        descripcion={t('titulos.coldes3')}
                    />

                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title={t('titulos.colti4')}
                        position=""
                        descripcion={t('titulos.coldes4')}
                    />

                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title={t('titulos.colti5')}
                        position="left"
                        descripcion={t('titulos.coldes5')}
                    />

                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title={t('titulos.colti6')}
                        position=""
                        descripcion={t('titulos.coldes6')}
                    />

                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title={t('titulos.colti7')}
                        position="left"
                        descripcion={t('titulos.coldes7')}
                    />

                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title={t('titulos.colti8')}
                        position=""
                        descripcion={t('titulos.coldes8')}
                    />

                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title={t('titulos.colti9')}
                        position="left"
                        descripcion={t('titulos.coldes9')}
                    />

                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title={t('titulos.colti10')}
                        position=""
                        descripcion={t('titulos.coldes10')}
                    />
                </div>
            </div>
        </>
    )
}

export default ContenedorPrincipalSeguridad
