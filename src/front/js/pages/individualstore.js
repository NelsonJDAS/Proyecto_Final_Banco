import React, { useContext, useEffect } from "react";
import "../../styles/store.css";
import { Context } from "../store/appContext";
import ContenedorIndividualStore from "../component/GeekStore/ContenedorIndividualStore.jsx";
import { useNavigate } from "react-router-dom";


export const Individualstore = () => {

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
        <ContenedorIndividualStore />
    </div>
};
