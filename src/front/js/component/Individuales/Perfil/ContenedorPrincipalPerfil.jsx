import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../store/appContext";
import { useSSR, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

const ContenedorPrincipalPerfil = () => {
    const { t } = useTranslation()
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [subname, setSubname] = useState('');
    const [adress, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [typeDoc, setTypeDoc] = useState('');
    const [numDoc, setNumDoc] = useState("");

    const [userLoad, SetUserLoad] = useState(false);
    useEffect(() => {
        actions.Scroll()
        SetUserLoad(true)
        const storedId = localStorage.getItem("userId")
        actions.fetchUserDetails(storedId)
        setName(store.cliente.nombre);
        setSubname(store.cliente.apellidos);
        setAdress(store.cliente.direccion);
        setPhone(store.cliente.telefono);
        setTypeDoc(store.cliente.Tipo_de_documento);
        setNumDoc(store.cliente.Numero_de_documento);
        console.log(name);

    }, [])

    const actualizarPerfil = () => {
        const storedId = localStorage.getItem("userId");
        const perfil = {
            nombre: name,
            apellidos: subname,
            direccion: adress,
            telefono: phone,
            tipo_documento: typeDoc,
            numero_documento: numDoc

        }
        actions.updateClienteProfile(storedId, perfil)
        navigate("/home")
    }


    return (
        <>
            <div className={`img-fondo-perfil align-content-center text-white border-white ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>
                <div className="container contenedor-perfil w-75">
                    <h1 className={`text-center titulo-perfil my-3 ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>{t('perfil.modify')}</h1>
                    <form action="#">
                        <div className="row">
                            <div className={`col-md-6 my-xl-3 my-2 d-flex flex-column text-center ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>
                                <label className="my-2 fw-bold fs-4 label-perfil">{t('perfil.name')}</label>
                                <input className="mx-md-3 text-center py-1 rounded-pill bg-white border-2 border-white text-dark fs-4 bg-opacity-75 fw-bold input-perfil" value={name} onChange={(e) => setName(e.target.value)} type="text" />
                            </div>
                            <div className={`col-md-6 my-xl-3 my-2 d-flex flex-column text-center ${userLoad ? "animacion-der visible" : "animacion-der"}`}>
                                <label className="my-2 fw-bold fs-4 label-perfil">{t('perfil.subname')}</label>
                                <input className="mx-md-3 text-center py-1 rounded-pill bg-white border-2 border-white text-dark fs-4 bg-opacity-75 fw-bold input-perfil" value={subname} onChange={(e) => setSubname(e.target.value)} type="text" />
                            </div>
                            <div className="col-xl-1"></div>
                            <div className={`col-xl-10 my-xl-3 my-2 d-flex flex-column text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                                <label className="my-2 fw-bold fs-4 label-perfil">{t('perfil.address')}</label>
                                <input className="mx-md-3 text-center py-1 rounded-pill bg-white border-2 border-white text-dark fs-4 bg-opacity-75 fw-bold input-perfil" value={adress} onChange={(e) => setAdress(e.target.value)} type="text" />
                            </div>
                            <div className="col-xl-1"></div>
                            <div className={`col-xl-5 col-md-4 my-xl-3 my-2 d-flex flex-column text-center ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>
                                <label className="my-2 fw-bold fs-4 label-perfil">{t('perfil.phone')}</label>
                                <input className="mx-md-3 text-center py-1 rounded-pill bg-white border-2 border-white text-dark fs-4 bg-opacity-75 fw-bold input-perfil" value={phone} onChange={(e) => setPhone(e.target.value)} type="text" />
                            </div>
                            <div className={`col-xl-3 my-xl-3 col-md-4 my-2 d-flex flex-column text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                                <label className="my-2 fw-bold fs-4 label-perfil">{t('perfil.doctype')}</label>
                                <select className={`form-select form-select-sm rounded-pill text-center bg-white bg-opacity-75 fw-bold text-dark py-2 hover ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`} onChange={(e) => setTypeDoc(e.target.value)} aria-label="Small select example">
                                    <option className="fw-bold text-dark" value="DNI">{t('perfil.type1')}</option>
                                    <option className="fw-bold text-dark" value="NIE">{t('perfil.type2')}</option>
                                    <option className="fw-bold text-dark" value="Pasaporte">{t('perfil.type3')}</option>
                                </select>
                            </div>
                            <div className={`col-xl-4 my-xl-3 col-md-3 my-2 d-flex flex-column text-center ${userLoad ? "animacion-der visible" : "animacion-der"}`}>
                                <label className="my-2 fw-bold fs-4 label-perfil">{t('perfil.docnumb')}</label>
                                <input className="mx-md-3 text-center py-1 rounded-pill bg-white border-2 border-white text-dark fs-4 bg-opacity-75 fw-bold input-perfil" value={numDoc} onChange={(e) => setNumDoc(e.target.value)} type="text" />
                            </div>
                            <div className={`col-xl-12 mx-0 py-3 text-center ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>
                                <button className={`btn btn-perfil bg-white bg-opacity-25 fw-bold border-white mt-3 w-50 hover text-white fw-bold fs-4 rounded-3 py-2`} onClick={() => { actualizarPerfil() }}>{t('perfil.btn')}</button>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
        </>
    )
}

export default ContenedorPrincipalPerfil