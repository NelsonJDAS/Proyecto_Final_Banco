import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import { FaCcMastercard } from "react-icons/fa";
import { LuNfc } from "react-icons/lu";
import { RiMastercardFill } from "react-icons/ri";

const Tarjetas = () => {
    const { store, actions } = useContext(Context);

    // Obtener el número de tarjeta formateado
    const formatCardNumber = () => {
        if (!store.cuentas?.numero_tarjeta) return ["••••", "••••", "••••", "••••"];

        const cleaned = store.cuentas.numero_tarjeta.replace(/[^0-9]/g, ''); // Eliminar letras/guiones
        const grupos = cleaned.match(/.{1,4}/g) || [];
        return grupos.slice(-4); // Tomar últimos 16 dígitos (4 grupos)
    };

    // Obtener fecha de caducidad
    const caducidad = store.cuentas?.caducidad || "01/30";

    return (
        <div className={`bg-tarjetas animacion-contenedor hover contenedor-componente-interactivo my-2 text-center fw-bold ${store.borde} text-white d-flex flex-column`}>
            <div className="d-flex justify-content-between">
                <p className="text-start m-2">Geek Card</p>
                <p className="my-1 mx-2 objeto-animado"><FaCcMastercard /></p>
            </div>
            <div className="d-flex justify-content-between fs-1 mx-2 my-3">
                <RiMastercardFill /><LuNfc />
            </div>
            <div className="d-flex justify-content-evenly">
                {formatCardNumber().map((grupo, index) => (
                    <p
                        key={index}
                        className={`fw-bold fs-3 ${store.hidden ? "desenfoque" : ""}`}
                    >
                        {grupo}
                    </p>
                ))}
            </div>
            <div className="row mt-2">
                <div className="col-4 text-end">
                    <p className="mb-auto my-1 objeto-animado">Tarjeta</p>
                </div>
                <div className="col-4 text-center">
                    <div className="d-flex justify-content-end">
                        CVV:
                        <p className={`mx-1 ${store.hidden ? "desenfoque" : ""}`}>
                            {store.cuentas.cvv}
                        </p>
                    </div>
                </div>
                <div className="col-4 text-center">
                    <p className={`${store.hidden ? "desenfoque" : ""}`}>
                        {caducidad}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tarjetas;