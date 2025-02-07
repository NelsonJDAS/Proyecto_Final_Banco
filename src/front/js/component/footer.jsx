import React, { Component, useContext } from "react";
import "../../styles/footer.css";
import { useTranslation } from "react-i18next";// importacion de traducción
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";

export const Footer = () => {

	const { t } = useTranslation();
	const { store, actions } = useContext(Context);
	const navigate = useNavigate(null);

	return (
		<footer className={`footer mt-auto py-md-3 border-end-0 border-start-0 ${store.borde} ${store.texto} ${store.fondo}`}> {/* modo oscuro y claro */}
			<div className="row px-0 px-md-3 m-0"> {/* Links */}
				<div className="col-4 col-md-3 col-lg-2 px-0 px-md-3 flex-column animation">
					<h6 className="subtitulo d-flex ">{t('Footer.Contact information')}</h6>
					<span className={`d-flex link-footer ${store.borde_hover}`} onClick={() => {
						actions.Scroll()
						navigate("/contacto")
					}}>{t('Footer.Contact')}</span>
					<span className={`d-flex link-footer ${store.borde_hover}`} onClick={() => {
						actions.Scroll()
						navigate("/chat")
					}}>{t('Footer.Chat')}</span>
				</div>
				<div className="col-4 col-md-3 col-lg-2 px-0 px-md-3 flex-column animation">
					<h6 className="subtitulo d-flex ">{t('Footer.Legal links')}</h6>
					<span className={`d-flex link-footer ${store.borde_hover}`} onClick={() => {
						actions.Scroll()
						navigate("/politicas")
					}}>{t('Footer.Privacy Policy')}</span>
					<span className={`d-flex link-footer ${store.borde_hover}`} onClick={() => {
						actions.Scroll()
						navigate("/terminos")
					}}>{t('Footer.Term of conditions')}</span>
					<span className={`d-flex link-footer ${store.borde_hover}`} onClick={() => {
						actions.Scroll()
						navigate("/aviso")
					}}>{t('Footer.Legal notice')}</span>
				</div>
				<div className="col-4 col-md-3 col-lg-2 px-0 px-md-3 flex-column animation">
					<h6 className="subtitulo d-flex ">{t('Footer.Links to resources')}</h6>
					<span className={`d-flex link-footer ${store.borde_hover}`} onClick={() => {
						actions.Scroll()
						navigate("/tarifas")
					}}>{t('Footer.Rates and commissions')}</span>
					<span className={`d-flex link-footer ${store.borde_hover}`} onClick={() => {
						actions.Scroll()
						navigate("/educacion")
					}}>{t('Footer.Education')}</span>
				</div>
				<div className="col-4 col-md-3 col-lg-2 px-0 px-md-3 flex-column animation">
					<h6 className="subtitulo d-flex ">{t('Footer.Security')}</h6>
					<span className={`d-flex link-footer ${store.borde_hover}`} onClick={() => {
						actions.Scroll()
						navigate("/consejos")
					}}>{t('Footer.Tips')}</span>
					<span className={`d-flex link-footer ${store.borde_hover}`} onClick={() => {
						actions.Scroll()
						navigate("/metodos")
					}}>{t('Footer.Security methods')}</span>
				</div>
				<div className="col-4 col-md-3 col-lg-2 px-0 px-md-3 flex-column animation">
					<h6 className="subtitulo d-flex ">{t('Footer.Products and services')}</h6>
					<span className={`d-flex link-footer ${store.borde_hover} ${localStorage.getItem("token") == null ? "boton-cancelado" : ""}`} onClick={() => {
						actions.Scroll()
						navigate("/inversiones")
					}}>{t('Navbar.Investments')}</span>
					<span className={`d-flex link-footer ${store.borde_hover} ${localStorage.getItem("token") == null ? "boton-cancelado" : ""}`} onClick={() => {
						actions.Scroll()
						navigate("/tienda")
					}}>{t('Footer.Shop')}</span>
				</div>
				<div className="col-4 col-md-3 col-lg-2 px-0 px-md-3 flex-column animation">
					<h6 className="subtitulo d-flex ">{t('Footer.Certifications')}</h6>
					<span className={`d-flex link-footer ${store.borde_hover}`} onClick={() => {
						actions.Scroll()
						navigate("/certificaciones")
					}}>{t('Footer.Certified titles')}</span>
					<span className={`d-flex link-footer ${store.borde_hover}`} onClick={() => {
						actions.Scroll()
						navigate("/titulos")
					}}>{t('Footer.Security titles')}</span>
				</div>
			</div>
			<div className="row mx-0">
				<div className="col-12 justify-content-end px-3 d-flex">

					<a className={`icono_redes ${store.texto}`} target="_blank" href="https://facebook.com/"><FaFacebookSquare /></a>
					<a className={`icono_redes ${store.texto}`} target="_blank" href="https://twitter.com/"><FaSquareXTwitter /></a>
					<a className={`icono_redes ${store.texto}`} target="_blank" href="https://instagram.com/"><FaSquareInstagram /></a>
					<a className={`icono_redes ${store.texto}`} target="_blank" href="https://linkedin.com/"><FaLinkedin /></a>
					<a className={`icono_redes ${store.texto}`} target="_blank" href="https://youtube.com/"><IoLogoYoutube /></a>
					<a className={`icono_redes ${store.texto}`} target="_blank" href="https://web.whatsapp.com/"><FaSquareWhatsapp /></a>


				</div>
			</div> {/* Redes sociales */}
		</footer>
	)
};