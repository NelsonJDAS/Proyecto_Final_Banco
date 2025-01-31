import React, { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Elemento = () => {
    const [userLoad, SetUserLoad] = useState(false);
    // logica para mostrar el conteindo si el usuario esta en la seccion del componente
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // controla la variable para cambiarla si el usuario se encuentra encima del componente
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // entry.isIntersecting indica si el elemento es visible
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null, // Usar la ventana como viewport
                rootMargin: '0px', // Sin márgenes
                threshold: 0.1, // Al menos el 10% del componente debe estar visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current); // Observar el componente
        }

        return () => {
            // Limpiar el observer al desmontar el componente
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            SetUserLoad(true)
        }
    }, [isVisible])


    return (
        <>
            <div className={`col-3 text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`} ref={sectionRef}>
                <div className="bg-white elemento-store text-dark">
                    <div className="row pt-3">
                        <div className="col-12 text-center">
                            <span className="nombre-producto bg-white">Nombre Producto</span>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="container-fluid w-90">
                            <img className="img-elemento" src="https://th.bing.com/th/id/OIP.oXPpVw_05_odCeMaNBu_3QHaHj?w=182&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                        </div>
                    </div>
                    <div className="row mx-0 px-0">
                        <div className="col-6 px-0 mx-0 align-content-center text-start">
                            <div className="d-flex justify-content-center">
                                <span className="precio">1.99</span>
                                <span className="mx-2 precio-rebaja"><FaArrowRightLong /></span>
                                <span className="precio-rebaja">1.50 €</span>
                            </div>
                        </div>
                        <div className="col-6 text-end px-0 mx-0">
                            <button className="btn btn-ver fw-bold w-75 text-white rounded-0">Ver Mas</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Elemento