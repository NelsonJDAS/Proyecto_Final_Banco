import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import img from "../../../../../img/store-fondo.png"

const Tienda = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className={`bg-tienda animacion-contenedor align-content-center hover contenedor-componente-interactivo my-2 rounded text-center fw-bold ${store.borde} text-dark d-flex flex-column`} style={{ backgroundImage: `url(${img})` }}>
            <p className="mb-auto my-2 fs-2 mx-3 objeto-animado">Tienda Geek</p>
        </div >
    )
}

export default Tienda