import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";


const ContenedorNotificaciones = () => {
    const { store, actions } = useContext(Context);

    const [userLoad, SetUserLoad] = useState("elemento-tabla");
    useEffect(() => {
        SetUserLoad("elemento-tabla visible")
    }, [])

    return (
        <div className={`row fw-bold border-top-0 border-end-0 border-start-0 ${store.borde} ${userLoad} py-2`}>
        </div>
    )
}

export default ContenedorNotificaciones