import React from "react";

export const Login = () => {

    return (
        <div className="login">
            <form action="#" className="d-flex flex-column align-content-center text-center justify-content-center">
                <h1>Iniciar sesion</h1>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <span>Olvidates tu contraseña?</span>
                <button className="btn btn-primary">Iniciar Sesion</button>
            </form>
        </div>
    )
};

export default Login
