import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Mensaje = ({ textoBot, textoUser }) => {
    return (
        <>
            <div className="row my-2">
                <div className="col-4"></div>
                <div className="col-8">
                    <div className="bg-secondary rounded-3 mensaje-chat p-3">
                        <div className="row">
                            <div className="col-12 text-end"><p className="mx-2"> (Tu) </p></div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <p>{textoUser}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-8">
                    <div className="bg-secondary rounded-3 mensaje-chat p-3">
                        <div className="row">
                            <div className="col-12"><p className="mx-2"> Alejandro <i><FaUserCircle /></i> </p></div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <p>{textoBot}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
        </>
    )
}

export default Mensaje