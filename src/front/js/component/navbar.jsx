import React, { useContext, useEffect, useState } from "react";
import logo_negro from "../../img/logo-negro.png";
import logo_blanco from "../../img/logo-blanco.png";
import "../../styles/navbar.css";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

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
	const handleLanguageChange = (language) => {
		i18n.changeLanguage(language);
	};

	const [btn, setbtn] = useState(false) // estado boton modo claro, modo oscuro
	const navigate = useNavigate(null);

	useEffect(() => {
		btn === true ? actions.CambiarModo(true) : actions.CambiarModo(false)
	}, [btn])

	return (
		<div className={`contenedor-nav ${location.pathname === "/perfil" ? "text-white z-1" : ""}`} id="navbar"> {/* modo oscuro y claro */}
			<div className="modal fade" id="lenguajes" tabIndex="-1" aria-labelledby="label" aria-hidden="true">
				{/* Modal selector de idiomas */}
				<div className="modal-dialog contenedor-modal">
					<div className={`modal-content rounded-3 ${store.fondo} borde-brillante`}>
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
								localStorage.getItem('token') === null ? navigate("/") : navigate("/home")
							}} /><img src={logo_blanco} className={`img-fluid img ${store.fondo == "fondo-modo-oscuro" ? "d-none" : "d-block"}`} />
						</div>
					</div>

					<div className="col-2 col-md-2 text-start fs-3 titulo-nav fw-bold  px-0 align-content-center hover" onClick={() => {
						localStorage.getItem('token') === null ? navigate("/") : navigate("/home")
					}}><span>GeekBank</span></div>
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
											<a className={`dropdown-item text-center hover ${store.fondo === "fondo-modo-claro" ? "text-white" : "text-dark"}`} href="#">
												<span className={store.borde_hover} onClick={() => {
													navigate("/movimientos")
												}}>{t('Navbar.Movements')} </span>
											</a>
										</li>
										<li>
											<a className={`dropdown-item text-center hover ${store.fondo === "fondo-modo-claro" ? "text-white" : "text-dark"}`} href="#">
												<span className={store.borde_hover} onClick={() => {
													navigate("/transferencias")
												}}>{t('Navbar.Transfers')}</span>
											</a>
										</li>
										<li>
											<a className={`dropdown-item text-center hover ${store.fondo === "fondo-modo-claro" ? "text-white" : "text-dark"}`} href="#">
												<span className={store.borde_hover} onClick={() => {
													navigate("/example")
												}}>{t('GEEK Store')}</span>
											</a>
										</li>
										<li>
											<a className={`dropdown-item text-center hover ${store.fondo === "fondo-modo-claro" ? "text-white" : "text-dark"}`} href="#">
												<span className={store.borde_hover} onClick={() => {
													navigate("/example")
												}}>{t('Navbar.Exch/Currency')}</span>
											</a>
										</li>
										<li>
											<a className={`dropdown-item text-center hover ${store.fondo === "fondo-modo-claro" ? "text-white" : "text-dark"}`} href="#">
												<span className={store.borde_hover} onClick={() => {
													navigate("/example")
												}}>{t('Navbar.Investments')}</span>
											</a>
										</li>
										<li className="d-md-none"><hr className="dropdown-divider" /></li>
										<li className="d-md-none">
											<a className={`dropdown-item text-center hover ${store.fondo === "fondo-modo-claro" ? "text-white" : "text-dark"}`} href="#">
												<span className="hover text-danger" onClick={() => {
													localStorage.clear()
													navigate("/")
												}}>Salir  <IoIosLogOut /></span>
											</a>
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
									navigate("/example")
								}}>{t('Navbar.Exch/Currency')}</span> {/* Seccion divisas */}
							</div>
							<div className="col-1 align-content-center link  fw-bold text-center d-none d-lg-block">
								<span className={store.borde_hover} onClick={() => {
									navigate("/example")
								}}>{t('Navbar.Investments')}</span> {/* Seccion divisas */}
							</div>
							<div className="col-2 col-md-1 align-content-center text-center fs-3 fw-bold d-none d-md-block"><span className="hover text-danger" onClick={() => {
								localStorage.clear()
								navigate("/")
							}}><IoIosLogOut /></span></div>
						</>)}

					{/*------------------------------ eleccion de idiomas ------------ */}
					<div className="col-1 text-end align-content-center">
						<div type="div" className="rounded-circle enlace" data-bs-toggle="modal" data-bs-target="#lenguajes"> {/* Ejecuta el modal */}
							<GiWorld className="simbolo-idioma hover" />
						</div>
					</div>
					{/*------------------------------ eleccion de idiomas ------------ */}
					{/*------------------------------ modo oscuro/ modo claro ------------ */}
					<div className="col-1 align-content-center  fw-bold text-center ">
						<div className={btn === true ? "dark-mode rounded-pill fondo-claro borde-brillante" : "dark-mode rounded-pill fondo-oscuro borde-brillante"}>
							<div className={btn === true ? "text-warning circle rounded-circle bg-white w-50 border  fw-bold enlace position-relative d-flex justify-content-center active" : "circle rounded-circle w-50 border  bg-black  fw-bold enlace position-relative d-flex justify-content-center"} onClick={() => {
								btn === true ? setbtn(false) : setbtn(true);
							}}>
								<div className="icono hover">
									{btn === false ? <FaMoon /> : <MdWbSunny />}
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