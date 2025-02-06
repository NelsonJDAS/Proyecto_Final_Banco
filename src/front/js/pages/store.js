import React, { useContext, useEffect } from "react";
import "../../styles/store.css";
import { Context } from "../store/appContext";
import TituloStore from "../component/GeekStore/TituloStore.jsx";
import ContenedorElementosStore from "../component/GeekStore/ContenedorElementosStore.jsx";
import { useNavigate } from "react-router-dom";


export const Store = () => {
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
        <TituloStore />
        <ContenedorElementosStore />
    </div>
};
