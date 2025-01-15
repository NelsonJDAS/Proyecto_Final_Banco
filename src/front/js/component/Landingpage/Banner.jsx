import React, { useEffect, useRef, useState } from "react";
import Bannerimg from "../../../img/Bannerimg.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {

    const [userLoad, SetUserLoad] = useState("animacion-abajo");

    const navigate = useNavigate(null);

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
                threshold: 0.4, // Al menos el 40% del componente debe estar visible
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
            SetUserLoad("animacion-abajo visible")
        }
    }, [isVisible])

    return (<div className="img-banner w-100 align-content-center text-center" ref={sectionRef} style={{ 'background-image': `url(${Bannerimg})` }}>
        <div className={`d-flex flex-column contenido-banner ${userLoad}`}>
            <p className="">¡Empieza Ahora!</p>
            <p className="mx-2 fs-2">Regístrate ahora para disfrutar de todos nuestros beneficios.</p>
            <div><buttom className="rounded-pill btn border-white w-25 fw-bold text-white mx-3 fs-1 btn-landing hover" onClick={() => {
                navigate("/login")
            }}>Entrar</buttom></div>
        </div>
    </div>)
}

export default Banner




