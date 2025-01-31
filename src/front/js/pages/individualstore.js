import React, { useContext } from "react";
import "../../styles/store.css";
import { Context } from "../store/appContext";
import ContenedorIndividualStore from "../component/GeekStore/ContenedorIndividualStore.jsx";


export const Individualstore = () => {
    const { store, actions } = useContext(Context);

    return <div>
        <ContenedorIndividualStore />
    </div>
};
