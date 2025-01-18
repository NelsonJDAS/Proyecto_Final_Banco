import React, { useEffect, useState } from "react";

const ContenedorPresentacion = () => {

    const [userLoad, SetUserLoad] = useState(false);

    useEffect(() => {
        SetUserLoad(true)
    }, [])

    return (<div className="contenedor-landing">
        <div className="container">
            <div className="d-flex flex-column text-center">
                <h1 className={`titulo-landing ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}> ¡Bienvenido a GeekBank!</h1>
                <div className={`fs-2 ${userLoad ? "animacion-der visible" : "animacion-der"}`}>
                    <p>En Geek Bank reinventamos la forma en que interactúas con tu dinero. Somos más que un banco</p>
                    <p>tradicional; somos una plataforma diseñada para brindarte comodidad, transparencia y control total</p>
                    <p>sobre tus finanzas, todo respaldado por la última tecnología financiera.</p>
                </div>
            </div>
        </div>
    </div>)
}

export default ContenedorPresentacion
