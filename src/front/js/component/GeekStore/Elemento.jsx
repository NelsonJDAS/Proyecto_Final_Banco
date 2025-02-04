import React, { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";

const Elemento = ({ id, Nombre, Precio, Imagen, categoria, onViewMore, calificacion }) => {
    const [userLoad, setUserLoad] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [porcentaje, SetPorcentaje] = useState(0);

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

    useEffect(() => {
        Precio == null ? "" : SetPorcentaje(parseInt((Precio.slice(0, -2))) * 0.05)
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            setUserLoad(true);
        }
    }, [isVisible]);

    return (
        <div className={`col-6 text-center contenedor-elemento-store ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`} ref={sectionRef}>
            <div className="bg-white elemento-store h-100 text-dark">
                <div className="row pt-3 contenedor-titulo">
                    <div className="col-12 text-center">
                        <span className="nombre-producto bg-white">{Nombre.includes(",") ? Nombre.split(",")[0] : Nombre.includes(".") ? Nombre.split(".")[0] : Nombre}</span>
                    </div>
                </div>
                <div className="row my-3 imagen-contenedor">
                    <div className="container-fluid w-90">
                        <img className="img-elemento" src={Imagen} alt={Nombre} />
                    </div>
                </div>
                <div className="row mx-0 px-0">
                    <div className="col-4 align-content-center">
                        <div className="mx-3">{
                            Object.assign(generarEstrellas(calificacion)).map((elem, index) => {
                                return elem === "★" ? <i key={index} className="text-warning"><RiStarSFill /></i> : <i key={index}><RiStarSLine /></i>
                            })}
                        </div>
                    </div>
                    <div className="col-4 px-0 mx-0 align-content-center text-start">
                        <div className="d-flex justify-content-center">
                            {Precio == null ? "" : <span className="precio">{Precio == null ? "Agotado" : Precio}</span>}
                            {Precio == null ? "" : <span className="mx-2 precio-rebaja"><FaArrowRightLong /></span>}
                            <span className="precio-rebaja">{Precio == null ? "Agotado" : parseInt(Precio.slice(0, -2)) - porcentaje}</span>
                        </div>
                    </div>
                    <div className="col-4 text-center px-0 mx-0">
                        <button
                            className="btn btn-ver fw-bold w-75 text-white rounded-0"
                            onClick={() => onViewMore(id, categoria)}
                        >
                            Ver Mas
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Elemento;
