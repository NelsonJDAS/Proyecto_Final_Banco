import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../../../store/appContext";
import { AiOutlineEuro } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { IoCalculator } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { MdEuro } from "react-icons/md";

const Divisas = () => {
    const { store, actions } = useContext(Context);
    const [divisas, SetDivisas] = useState({});
    const [input, SetInput] = useState("");
    const [calculadora, SetCalculadora] = useState(false)

    const inputRef = useRef("")
    const inputResultadoRef = useRef("")
    const selectRef = useRef("")

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

    const HandleInputCalculadora = (e) => {
        console.log(inputRef.current.value.length);
        inputRef.current.value == "0" ? inputResultadoRef.current.value == "" : ""
        if (inputRef.current.value.length == 8) {
            inputRef.current.value = inputRef.current.value.slice(0, -1)
        }


        const cambio = ((divisas.USD / divisas.EUR) * selectRef.current.value) * e.target.value
        inputResultadoRef.current.value = cambio.toFixed(4)
    }

    const HandleSelect = (e) => {
        console.log(inputRef.current.value)
        const cambio = ((divisas.USD / divisas.EUR) * e.target.value) * inputRef.current.value
        inputRef.current.value == "" ?
            inputResultadoRef.current.placeholder = "Coloca una cantidad"
            :
            inputResultadoRef.current.value = cambio.toFixed(4)
    }

    useEffect(() => {
        conseguirDivisas()
    }, [])


    return (
        <div className={`bg-divisas animacion-contenedor hover contenedor-componente-interactivo my-2 text-center text-white fw-bold ${store.borde} d-flex flex-column`}>
            <div className="align-content-start mb-auto my-1 fw-bold d-flex justify-content-evenly"><p className={calculadora ? "opacity-50 mx-2" : "mx-2"} onClick={() => { SetCalculadora(false) }}>Cambio </p> / <p className={calculadora ? "mx-2" : "opacity-50 mx-2"} onClick={() => { SetCalculadora(true) }}> Calculadora </p></div>

            {calculadora ?
                <>
                    <p className="text-center m-1">Elige la cantidad que cambiaras</p>
                    <div className="d-flex my-2">
                        <div className="container w-90">
                            <input type="number" className="form-control rounded-pill text-warning text-center bg-transparent" ref={inputRef} onChange={HandleInputCalculadora} placeholder="€" />
                        </div>
                        <div className="text-center my-1">
                            <i><TfiReload /></i>
                        </div>
                        <div className="container w-90">
                            <select class="form-select text-warning text-center fw-bold bg-transparent" aria-label="Default select example" ref={selectRef} onChange={HandleSelect}>
                                {
                                    Object.entries(divisas).map(([currency, rate]) => {
                                        return <option className="fw-bold text-dark" value={rate} selected>{currency}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-12">
                            <div className="container ">
                                <input type="text" className="form-control rounded-pill text-warning text-center bg-transparent fw-bold" disabled ref={inputResultadoRef} />
                            </div>
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