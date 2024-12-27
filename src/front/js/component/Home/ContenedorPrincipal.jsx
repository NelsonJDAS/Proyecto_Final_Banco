import React, { useContext, useState } from "react";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import { Context } from "../../store/appContext.js";

export const ContenedorPrincipal = () => {
    const [Registro, setRegistro] = useState(true)
    const { store, actions } = useContext(Context);

    return (
        <div className={`contenedor container w-75 h-100 d-flex ${Registro === true ? "" : "panel-derecho-activo"} ${store.texto} ${store.borde}`}>
            <div className="register">
                <form action="#" className={`d-flex flex-column align-content-center text-center justify-content-center ${store.fondo}`}>
                    <h1>Crear Cuenta</h1>
                    <div className="d-flex flex-column text-center container mb-3">
                        <label className="my-1 fw-bold">Nombre</label>
                        <input className=" mx-3 text-center py-1 rounded-pill input" type="text" />
                        <label className="my-1 fw-bold">Correo electronico</label>
                        <input className=" mx-3 text-center py-1 rounded-pill input" type="email" />
                        <label className="my-1 fw-bold">Contraseña</label>
                        <input className=" mx-3 text-center py-1 rounded-pill input" type="password" />
                    </div>

                    <div className="text-center">
                        <button className={`btn btn-light mt-3 w-50 rounded-pill ${store.borde}`}>Listo!</button>
                    </div>
                </form>
            </div>
            <div className="login">
                <form action="#" className={`d-flex flex-column align-content-center text-center justify-content-center ${store.fondo}`}>
                    <h1>Iniciar sesion</h1>
                    <div className="d-flex flex-column text-center container">
                        <label className="my-1 fw-bold">Nombre</label>
                        <input className=" mx-3 text-center py-1 rounded-pill input" type="text" />
                        <label className="my-1 fw-bold">Correo electronico</label>
                        <input className=" mx-3 text-center py-1 rounded-pill input" type="email" />
                        <label className="my-1 fw-bold">Contraseña</label>
                        <input className=" mx-3 text-center py-1 rounded-pill input" type="password" />
                        <span className={`text-end mx-3 ${store.borde_hover}`}>Olvidates tu contraseña?</span>
                    </div>

                    <div className="text-center">
                        <button className={`btn btn-light mt-3 w-50 rounded-pill ${store.borde}`}>Iniciar Sesion</button>
                    </div>
                </form>
            </div>
            <div className="contenedor-principal text-white">
                <div className="contenedor-interactivo">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center contenedor-izquierdo">
                        <h1>Bienvenido!</h1>
                        <p>¿Ya tienes una cuenta?</p>
                        <p>Inicia sesión para acceder a todas tus funcionalidades de la web</p>
                        <span className="link fw-bold hover" onClick={() => {
                            setRegistro(true)
                        }}>Iniciar Sesion</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center text-center contenedor-derecho">
                        <h1 className="fs-1">Hola!</h1>
                        <p>¿Aún no tienes una cuenta?</p>
                        <p>Crear una es rápido y sencillo.</p>
                        <p>Haz clic en el botón de abajo para comenzar.</p>

                        <span className="link fw-bold hover" onClick={() => {
                            setRegistro(false)
                        }}>Registrarme</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContenedorPrincipal
