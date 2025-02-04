import React, { useContext, useEffect, useRef, useState } from "react";
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
    const [porcentaje, SetPorcentaje] = useState(0);

    // logica para mostrar el conteindo si el usuario esta en la seccion del componente
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // controla la variable para cambiarla si el usuario se encuentra encima del componente
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // entry.isIntersecting indica si el elemento es visible
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null, // Usar la ventana como viewport
                rootMargin: '0px', // Sin márgenes
                threshold: 0.1, // Al menos el 10% del componente debe estar visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current); // Observar el componente
        }

        return () => {
            // Limpiar el observer al desmontar el componente
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            setUserLoad(true)
        }
    }, [isVisible])


    useEffect(() => {
        actions.Scroll();
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
            prod.price == null ? "" : SetPorcentaje(parseInt((prod.price.slice(0, -2))) * 0.05)
            setProductData(prod);
            setLoading(false);
        }
    }, [store.productos, categoria, productId]);


    return (
        <>

            <div className={`container contenedor-individual-store bg-white text-dark ${userLoad ? "animacion-individual-store visible" : "animacion-individual-store"}`} ref={sectionRef}>
                <div className="row mb-3 py-3">
                    <div className="col-12 text-end align-content-center">
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
                                        src={productData == null ? "" : productData.image_url}
                                        alt={productData == null ? "" : productData.title}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                                <div className="container">
                                    <p className="text-center mt-3 fs-5">
                                        {productData == null ? "" : productData.title}
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
                                    <span className="precio-individual precio">{productData == null ? "" : productData.price || "N/A"}</span>
                                    <span className="precio-individual precio-rebaja">
                                        <i><FaArrowRightLong /></i>
                                    </span>
                                    <span className="precio-individual precio-rebaja">{productData == null ? "" : productData.price == null ? "Agotado" : parseInt(productData.price.slice(0, -2)) - porcentaje}</span>
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
                                    className="btn btn-primary fw-bold rounded-pill text-white fs-2 mx-3 btn-individual"
                                    onClick={() => {
                                        console.log(productData)
                                        actions.addToCart(productData)
                                    }}
                                >
                                    Agregar al carrito <i><AiOutlineShoppingCart /></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ContenedorIndividualStore;
