import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../../store/appContext";
import { AiOutlineEuro } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { IoCalculator } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";


const Divisas = () => {
    const { store, actions } = useContext(Context);
    const [divisas, SetDivisas] = useState({});
    const [input, SetInput] = useState("");
    const [calculadora, SetCalculadora] = useState(false)

    const HandleInput = (e) => {
        SetInput(e.target.value.toUpperCase())
    }

    const conseguirDivisas = async () => {
        try {
            const response = await fetch(`https://cdn.dinero.today/api/latest.json`)
            // Verificamos si la respuesta es exitosa
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            let data = await response.json()
            SetDivisas(data.rates);
        } catch (error) {
            // Manejamos cualquier error que ocurra durante el fetch
            console.error("Error al solicitar las divisas", error);
        }
    }

    useEffect(() => {
        conseguirDivisas()
    }, [])


    return (
        <div className={`bg-divisas animacion-contenedor hover contenedor-componente-interactivo my-2 text-center text-white fw-bold ${store.borde} d-flex flex-column`}>
            <p className="align-content-start mb-auto objeto-animado my-1 fw-bold d-flex justify-content-center"><p className={calculadora ? "opacity-50 mx-2" : "mx-2"}>Cambio </p> / <p className={calculadora ? "mx-2" : "opacity-50 mx-2"}> Calculadora</p></p>

            {calculadora ?
                <>
                    <div className="d-flex flex-column">
                        <p>Elige la cantidad que cambiaras</p>
                        <div className="container w-50">
                            <input type="text" className="form-control rounded-pill text-dark text-center" />
                        </div>

                    </div>
                </>
                :
                <>
                    <div className="d-flex flex-column scroll-divisas container-fluid">
                        {
                            Object.entries(divisas).map(([currency, rate]) => {
                                return <div key={currency} className={`row px-0 mx-0 ${currency === "EUR" ? "d-none" : "" || currency.slice(0, input.length).includes(input) ? "" : "d-none"}`}>
                                    <div className="col-3 align-content-center mb-3 " >
                                        <div className="d-flex justify-content-evenly">
                                            <i><AiOutlineEuro /></i>
                                            <i><FaArrowRight /></i>
                                        </div>
                                    </div>
                                    <div className="col-4 align-content-center"><p>{((divisas.USD / divisas.EUR) * rate).toFixed(6)}</p></div>
                                    <div className="col-5 align-content-center mb-3 text-end"><b className="">{currency}</b></div>
                                </div>
                            })
                        }
                    </div>
                    <div className="row">
                        <div className="col-9 mx-0 px-0"><input className="form-control w-100 bg-transparent text-center rounded-3 contorno-input border-none text-white fw-bold input-divisa" placeholder="Buscar" type="text" onChange={HandleInput} maxLength="15" /></div>
                        <div className="col-3 mx-0 px-0 d-flex justify-content-between"><button className=" w-100 bg-transparent text-center rounded-3 contorno-input border-none text-white fw-bold btn" onClick={() => SetCalculadora(true)}><i><IoCalculator /></i> <i><FaArrowLeft /></i></button></div>
                    </div>
                </>}
        </div >
    )
}

export default Divisas