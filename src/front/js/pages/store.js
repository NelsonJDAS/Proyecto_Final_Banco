import React, { useContext } from "react";
import "../../styles/store.css";
import { Context } from "../store/appContext";
import TituloStore from "../component/GeekStore/TituloStore.jsx";
import ContenedorElementosStore from "../component/GeekStore/ContenedorElementosStore.jsx";


export const Store = () => {
    const { store, actions } = useContext(Context);

    return <div>
        <TituloStore />
        <ContenedorElementosStore />
    </div>
};
