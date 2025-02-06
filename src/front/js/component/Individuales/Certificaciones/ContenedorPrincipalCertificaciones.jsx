import React, { useEffect, useState } from "react";
import ColTitulo from "../ColTitulo.jsx";
import { TbCertificate } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const ContenedorPrincipalCertificaciones = () => {
    const { t } = useTranslation()
    const [userLoad, SetUserLoad] = useState(false);

    useEffect(() => {
        SetUserLoad(true)
    }, [])

    return (
        <>
            <div className={`container ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>
                <h1 className="titulo-principal-politica text-center">{t('certificaciones.p1')}</h1>
                <p className="fs-2 text-center">{t('certificaciones.p2')}</p>
            </div>
            <div className="container espaciado-fondo-titulos">
                <div className="row">
                    <ColTitulo
                        logo={<TbCertificate />}
                        title={t('certificaciones.colti1')}
                        position="left"
                        descripcion={t('certificaciones.coldes1')}
                    />

                    <ColTitulo
                        logo={<TbCertificate />}
                        title={t('certificaciones.colti2')}
                        position=""
                        descripcion={t('certificaciones.coldes2')}
                    />

                    <ColTitulo
                        logo={<TbCertificate />}
                        title={t('certificaciones.colti3')}
                        position="left"
                        descripcion={t('certificaciones.coldes3')}
                    />

                    <ColTitulo
                        logo={<TbCertificate />}
                        title={t('certificaciones.colti4')}
                        position=""
                        descripcion={t('certificaciones.coldes4')}
                    />

                    <ColTitulo
                        logo={<TbCertificate />}
                        title={t('certificaciones.colti5')}
                        position="left"
                        descripcion={t('certificaciones.coldes5')}
                    />

                    <ColTitulo
                        logo={<TbCertificate />}
                        title={t('certificaciones.colti7')}
                        position=""
                        descripcion={t('certificaciones.coldes7')}
                    />

                    <ColTitulo
                        logo={<TbCertificate />}
                        title={t('certificaciones.colti8')}
                        position="left"
                        descripcion={t('certificaciones.coldes8')}
                    />

                    <ColTitulo
                        logo={<TbCertificate />}
                        title={t('certificaciones.colti9')}
                        position=""
                        descripcion={t('certificaciones.coldes9')}
                    />

                    <ColTitulo
                        logo={<TbCertificate />}
                        title={t('certificaciones.colti10')}
                        position="left"
                        descripcion={t('certificaciones.coldes10')}
                    />

                    <ColTitulo
                        logo={<TbCertificate />}
                        title={t('certificaciones.col')}
                        position=""
                        descripcion={t('certificaciones.col')}
                    />
                </div>
            </div>
        </>
    )
}

export default ContenedorPrincipalCertificaciones



