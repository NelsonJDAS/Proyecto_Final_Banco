import React, { Component, useContext } from "react";
import "../../styles/footer.css";
import { useTranslation } from "react-i18next";// importacion de traducción
import { Context } from "../store/appContext";

export const Footer = () => {

	const { t } = useTranslation();
	const { store, actions } = useContext(Context);

	return (
		<footer className={`footer mt-auto py-3 border-top ${store.borde} ${store.texto} ${store.fondo}`}>
			<div className="row px-3 m-0">
				<div className="col-2 text-start d-flex flex-column">
					<h6 className="subtitulo ">{t('Contact information')}</h6>
					<span className="enlace ">{t('Contact')}</span>
					<span className="enlace ">{t('Chat')}</span>
				</div>
				<div className="col-2 text-start d-flex flex-column">
					<h6 className="subtitulo ">{t('Legal links')}</h6>
					<span className="enlace ">{t('Privacy Policy')}</span>
					<span className="enlace ">{t('Term of conditions')}</span>
					<span className="enlace ">{t('Legal notice')}</span>
				</div>
				<div className="col-2 text-start d-flex flex-column">
					<h6 className="subtitulo ">{t('Links to resources')}</h6>
					<span className="enlace ">{t('Rates and commissions')}</span>
					<span className="enlace ">{t('Education')}</span>
				</div>
				<div className="col-2 text-start d-flex flex-column">
					<h6 className="subtitulo ">{t('Security')}</h6>
					<span className="enlace ">{t('Tips')}</span>
					<span className="enlace ">{t('Security methods')}</span>
					<span className="enlace ">{t('Coordinate card')}</span>
				</div>
				<div className="col-2 text-start d-flex flex-column">
					<h6 className="subtitulo ">{t('Products and services')}</h6>
					<span className="enlace ">{t('Shop')}</span>
					<span className="enlace ">{t('Insurance')}</span>
					<span className="enlace ">{t('Loans')}</span>
				</div>
				<div className="col-2 text-start d-flex flex-column">
					<h6 className="subtitulo ">{t('Certifications')}</h6>
					<span className="enlace ">{t('Certified titles')}</span>
					<span className="enlace ">{t('Security titles')}</span>
				</div>
			</div>
		</footer>
	)
};