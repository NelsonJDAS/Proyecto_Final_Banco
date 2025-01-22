import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import img from "../../../../../img/store-fondo.png"
import { LiaStoreAltSolid } from "react-icons/lia";

const Tienda = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className={`bg-tienda animacion-contenedor align-content-center hover text-end contenedor-componente-interactivo my-2 rounded fw-bold ${store.borde} text-dark d-flex flex-column`} style={{ backgroundImage: `url(${img})` }}>
            <p className="mb-auto my-1 mx-3 animacion-store">Tienda Geek  <i className="mx-1"><LiaStoreAltSolid /></i></p>
        </div >
    )
}

export default Tienda