import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import ContenedorGraficas from "./ContenedorGrafica.jsx";

const ListaGraficas = () => {
    const { store, actions } = useContext(Context);
    const [input, SetInput] = useState("")

    const HandleInput = (e) => {
        SetInput(e.target.value.toLowerCase())
        console.log(input)
    }

    const [userLoad, SetUserLoad] = useState(false);

    useEffect(() => {
        SetUserLoad(true)
    }, [])


    return (
        <div className={`container-fluid contenedor-cabecera mt-3 ${userLoad ? "animacion-inversiones visible" : "animacion-inversiones"}`}>
            <div className="row my-3">
                <div className="col-12 text-end">
                    <input type="text" placeholder="Buscar" className="mx-3 text-center w-25 py-2 rounded-pill" onChange={HandleInput} />
                </div>
            </div>
            <div className="row">
                <ContenedorGraficas input={input} nombre="EXEFS" />
                <ContenedorGraficas input={input} nombre="BTC" />
                <ContenedorGraficas input={input} nombre="ETHERYIUS" />
                <ContenedorGraficas input={input} nombre="BTC" />
            </div>
        </div>
    )
}
export default ListaGraficas
