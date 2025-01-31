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


    // estado para el codigo enviado al gmail del usuario
    const [CodeSend, SetCodeSend] = useState("")


    // estado para manejar todo el contenedor de confirmar su password nueva
    const [newPassword, SetNewPassword] = useState(false)



    const navigate = useNavigate("");

    // ejecuta el contenedor si el usuario se ha olvidado el password de su cuenta
    const [userForgotPassword, SetuserForgotPassword] = useState(false)

    // estado para controlar si el usuario solicito el codigo para cambiar su password
    const [code, SetCode] = useState(false);

    // estado que guarda el valor del email para recuperar la password
    const [forgotMail, SetForgotMail] = useState("");
    const [mensajeForgotMail, SetMensajeForgotMail] = useState("")

    // tiempo que tiene que pasar para solicitar de nuevo el codigo
    const [timeCode, SetTimeCode] = useState(300);

    // referencia contador
    const CountRef = useRef(null)

    // referencia btn enviar codigo
    const buttomCode = useRef(null)

    //referencia meter el codigo enviado
    const InputCode = useRef(null)

    //referencia al boton de comprobar el codigo 
    const btnComprobarRef = useRef(null)

    // boton que ejecuta el actualizar password
    const btnNewPassword = useRef(null);

    // dos referencias para hacer las condiciones que concidan las dos password 
    const NewPasswordCondition = useRef(null);
    const NewPassword = useRef(null)


    // handle para aplicar condiciones al correo que se le solicita al usuario para enviarle el codigo
    const HandleForgotMail = (e) => {
        SetForgotMail("");
        if (!e.target.value.includes("@")) {
            SetMensajeForgotMail("Debes incluir el '@' en tu correo.");
        } else if (e.target.value.includes(" ")) {
            SetMensajeForgotMail("El correo no puede contener espacios.");
        } else {
            SetForgotMail(e.target.value.toLowerCase());
            SetMensajeForgotMail("");
            buttomCode.current.classList.remove("boton-cancelado")
        }
    }

    // handle para aplicar el codigo
    const HandleCodeSeg = (e) => {
        SetCodeSend(e.target.value)
    }

    // codidicion para que la password este igual en ambos inputs
    const HandleNewPassword = (e) => {
        if (NewPassword.current.value != "" && NewPasswordCondition.current.value != "" && NewPasswordCondition.current.value == NewPassword.current.value) {
            btnNewPassword.current.classList.remove("boton-cancelado")
        } else {
            btnNewPassword.current.classList.add("boton-cancelado")
        }
    }

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


    // funcion contador
    const Count = () => {
        //creamos el intervalo del contador
        clearInterval(CountRef.current);

        buttomCode.current.disabled = true;
        CountRef.current = setInterval(() => {
            SetTimeCode((prevContador) => prevContador - 1);
        }, 1000)
    };

    // observa al contador y al llegar a 0  limpia el intervalo y oculta los dos botones (ahora el usuario durara 600 seg con el boton desactivado)
    useEffect(() => {
        if (timeCode === 0) {
            clearInterval(CountRef.current)
            btnComprobarRef.current.classList.add("boton-cancelado")
            InputCode.current.classList.add("boton-cancelado")
            SetTimeCode(600)
            SetCode(false)
            buttomCode.current.disabled = false;
        }
    }, [timeCode])



    // LLamada al login para loguear usuario
    const HandleLogin = async () => {
        try {
            await actions.loginUser(name, email, password);

            // Obtener el token y la id del usuario desde localStorage
            const token = localStorage.getItem("token");
            const userId = localStorage.getItem("userId");  // Recuperar el id del usuario

            if (token && userId) {
                navigate("/home");
            } else {
                console.error("Token o userId no encontrados");
            }
        } catch (error) {
            console.error("Error en HandleLogin:", error);
            alert("Error en el inicio de sesión. Por favor, verifica tus credenciales.");
        }
    };

    return (
        <div className="login">
            <div className={`d-flex flex-column align-content-center text-center formulario-login ${store.fondo}`}>
                <h1 className="titulo-login">{t(userForgotPassword === false ? 'Login.login' : newPassword ? "Confirmar Contraseña" : 'Login.recovery')}</h1>
                {/* hace la transicion mas suave  */}
                <div className={userForgotPassword ? "transicion-recuperar-password " : "transicion-Iniciar-Sesion "}>
                    {/*muestra dependiendo del estado userForgotPassword el contenedor de iniciar sesion o password olvidada*/}
                    <div className="d-flex flex-column text-center container">
                        {userForgotPassword === false ? (
                            <>
                                {/* cotenedor inciar sesion */}
                                <label className="my-1 fw-bold label-login">{t('Login.name')}</label>
                                <input className=" mx-2 mx-md-3 text-center py-1 rounded-pill mb-3 input" type="text" onChange={HandleName} maxLength="40" />
                                <label className="my-1 fw-bold label-login">{t('Login.email')}</label>
                                <input className=" mx-2 mx-md-3 text-center py-1 rounded-pill mb-3 input" type="email" onChange={HandleEmail} />
                                <label className="my-1 fw-bold label-login">{t('Login.password')}</label>
                                <input className=" mx-2 mx-md-3 text-center py-1 rounded-pill input" type="password" onChange={HandlePassword} />
                                <span className={`text-end mx-md-3 label-login  mb-3  ${store.borde_hover}`} onClick={() => { SetuserForgotPassword(true) }}>{t('Login.forgot')}</span>
                                <div className="text-center">
                                    <button type="button" className={`btn btn-light mt-3 w-50 rounded-pill btn-login ${store.borde}`} onClick={() => {
                                        HandleLogin()
                                        // localStorage.setItem("token", "amfoidoiafoijdoiajsfiojadsioj")
                                        // navigate("/home")
                                    }}>{t('Login.login')}</button>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* contenedor password olvidada */}
                                {/*ocultamos las propiedades y las cambiamos si el estado newpassword nos indica que le usuario accedio correctamente al codigo y puede cambiar su password*/}
                                <div className="text-center my-md-2">
                                    <span className={`fw-bold d-none d-md-block ${newPassword ? "d-md-none" : ""}`}>{t('Login.forgot')}</span>
                                    {/* titulo manejado por el newpassword para confirmar la nueva password */}
                                    <p className={`mx-3 text-center py-md-1 py-0 rounded-3 texto-login ${newPassword ? "d-none" : ""}`}>{t('Forgot.recovery2')}</p>
                                </div>
                                {/* contenedor manejado por el newpassword para confirmar la nueva password */}
                                <label className={`my-md-3 fw-bold label-login ${newPassword ? "" : "d-none"}`}>Contraseña nueva</label>
                                <input className={`"mx-md-3 mx-2 text-center py-0 py-md-1 rounded-pill input ${newPassword ? "" : "d-none"}`} type="password" ref={NewPassword} onChange={HandleNewPassword} />
                                <label className={`my-md-3 fw-bold label-login ${newPassword ? "" : "d-none"}`}>Confirmar Contraseña</label>
                                <input className={`"mx-md-3 mx-2 text-center py-0 py-md-1 rounded-pill input ${newPassword ? "" : "d-none"}`} type="password" ref={NewPasswordCondition} onChange={HandleNewPassword} />
                                <label className={`my-md-1 fw-bold label-login ${newPassword ? "d-none" : ""}`}>{t('Login.email')}</label>
                                <input className={`mx-md-3 mx-2 text-center py-0 py-md-1 rounded-pill input ${newPassword ? "d-none" : ""}`} placeholder="Email" type="email" onChange={HandleForgotMail} />
                                {/* contenedor manejo del codigo al correo */}
                                <p className={`mx-3 text-center text-danger mensaje-condicion ${mensajeForgotMail == "" ? "opacity-0" : "opacity-100"}`}>{mensajeForgotMail}</p>
                                <div className="text-center row mx-1 my-2">
                                    {/* Usamos el mismo boton para el contenedor confirmar password */}
                                    <div className={`col-12 col-xl-6 col-md-6 my-md-3 my-1 text-start ${newPassword ? "col-xl-12" : ""}`}>
                                        <button type="button" className={`rounded-pill btn btn-primary w-100 fw-bold ${newPassword ? "" : "d-none"} boton-cancelado`} ref={btnNewPassword} onClick={() => {
                                            // tu funcion aqui
                                        }}>Listo!</button>
                                        {/* Ocultamos el boton con el estado de newpassword */}
                                        <button type="button" className={`rounded-pill btn btn-primary w-100 fw-bold boton-cancelado ${newPassword ? "d-none" : ""}`} ref={buttomCode} onClick={() => {
                                            SetCode(true)
                                            Count()
                                            btnComprobarRef.current.classList.remove("boton-cancelado")
                                            InputCode.current.classList.remove("boton-cancelado")
                                            actions.sendCode(forgotMail)
                                        }}>{code ?
                                            `( ${timeCode} ) s`
                                            : t('Forgot.sendCode')}</button>
                                    </div>
                                    {/* Ocultamos el boton con el estado de newpassword */}
                                    <div className={`col-12 col-md-6 col-xl-3 my-md-3 text-center ${newPassword ? "d-none" : ""}`}>
                                        <input className="text-center py-1 rounded-pill input w-100 fw-bold input-code boton-cancelado" type="text" onChange={HandleCodeSeg} maxLength={6} ref={InputCode} placeholder="******" />
                                        <label className="fw-bold d-none d-md-block">{t('Forgot.code')}</label>
                                    </div>
                                    {/* Ocultamos el boton con el estado de newpassword */}
                                    <div className={`col-12 col-xl-3 ${newPassword ? "d-none" : ""}`}>
                                        <div className="col-12 text-center">
                                            <button type="button" className={`btn btn-primary text-white fw-bold mt-3 mt-xl-3 mt-md-0 mt-lg-0 w-100 rounded-pill boton-cancelado`} ref={btnComprobarRef} onClick={() => {
                                                SetNewPassword(true);
                                                console.log(timeCode)
                                                actions.verifyCode(forgotMail, CodeSend)
                                                console.log(forgotMail, CodeSend);
                                                ;
                                            }}>{t('Forgot.check')}</button>
                                        </div>
                                    </div>
                                </div>
                                <span className={`mx-3 ${store.borde_hover}`} onClick={() => {
                                    newPassword ? SetNewPassword(false) : SetuserForgotPassword(false);
                                }}>{t('Forgot.return')}</span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
};

export default Login
