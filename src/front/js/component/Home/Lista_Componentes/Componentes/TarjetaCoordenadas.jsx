import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../../store/appContext";
import { FaRegIdCard } from "react-icons/fa6";

const TarjetasCoordenadas = () => {
    const { store, actions } = useContext(Context);
    const [datos, SetDatos] = useState([]);

    useEffect(() => {
        Object.entries(store.tarjetaCoord).map((objeto, index) => {
            SetDatos((prevDatos) => [...prevDatos, { valor: objeto[1].valor, posicion: objeto[1].posicion }]);

        })
    }, [store.tarjetaCoord])


    return (
        <>
            {datos.length === 16 ?
                <div className={`bg-coordenadas animacion-contenedor align-content-center hover contenedor-componente-interactivo my-2 text-center fw-bold my-1 py-1 ${store.borde} text-dark d-flex flex-column`}>
                    <p className="fs-1 objeto-animado"><FaRegIdCard /></p>
                    <p className="mb-auto my-2 objeto-animado">Tarjeta de Coordenadas</p>
                    <p className="enlace-claro">Haz clic aquí</p>
                    <p className="enlace-claro">Para conseguir tu tarjeta de coordenadas</p>
                </div > :
                <div className={`bg-coordenadas animacion-contenedor align-content-center hover contenedor-componente-interactivo my-2 text-center fw-bold my-1 py-1 ${store.borde} text-dark d-flex flex-column`}>
                    <p className="fs-1 objeto-animado"><FaRegIdCard /></p>
                    <p className="mb-auto my-2 objeto-animado">Tarjeta de Coordenadas</p>
                    <p className="enlace-claro">Haz clic aquí</p>
                    <p className="enlace-claro">Para conseguir tu tarjeta de coordenadas</p>
                </div >

            }
        </>
    )
}

export default TarjetasCoordenadas

{/* <div className={`bg-cabecera-tarjeta animacion-contenedor align-content-center hover contenedor-componente-interactivo my-2 text-center fw-bold my-1 py-1 ${store.borde} text-dark d-flex flex-column`}>
                    <div className="container my-1">
                        <div className="row">
                            <div className="col-4 text-center bg-cabecera-tarjeta"><p className={`fw-bold my-2 objeto-animado titulo-tarjeta ${store.hidden ? "desenfoque" : ""}`}>GeekGrid</p></div>
                            <div className="col-2 text-center bg-cabecera-tarjeta"><p className={`fw-bold my-1 ${store.hidden ? "desenfoque" : ""}`}>A</p></div>
                            <div className="col-2 text-center bg-cabecera-tarjeta"><p className={`fw-bold my-1 ${store.hidden ? "desenfoque" : ""}`}>B</p></div>
                            <div className="col-2 text-center bg-cabecera-tarjeta"><p className={`fw-bold my-1 ${store.hidden ? "desenfoque" : ""}`}>C</p></div>
                            <div className="col-2 text-center bg-cabecera-tarjeta"><p className={`fw-bold my-1 ${store.hidden ? "desenfoque" : ""}`}>D</p></div>
                        </div>
                        <div className="row">
                            <div className="col-4 text-center border-top border-dark bg-cabecera-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>1</p></div>
                            <div className="col-2 text-center border-top border-dark bg-valor-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[0].valor}</p></div>
                            <div className="col-2 text-center border-top border-dark bg-valor-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[1].valor}</p></div>
                            <div className="col-2 text-center border-top border-dark bg-valor-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[2].valor}</p></div>
                            <div className="col-2 text-center border-top border-dark bg-valor-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[3].valor}</p></div>
                        </div>
                        <div className="row">
                            <div className="col-4 text-center border-top border-dark bg-cabecera-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>2</p></div>
                            <div className="col-2 text-center border-top border-dark bg-valor-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[4].valor}</p></div>
                            <div className="col-2 text-center border-top border-dark bg-valor-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[5].valor}</p></div>
                            <div className="col-2 text-center border-top border-dark bg-valor-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[6].valor}</p></div>
                            <div className="col-2 text-center border-top border-dark bg-valor-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[7].valor}</p></div>
                        </div>
                        <div className="row">
                            <div className="col-4 text-center border-top border-dark bg-cabecera-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>3</p></div>
                            <div className="col-2 text-center border-top border-dark bg-valor-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[8].valor}</p></div>
                            <div className="col-2 text-center border-top border-dark bg-valor-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[9].valor}</p></div>
                            <div className="col-2 text-center border-top border-dark bg-valor-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[10].valor}</p></div>
                            <div className="col-2 text-center border-top border-dark bg-valor-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[11].valor}</p></div>
                        </div>
                        <div className="row">
                            <div className="col-4 text-center border-top border-dark bg-cabecera-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>4</p></div>
                            <div className="col-2 text-center border-top border-dark bg-valor-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[12].valor}</p></div>
                            <div className="col-2 text-center border-top border-dark bg-valor-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[13].valor}</p></div>
                            <div className="col-2 text-center border-top border-dark bg-valor-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[14].valor}</p></div>
                            <div className="col-2 text-center border-top border-dark bg-valor-tarjeta"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[15].valor}</p></div>
                        </div>
                    </div>
                </div > */}