import React, { useEffect, useRef, useState } from "react";

const ContenedorPresentacionTarifas = () => {
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
            <h1 className={`text-center titulo-principal-politica ${userLoad ? "animacion-der visible" : "animacion-der"}`}>Tarifas - GeekBank</h1>
            <p className={`fs-3 text-center ${userLoad ? "animacion-der visible" : "animacion-der"}`}>
                En GeekBank, trabajamos incansablemente para garantizar que nuestros clientes tengan acceso a información clara,
                precisa y completamente transparente sobre nuestras tarifas y comisiones. Nos enorgullece ofrecer una experiencia
                bancaria excepcional que prioriza la confianza y la claridad en cada interacción. Sabemos que entender los costos asociados
                con los servicios bancarios es fundamental para tomar decisiones informadas, por lo que nos aseguramos de que toda la información
                relacionada con nuestras tarifas y comisiones sea presentada de manera detallada, comprensible y sin sorpresas.
            </p>
        </div>
    )
}

export default ContenedorPresentacionTarifas

