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
    const [simbolos, SetSimbolos] = useState([]);
    const [listaFiltrada, SetListaFiltrada] = useState([]);
    const inputRef = useRef("");


    const HandleInput = (e) => {

        const listaFiltrada = simbolos.filter((elem) => {
            return elem.nombre.toLowerCase().includes(e.target.value.toLowerCase())
        })
        SetListaFiltrada(listaFiltrada)
    }

    const [userLoad, SetUserLoad] = useState(false);





    const Simbolos = async () => {

        try {
            const response = await fetch(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${process.env.FINNHUB_API_KEY}`);
            if (!response.ok) throw new Error('Error fetching data');

            const data = await response.json();

            const resultado = await data.map((item) => {
                return {
                    simbolo: item.symbol,   // Agregamos el símbolo
                    nombre: item.description  // Agregamos la descripción
                };
            });

            SetSimbolos(resultado)
            inputRef.current.disabled = false
        } catch (error) {
            console.error('Error al obtener datos del backend:', error);
        }

    }




    useEffect(() => {
        if (pagination[0] - 9 < 0) {
            flechaIzq.current.disabled = true
        } else if (pagination[1] + 9 > 27499) {
            flechaDer.current.disabled = true
        } else {
            flechaIzq.current.disabled = false
            flechaDer.current.disabled = false
        }
    }, [pagination])

    useEffect(() => {
        Simbolos();
        SetUserLoad(true)
    }, [])



    return (
        <div className={`container-fluid contenedor-cabecera mt-3 ${userLoad ? "animacion-inversiones visible" : "animacion-inversiones"}`}>
            <div className="row my-3">
                <div className="col-12 text-end">
                    <input type="text" placeholder="Buscar" className="mx-3 text-center w-25 py-2 rounded-pill" onChange={HandleInput} disabled ref={inputRef} />
                </div>
            </div>
            <div className="row d-flex my-3">
                <div className="col-6 text-center">
                    <button className={`hover fs-2 mx-2 flecha bg-transparent btn ${store.texto}`} onClick={() => { SetPagination([pagination[0] - 9, pagination[1] - 9]) }} ref={flechaIzq}>
                        <FaArrowLeft />
                    </button>
                </div>
                <div className="col-6 text-center">
                    <button className={`hover fs-2 mx-2 flecha bg-transparent btn ${store.texto}`} onClick={() => { SetPagination([pagination[0] + 9, pagination[1] + 9]) }} ref={flechaDer}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <div className="row contenedor-elementos-seleccionables">
                {
                    [...(listaFiltrada.length === 0 ? simbolos : listaFiltrada)].slice(pagination[0], pagination[1]).map((item) => {
                        return <ElementoSeleccionable nombre={item.nombre} simbolo={item.simbolo} />
                    })
                }
            </div>
        </div>
    )
}
export default ListaGraficas
