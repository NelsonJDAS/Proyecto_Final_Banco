import React, { useContext, useRef, useState } from "react";
import { Context } from "../../store/appContext.js";
import { useTranslation } from "react-i18next";// importacion de traducción
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const { t } = useTranslation();
    //estados para controlar los valores puestos por el usuario
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const navigate = useNavigate(null);

    const { store, actions } = useContext(Context);

    //handles para cambiar los valores puestos por el usuario

    const HandleName = (e) => {
        SetName(e.target.value)
    }
    const HandleEmail = (e) => {
        SetEmail(e.target.value.toLowerCase())
    }
    const HandlePassword = (e) => {
        SetPassword(e.target.value)
    }

    const inputName = useRef(null)
    const inputPassword = useRef(null)
    const inputMail = useRef(null)

    // LLamada al flux para registro
    const handleRegister = async () => {
        const result = await actions.registerUser(name, email, password);
        if (result === "success") {
            navigate("/home");
            console.log("Usuario registrado exitosamente");
        } else {
            console.error("Error en el registro");
        }
    };

    return (
        <div className="register">
            <form action="#" className={`d-flex flex-column align-content-center text-center  ${store.fondo}`}>
                <h1 className="titulo-login">{t('Create')}</h1>
                <div className="d-flex flex-column text-center container mb-3">
                    <label className="my-1 fw-bold label-login">{t('Name')}</label>
                    <input className="mx-2 mx-md-3 text-center py-1 rounded-pill input" type="text" onChange={HandleName} maxLength="40" ref={inputName} />
                    <label className="my-1 fw-bold label-login">{t('Email')}</label>
                    <input className="mx-2 mx-md-3 text-center py-1 rounded-pill input" type="email" onChange={HandleEmail} ref={inputMail} />
                    <label className="my-1 fw-bold label-login">{t('Password')}</label>
                    <input className="mx-2 mx-md-3 text-center py-1 rounded-pill input" type="password" onChange={HandlePassword} ref={inputPassword} />
                </div>

                <div className="text-center">
                <button className={`btn btn-light mt-3 w-50 rounded-pill btn-login ${store.borde}`} onClick={() => {handleRegister()}}>{t('Ready')}</button>
                        
                </div>
            </form>
        </div>
    )
};

export default Register
