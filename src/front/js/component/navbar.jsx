import React, { useContext, useEffect, useState } from "react";
import logo_negro from "../../img/logo-negro.png";
import logo_blanco from "../../img/logo-blanco.png";
import "../../styles/navbar.css";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

// Importacion de la traduccion
import { useTranslation } from "react-i18next";
import { Context } from "../store/appContext";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	// usamos el location para modificar el navbar si esta en la view de perfil
	const location = useLocation();
	// Logica para botones onclick modal/traduccion
	const { t, i18n } = useTranslation();
	const handleLanguageChange = async (language) => {
		i18n.changeLanguage(language);

		if (localStorage.getItem("token")) {
			const userId = localStorage.getItem("userId");
			await actions.updateUserLanguage(userId, language);
		}
	};

	const navigate = useNavigate(null);

	return (
		<div className={`contenedor-nav ${location.pathname === "/perfil" ? "text-white z-1" : ""}`} id="navbar"> {/* modo oscuro y claro */}
			<div className="modal fade" id="lenguajes" tabIndex="-1" aria-labelledby="label" aria-hidden="true">
				{/* Modal selector de idiomas */}
				<div className="modal-dialog contenedor-modal">
					<div className={`modal-content rounded-3 ${store.fondo} borde-brillante ${location.pathname === "/perfil" ? "bg-dark" : ""}`}>
						<div className="modal-header">
							<h1 className="modal-title fs-5 " id="label">{t('Navbar.Languages')}</h1>
							<div className="hover fs-3" data-bs-dismiss="modal"><IoClose /></div>
						</div>
						<div className="modal-body">
							{/* Selector de lenguaje */}
							<div className="row py-3">
								<div className="col-6 col-lg-4 d-flex justify-content-between">
									<div data-bs-dismiss="modal" onClick={() => handleLanguageChange('en')}>
										<p className={`fw-bold mx-0 mx-md-3 mx-lg-0 ${store.borde_hover}`}><span className="fi mx-1 fi-gb"></span>Inglés</p>
									</div>
								</div>
								<div className="col-6 col-lg-4 d-flex justify-content-between">
									<div data-bs-dismiss="modal" onClick={() => handleLanguageChange('zh')}>
										<p className={`fw-bold mx-0 mx-md-3 mx-lg-0 ${store.borde_hover}`}><span className="fi mx-1 fi-cn"></span>Chino</p>
									</div>
								</div>
								<div className="col-6 col-lg-4 d-flex justify-content-between">
									<div data-bs-dismiss="modal" onClick={() => handleLanguageChange('es')}>
										<p className={`fw-bold mx-0 mx-md-3 mx-lg-0 ${store.borde_hover}`}><span className="fi mx-1 fi-es"></span>Español</p>
									</div>
								</div>

								<div className="col-6 col-lg-4 d-flex justify-content-between">
									<div data-bs-dismiss="modal" onClick={() => handleLanguageChange('pt')}>
										<p className={`fw-bold mx-0 mx-md-3 mx-lg-0 ${store.borde_hover}`}><span className="fi mx-1 fi-pt"></span>Portugués</p>
									</div>
								</div>
								<div className="col-6 col-lg-4 d-flex justify-content-between">
									<div data-bs-dismiss="modal" onClick={() => handleLanguageChange('ru')}>
										<p className={`fw-bold mx-0 mx-md-3 mx-lg-0 ${store.borde_hover}`}><span className="fi mx-1 fi-ru"></span>Ruso</p>
									</div>
								</div>
								<div className="col-6 col-lg-4 d-flex justify-content-between">
									<div data-bs-dismiss="modal" onClick={() => handleLanguageChange('de')}>
										<p className={`fw-bold mx-0 mx-md-3 mx-lg-0 ${store.borde_hover}`}><span className="fi mx-1 fi-de"></span>Alemán</p>
									</div>
								</div>
								<div className="col-6 col-lg-4 d-flex justify-content-between">
									<div data-bs-dismiss="modal" onClick={() => handleLanguageChange('ar')}>
										<p className={`fw-bold mx-0 mx-md-3 mx-lg-0 ${store.borde_hover}`}><span className="fi mx-1 fi-sa"></span>Árabe</p>
									</div>
								</div>
								<div className="col-6 col-lg-4 d-flex justify-content-between">
									<div data-bs-dismiss="modal" onClick={() => handleLanguageChange('fr')}>
										<p className={`fw-bold mx-0 mx-md-3 mx-lg-0 ${store.borde_hover}`}><span className="fi mx-1 fi-fr"></span>Francés</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<nav>
				<div className="row my-2 mx-0">
					<div className="col-3 col-md-2 text-end d-flex justify-content-end">
						<div className={location.pathname === "/perfil" ? "d-none" : ""}>
							<img src={logo_negro} className={`img-fluid hover img ${store.fondo == "fondo-modo-oscuro" ? "d-block" : "d-none"}`} onClick={() => {
								localStorage.getItem('token') === null ? navigate("/") : location.pathname.split("/")[1] === "tienda" ? navigate("/tienda") : location.pathname === "/inversiones" || location.pathname.split("/")[1] === "grafica" ? navigate("/inversiones") : navigate("/home")
							}} /><img src={logo_blanco} className={`img-fluid img ${store.fondo == "fondo-modo-oscuro" ? "d-none" : "d-block"}`} />
						</div>
					</div>

					<div className="col-2 col-md-2 text-start fs-3 titulo-nav fw-bold  px-0 align-content-center hover" onClick={() => {
						localStorage.getItem('token') === null ? navigate("/") : location.pathname.split("/")[1] === "tienda" ? navigate("/tienda") : location.pathname === "/inversiones" || location.pathname.split("/")[1] === "grafica" ? navigate("/inversiones") : navigate("/home")
					}}><span>{location.pathname.split("/")[1] === "tienda" ? "GeekStore" : location.pathname === "/inversiones" || location.pathname.split("/")[1] === "grafica" ? "GeekInvest" : "GeekBank"}</span></div>
					{localStorage.getItem('token') === null ? (<div className="col-3 col-md-5 col-lg-6 align-content-center  fw-bold text-center">
						<span className={store.borde_hover} onClick={() => {
							navigate("/example")
						}}></span>
					</div>) : (
						<>
							<div className="col-3 col-md-4 d-lg-none align-content-center text-center">
								<div className="btn-group w-50">
									<button className={`btn ${store.texto} ${location.pathname === "/perfil" ? "text-white" : ""} fs-2`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
										<IoIosArrowDown />
									</button>
									<ul className={`dropdown-menu fw-bold ${store.fondo === "fondo-modo-claro" ? "bg-dark" : "bg-white"}`}>
										<li>
											<div className={`dropdown-item text-center hover ${store.fondo === "fondo-modo-claro" ? "text-white" : "text-dark"}`}>
												<span className={store.borde_hover} onClick={() => {
													navigate("/movimientos")
												}}>{t('Navbar.Movements')} </span>
											</div>
										</li>
										<li>
											<div className={`dropdown-item text-center hover ${store.fondo === "fondo-modo-claro" ? "text-white" : "text-dark"}`}>
												<span className={store.borde_hover} onClick={() => {
													navigate("/transferencias")
												}}>{t('Navbar.Transfers')}</span>
											</div>
										</li>
										<li>
											<div className={`dropdown-item text-center hover ${store.fondo === "fondo-modo-claro" ? "text-white" : "text-dark"}`}>
												<span className={store.borde_hover} onClick={() => {
													navigate("/perfil")
												}}>{t('Navbar.perfil')}</span>
											</div>
										</li>
										<li>
											<div className={`dropdown-item text-center hover ${store.fondo === "fondo-modo-claro" ? "text-white" : "text-dark"}`}>
												<span className={store.borde_hover} onClick={() => {
													location.pathname === "/tienda" ? navigate("/home") : navigate("/tienda")
												}}>{location.pathname === "/tienda" ? "Home" : t('Footer.Shop')}</span>
											</div>
										</li>
										<li>
											<div className={`dropdown-item text-center hover ${store.fondo === "fondo-modo-claro" ? "text-white" : "text-dark"}`}>
												<span className={store.borde_hover} onClick={() => {
													location.pathname === "/inversiones" ? navigate("/home") : navigate("/inversiones")
												}}>{location.pathname === "/inversiones" ? "Home" : t('Navbar.Investments')}</span>
											</div>
										</li>
										<li className="d-md-none"><hr className="dropdown-divider" /></li>
										<li className="d-md-none">
											<div className={`dropdown-item text-center hover ${store.fondo === "fondo-modo-claro" ? "text-white" : "text-dark"}`}>
												<span className="hover text-danger" onClick={() => {
													localStorage.clear()
													navigate("/")
												}}>Salir  <IoIosLogOut /></span>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-1 align-content-center link  fw-bold text-center d-none d-lg-block">
								<span className={store.borde_hover} onClick={() => {
									navigate("/perfil")
								}}>{t('Navbar.perfil')}</span>{/* Seccion perfil */}
							</div>
							<div className="col-1 align-content-center link  fw-bold text-center d-none d-lg-block">
								<span className={store.borde_hover} onClick={() => {
									navigate("/movimientos")
								}}>{t('Navbar.Movements')} </span>{/* Seccion movimientos */}
							</div>
							<div className="col-1 align-content-center link  fw-bold text-center d-none d-lg-block">
								<span className={store.borde_hover} onClick={() => {
									navigate("/transferencias")
								}}>{t('Navbar.Transfers')}</span> {/* Seccion transferencias */}
							</div>
							<div className="col-1 align-content-center link  fw-bold text-center d-none d-lg-block">
								<span className={store.borde_hover} onClick={() => {
									location.pathname === "/tienda" ? navigate("/home") : navigate("/tienda")
								}}>{location.pathname === "/tienda" ? "Home" : t('Footer.Shop')}</span>
							</div>
							<div className="col-1 align-content-center link  fw-bold text-center d-none d-lg-block">
								<span className={store.borde_hover} onClick={() => {
									location.pathname === "/inversiones" ? navigate("/home") : navigate("/inversiones")
								}}>{location.pathname === "/inversiones" ? "Home" : t('Navbar.Investments')}</span>
							</div>
							<div className="col-2 col-md-1 align-content-center text-center fs-3 fw-bold d-none d-md-block"><span className="hover text-danger" onClick={() => {
								localStorage.clear()
								navigate("/")
							}}><IoIosLogOut /></span></div>
						</>)}

					<div className="col-1 text-end align-content-center d-flex justify-content-between">
						{location.pathname === "/tienda" || location.pathname.includes("/tienda/") ? <div className="align-content-center fs-4 mt-3">
							<div className={`d-flex hover ${store.cart.length == 0 ? "boton-cancelado" : ""}`} onClick={() => { navigate("/tienda/checkout") }}>
								<IoCartOutline />
								<p className="num-compras">{store.cart.length == 0 ? "0" : store.cart.length}</p>

							</div>
						</div> : ""}
						{/*------------------------------ eleccion de idiomas ------------ */}
						<div type="div" className="rounded-circle enlace align-content-center" data-bs-toggle="modal" data-bs-target="#lenguajes"> {/* Ejecuta el modal */}
							<GiWorld className="simbolo-idioma hover" />
						</div>
					</div>
					{/*------------------------------ eleccion de idiomas ------------ */}
					{/*------------------------------ modo oscuro/ modo claro ------------ */}
					<div className="col-1 align-content-center  fw-bold text-center ">
						<div className={store.fondo === "fondo-modo-claro" ? "dark-mode rounded-pill fondo-claro borde-brillante" : "dark-mode rounded-pill fondo-oscuro borde-brillante"}>
							<div className={store.fondo === "fondo-modo-claro" ? "text-warning circle rounded-circle bg-white w-50 border  fw-bold enlace position-relative d-flex justify-content-center active" : "circle rounded-circle w-50 border  bg-black  fw-bold enlace position-relative d-flex justify-content-center"} onClick={() => {
								store.fondo === "fondo-modo-claro" ? actions.CambiarModo(false) : actions.CambiarModo(true)
							}}>
								<div className="icono hover">
									{store.fondo === "fondo-modo-claro" ? <MdWbSunny /> : <FaMoon />}
								</div>
							</div>
						</div>
					</div>
					{/*------------------------------ modo oscuro/ modo claro ------------ */}
				</div>
			</nav >
		</div >
	);
}