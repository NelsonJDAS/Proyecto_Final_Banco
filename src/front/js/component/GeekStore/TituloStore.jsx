import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";

const TituloStore = () => {
    const [userLoad, SetUserLoad] = useState(false);
    const { store, actions } = useContext(Context);


    useEffect(() => {
        actions.Scroll()
        SetUserLoad(true)
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className={`col-6 text-end ${userLoad ? "animacion-izq visible" : "animacion-izq"}`}><p className="titulo-store mx-3">Geek</p></div>
                <div className={`col-6 ${userLoad ? "animacion-der visible" : "animacion-der"}`}><p className="titulo-store mx-3">Store</p></div>
            </div>
        </div>
    )
}

export default TituloStore