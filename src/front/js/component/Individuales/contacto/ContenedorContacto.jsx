import React, { useContext, useEffect, useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import ContenedorCuadrado from "../ContenedorCuadrado.jsx";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Context } from "../../../store/appContext.js";

const ContenedorContacto = () => {
    const [userLoad, SetUserLoad] = useState(false)
    const { store, actions } = useContext(Context);

    const navigate = useNavigate("")

    useEffect(() => {
        actions.Scroll();
        SetUserLoad(true)
    }, [])


    return (
        <div className="container">
            <div className="espaciado-contacto">
                <h1 className={`text-center titulo-principal-politica ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>Contacto GeekBank</h1>
                <p className={`fs-3 text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`} >
                    En Geek Bank, nos importa ofrecerte el mejor servicio
                    y asegurarnos de que tengas una experiencia única. Si necesitas asistencia o tienes alguna pregunta,
                    puedes ponerte en contacto con nosotros de manera fácil y rápida a través de las siguientes opciones:
                </p>
            </div>
            <div className="row">
                <div className="col-12 col-lg-4 my-2 mb-lg-3" onClick={() => navigate("/chat")}><ContenedorCuadrado position="left" text={""} title={"Soporte en línea 24/7"} logo={<FaRegUser />} /></div>
                <div className="col-12 col-md-6 col-lg-4 my-2 mb-lg-3"><ContenedorCuadrado position="bottom" text={"geeksacademybank@gmail.com"} title={"Correo electrónico"} logo={<IoMdMail />} /></div>
                <div className="col-12 col-md-6 col-lg-4 my-2 mb-lg-3"><ContenedorCuadrado position="right" text={"+34 600 18 16 22"} title={"Teléfono"} logo={<FaPhone />} /></div>
            </div>
        </div>
    )
}


export default ContenedorContacto



