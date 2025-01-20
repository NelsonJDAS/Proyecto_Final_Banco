import React, { useEffect, useState } from "react";

const ContenedorInformacion = () => {
    const [userLoad, SetUserLoad] = useState(false);
    useEffect(() => {
        SetUserLoad(true)
    }, [])
    return (
        <div className="container">
            <h2 className={`text-center titulo-politica ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}> Información que Recopilamos</h2>
            <p className={`text-center fs-3 ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                Recopilamos información personal que usted nos proporciona al abrir una
                cuenta, como su nombre, dirección, correo electrónico, número de
                teléfono y datos financieros.
            </p>
        </div>
    )
}

export default ContenedorInformacion