import React, { useContext, useEffect, useRef, useState } from "react";

const ContenedorProteccion = () => {
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
            <h1 className={`text-center titulo-politica my-3 ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>Proteccion Privacidad</h1>
            <p className={`fs-3 text-center ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>
                En GeekBank, la seguridad de su información personal y financiera es nuestra máxima prioridad. Implementamos
                tecnología de encriptación avanzada y autenticación multifactor para proteger sus datos y prevenir accesos no autorizados.
                Utilizamos sistemas de monitoreo continuo para detectar y bloquear cualquier intento de fraude, asegurando que sus transacciones
                se realicen de manera segura.
                El acceso a su información está restringido a empleados autorizados, quienes reciben capacitación constante en prácticas de seguridad.
                Nuestra plataforma de banca digital está diseñada para brindarle una experiencia segura, con auditorías regulares para garantizar
                su protección.
                Nunca compartimos su información personal sin su consentimiento, y estamos comprometidos con la mejora continua
                de nuestras medidas de seguridad para mantener sus datos protegidos frente a cualquier amenaza.
                En GeekBank, su confianza y seguridad son nuestra prioridad. Si tiene alguna pregunta, no dude en contactarnos.
            </p>
        </div>
    )
}

export default ContenedorProteccion