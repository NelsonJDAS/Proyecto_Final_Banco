import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { IoIosNotificationsOutline } from "react-icons/io";

const NotificacionCol = ({ cuerpo, leida, id, onMarcarComoLeida }) => {
    const { store, actions } = useContext(Context);

    const [userLoad, SetUserLoad] = useState("elemento-noti");
    useEffect(() => {
        SetUserLoad("elemento-noti visible")
    }, [])

    return (
        <div className={`col-12 text-center fw-bold align-content-center border-top-0 border-end-0 border-start-0 ${store.borde} py-3 my-2 ${leida ? "text-muted" : ""}`}>
            <div className="row">
                <div className="align-content-center text-center col-1 fs-3"><i><IoIosNotificationsOutline onClick={() => onMarcarComoLeida(id)} /></i></div>
                <div className="align-content-center text-center col-11"><p className="m-0">{cuerpo}</p></div>
                {!leida && (
                    <div className="align-content-center text-center col-2">
                        <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => onMarcarComoLeida(id)} // Llama a la función para marcar como leída
                        >
                            <i className="fas fa-check"></i> Marcar como leída
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

//     return (
//         <div className={`col-12 text-center fw-bold align-content-center border-top-0 border-end-0 border-start-0 ${store.borde} py-3 my-2 ${leida ? "text-muted" : ""}`}>
//             <div className="row">
//                 <div className="align-content-center text-center col-1 fs-3">
//                     <i><IoIosNotificationsOutline /></i>
//                 </div>

//                 <div className="align-content-center text-center col-9"></div>

//                 {!leida && (
//                     <div className="align-content-center text-center col-2">
//                         <button
//                             className="btn btn-sm btn-outline-secondary"
//                             onClick={() => onMarcarComoLeida(id)} // Llama a la función para marcar como leída
//                         >
//                             <i className="fas fa-check"></i> Marcar como leída
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

export default NotificacionCol;