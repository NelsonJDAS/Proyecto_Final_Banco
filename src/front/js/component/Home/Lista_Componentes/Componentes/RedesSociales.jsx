import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";


const RedesSociales = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className={`bg-redes animacion-contenedor hover contenedor-componente-interactivo my-2 text-center fw-bold ${store.borde} text-white align-content-center`}>
            <div className="d-flex flex-column">
                <p className="my-2 objeto-animado">Redes Sociales</p>
                <div className="d-flex justify-content-evenly">
                    <a href="https://facebook.com/" target="_blank" className="icono-redes-home objeto-animado text-white"><FaFacebookSquare /></a>
                    <a href="https://twitter.com/" target="_blank" className="icono-redes-home objeto-animado text-white"><FaSquareXTwitter /></a>
                </div>
                <div className="d-flex justify-content-evenly">
                    <a href="https://instagram.com/" target="_blank" className="icono-redes-home objeto-animado text-white"><FaSquareInstagram /></a>
                    <a href="https://linkedin.com/" target="_blank" className="icono-redes-home objeto-animado text-white"><FaLinkedin /></a>
                </div>
                <div className="d-flex justify-content-evenly">
                    <a href="https://youtube.com/" target="_blank" className="icono-redes-home objeto-animado text-white"><IoLogoYoutube /></a>
                    <a href="https://whatsapp.com/" target="_blank" className="icono-redes-home objeto-animado text-white"><FaSquareWhatsapp /></a>
                </div>
            </div>
        </div >
    )
}

export default RedesSociales