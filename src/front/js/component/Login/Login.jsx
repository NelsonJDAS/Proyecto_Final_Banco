import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../store/appContext.js";
import { useTranslation } from "react-i18next";// importacion de traducción
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { t } = useTranslation();

    const { store, actions } = useContext(Context);
    // estados para controlar los valores puestos por el usuario
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [CodeSend, SetCodeSend] = useState("")
    const navigate = useNavigate("");

    // ejecuta el contenedor si el usuario se ha olvidado el password de su cuenta
    const [userForgotPassword, SetuserForgotPassword] = useState(false)

    // estado para controlar si el usuario solicito el codigo para cambiar su password
    const [code, SetCode] = useState(false);

    // estado que guarda el valor del email para recuperar la password
    const [forgotMail, SetForgotMail] = useState("");

    // tiempo que tiene que pasar para solicitar de nuevo el codigo
    const [timeCode, SetTimeCode] = useState(300);

    const HandleForgotMail = (e) => {
        SetForgotMail(e.target.value.toLowerCase())
    }
    const HandleCodeSeg = (e) => {
        SetCodeSend(e.target.value)
    }

    const CountRef = useRef(null)
    const buttomCode = useRef(null)
    const InputCode = useRef(null)

    const Count = () => {
        //creamos el intervalo del contador
        clearInterval(CountRef.current);

        buttomCode.current.disabled = true;
        CountRef.current = setInterval(() => {
            SetTimeCode((prevContador) => prevContador - 1);
        }, 1000)
    };

    useEffect(() => {
        if (timeCode === 0) {
            clearInterval(CountRef.current)
            SetTimeCode(600)
            SetCode(false)
            buttomCode.current.disabled = false;
        }
    }, [timeCode])


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

    // LLamada al login para loguear usuario
    const HandleLogin = async () => {
        try {
            await actions.loginUser(name, email, password);
            const token = localStorage.getItem("token");

            if (token) {
                navigate("/home");
            } else {
                console.error("Token no encontrado");
            }
        } catch (error) {
            console.error("Error en HandleLogin:", error);
            alert("Error en el inicio de sesión. Por favor, verifica tus credenciales.");
        }
    };

    const inputName = useRef(null)
    const inputPassword = useRef(null)
    const inputMail = useRef(null)

    return (
        <div className="login">
            <form action="#" className={`d-flex flex-column align-content-center text-center ${store.fondo}`}>
                <h1 className="titulo-login">{t(userForgotPassword === false ? 'Login.login' : 'Login.recovery')}</h1>
                {/* hace la transicion mas suave  */}
                <div className={userForgotPassword ? "transicion-recuperar-password " : "transicion-Iniciar-Sesion "}>
                    {/*muestra dependiendo del estado userForgotPassword el contenedor de iniciar sesion o password olvidada*/}
                    <div className="d-flex flex-column text-center container">
                        {userForgotPassword === false ? (
                            <>
                                {/* cotenedor inciar sesion */}
                                <label className="my-1 fw-bold label-login">{t('Login.name')}</label>
                                <input className=" mx-2 mx-md-3 text-center py-1 rounded-pill input" type="text" onChange={HandleName} maxLength="40" ref={inputName} />
                                <label className="my-1 fw-bold label-login">{t('Login.email')}</label>
                                <input className=" mx-2 mx-md-3 text-center py-1 rounded-pill input" type="email" onChange={HandleEmail} ref={inputMail} />
                                <label className="my-1 fw-bold label-login">{t('Login.password')}</label>
                                <input className=" mx-2 mx-md-3 text-center py-1 rounded-pill input" type="password" onChange={HandlePassword} ref={inputPassword} />
                                <span className={`text-end mx-md-3 label-login ${store.borde_hover}`} onClick={() => { SetuserForgotPassword(true) }}>{t('Login.forgot')}</span>
                                <div className="text-center">
                                    <button type="button" className={`btn btn-light mt-3 w-50 rounded-pill btn-login ${store.borde}`} onClick={() => {
                                        // HandleLogin()
                                        localStorage.setItem("token", "amfoidoiafoijdoiajsfiojadsioj")
                                        navigate("/home")
                                    }}>{t('Login.login')}</button>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* contenedor password olvidada */}
                                <div className="text-center my-md-2">
                                    <span className="fw-bold d-none d-md-block">{t('Login.forgot')}</span>
                                    <p className="mx-3 text-center py-md-1 py-0 rounded-3 texto-login">{t('Forgot.recovery2')}</p>
                                </div>
                                <label className="my-md-1 fw-bold label-login">{t('Login.email')}</label>
                                <input className="mx-md-3 mx-2 text-center py-0 py-md-1 rounded-pill input" placeholder="Email" type="email" onChange={HandleForgotMail} />
                                <div className="text-center row mx-1 my-2">
                                    <div className="col-12 col-xl-6 col-md-6 my-md-3 my-1 text-start">
                                        <button type="button" className="rounded-pill btn btn-primary w-100 fw-bold" ref={buttomCode} onClick={() => {
                                            SetCode(true)
                                            Count()
                                            actions.sendCode(forgotMail)

                                        }}>{code ?
                                            `( ${timeCode} ) s`
                                            : t('Forgot.sendCode')}</button>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3 my-md-3 text-center">
                                        <input className="text-center py-1 rounded-pill input w-100 fw-bold input-code" type="text" onChange={HandleCodeSeg} maxLength={6} ref={InputCode} placeholder="******" />
                                        <label className="fw-bold d-none d-md-block">{t('Forgot.code')}</label>
                                    </div>
                                    <div className="col-12 col-xl-3">
                                        <div className="col-12 text-center">
                                            <button type="button" className={`btn mt-3 mt-xl-3 mt-md-0 mt-lg-0 w-100 rounded-pill ${store.borde} ${store.texto} `} onClick={() => {
                                                console.log(timeCode)
                                                actions.verifyCode(forgotMail, CodeSend)
                                                console.log(forgotMail, CodeSend);

                                                ;
                                            }}>{t('Forgot.check')}</button>
                                        </div>
                                    </div>
                                </div>
                                <span className={`mx-3 ${store.borde_hover}`} onClick={() => {
                                    SetuserForgotPassword(false);
                                }}>{t('Forgot.return')}</span>
                            </>
                        )}
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Login
