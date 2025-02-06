import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../store/appContext.js";
import { SlGraph } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { GrMoney } from "react-icons/gr";
import { useTranslation } from "react-i18next";

const ElementoSeleccionable = ({ nombre, simbolo, moneda }) => {
    const { t } = useTranslation()
    const { store, actions } = useContext(Context);
    const [userLoad, SetUserLoad] = useState(false)

    const navigate = useNavigate("");

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
                threshold: 0.2, // Al menos el 20% del componente debe estar visible
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
        } else {
            SetUserLoad(false)
        }
    }, [isVisible])


    return (
        <div className={` separacion-filas hover py-3 col-4 ${userLoad ? "animacion-inversiones visible" : "animacion-inversiones"}`} ref={sectionRef} onClick={() => {
            navigate(`/grafica/${nombre}/${simbolo}`)
            actions.Scroll()
        }}>
            <div className={`container contenedor-elemento ${store.fondo === "fondo-modo-claro" ? "bg-modo-claro" : "bg-modo-oscuro"}`}>
                <div className="row">
                    <div className="col-12 fw-bold fs-4 text-center mt-3 nombre-empresa"><p>{nombre}</p></div>
                    <div className="col-12 text-center"><i className="simbolo-grafica color-inversion "><SlGraph /></i></div>
                    <div className="col-12 text-center"><i className="color-inversion enlace-grafica"><GrMoney /></i></div>
                    <div className="col-12 text-center"><div><p className="fs-5 enlace-grafica color-inversion ">{moneda}</p></div></div>
                    <div className="col-12 text-center"><div><p className="fs-5 enlace-grafica color-inversion ">{t('graficaindividual.p3')}</p></div></div>
                </div>
            </div>
        </div >
    )
}
export default ElementoSeleccionable
