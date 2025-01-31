import React, { useContext } from "react";
import "../../styles/store.css";
import { Context } from "../store/appContext";
import TituloStore from "../component/GeekStore/TituloStore.jsx";


export const Store = () => {
    const { store, actions } = useContext(Context);

    return <div>
        <TituloStore />
    </div>
};
