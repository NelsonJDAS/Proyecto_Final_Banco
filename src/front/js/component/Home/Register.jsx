import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext.js";

export const Register = () => {
    //estados para controlar los valores puestos por el usuario
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

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
        <div className="register">
            <form action="#" className={`d-flex flex-column align-content-center text-center justify-content-center ${store.fondo}`}>
                <h1>Crear Cuenta</h1>
                <div className="d-flex flex-column text-center container mb-3">
                    <label className="my-1 fw-bold">Nombre</label>
                    <input className=" mx-3 text-center py-1 rounded-pill input" type="text" onChange={HandleName} maxLength="40" />
                    <label className="my-1 fw-bold">Correo electronico</label>
                    <input className=" mx-3 text-center py-1 rounded-pill input" type="email" onChange={HandleEmail} />
                    <label className="my-1 fw-bold">Contraseña</label>
                    <input className=" mx-3 text-center py-1 rounded-pill input" type="password" onChange={HandlePassword} />
                </div>

                <div className="text-center">
                    <button className={`btn btn-light mt-3 w-50 rounded-pill ${store.borde}`} onClick={() => {
                        console.log(name, password, email)
                    }}>Listo!</button>
                </div>
            </form>
        </div>
    )
};

export default Register
