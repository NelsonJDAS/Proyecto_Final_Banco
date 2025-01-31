// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../../../../store/appContext";
// import { FaRegIdCard } from "react-icons/fa6";

// const TarjetasCoordenadas = () => {
//     const { store, actions } = useContext(Context);
//     const [datos, SetDatos] = useState([]);
//     const [mail, SetMail] = useState("")
//     const [sendCode, SetSendCode] = useState(false);

//     const HandleMailSend = (e) => {
//         SetMail(e.target.value.toLowerCase())
//     }
    

//     const ConseguirTarjeta = () => {
//         Object.entries(store.tarjetaCoord).map((objeto, index) => {
//             SetDatos((prevDatos) => [...prevDatos, { valor: objeto[1].valor, posicion: objeto[1].posicion }]);

//         })
//     }

//     // useEffect(() => {
//     //     Object.entries(store.tarjetaCoord).map((objeto, index) => {
//     //         SetDatos((prevDatos) => [...prevDatos, { valor: objeto[1].valor, posicion: objeto[1].posicion }]);

//     //     })
//     // }, [store.tarjetaCoord])


//     return (
//         <>
//             {datos.length === 0 ?
//                 <div className={`bg-coordenadas animacion-contenedor align-content-center hover contenedor-componente-interactivo my-2 text-center fw-bold my-1 py-1 ${store.borde} text-dark d-flex flex-column`}>
//                     <p className="fs-1 objeto-animado"><FaRegIdCard /></p>
//                     <p className="mb-auto">Tarjeta de Coordenadas</p>
//                     <div className="container">
//                         <input type="text" className={`form-control rounded-pill text-dark text-center ${sendCode ? "d-none" : ""} ${store.hidden ? "desenfoque" : ""}`} value={store.user.email} disabled />
//                         <input type="text" className={`form-control rounded-pill text-dark text-center ${sendCode ? "" : "d-none"}`} placeholder="codigo aqui!" />
//                     </div>
//                     <p className="enlace-tarjeta my-2" onClick={() => {
//                         sendCode ? ConseguirTarjeta() : SetSendCode(true), actions.sendCoordinatesCode(store.user.email);
                        
//                     }}>{sendCode ? "Confirmar Codigo" : "Conseguir Codigo"}</p>
//                 </div > :
//                 <div className={`bg-tarjeta animacion-contenedor align-content-center hover contenedor-componente-interactivo my-2 text-center fw-bold my-1 py-1 ${store.borde} text-dark d-flex flex-column`}>
//                     <div className="container my-1">
//                         <div className="row">
//                             <div className="col-4 text-center"><p className={`fw-bold my-2 objeto-animado titulo-tarjeta ${store.hidden ? "desenfoque" : ""}`}>GeekGrid</p></div>
//                             <div className="col-2 text-center"><p className={`fw-bold my-1 ${store.hidden ? "desenfoque" : ""}`}>A</p></div>
//                             <div className="col-2 text-center"><p className={`fw-bold my-1 ${store.hidden ? "desenfoque" : ""}`}>B</p></div>
//                             <div className="col-2 text-center"><p className={`fw-bold my-1 ${store.hidden ? "desenfoque" : ""}`}>C</p></div>
//                             <div className="col-2 text-center"><p className={`fw-bold my-1 ${store.hidden ? "desenfoque" : ""}`}>D</p></div>
//                         </div>
//                         <div className="row">
//                             <div className="col-4 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>1</p></div>
//                             <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[0].valor}</p></div>
//                             <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[1].valor}</p></div>
//                             <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[2].valor}</p></div>
//                             <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[3].valor}</p></div>
//                         </div>
//                         <div className="row">
//                             <div className="col-4 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>2</p></div>
//                             <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[4].valor}</p></div>
//                             <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[5].valor}</p></div>
//                             <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[6].valor}</p></div>
//                             <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[7].valor}</p></div>
//                         </div>
//                         <div className="row">
//                             <div className="col-4 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>3</p></div>
//                             <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[8].valor}</p></div>
//                             <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[9].valor}</p></div>
//                             <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[10].valor}</p></div>
//                             <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[11].valor}</p></div>
//                         </div>
//                         <div className="row">
//                             <div className="col-4 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>4</p></div>
//                             <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[12].valor}</p></div>
//                             <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[13].valor}</p></div>
//                             <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[14].valor}</p></div>
//                             <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[15].valor}</p></div>
//                         </div>
//                     </div>
//                 </div >
//             }
//         </>
//     )
// }

// export default TarjetasCoordenadas

import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../../store/appContext";
import { FaRegIdCard } from "react-icons/fa6";

