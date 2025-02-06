import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../store/appContext";
import Elemento from "./Elemento.jsx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ContenedorElementosStore = () => {
    const { t } = useTranslation()
    const [userLoad, setUserLoad] = useState(false);
    const { store, actions } = useContext(Context);
    const [listaFiltrada, setListaFiltrada] = useState([])
    const navigate = useNavigate();

    const [pagination, SetPagination] = useState([0, 6])
    const flechaDer = useRef("");
    const flechaIzq = useRef("");
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
        setListaFiltrada([])
        SetPagination([0, 6])
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

    const HandleInput = (e) => {

        const listaFiltrada = filteredProducts.filter((elem) => {
            return elem.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setListaFiltrada(listaFiltrada)
    }

    useEffect(() => {
        if (pagination[0] - 6 < 0) {
            flechaIzq.current.classList.add("flecha-cancelada");
            flechaDer.current.classList.remove("flecha-cancelada");

        } else if (pagination[1] >= filteredProducts.length) {
            flechaIzq.current.classList.remove("flecha-cancelada");
            flechaDer.current.classList.add("flecha-cancelada");
        } else {
            flechaIzq.current.classList.remove("flecha-cancelada");
            flechaDer.current.classList.remove("flecha-cancelada");
        }
    }, [pagination])

    // Función que maneja la navegación para "Ver Más"
    const handleViewMore = (id, categoria) => {
        navigate(`/tienda/${categoria}/${id}`);
    };

    // Obtenemos el array de productos de la categoría seleccionada
    const filteredProducts = store.productos ? store.productos[selectedCategory] || [] : [];

    return (
        <div className={`container-fluid w-90 contenedor-elementos-store ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
            <div className="row">
                <div className={`row my-3 ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                    <div className="col-4 text-center">
                        <button className={`hover fs-2 mx-2 flecha-store bg-transparent btn ${store.texto}`} ref={flechaIzq} onClick={() => { SetPagination([pagination[0] - 6, pagination[1] - 6]) }}>
                            <FaArrowLeft />
                        </button>
                    </div>
                    <div className="col-4 text-center align-content-center">
                        <p className="fs-3 mt-3 fw-bold">{pagination[1] / 6} / {Math.ceil(filteredProducts.length / 6)}</p>
                    </div>
                    <div className="col-4 text-center">
                        <button className={`hover fs-2 mx-2 flecha-store bg-transparent btn ${store.texto}`} ref={flechaDer} onClick={() => { SetPagination([pagination[0] + 6, pagination[1] + 6]) }}>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                <div className={`row my-3 ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                    <div className="align-content-center col-6 text-start">
                        <select
                            onChange={handleCategoryChange}
                            className="py-3 text-center fw-bold text-dark hover w-75 rounded-pill fs-4"
                            aria-label="Small select example"
                        >
                            <option value="" disabled>{t('store.cat')}</option>
                            <option value="1" className="fw-bold text-dark">{t('store.cat1')}</option>
                            <option value="2" className="fw-bold text-dark">{t('store.cat2')}</option>
                            <option value="3" className="fw-bold text-dark">{t('store.cat3')}</option>
                        </select>
                    </div>
                    <div className="align-content-center col-6 text-end">
                        <input type="text" placeholder={t('store.buscar')} className="mx-3 text-center w-75 py-3 rounded-pill fs-4" onChange={HandleInput} />
                    </div>
                </div>
            </div>
            <div className="row contenedor-principal-store">

                {
                    [...(listaFiltrada.length === 0 ? filteredProducts : listaFiltrada)].slice(pagination[0], pagination[1]).map(product => (
                        <Elemento
                            calificacion={Math.round(parseInt(product.rating))}
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
        </div >
    );
};

export default ContenedorElementosStore;
