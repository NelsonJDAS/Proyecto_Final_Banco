import React, { useContext, useEffect } from "react";
import "../../styles/transferencias.css";
import ContenedorPrincipalTransferencias from "../component/Transferencias/ContenedorPrincipalTransferencias.jsx";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Transferencias = () => {

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

    return (
        <div>
            <ContenedorPrincipalTransferencias />
        </div>
    );
};