const TarjetasCoordenadas = () => {
    const { store, actions } = useContext(Context);
    const [datos, setDatos] = useState([]);
    const [inputCode, setInputCode] = useState("");
    const [sendCode, setSendCode] = useState(false);
    const [error, setError] = useState(null);

    // Manejar la verificación del código
    const handleVerifyCode = async () => {
        try {
            const response = await actions.verifyCoordinatesCode(store.user.email, inputCode);
            
            // Si la verificación es exitosa, obtener la tarjeta
            if (response && response.tarjeta_coordenadas) {
                const formattedData = Object.values(response.tarjeta_coordenadas).map(coord => ({
                    valor: coord.valor,
                    posicion: coord.posicion
                }));
                setDatos(formattedData); // Actualiza los datos de la tarjeta
                setSendCode(false); // Oculta el input del código
                console.log(store.tarjeta_coordenadas)
                setError(null); // Limpia cualquier error previo
            }
        } catch (error) {
            console.error("Error al verificar el código:", error);
            setError("Código inválido o expirado"); // Muestra un mensaje de error
            setDatos([]); // Asegúrate de que no se muestre la tarjeta si hay un error
        }
    };

    return (
        <>
            {datos.length === 0 ? (
                <div className={`bg-coordenadas animacion-contenedor align-content-center hover contenedor-componente-interactivo my-2 text-center fw-bold my-1 py-1 ${store.borde} text-dark d-flex flex-column`}>
                    <p className="fs-1 objeto-animado"><FaRegIdCard /></p>
                    <p className="mb-auto">Tarjeta de Coordenadas</p>
                    <div className="container">
                        <input 
                            type="text" 
                            className={`form-control rounded-pill text-dark text-center ${sendCode ? "d-none" : ""} ${store.hidden ? "desenfoque" : ""}`} 
                            value={store.user.email} 
                            disabled 
                        />
                        <input 
                            type="text" 
                            className={`form-control rounded-pill text-dark text-center ${sendCode ? "" : "d-none"}`} 
                            placeholder="Código aquí!"
                            value={inputCode}
                            onChange={(e) => setInputCode(e.target.value)}
                        />
                    </div>
                    {error && (
                        <div className="text-danger small mt-2">{error}</div>
                    )}
                    <p 
                        className="enlace-tarjeta my-2" 
                        onClick={() => {
                            if (sendCode) {
                                handleVerifyCode();
                            } else {
                                actions.sendCoordinatesCode(store.user.email);
                                setSendCode(true);
                            }
                        }}
                    >
                        {sendCode ? "Confirmar Código" : "Conseguir Código"}
                    </p>
                </div>
            ) : (
                <div className={`bg-tarjeta animacion-contenedor align-content-center hover contenedor-componente-interactivo my-2 text-center fw-bold my-1 py-1 ${store.borde} text-dark d-flex flex-column`}>
                    <div className="container my-1">
                        <div className="row">
                            <div className="col-4 text-center"><p className={`fw-bold my-2 objeto-animado titulo-tarjeta ${store.hidden ? "desenfoque" : ""}`}>GeekGrid</p></div>
                            <div className="col-2 text-center"><p className={`fw-bold my-1 ${store.hidden ? "desenfoque" : ""}`}>A</p></div>
                            <div className="col-2 text-center"><p className={`fw-bold my-1 ${store.hidden ? "desenfoque" : ""}`}>B</p></div>
                            <div className="col-2 text-center"><p className={`fw-bold my-1 ${store.hidden ? "desenfoque" : ""}`}>C</p></div>
                            <div className="col-2 text-center"><p className={`fw-bold my-1 ${store.hidden ? "desenfoque" : ""}`}>D</p></div>
                        </div>
                        <div className="row">
                            <div className="col-4 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>1</p></div>
                            <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[0]?.valor}</p></div>
                            <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[1]?.valor}</p></div>
                            <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[2]?.valor}</p></div>
                            <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[3]?.valor}</p></div>
                        </div>
                        <div className="row">
                            <div className="col-4 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>2</p></div>
                            <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[4]?.valor}</p></div>
                            <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[5]?.valor}</p></div>
                            <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[6]?.valor}</p></div>
                            <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[7]?.valor}</p></div>
                        </div>
                        <div className="row">
                            <div className="col-4 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>3</p></div>
                            <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[8]?.valor}</p></div>
                            <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[9]?.valor}</p></div>
                            <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[10]?.valor}</p></div>
                            <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[11]?.valor}</p></div>
                        </div>
                        <div className="row">
                            <div className="col-4 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>4</p></div>
                            <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[12]?.valor}</p></div>
                            <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[13]?.valor}</p></div>
                            <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[14]?.valor}</p></div>
                            <div className="col-2 text-center border-top border-dark"><p className={`fw-bold my-1 py-1 ${store.hidden ? "desenfoque" : ""}`}>{datos[15]?.valor}</p></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TarjetasCoordenadas;
