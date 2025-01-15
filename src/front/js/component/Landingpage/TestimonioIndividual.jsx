import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { FaUser } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";


const TestimonioIndividual = ({ nombre, fecha, descripcion, estrellas, userLoad }) => {


    const { store, actions } = useContext(Context);

    const generarEstrellas = (num) => {
        const estrella1 = "★"
        const estrella2 = "☆"

        let estrellas = [];

        let numestrellas = num;

        for (let i = 0; i < num; i++) {
            estrellas.push(estrella1);
        }
        while (numestrellas < 5) {
            estrellas.push(estrella2);
            numestrellas++
        }

        return estrellas
    }

    return (
        <div className={`mx-2 contenedor-ventajas ${store.borde} ${userLoad} ${store.fondo === "fondo-modo-claro" ? "bg-dark text-white" : "bg-white text-dark"}`}>
            <div className="d-flex flex-column text-center">
                <div className="row my-3">
                    <div className="col-1 text-end mx-0 px-0 align-content-center"><i><FaUser /></i></div>
                    <div className="col-8 text-start align-content-center fs-5"><b>{nombre}</b></div>
                    <div className="col-2 text-center align-content-center"><b>{fecha}</b></div>
                </div>
                <div className="row my-3">
                    <div className="col-12 text-center"><b className="fs-3">Comentario</b></div>
                    <div className="col-12">
                        <div className="container w-75 border border-secondary rounded-3 p-3 text-center contenedor-comentario">
                            <b>{descripcion}</b>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-end">
                        <div className="mx-3">{
                            Object.assign(generarEstrellas(estrellas)).map((elem, index) => {
                                return elem === "★" ? <i key={index} ><RiStarSFill /></i> : <i key={index}><RiStarSLine /></i>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonioIndividual