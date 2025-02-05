import React, { useContext, useEffect } from "react";
import "../../styles/inversiones.css";
import { Context } from "../store/appContext";
import CabeceraInversiones from "../component/Inversiones/CabeceraInversiones.jsx";
import ListaGraficas from "../component/Inversiones/ListaGraficas.jsx";
import { useNavigate } from "react-router-dom";

export const Inversiones = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const authStatus = await actions.verifyToken();

            if (!authStatus.authenticated) {
                navigate("/login");
            } else {
                const storedId = localStorage.getItem("userId");
                actions.fetchUserDetails(storedId);
                actions.getUserConfig(storedId);
            }
        };
        checkAuth();
    }, []);

    return <div>
        <CabeceraInversiones />
        <ListaGraficas />
    </div>;
};
