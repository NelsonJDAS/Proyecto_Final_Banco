import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext.js";

export const Login = () => {
    // estados para controlar los valores puestos por el usuario
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    // ejecuta el contenedor si el usuario se ha olvidado el password de su cuenta
    const [userForgotPassword, SetuserForgotPassword] = useState(false)

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
    return (
        <div className="login">
            <form action="#" className={`d-flex flex-column align-content-center text-center justify-content-center ${store.fondo}`}>
                <h1>{userForgotPassword == false ? "Iniciar sesion" : "Recuperar Contraseña"}</h1>
                {/* hace la transicion mas suave  */}
                <div className={userForgotPassword ? "transicion-recuperar-password " : "transicion-Iniciar-Sesion "}>
                    {/*muestra dependiendo del estado userForgotPassword el contenedor de iniciar sesion o password olvidada*/}
                    <div className="d-flex flex-column text-center container">
                        {userForgotPassword === false ? (
                            <>
                                {/* cotenedor inciar sesion */}
                                <label className="my-1 fw-bold">Nombre</label>
                                <input className=" mx-3 text-center py-1 rounded-pill input" type="text" onChange={HandleName} maxLength="40" />
                                <label className="my-1 fw-bold">Correo electronico</label>
                                <input className=" mx-3 text-center py-1 rounded-pill input" type="email" onChange={HandleEmail} />
                                <label className="my-1 fw-bold">Contraseña</label>
                                <input className=" mx-3 text-center py-1 rounded-pill input" type="password" onChange={HandlePassword} />
                                <span className={`text-end mx-3 ${store.borde_hover}`} onClick={() => { SetuserForgotPassword(true) }}>¿Olvidaste tu contraseña?</span>
                                <div className="text-center">
                                    <button className={`btn btn-light mt-3 w-50 rounded-pill ${store.borde}`} onClick={() => {
                                        console.log(name, password, email);
                                    }}>Iniciar Sesión</button>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* contenedor password olvidada */}
                                <div className="text-center my-2">
                                    <span className="fw-bold">¿Olvidaste tu contraseña?</span>
                                    <p className="mx-3 text-center py-1 rounded-3 text-center">No te preocupes, te ayudaremos a recuperar el acceso a tu cuenta. Por favor, ingresa la dirección de correo electrónico asociada a tu cuenta. Te enviaremos un código de verificación que podrás usar para restablecer tu contraseña.</p>
                                </div>
                                <label className="my-1 fw-bold">Correo electronico</label>
                                <input className=" mx-3 text-center py-1 rounded-pill input" type="email" onChange={HandleEmail} />
                                <div className="text-center row mx-1 my-2">
                                    <div className="col-8 my-3 text-start">
                                        <button className="rounded-pill btn btn-primary w-100">Enviar Código</button>
                                    </div>
                                    <div className="col-4 my-3 text-center">
                                        <input className="text-center py-1 rounded-pill input w-100 fw-bold" type="text" onChange={HandlePassword} maxLength={6} placeholder="******" />
                                        <label className="fw-bold">Código</label>
                                    </div>
                                </div>
                                <span className={`mx-3 ${store.borde_hover}`} onClick={() => {
                                    SetuserForgotPassword(false);
                                }}>Volver Atrás</span>
                            </>
                        )}
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Login
