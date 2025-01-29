import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import ContenedorGraficas from "./ContenedorGrafica.jsx";
import ElementoSeleccionable from "./ElementoSeleccionable.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const ListaGraficas = () => {
    const { store, actions } = useContext(Context);
    const [input, SetInput] = useState("")
    const [pagination, SetPagination] = useState([0, 9])

    const HandleInput = (e) => {
        SetInput(e.target.value.toLowerCase())
        console.log(input)
    }

    const [userLoad, SetUserLoad] = useState(false);



    const [simbolos, SetSimbolos] = useState([]);


    const Simbolos = async () => {

        try {
            const response = await fetch("https://finnhub.io/api/v1/stock/symbol?exchange=US&token=cud24s9r01qigebprf90cud24s9r01qigebprf9g");
            if (!response.ok) throw new Error('Error fetching data');

            const data = await response.json();

            // Formatear los datos

            const resultado = data.slice(pagination[0], pagination[1]).map((item) => {
                return {
                    simbolo: item.symbol,   // Agregamos el símbolo
                    nombre: item.description  // Agregamos la descripción
                };
            });

            SetSimbolos(resultado)
        } catch (error) {
            console.error('Error al obtener datos del backend:', error);
        }

    }






    useEffect(() => {
        Simbolos();
        SetUserLoad(true)
    }, [])

    useEffect(() => {
        Simbolos();
        console.log(pagination)
    }, [pagination])


    return (
        <div className={`container-fluid contenedor-cabecera mt-3 ${userLoad ? "animacion-inversiones visible" : "animacion-inversiones"}`}>
            <div className="row my-3">
                <div className="col-12 text-end">
                    <input type="text" placeholder="Buscar" className="mx-3 text-center w-25 py-2 rounded-pill" onChange={HandleInput} />
                </div>
            </div>
            <div className="row d-flex my-3">
                <div className="col-6 text-center">
                    <i className="hover fs-2 mx-2" onClick={() => SetPagination([pagination[0] - 9, pagination[1] - 9])}>
                        <FaArrowLeft />
                    </i>
                </div>
                <div className="col-6 text-center">
                    <i className="hover fs-2 mx-2" onClick={() => SetPagination([pagination[0] + 9, pagination[1] + 9])}>
                        <FaArrowRight />
                    </i>
                </div>
            </div>
            <div className="row contenedor-elementos-seleccionables">
                {
                    simbolos.slice(pagination[0], pagination[1]).map((item) => {
                        return <ElementoSeleccionable input={input} nombre={item.nombre} simbolo={item.simbolo} />
                    })
                }
            </div>
        </div>
    )
}
export default ListaGraficas
