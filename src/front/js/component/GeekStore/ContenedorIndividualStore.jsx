import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";

const ContenedorIndividualStore = () => {
    const [userLoad, setUserLoad] = useState(false);
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { categoria, productId } = useParams();
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        actions.Scroll();
        setUserLoad(true);
        // Si la data no está en la store, la volvemos a cargar
        if (!store.productos || Object.keys(store.productos).length === 0) {
            actions.fetchProducts();
        }
    }, [actions]);

    useEffect(() => {
        if (store.productos && categoria && productId) {
            const prod = store.productos[categoria]?.find(
                p => p.id.toString() === productId
            );
            setProductData(prod);
            setLoading(false);
        }
    }, [store.productos, categoria, productId]);

    if (loading) {
        return (
            <div className="container text-center mt-5">
                <h3>Cargando producto...</h3>
            </div>
        );
    }

    if (!productData) {
        return (
            <div className="container text-center mt-5">
                <h3>No se encontró el producto.</h3>
            </div>
        );
    }

    return (
        <div className={`container contenedor-individual-store bg-white text-dark ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
            <div className="row mb-3">
                <div className="col-8 text-end">
                    <span className="my-2 fw-bold fs-1 nombre-producto-individual">{productData.title}</span>
                </div>
                <div className="col-4 text-end align-content-center">
                    <span 
                        className="text-danger hover fw-bold volver-atras-btn" 
                        onClick={() => navigate("/tienda")}
                    >
                        Volver atrás <i><RiArrowGoBackFill /></i>
                    </span>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="row mb-3">
                        <div className="col-12">
                            <div className="container-fluid contenedor-img-store text-center">
                                <img 
                                    className="img-elemento img-fluid h-100" 
                                    src={productData.image_url} 
                                    alt={productData.title} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <div className="container">
                                <p className="text-center mt-3">
                                    {productData.description || "Sin descripción disponible."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row mb-3">
                        <div className="col-12">
                            <div className="text-center bg-dark rounded-3 bg-opacity-25 border border-secondary p-3">
                                <p className="fw-bold fs-4">¡Disfruta ofertas exclusivas por ser cliente del banco! 🎉</p>
                                <p className="fs-5">
                                    Paga con tu tarjeta y accede a descuentos, meses sin intereses y recompensas especiales.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-12">
                            <div className="container d-flex justify-content-evenly">
                                <span className="precio-individual precio">{productData.price || "N/A"}</span>
                                <span className="precio-individual precio-rebaja">
                                    <i><FaArrowRightLong /></i>
                                </span>
                                <span className="precio-individual precio-rebaja">1.50</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="container">
                                <div className="text-center bg-warning rounded-3 bg-opacity-50 p-3 border border-warning">
                                    <p className="fw-bold">
                                        Puedes agregar o modificar tu pedido en cualquier momento desde el carrito.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row h-25">
                        <div className="col-12 text-end align-content-center">
                            <button 
                                className="btn btn-success fw-bold rounded-pill text-white fs-2 mx-3 btn-individual" 
                                onClick={() => actions.addToCart(productData)}
                            >
                                Agregar al carrito <i><AiOutlineShoppingCart /></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContenedorIndividualStore;
