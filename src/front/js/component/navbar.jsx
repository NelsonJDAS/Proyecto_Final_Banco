import React, { useState } from "react";
import logo_negro from "../../img/logo-negro.png";
import logo_blanco from "../../img/logo-blanco.png";
import "../../styles/navbar.css";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";

export const Navbar = () => {

	const [ejemplo, setejemplo] = useState(false) // esto es para test
	return (
		<nav >
			<div className="row my-2">
				<div className="col-3 text-end fs-3 fw-bold text-white px-0"><img src={ejemplo === false ? logo_negro : logo_blanco} className="img-fluid img"/></div> {/* Simbolo */}
				<div className="col-2 text-start fs-3 fw-bold text-white px-0 align-content-center"><span>GeekBank</span></div>
				<div className="col-1 align-content-center text-white fw-bold text-center">
					<span className="enlace">Movimientos</span> {/* Seccion movimientos */}
				</div>
				<div className="col-1 align-content-center text-white fw-bold text-center">
					<span className="enlace">Transferencias</span> {/* Seccion transferencias */}
				</div>
				<div className="col-1 align-content-center text-white fw-bold text-center">
					<span className="enlace">Tienda Geek</span>{/* Seccion tienda */}
				</div> 
				<div className="col-1 align-content-center text-white fw-bold text-center">
				<span className="enlace">Cambio/Divisas</span> {/* Seccion divisas */}
				</div>

				{/*------------------------------ modo oscuro/ modo claro ------------ */}
				<div className="col-1 align-content-center text-white fw-bold text-center">
					<div className={ejemplo === true ? "dark-mode rounded-pill w-50 fondo-claro" : "dark-mode rounded-pill w-50 fondo-oscuro"}>
						<div className={ejemplo === true ? "text-warning circle rounded-circle bg-white w-50 border border-warning fw-bold enlace position-relative d-flex justify-content-center active" : " circle rounded-circle w-50 border border-white bg-black text-white fw-bold enlace position-relative d-flex justify-content-center"} onClick={() => {
							ejemplo === true ? setejemplo(false) : setejemplo(true);
						}}>
							<div className="icono">	
							{ejemplo === false ? <FaMoon/ >: <MdWbSunny/>}
							</div> 
						</div>
					</div>
				</div>
				
				{/*------------------------------ modo oscuro/ modo claro ------------ */}
				{/*------------------------------ eleccion de idiomas ------------ */}
				<div className="col-1">
	 				<select name="" id="">
						<option value="">En</option>	
						<option value="">Es</option>
					</select>``
				</div>
				{/*------------------------------ eleccion de idiomas ------------ */}
			</div>
		</nav>
	);
};
