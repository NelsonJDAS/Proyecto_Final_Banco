import React, { Component } from "react";
import "../../styles/footer.css";

export const Footer = () => {


	return (
		<footer className="footer mt-auto py-3 bg-black border-top border-white">
		<div className="row px-3 m-0">
			<div className="col-2 text-start d-flex flex-column">
			<h6 className="subtitulo text-white">Informacion de contacto</h6>
			<span className="enlace text-white">Contacto</span>
			<span className="enlace text-white">Chat</span>
			</div>
			<div className="col-2 text-start d-flex flex-column">
			<h6 className="subtitulo text-white">Enlaces legales</h6>
			<span className="enlace text-white">Politica de privacidad</span>
			<span className="enlace text-white">Termino de condiciones</span>
			<span className="enlace text-white">aviso legal</span>
			</div>
			<div className="col-2 text-start d-flex flex-column">
			<h6 className="subtitulo text-white">Enlaces a recursos</h6>
			<span className="enlace text-white">Tarifas / Comisiones</span>
			<span className="enlace text-white">Educacion</span>
			</div>
			<div className="col-2 text-start d-flex flex-column">
			<h6 className="subtitulo text-white">Seguridad</h6>
			<span className="enlace text-white">Consejos</span>
			<span className="enlace text-white">Metodos de Seguridad</span>
			<span className="enlace text-white">Tarjeta de cordenadas</span>
			</div>
			<div className="col-2 text-start d-flex flex-column">
			<h6 className="subtitulo text-white">Productos y Servicios</h6>
			<span className="enlace text-white">Store</span>
			<span className="enlace text-white">Seguro</span>
			<span className="enlace text-white">Prestamo</span>
			</div>
			<div className="col-2 text-start d-flex flex-column">
			<h6 className="subtitulo text-white">Certificaciones</h6>
			<span className="enlace text-white">Titulos certificados</span>
			<span className="enlace text-white">Titulos de seguridad</span>
			</div>
		</div>
	</footer>
	)
};
