import React, { Component } from "react";
import "../../styles/footer.css";
import { useTranslation } from "react-i18next";// importacion de traducción

export const Footer = () => {

	const { t } = useTranslation();


	return (
		<footer className="footer mt-auto py-3 bg-black border-top border-white">
			<div className="row px-3 m-0">
				<div className="col-2 text-start d-flex flex-column">
					<h6 className="subtitulo text-white">{t('Contact information')}</h6>
					<span className="enlace text-white">{t('Contact')}</span>
					<span className="enlace text-white">{t('Chat')}</span>
				</div>
				<div className="col-2 text-start d-flex flex-column">
					<h6 className="subtitulo text-white">{t('Legal links')}</h6>
					<span className="enlace text-white">{t('Privacy Policy')}</span>
					<span className="enlace text-white">{t('Term of conditions')}</span>
					<span className="enlace text-white">{t('Legal notice')}</span>
				</div>
				<div className="col-2 text-start d-flex flex-column">
					<h6 className="subtitulo text-white">{t('Links to resources')}</h6>
					<span className="enlace text-white">{t('Rates and commissions')}</span>
					<span className="enlace text-white">{t('Education')}</span>
				</div>
				<div className="col-2 text-start d-flex flex-column">
					<h6 className="subtitulo text-white">{t('Security')}</h6>
					<span className="enlace text-white">{t('Tips')}</span>
					<span className="enlace text-white">{t('Security methods')}</span>
					<span className="enlace text-white">{t('Coordinate card')}</span>
				</div>
				<div className="col-2 text-start d-flex flex-column">
					<h6 className="subtitulo text-white">{t('Products and services')}</h6>
					<span className="enlace text-white">{t('Shop')}</span>
					<span className="enlace text-white">{t('Insurance')}</span>
					<span className="enlace text-white">{t('Loans')}</span>
				</div>
				<div className="col-2 text-start d-flex flex-column">
					<h6 className="subtitulo text-white">{t('Certifications')}</h6>
					<span className="enlace text-white">{t('Certified titles')}</span>
					<span className="enlace text-white">{t('Security titles')}</span>
				</div>
			</div>
		</footer>
	)
};