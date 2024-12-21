import React, { useState } from "react";
import logo_negro from "../../img/logo-negro.png";
import logo_blanco from "../../img/logo-blanco.png";
import "../../styles/navbar.css";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { GiWorld } from "react-icons/gi";

// Importacion de la traduccion
import { useTranslation } from "react-i18next"; 


export const Navbar = () => {

	// Logica para botones onclick modal/traduccion
	const { t, i18n } = useTranslation();
	const handleLanguageChange = (language) => {
		i18n.changeLanguage(language);
	};

	const [ejemplo, setejemplo] = useState(false) // esto es para test
	const [openSelect, setOpenSelect] = useState(false)

	return (
		<>
			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				{/* Modal selector de idiomas */}
				<div className="modal-dialog">
					<div className="modal-content bg-dark rounded-3">
						<div className="modal-header">
							<h1 className="modal-title fs-5 text-white" id="exampleModalLabel">{t('Languages')}</h1>
							<button type="button" className="btn-close rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							{/* Selector de lenguaje */}
							<div className="row py-3">
								<div className="col-4">
									<p className="fw-bold text-white enlace" onClick={() => handleLanguageChange('en')}>
										<span className="fi mx-1 fi-gb">Inglés</span> 
									</p>
								</div>
								<div className="col-4">
									<p className="fw-bold text-white enlace" onClick={() => handleLanguageChange('zh')}>
										<span className="fi mx-1 fi-cn">Chino</span> 
									</p>
								</div>
								<div className="col-4">
									<p className="fw-bold text-white enlace" onClick={() => handleLanguageChange('es')}>
										<span className="fi mx-1 fi-es">Español</span> 
									</p>
								</div>
							</div>
							<div className="row py-3">
								<div className="col-4">
									<p className="fw-bold text-white enlace" onClick={() => handleLanguageChange('pt')}>
										<span className="fi mx-1 fi-pt">Portugués</span> 
									</p>
								</div>
								<div className="col-4">
									<p className="fw-bold text-white enlace" onClick={() => handleLanguageChange('ru')}>
										<span className="fi mx-1 fi-ru">Ruso</span> 
									</p>
								</div>
								<div className="col-4">
									<p className="fw-bold text-white enlace" onClick={() => handleLanguageChange('de')}>
										<span className="fi mx-1 fi-de">Alemán</span> 
									</p>
								</div>
							</div>
							<div className="row py-3">
								<div className="col-4">
									<p className="fw-bold text-white enlace" onClick={() => handleLanguageChange('ar')}>
										<span className="fi mx-1 fi-sa">Árabe</span> 
									</p>
								</div>
								<div className="col-4">
									<p className="fw-bold text-white enlace" onClick={() => handleLanguageChange('fr')}>
										<span className="fi mx-1 fi-fr">Francés</span> 
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<nav >
				<div className="row my-2">
					<div className="col-3 text-end fs-3 fw-bold text-white px-0"><img src={ejemplo === false ? logo_negro : logo_blanco} className="img-fluid img" /></div> {/* Simbolo */}
					<div className="col-2 text-start fs-3 fw-bold text-white px-0 align-content-center"><span>GeekBank</span></div>
					<div className="col-1 align-content-center text-white fw-bold text-center">
						<span className="enlace-claro">{t('Movements')} </span>{/* Seccion movimientos */}
					</div>
					<div className="col-1 align-content-center text-white fw-bold text-center">
						<span className="enlace-claro">{t('Transfers')}</span> {/* Seccion transferencias */}
					</div>
					<div className="col-1 align-content-center text-white fw-bold text-center">
						<span className="enlace-claro">{t('GEEK Store')}</span>{/* Seccion tienda */}
					</div>
					<div className="col-1 align-content-center text-white fw-bold text-center">
						<span className="enlace-claro">{t('Exch/Currency')}</span> {/* Seccion divisas */}
					</div>
					<div className="col-1 align-content-center text-white fw-bold text-center">
						<span className="enlace-claro">{t('Investments')}</span> {/* Seccion divisas */}
					</div>

					{/*------------------------------ eleccion de idiomas ------------ */}
					<div className="col-1 text-end align-content-center">
						<div type="div" className="rounded-circle enlace" data-bs-toggle="modal" data-bs-target="#exampleModal"> {/* Ejecuta el modal */}
							<GiWorld className="text-white simbolo-idioma" />
						</div>
					</div>
					{/*------------------------------ eleccion de idiomas ------------ */}
					{/*------------------------------ modo oscuro/ modo claro ------------ */}
					<div className="col-1 align-content-center text-white fw-bold text-center ">
						<div className={ejemplo === true ? "dark-mode rounded-pill fondo-claro borde-brillante" : "dark-mode rounded-pill fondo-oscuro borde-brillante"}>
							<div className={ejemplo === true ? "text-warning circle rounded-circle bg-white w-50 border border-warning fw-bold enlace position-relative d-flex justify-content-center active" : "circle rounded-circle w-50 border border-white bg-black text-white fw-bold enlace position-relative d-flex justify-content-center"} onClick={() => {
								ejemplo === true ? setejemplo(false) : setejemplo(true);
							}}>
								<div className="icono">
									{ejemplo === false ? <FaMoon /> : <MdWbSunny />}
								</div>
							</div>
						</div>
					</div>
					{/*------------------------------ modo oscuro/ modo claro ------------ */}
				</div>
			</nav></>
	);
}