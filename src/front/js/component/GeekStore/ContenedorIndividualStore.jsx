import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


const ContenedorIndividualStore = () => {
    const [userLoad, SetUserLoad] = useState(false);
    const { store, actions } = useContext(Context);

    const navigate = useNavigate(null);


    useEffect(() => {
        actions.Scroll()
        SetUserLoad(true)
    }, [])
    return (
        <div className={`container contenedor-individual-store bg-white text-dark ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
            <div className="row mb-3">
                <div className="col-8 text-end">
                    <span className="my-2 fw-bold fs-1 nombre-producto-individual">Nombre del Producto</span>
                </div>
                <div className="col-4 text-end align-content-center"> <span className="text-danger hover fw-bold volver-atras-btn" onClick={() => navigate("/tienda")}>Volver atras <i><RiArrowGoBackFill /></i></span></div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="row mb-3">
                        <div className="col-12">
                            <div className="container-fluid contenedor-img-store text-center">
                                <img className="img-elemento img-fluid h-100" src="https://th.bing.com/th/id/OIP.oXPpVw_05_odCeMaNBu_3QHaHj?w=182&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <div className="container">
                                <p className="text-center mt-3">
                                    Las Papas Sabritas son un delicioso snack crujiente y sabroso,
                                    conocido por su variedad de sabores intensos y su textura ligera.
                                    Cada bolsa está llena de papas finamente cortadas y fritas a la perfección,
                                    ofreciendo una experiencia irresistible. Desde el clásico Sabor Limón y Sal hasta
                                    opciones más atrevidas como Chile y Limón o Ketchup, Sabritas tiene un sabor para
                                    cada gusto. Perfectas para acompañar cualquier ocasión, son el snack ideal para
                                    compartir o disfrutar en solitario.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row mb-3">
                        <div className="col-12 ">
                            <div className=" text-center bg-dark rounded-3 bg-opacity-25 border border-secondary p-3">
                                <p className="fw-bold fs-4">¡Disfruta ofertas exclusivas por ser cliente del banco! 🎉</p>
                                <p className="fs-5">
                                    Paga con tu tarjeta y accede a descuentos, meses sin intereses y recompensas especiales. ¡Aprovecha esta promoción y muchas más solo por ser parte del banco! ✅
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-12">
                            <div className="container d-flex justify-content-evenly">
                                <span className="precio-individual precio">1.99</span>
                                <span className="precio-individual precio-rebaja"><i><FaArrowRightLong /></i></span>
                                <span className="precio-individual precio-rebaja">1.50</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="container">
                                <div className=" text-center bg-warning rounded-3 bg-opacity-50 p-3 border border-warning">
                                    <p className="fw-bold"> Puedes agregar o modificar tu pedido en cualquier momento desde el carrito en la página principal. ¡Haz los cambios que necesites antes de finalizar tu compra!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row h-25">
                        <div className="col-12 text-end align-content-center">
                            <button className="btn btn-success fw-bold rounded-pill text-white fs-2 mx-3 btn-individual" onClick={() => navigate("/tienda/1")}>Agregar al carrito <i><AiOutlineShoppingCart /></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContenedorIndividualStore