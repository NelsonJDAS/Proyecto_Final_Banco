import React from "react";

const ContenedorAnimado = ({ funcion }) => {
    // contenedor animado
    return (
        <div className="contenedor-principal text-white">
            <div className="contenedor-interactivo">
                {/* contenedor para ocultar el iniciar sesion cuando el usuario este interactuando con el contenedor crear usuario */}
                <div className="d-flex flex-column justify-content-center align-items-center text-center contenedor-izquierdo">
                    <h1>Bienvenido!</h1>
                    <p>¿Ya tienes una cuenta?</p>
                    <p>Inicia sesión para acceder a todas tus funcionalidades de la web</p>
                    <span className="link fw-bold hover" onClick={() => {
                        funcion(true)
                    }}>Iniciar Sesion</span>
                </div>
                {/* contenedor para ocultar el Crear cuenta cuando el usuario este interactuando con el contenedor Inciar sesion */}
                <div className="d-flex flex-column justify-content-center align-items-center text-center contenedor-derecho">
                    <h1 className="fs-1">Hola!</h1>
                    <p>¿Aún no tienes una cuenta?</p>
                    <p>Crear una es rápido y sencillo.</p>
                    <p>Haz clic en el botón de abajo para comenzar.</p>

                    <span className="link fw-bold hover" onClick={() => {
                        funcion(false)
                    }}>Registrarme</span>
                </div>
            </div>
        </div>
    )
}

export default ContenedorAnimado