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
                    <div className="icono-redes-home objeto-animado"><FaFacebookSquare /></div>
                    <div className="icono-redes-home objeto-animado"><FaSquareXTwitter /></div>
                </div>
                <div className="d-flex justify-content-evenly">
                    <div className="icono-redes-home objeto-animado"><FaSquareInstagram /></div>
                    <div className="icono-redes-home objeto-animado"><FaLinkedin /></div>
                </div>
                <div className="d-flex justify-content-evenly">
                    <div className="icono-redes-home objeto-animado"><IoLogoYoutube /></div>
                    <div className="icono-redes-home objeto-animado"><FaSquareWhatsapp /></div>
                </div>
            </div>
        </div >
    )
}

export default RedesSociales