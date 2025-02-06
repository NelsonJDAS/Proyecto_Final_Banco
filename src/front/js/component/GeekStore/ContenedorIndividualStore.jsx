import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../store/appContext";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const ContenedorIndividualStore = () => {
    const { t } = useTranslation()
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


    const generarEstrellas = (num) => {
        const estrella1 = "★"
        const estrella2 = "☆"

        let estrellas = [];

        let numestrellas = num;

        for (let i = 0; i < num; i++) {
            estrellas.push(estrella1);
        }
        while (numestrellas < 5) {
            estrellas.push(estrella2);
            numestrellas++
        }

        return estrellas
    }


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

            <div className={`container contenedor-individual-store bg-white text-dark ${store.borde} ${userLoad ? "animacion-individual-store visible" : "animacion-individual-store"}`} ref={sectionRef}>
                <div className="row mb-3 py-3">
                    <div className="col-12 text-end align-content-center">
                        <span
                            className="text-danger hover fw-bold volver-atras-btn"
                            onClick={() => navigate("/tienda")}
                        >{t('individualstore.atras')}<i><RiArrowGoBackFill /></i>
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
                                    <p className="fw-bold fs-4">{t('individualstore.p1')}</p>
                                    <p className="fs-5">{t('individualstore.p2')}</p>
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
                                        <p className="fw-bold">{t('individualstore.p3')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row h-25">
                            <div className="col-12 text-end align-content-center mt-3">
                                <button
                                    className="btn btn-primary fw-bold rounded-pill text-white fs-2 mx-3 btn-individual"
                                    onClick={() => {
                                        actions.addToCart(productData)
                                    }}
                                >{t('individualstore.agregar')}<i><AiOutlineShoppingCart /></i>
                                </button>
                            </div>
                            <div className="col-12 text-end mt-3 fs-4">
                                <p>
                                    {
                                        Object.assign(generarEstrellas(productData == null ? 5 : Math.round(parseInt(productData.rating)))).map((elem, index) => {
                                            return elem === "★" ? <i key={index} className="text-warning"><RiStarSFill /></i> : <i key={index}><RiStarSLine /></i>
                                        })
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ContenedorIndividualStore;
