import React, { Component } from "react";
import "../../styles/footer.css";
import { useTranslation } from "react-i18next";// importacion de traducción

export const Footer = () => {

	const { t, i18n } = useTranslation();


	return (
		<footer className="footer mt-auto py-3 bg-black border-top border-white">
			<div className="row px-3 m-0">
				<div className="col-2 text-start d-flex flex-column">
					<h6 className="subtitulo text-white">{t('Contact information')}</h6>
					<span className="enlace text-white">{t('Contact')}</span>
					<span className="enlace text-white">{t('Chat')}</span>
				</div>
				{/* <div className="col-2 text-start d-flex flex-column">
					<h6 className="subtitulo text-white">{t(')}Enlaces legales</h6>
					<span className="enlace text-white">{t(')}Politica de privacidad</span>
					<span className="enlace text-white">{t(')}Termino de condiciones</span>
					<span className="enlace text-white">{t(')}aviso legal</span>
				</div>
				<div className="col-2 text-start d-flex flex-column">
					<h6 className="subtitulo text-white">{t(')}Enlaces a recursos</h6>
					<span className="enlace text-white">{t(')}Tarifas / Comisiones</span>
					<span className="enlace text-white">{t(')}Educacion</span>
				</div>
				<div className="col-2 text-start d-flex flex-column">
					<h6 className="subtitulo text-white">{t(')}Seguridad</h6>
					<span className="enlace text-white">{t(')}Consejos</span>
					<span className="enlace text-white">{t(')}Metodos de Seguridad</span>
					<span className="enlace text-white">{t(')}Tarjeta de cordenadas</span>
				</div>
				<div className="col-2 text-start d-flex flex-column">
					<h6 className="subtitulo text-white">{t(')}Productos y Servicios</h6>
					<span className="enlace text-white">{t(')}Store</span>
					<span className="enlace text-white">{t(')}Seguro</span>
					<span className="enlace text-white">{t(')}Prestamo</span>
				</div>
				<div className="col-2 text-start d-flex flex-column">
					<h6 className="subtitulo text-white">{t(')}Certificaciones</h6>
					<span className="enlace text-white">{t(')}Titulos certificados</span>
					<span className="enlace text-white">{t(')}Titulos de seguridad</span>
				</div> */}
			</div>
		</footer>
	)
};
