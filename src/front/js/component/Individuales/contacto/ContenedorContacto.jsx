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
import { useTranslation } from "react-i18next";

const ContenedorContacto = () => {
    const { t } = useTranslation()
    const [userLoad, SetUserLoad] = useState(false)
    const { store, actions } = useContext(Context);

    const navigate = useNavigate("")

    useEffect(() => {
        actions.Scroll();
        SetUserLoad(true)
    }, [])


    return (
        <div className="container espaciado-fondo">
            <div className="espaciado-contacto">
                <h1 className={`text-center titulo-principal-politica ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>{t('contacto.p1')}</h1>
                <p className={`fs-3 text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`} >{t('contacto.p2')}</p>
            </div>
            <div className="row">
                <div className="col-12 col-lg-4 my-2 mb-lg-3" onClick={() => navigate("/chat")}><ContenedorCuadrado position="left" text={""} title={t('contacto.ti1')} logo={<FaRegUser />} /></div>
                <div className="col-12 col-md-6 col-lg-4 my-2 mb-lg-3"><ContenedorCuadrado position="bottom" text={t('contacto.text2')} title={t('contacto.ti2')} logo={<IoMdMail />} /></div>
                <div className="col-12 col-md-6 col-lg-4 my-2 mb-lg-3"><ContenedorCuadrado position="right" text={t('contacto.text3')} title={t('contacto.ti3')} logo={<FaPhone />} /></div>
            </div>
        </div>
    )
}


export default ContenedorContacto



