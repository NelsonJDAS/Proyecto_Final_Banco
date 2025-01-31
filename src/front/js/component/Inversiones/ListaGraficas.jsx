import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../store/appContext";
import ContenedorGraficas from "./ContenedorGrafica.jsx";
import ElementoSeleccionable from "./ElementoSeleccionable.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const ListaGraficas = () => {
    const { store, actions } = useContext(Context);
    const [pagination, SetPagination] = useState([0, 9])
    const flechaDer = useRef("");
    const flechaIzq = useRef("");
    const [listaFiltrada, SetListaFiltrada] = useState([]);
    const inputRef = useRef("");
    const [userLoad, SetUserLoad] = useState(false);


    const HandleInput = (e) => {

        const listaFiltrada = store.simbolos.filter((elem) => {
            return elem.nombre.toLowerCase().includes(e.target.value.toLowerCase())
        })
        SetListaFiltrada(listaFiltrada)
    }




    useEffect(() => {
        if (pagination[0] - 9 < 0) {
            flechaIzq.current.classList.add("flecha-cancelada");
        } else if (pagination[1] + 9 > 27499) {
            flechaDer.current.classList.add("flecha-cancelada");
        } else {
            flechaIzq.current.classList.remove("flecha-cancelada");
            flechaDer.current.classList.remove("flecha-cancelada");
        }
    }, [pagination])

    useEffect(() => {
        store.simbolos.length == 0 ? actions.ObtenerSimbolos() : "";
        inputRef.current.disabled = false
        SetUserLoad(true)
    }, [])



    return (
        <div className={`container-fluid contenedor-cabecera mt-3 ${userLoad ? "animacion-inversiones visible" : "animacion-inversiones"}`}>
            <div className="row my-3">
                <div className="col-12 text-end">
                    <input type="text" placeholder="Buscar" className="mx-3 text-center w-25 py-2 rounded-pill" onChange={HandleInput} disabled ref={inputRef} />
                </div>
            </div>
            <div className="row my-3">
                <div className="col-4 text-center">
                    <button className={`hover fs-2 mx-2 flecha bg-transparent btn ${store.texto}`} onClick={() => { SetPagination([pagination[0] - 9, pagination[1] - 9]) }} ref={flechaIzq}>
                        <FaArrowLeft />
                    </button>
                </div>
                <div className="col-4 text-center align-content-center">
                    <p className="fs-3 mt-3 fw-bold">{pagination[1] / 9} / {Math.ceil(store.simbolos.length / 9)}</p>
                </div>
                <div className="col-4 text-center">
                    <button className={`hover fs-2 mx-2 flecha bg-transparent btn ${store.texto}`} onClick={() => { SetPagination([pagination[0] + 9, pagination[1] + 9]) }} ref={flechaDer}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <div className="row contenedor-elementos-seleccionables">
                {
                    [...(listaFiltrada.length === 0 ? store.simbolos : listaFiltrada)].slice(pagination[0], pagination[1]).map((item) => {
                        return <ElementoSeleccionable key={item.nombre} nombre={item.nombre} simbolo={item.simbolo} moneda={item.moneda} />
                    })
                }
            </div>
        </div>
    )
}
export default ListaGraficas
