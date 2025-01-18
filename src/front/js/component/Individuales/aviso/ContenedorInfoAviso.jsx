import React from "react";

const ContenedorInfoAviso = () => {
    return (
        <div className="container">
            <h1 className="text-center">Información General</h1>
            <p>
                GeekBank es una entidad financiera debidamente registrada y regulada por
                las autoridades competentes. Para más información, puede contactarnos
                en:
                <ul>
                    <li>
                        <strong>Dirección:</strong> Calle Ficticia 123, Ciudad Geek.
                    </li>
                    <li>
                        <strong>Correo electrónico:</strong>{" "}
                        <a href="mailto:legal@geekbank.com">legal@geekbank.com</a>
                    </li>
                    <li>
                        <strong>Teléfono:</strong> +1 (800) 123-4567
                    </li>
                </ul>
            </p>
        </div>
    )
}

export default ContenedorInfoAviso