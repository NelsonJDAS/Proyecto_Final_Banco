import React, { useContext } from "react";
import { Context } from "../../../store/appContext";

const ContenedorPrincipalPerfil = () => {
    const { store, actions } = useContext(Context);

    const [userLoad, SetUserLoad] = useState(false);
    useEffect(() => {
        SetUserLoad(true)
    }, [])


    return (
        <div className="container">
            <h1 className="text-center titulo my-3">Modifica tus datos aqui!</h1>
            <form action="#" className={`rounded-3 ${store.borde}`}>
                <div className="row">
                    <div className="col-6 my-3 d-flex flex-column text-center">
                        <label className="my-2 fw-bold fs-4">Nombre Completo</label>
                        <input className="mx-2 mx-md-3 text-center py-1 rounded-pill input" type="text" />
                    </div>
                    <div className="col-6 my-3 d-flex flex-column text-center">
                        <label className="my-2 fw-bold fs-4">Apellidos</label>
                        <input className="mx-2 mx-md-3 text-center py-1 rounded-pill input" type="text" />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-10 my-3 d-flex flex-column text-center">
                        <label className="my-2 fw-bold fs-4">Direccion</label>
                        <input className="mx-2 mx-md-3 text-center py-1 rounded-pill input" type="text" />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5 my-3 d-flex flex-column text-center">
                        <label className="my-2 fw-bold fs-4">Telefono</label>
                        <input className="mx-2 mx-md-3 text-center py-1 rounded-pill input" type="text" />
                    </div>
                    <div className="col-3 my-3 d-flex flex-column text-center">
                        <label className="my-2 fw-bold fs-4">Tipo de documento</label>
                        <select className="form-select form-select-sm rounded-pill text-center" aria-label="Small select example">
                            <option selected>-----------</option>
                            <option className="fw-bold" value="1">DNI</option>
                            <option className="fw-bold" value="2">NIE</option>
                            <option className="fw-bold" value="3">Pasaporte</option>
                        </select>
                    </div>
                    <div className="col-4 my-3 d-flex flex-column text-center">
                        <label className="my-2 fw-bold fs-4">Num Documento</label>
                        <input className="mx-2 mx-md-3 text-center py-1 rounded-pill input" type="text" />
                    </div>
                    <div className="col-6 mx-0 text-start">
                        <button className={`btn mt-3 w-50 hover rounded-0 text-danger fw-bold ${store.borde} border-bottom-0 border-start-0`}> Volver Atras </button>
                    </div>
                    <div className="col-6 mx-0 text-end">
                        <button className={` btn text-success mt-3 w-50 hover rounded-0 fw-bold ${store.borde} border-bottom-0 border-end-0`}> Listo </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContenedorPrincipalPerfil