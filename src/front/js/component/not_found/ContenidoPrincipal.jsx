import React, { useContext, useEffect, useState } from "react";
import { MdElectricalServices } from "react-icons/md";
import { RiOutletLine } from "react-icons/ri";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";

const ContenidoPrincipal = () => {
    const { store, actions } = useContext(Context);

    const navigate = useNavigate(null);

    const [userLoad, SetUserLoad] = useState(false);
    useEffect(() => {
        SetUserLoad(true)
    }, [])


    return (<div className="row mx-0">
        <div className="col-6 d-flex align-content-end">
            <i className={`logo_not_found ${userLoad ? "animacion-der visible" : "animacion-der"}`}><MdElectricalServices /></i>
            <i className={`logo_not_found_v2 ${userLoad ? "desvanecer visible" : "desvanecer"}`}><RiOutletLine /></i>
        </div>
        <div className="col-6">
            <div className="row">
                <div className={`col-12 my-3 text-center ${userLoad ? "animacion-der visible" : "animacion-der"}`}><h1 className="fw-bold titulo-404">404 - Página no encontrada</h1></div>
            </div>
            <div className="row">
                <div className={`col-12 my-3 ${userLoad ? "animacion-der visible" : "animacion-der"}`}><p className="text-center fs-3">La página que estás buscando no se encuentra disponible. Es posible que la URL esté incorrecta o que la página haya sido eliminada.</p></div>
            </div>
            <div className="row">
                <div className={`col-12 text-center my-3 ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}><span className={`fs-1 fw-bold ${store.borde_hover}`} onClick={() => {
                    localStorage.getItem('token') === null ? navigate("/") : navigate("/home")
                }}>Volver a la Home</span></div>
            </div>
            <div className="row">
                <div className="col-12"></div>
            </div>
        </div>
    </div>)
}

export default ContenidoPrincipal