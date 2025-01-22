import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import { MdOutlineEuroSymbol } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoLogoYen } from "react-icons/io5";
import { FaPoundSign } from "react-icons/fa";
import { LuSwissFranc } from "react-icons/lu";

const Divisas = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className={`bg-divisas animacion-contenedor hover contenedor-componente-interactivo my-2 text-center text-dark fw-bold ${store.borde} d-flex flex-column`}>
            <p className="align-content-start mb-auto objeto-animado my-1 fw-bold">Divisas</p>

            <div className="d-flex flex-column">
                <p>1 <i><MdOutlineEuroSymbol /></i> <i><FaArrowRight /></i> 1.039 USD <i className="my-3"><BsCurrencyDollar /></i></p>
                <p>1 <i><MdOutlineEuroSymbol /></i> <i><FaArrowRight /></i> 161.838 JPY <i className="my-3"><IoLogoYen /></i></p>
                <p>1 <i><MdOutlineEuroSymbol /></i> <i><FaArrowRight /></i> 0.845 GBP <i className="my-3"><FaPoundSign /></i></p>
                <p>1 <i><MdOutlineEuroSymbol /></i> <i><FaArrowRight /></i> 0.939 CHF <i className="my-3"><LuSwissFranc /></i></p>
            </div>

        </div >
    )
}

export default Divisas