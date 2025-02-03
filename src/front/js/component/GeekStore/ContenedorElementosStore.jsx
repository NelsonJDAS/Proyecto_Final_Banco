import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import Elemento from "./Elemento.jsx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ContenedorElementosStore = () => {
    const [userLoad, setUserLoad] = useState(false);
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    // Estado que guarda la categoría seleccionada; por defecto "móviles"
    const [selectedCategory, setSelectedCategory] = useState("móviles");

    useEffect(() => {
        actions.Scroll();
        setUserLoad(true);
        actions.fetchProducts();
    }, []);

    // Función que actualiza la categoría según el valor del select
    const handleCategoryChange = (e) => {
        const value = e.target.value;
        let category = "";
        if (value === "1") {
            category = "móviles";
        } else if (value === "2") {
            category = "tv";
        } else if (value === "3") {
            category = "pequeño electrodomestico";
        }
        setSelectedCategory(category);
    };

    // Función que maneja la navegación para "Ver Más"
    const handleViewMore = (id, categoria) => {
        navigate(`/tienda/${categoria}/${id}`);
    };

    // Obtenemos el array de productos de la categoría seleccionada
    const filteredProducts = store.productos ? store.productos[selectedCategory] || [] : [];

    return (
        <div className={`container-fluid w-90 contenedor-elementos-store ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
            <button
                type="button"
                className="dropdown-item"
                onClick={(e) => {
                    e.preventDefault();
                    console.log("Tramitar pedido clicked");
                    navigate("/tienda/checkout");
                }}
            >
                Tramitar pedido
            </button>
            <div className="row">
                <div className={`row my-3 ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                    <div className="col-4 text-center">
                        <button className={`hover fs-2 mx-2 flecha-store bg-transparent btn ${store.texto}`}>
                            <FaArrowLeft />
                        </button>
                    </div>
                    <div className="col-4 text-center align-content-center">
                        <p className="fs-3 mt-3 fw-bold">1</p>
                    </div>
                    <div className="col-4 text-center">
                        <button className={`hover fs-2 mx-2 flecha-store bg-transparent btn ${store.texto}`}>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                <div className={`row my-3 ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                    <div className="align-content-center col-5 text-start">
                        <select
                            onChange={handleCategoryChange}
                            className="py-2 text-center fw-bold text-dark hover w-75 rounded-pill"
                            aria-label="Small select example"
                        >
                            <option value="" disabled>Categoria</option>
                            <option value="1" className="fw-bold text-dark">Smartphones</option>
                            <option value="2" className="fw-bold text-dark">TV</option>
                            <option value="3" className="fw-bold text-dark">Pequeño electrodomestico</option>
                        </select>
                    </div>
                    <div className="align-content-center col-6 text-end">
                        <input type="text" placeholder="Buscar" className="mx-3 text-center w-50 py-2 rounded-pill" />
                    </div>
                    <div className="align-content-center col-1 text-center">
                        {/* Usamos el dropdown dropstart de Bootstrap para el carrito */}
                        <div className="dropdown dropstart">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="cartDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <AiOutlineShoppingCart />
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="cartDropdown">
                                {store.cart && store.cart.length > 0 ? (
                                    <>
                                        {store.cart.map((item) => (
                                            <li key={item.id}>
                                                <div className="dropdown-item d-flex justify-content-between align-items-center">
                                                    <span>{item.title} - {item.price} </span>
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            actions.removeFromCart(item.id);
                                                        }}
                                                    > Eliminar</button>
                                                </div>
                                            </li>
                                        ))}
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="dropdown-item"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    console.log("Tramitar pedido clicked");
                                                    navigate("/tienda/checkout");
                                                }}
                                            >
                                                Tramitar pedido
                                            </button>
                                        </li>

                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    actions.clearCart();
                                                }}
                                            >
                                                Vaciar Carrito
                                            </a>
                                        </li>
                                    </>
                                ) : (
                                    <li>
                                        <span className="dropdown-item">Carrito vacío</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {filteredProducts.map(product => (
                    <Elemento
                        key={product.id}
                        id={product.id}
                        Nombre={product.title}
                        Precio={product.price}
                        Imagen={product.image_url}
                        // Se pasa la categoría (debe coincidir con la propiedad del producto)
                        categoria={product.categoria}
                        onViewMore={handleViewMore}
                    />
                ))}
            </div>
        </div>
    );
};

export default ContenedorElementosStore;
