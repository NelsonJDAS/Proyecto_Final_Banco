import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../store/appContext";
import TestimonioIndividual from "../Landingpage/TestimonioIndividual.jsx"



const Testimonios = () => {

    const { store, actions } = useContext(Context);

    const [userLoad, SetUserLoad] = useState("animacion-der");

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
                threshold: 0.1, // Al menos el 40% del componente debe estar visible
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
            SetUserLoad("animacion-der visible")
        }
    }, [isVisible])

    return (<div className="contenedor-landing">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center"><h2 className={`titulo-landing ${userLoad}`}>Testimonios</h2></div>
            </div>
            <div className="row my-3" ref={sectionRef}>
                <div className="col-4">
                    <TestimonioIndividual nombre="Anonimo" fecha="15/01/2025" descripcion="Desde que me cambié a este banco, todo ha sido mucho más sencillo. La interfaz de la app es súper fácil de usar y las transferencias son rápidas. Además, no tengo que preocuparme por comisiones ocultas." estrellas={5} userLoad={userLoad} />
                </div>
                <div className="col-4">
                    <TestimonioIndividual nombre="Juajo Ruiz" fecha="23/8/2024" descripcion="Claro, transparente y con excelente soporte. No hay comisiones escondidas. ¡Muy recomendable!" estrellas={3} userLoad={userLoad} />
                </div>
                <div className="col-4">
                    <TestimonioIndividual nombre="Israel Var" fecha="5/10/2024" descripcion="El soporte es rápido, útil y siempre está disponible. Me resolvieron todas mis dudas al instante." estrellas={4} userLoad={userLoad} />
                </div>
            </div>
        </div>
    </div>)
}

export default Testimonios

