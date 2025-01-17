import React, { useEffect, useState } from "react";


const ContenedorPresentacionPoliticas = () => {
    const [userLoad, SetUserLoad] = useState(false);

    useEffect(() => {
        SetUserLoad(true)
    }, [])

    return (
        <div className="container">
            <h1 className={`text-center ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}>Políticas de Privacidad - GeekBank</h1>
            <p className={userLoad ? "animacion-der visible" : "animacion-der"}>
                En GeekBank, valoramos y protegemos la privacidad de nuestros clientes. Esta política de
                privacidad describe cómo recopilamos, usamos y protegemos su información personal.
            </p>
        </div>
    )
}

export default ContenedorPresentacionPoliticas