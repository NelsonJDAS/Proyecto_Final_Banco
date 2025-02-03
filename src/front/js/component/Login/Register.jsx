import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../store/appContext.js";
import { useTranslation } from "react-i18next";// importacion de traducción
import { useNavigate } from "react-router-dom";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export const Register = () => {
    const notyf = new Notyf();

    const { t } = useTranslation();
    //estados para controlar los valores puestos por el usuario
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [mensajeMail, SetMensajeMail] = useState("");
    const [mensajeName, SetMensajeName] = useState("");
    const [mensajePassword, SetMensajePassword] = useState("");
    const navigate = useNavigate(null);

    const { store, actions } = useContext(Context);

    const inputName = useRef(null)
    const inputPassword = useRef(null)
    const inputMail = useRef(null)
    const btnRef = useRef(null)

    //handles para cambiar los valores puestos por el usuario

    const HandleName = (e) => {
        SetName("");
        btnRef.current.classList.add("boton-cancelado");
        inputName.current.classList.add("border-danger")
        if (/[^a-zA-Z\s]/.test(e.target.value)) {
            SetMensajeName("Solo se permiten letras.");
        } else {
            inputName.current.classList.remove("border-danger");
            SetName(e.target.value);
            SetMensajeName("");
        }
    }
    const HandleEmail = (e) => {
        SetEmail("");
        btnRef.current.classList.add("boton-cancelado");
        inputMail.current.classList.add("border-danger")
        if (!e.target.value.includes("@")) {
            SetMensajeMail("Debes incluir el '@' en tu correo.");
        } else if (/\s/.test(e.target.value)) {
            SetMensajeMail("El correo no puede contener espacios.");
        } else {
            inputMail.current.classList.remove("border-danger");
            SetEmail(e.target.value.toLowerCase());
            SetMensajeMail("");
        }
    }
    const HandlePassword = (e) => {
        btnRef.current.classList.add("boton-cancelado");
        inputPassword.current.classList.add("border-danger")
        SetPassword("");
        if (e.target.value.length < 8) {
            SetMensajePassword("La contraseña debe tener al menos 8 caracteres.");
        } else if (!/[^a-zA-Z\s]/.test(e.target.value)) {
            SetMensajePassword("Añade al menos un número o símbolo.");
        } else if (!/[A-Z]/.test(e.target.value)) {
            SetMensajePassword("Incluye una letra mayúscula.");
        } else {
            inputPassword.current.classList.remove("border-danger");
            SetPassword(e.target.value);
            SetMensajePassword("");
        }
    }


    // LLamada al flux para registro
    const handleRegister = async () => {
        const result = await actions.registerUser(name, email, password);
        if (result === "success") {
            navigate("/home");
            notyf.success("Cuenta creada exitosamente")
        } else {
            notyf.error("Error al hacer el registro")
        }
        console.log("desde front", name, email, password);

    };

    useEffect(() => {
        if (name != "" && password != "" && email != "") {
            btnRef.current.classList.remove("boton-cancelado");
        }
    }, [name, email, password])

    return (
        <div className="register">
            <div className={`d-flex formulario-login flex-column align-content-center text-center  ${store.fondo}`}>
                <h1 className="titulo-login">{t('Register.create')}</h1>
                <div className="d-flex flex-column text-center container mb-3">
                    <label className="my-1 fw-bold label-login">{t('Login.name')}</label>
                    <input className="mx-2 mx-md-3 text-center py-1 rounded-pill input" type="text" onChange={HandleName} maxLength="20" ref={inputName} />
                    <p className={`mx-3 text-end text-danger mensaje-condicion ${mensajeName == "" ? "opacity-0" : "opacity-100"}`}>{mensajeName}</p>
                    <label className="my-1 fw-bold label-login">{t('Login.email')}</label>
                    <input className="mx-2 mx-md-3 text-center py-1 rounded-pill input" type="text" onChange={HandleEmail} ref={inputMail} maxLength="30" />
                    <p className={`mx-3 text-end text-danger mensaje-condicion ${mensajeMail == "" ? "opacity-0" : "opacity-100"}`}>{mensajeMail}</p>
                    <label className="my-1 fw-bold label-login">{t('Login.password')}</label>
                    <input className="mx-2 mx-md-3 text-center py-1 rounded-pill input" type="password" onChange={HandlePassword} ref={inputPassword} />
                    <p className={`mx-3 text-end text-danger mensaje-condicion ${mensajePassword == "" ? "opacity-0" : "opacity-100"}`}>{mensajePassword}</p>
                </div>

                <div className="text-center">
                    <button className={`btn btn-light mt-3 w-50 rounded-pill btn-login boton-cancelado ${store.borde} text-white`} onClick={() => { handleRegister() }} ref={btnRef}>{t('Register.ready')}</button>
                </div>
            </div>
        </div>
    )
};

export default Register
