import React, { useEffect, useRef, useState } from "react";

const ContenedorPresentacionAviso = () => {
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
        } else {
            SetUserLoad(false)
        }
    }, [isVisible])
    return (
        <div className="container" ref={sectionRef}>
            <h1 className={`text-center titulo-principal-politica ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>Aviso Legal - GeekBank</h1>
            <p className={`fs-3 text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                Este aviso legal tiene como propósito regular el acceso, el uso y la navegación dentro del sitio web,
                así como los servicios que son proporcionados por GeekBank. Al ingresar y utilizar este sitio web, usted
                acepta de manera expresa y sin reservas las condiciones y términos establecidos en el presente aviso. Es
                importante que el usuario lea detenidamente este documento, ya que en él se detallan las normas que rigen
                tanto la interacción con los contenidos y servicios ofrecidos por GeekBank, como las responsabilidades y derechos
                aplicables tanto al usuario como a los administradores del sitio. Al continuar utilizando el sitio web, se entiende
                que el usuario ha comprendido y aceptado plenamente todas las disposiciones aquí expuestas. Si no está de acuerdo con
                alguna de las condiciones especificadas, le recomendamos que se abstenga de hacer uso del sitio web o de cualquiera de los
                servicios relacionados. GeekBank se reserva el derecho de modificar, actualizar o eliminar en cualquier momento las condiciones
                de este aviso legal, por lo que es responsabilidad del usuario revisarlo periódicamente para asegurarse de estar al tanto de cualquier
                cambio. Estas modificaciones entrarán en vigor desde el momento de su publicación en el sitio web. El acceso al sitio web y su uso están
                condicionados al cumplimiento de las normativas aplicables, incluyendo pero no limitándose a las leyes de propiedad intelectual, protección de datos
                y comercio electrónico..
            </p>
        </div>
    )
}

export default ContenedorPresentacionAviso
