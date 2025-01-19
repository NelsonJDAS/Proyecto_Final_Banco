import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";

const ColLateral = ({ width, position, text, userLoad }) => {
    const { store, actions } = useContext(Context);
    const [positionCol, SetPositionCol] = useState(position === "left" ? "animacion-izq" : "animacion-der");

    return (
        <div className={`col-12 text-center my-3 ${userLoad ? `${positionCol} visible` : positionCol}`}>
            <div className={`container ${width}`}>
                <div className={`p-2 rounded-pill fw-bold text-center contenedor-col ${store.fondo === "fondo-modo-claro" ? "bg-dark text-white" : "bg-white text-dark"}`}>
                    <span className="fs-4">{text}</span>
                </div>
            </div>
        </div>
    )
}
export default ColLateral
