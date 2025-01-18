import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../store/appContext";
import { useSSR } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

const ContenedorPrincipalPerfil = () => {
    const { store, actions } = useContext(Context);

    const navigate = useNavigate(null);

    const [userLoad, SetUserLoad] = useState(false);
    useEffect(() => {
        SetUserLoad(true)
    }, [])


    return (
        <>
            <div className={`img-fondo-perfil align-content-center text-white border-white ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>
                <div className="container contenedor-perfil w-75">
                    <h1 className={`text-center titulo-perfil my-3 ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>Modifica tus datos aqui!</h1>
                    <form action="#">
                        <div className="row">
                            <div className={`col-md-6 my-xl-3 my-2 d-flex flex-column text-center ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>
                                <label className="my-2 fw-bold fs-4 label-perfil">Nombre Completo</label>
                                <input className="mx-md-3 text-center py-1 rounded-pill bg-white border-2 border-white text-white fw-bold fs-4 bg-opacity-25 input-perfil" type="text" />
                            </div>
                            <div className={`col-md-6 my-xl-3 my-2 d-flex flex-column text-center ${userLoad ? "animacion-der visible" : "animacion-der"}`}>
                                <label className="my-2 fw-bold fs-4 label-perfil">Apellidos</label>
                                <input className="mx-md-3 text-center py-1 rounded-pill bg-white border-2 border-white text-white fw-bold fs-4 bg-opacity-25 input-perfil" type="text" />
                            </div>
                            <div className="col-xl-1"></div>
                            <div className={`col-xl-10 my-xl-3 my-2 d-flex flex-column text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                                <label className="my-2 fw-bold fs-4 label-perfil">Direccion</label>
                                <input className="mx-md-3 text-center py-1 rounded-pill bg-white border-2 border-white text-white fw-bold fs-4 bg-opacity-25 input-perfil" type="text" />
                            </div>
                            <div className="col-xl-1"></div>
                            <div className={`col-xl-5 col-md-4 my-xl-3 my-2 d-flex flex-column text-center ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>
                                <label className="my-2 fw-bold fs-4 label-perfil">Telefono</label>
                                <input className="mx-md-3 text-center py-1 rounded-pill bg-white border-2 border-white text-white fw-bold fs-4 bg-opacity-25 input-perfil" type="text" />
                            </div>
                            <div className={`col-xl-3 my-xl-3 col-md-4 my-2 d-flex flex-column text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                                <label className="my-2 fw-bold fs-4 label-perfil">Tipo de documento</label>
                                <select className={`form-select form-select-sm rounded-pill text-center bg-white bg-opacity-25 text-white py-2 hover ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`} aria-label="Small select example">
                                    <option selected>-----------</option>
                                    <option className="fw-bold text-dark" value="1">DNI</option>
                                    <option className="fw-bold text-dark" value="2">NIE</option>
                                    <option className="fw-bold text-dark" value="3">Pasaporte</option>
                                </select>
                            </div>
                            <div className={`col-xl-4 my-xl-3 col-md-3 my-2 d-flex flex-column text-center ${userLoad ? "animacion-der visible" : "animacion-der"}`}>
                                <label className="my-2 fw-bold fs-4 label-perfil">Num Documento</label>
                                <input className="mx-md-3 text-center py-1 rounded-pill bg-white border-2 border-white text-white fw-bold fs-4 bg-opacity-25 input-perfil" type="text" />
                            </div>
                            <div className={`col-xl-12 mx-0 py-3 text-center ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>
                                <button className={`btn btn-perfil bg-white bg-opacity-25 border-white mt-3 w-50 hover text-white fw-bold fs-4 rounded-3 py-2`}> Confirmar Cambios </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContenedorPrincipalPerfil