import React, { useContext, useEffect, useRef, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Swal from 'sweetalert2';

import PurchaseModal from "./PurchaseModal.jsx";
import { Context } from "../../store/appContext.js";
import { IoClose } from "react-icons/io5";


const ContenedorCompras = () => {
    const notyf = new Notyf();
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [userLoad, SetUserLoad] = useState(false)
    const [showPurchaseModal, setShowPurchaseModal] = useState(false);
    const [codigo1, setCodigo1] = useState()
    const [codigo2, setCodigo2] = useState()


    const codigo1Ref = useRef(null)
    const codigo2Ref = useRef(null)
    const modalRef = useRef(null)


    const generarCodigos = () => {
        codigo1Ref.current.value = ""
        codigo2Ref.current.value = ""
        setCodigo1(store.tarjetaCoord[Math.floor(Math.random() * 15) + 1]);
        setCodigo2(store.tarjetaCoord[Math.floor(Math.random() * 15) + 1]);
    }


    // Función para convertir un precio en cadena a número.
    const parsePrice = (priceStr) => {
        if (priceStr == null) return 0;
        const str = priceStr.toString(); // Convertir a string si no lo es
        let cleaned = str.replace(/[^\d,.-]/g, "");
        cleaned = cleaned.replace(",", ".");
        const num = parseFloat(cleaned);
        return isNaN(num) ? 0 : num;
    };

    // Calcular el total del carrito
    const totalPrice = store.cart.reduce(
        (acc, item) => acc + parsePrice(item.price),
        0
    );

    // Al hacer clic en "Comprar" se abre el modal y se actualizan los datos del usuario
    const handleOpenModal = () => {
        const userId = localStorage.getItem("userId");
        if (!userId) {
            notyf.error("Usuario no encontrado")
            return;
        }
        actions.fetchUserDetails(userId);
        setShowPurchaseModal(true);
    };

    // Función que se ejecuta al aceptar el pedido desde el modal
    const handleBuy = () => {
        if (codigo1Ref.current.value == codigo1.valor && codigo2Ref.current.value == codigo2.valor) {
            if (!(store.cuentas && store.cuentas.id && store.cuentas.saldo)) {
                alert("No se encontraron datos de la cuenta");
                return;
            }
            const availableBalance = parsePrice(store.cuentas.saldo);
            if (availableBalance >= totalPrice) {
                fetch(`${process.env.BACKEND_URL}/api/transaccion/retiro`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        cuenta_id: store.cuentas.id,
                        monto: -Math.abs(totalPrice), // Monto negativo
                        descripcion: "Compra en la tienda"
                    })
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.error) {
                            notyf.error("Error")
                        } else {
                            Swal.fire({
                                title: 'Gracias por tu Compra',
                                text: `La compra se ha realizado satisfactoriamente`,
                                icon: 'success',
                                confirmButtonText: 'Aceptar',
                                confirmButtonColor: '#28a745', // Color verde para éxito
                                showConfirmButton: true,
                                allowOutsideClick: false,
                                allowEscapeKey: false,
                                allowEnterKey: false,
                                customClass: {
                                    popup: `alerta-transferencia ${store.fondo === "fondo-modo-claro" ? "" : "bg-alerta-transferencia"}`,
                                    confirmButton: 'btn-alerta'
                                }
                            });
                            if (modalRef.current) {
                                const modal = bootstrap.Modal.getInstance(modalRef.current);
                                modal.hide();
                            }
                            generarCodigos();
                            actions.clearCart();
                            setShowPurchaseModal(false);
                            navigate("/tienda");
                        }
                    })
                    .catch((error) => {
                        console.error("Error en la compra:", error);
                        notyf.error("Error al realizar la compra")
                    });
            } else {
                notyf.error("Saldo insuficiente para realizar la transferencia")
            }
        } else {
            console.log(store.tarjetaCoord)
            notyf.error("Codigos erroneos")
        }
    };

    useEffect(() => {
        generarCodigos();
    }, [store.tarjetaCoord])

    useEffect(() => {
        codigo1 == codigo2 ? generarCodigos() : ""
    }, [codigo1, codigo2])

    useEffect(() => {
        actions.Scroll();
        SetUserLoad(true)
    }, [])
    return (
        <>
            <div className="modal fade" id="tarjetacord" tabIndex="-1" aria-labelledby="label" aria-hidden="true" ref={modalRef}>
                {/* Modal selector de idiomas */}
                <div className="modal-dialog modal-dialog-centered">
                    <div className={`modal-content contenedor-modal-transferencias rounded-3 ${store.fondo} borde-brillante `}>
                        <div className="modal-header row border-0">
                            <h1 className="modal-title fs-3 text-center col-10" id="label">Tarjeta de coordenadas</h1>
                            <div className="hover fs-3 col-2 text-center" data-bs-dismiss="modal"><IoClose /></div>
                        </div>
                        <div className="modal-body">
                            {/* Selector de lenguaje */}
                            <div className="container mb-3">
                                <p className="text-center">
                                    Por favor, ingrese los dos valores de su tarjeta de coordenadas
                                    para completar la transacción de forma segura. Estos códigos son necesarios
                                    para verificar su identidad y garantizar la protección de su cuenta. Asegúrese de
                                    introducirlos correctamente antes de continuar.
                                </p>
                            </div>
                            <div className="row my-3">
                                <div className="col-3 mx-2 px-0 text-end"><p className="mt-2 fs-bold">{codigo1 == undefined ? "" : codigo1.posicion}</p></div>
                                <div className="col-8 mx-2 px-0"><input type="text" placeholder="* * * *" className="mx-3 text-center w-50 py-2 rounded-pill" maxLength="4" ref={codigo1Ref} /></div>
                            </div>
                            <div className="row my-3">
                                <div className="col-3 mx-2 px-0 text-end"><p className="mt-2 fs-bold">{codigo2 == undefined ? "" : codigo2.posicion}</p></div>
                                <div className="col-8 mx-2 px-0"><input type="text" placeholder="* * * *" className="mx-3 text-center w-50 py-2 rounded-pill" maxLength="4" ref={codigo2Ref} /></div>
                            </div>
                            <div className="row my-3">
                                <div className="col-12  text-center">
                                    <button className="btn btn-outline-success rounded-pill w-50" onClick={handleBuy}>
                                        Comprobar Codigos
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal fade" id="compra" tabIndex="-1" aria-labelledby="label" aria-hidden="true">
                {/* Modal selector de idiomas */}
                <div className="modal-dialog modal-dialog-centered">
                    <div className={`modal-content contenedor-modal-transferencias rounded-3 ${store.fondo} borde-brillante `}>
                        <div className="modal-header row border-0">
                            <h1 className="modal-title fs-3 text-center col-10" id="label">Confirmar Pedido</h1>
                            <div className="hover fs-3 col-2 text-center" data-bs-dismiss="modal"><IoClose /></div>
                        </div>
                        <div className="modal-body">
                            <p>
                                <strong>Saldo disponible:</strong>{" "}
                                {store && store.cuentas && store.cuentas.saldo
                                    ? store.cuentas.saldo
                                    : ""}
                            </p>
                            <p>
                                <strong>Domicilio:</strong>{" "}
                                {store && store.cliente && store.cliente.direccion
                                    ? store.cliente.direccion
                                    : "N/A"}
                            </p>
                            <p>
                                <strong>Total a pagar:</strong> {totalPrice.toFixed(2)} €
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setShowPurchaseModal(false)} data-bs-dismiss="modal">
                                Cancelar
                            </button>
                            <button type="button" className="btn btn-primary" onClick={() => {
                                if (modalRef.current) {
                                    const modal = new bootstrap.Modal(modalRef.current);
                                    modal.show();
                                }
                            }} data-bs-dismiss="modal">
                                Aceptar pedido
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className={`separacion-fondo container ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center"><h1 className="f-1 fw-bold">Carrito de compras</h1></div>
                    </div>
                </div>
                <div className="container contenedor-elementos">
                    {store.cart && store.cart.length > 0 ? (
                        store.cart.map((item) => (
                            <div className="row my-3 mx-3 bg-white text-dark animacion-compras" key={item.id}>
                                <div className="align-content-center contenedor-compras col-4">
                                    <img
                                        src={item.image_url}
                                        className="img-fluid h-50 rounded-start"
                                        alt={item.title}
                                    />
                                </div>
                                <div className="align-content-center contenedor-compras col-7">
                                    <div className="container">
                                        <h5 className="">{item.title}</h5>
                                        <p className="">{item.price}</p>
                                    </div>
                                </div>
                                <div className="align-content-center contenedor-compras col-1 px-0 mx-0">
                                    <button
                                        className="btn btn-outline-danger w-100 h-100"
                                        onClick={() => actions.removeFromCart(item.id)}
                                    >
                                        <FaRegTrashCan />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12">
                            <p>El carrito está vacío.</p>
                        </div>
                    )}
                </div>
                {/* Mostrar el precio total */}
                <div className="my-3 text-end">
                    <span className="fs-4 fw-bold">Total: {totalPrice.toFixed(2)} €</span>
                </div>
                {/* Botones para volver a la tienda y para comprar */}
                <div className="row">
                    <div className="row">
                        <div className="col-6 text-start">
                            <button
                                className="btn rounded-pill btn-outline-danger p-3 w-50"
                                onClick={() => navigate("/tienda")}
                            >
                                Volver a la tienda
                            </button>
                        </div>
                        <div className="col-6 text-end">
                            <button className="btn rounded-pill btn-outline-success p-3 w-75" data-bs-toggle="modal" data-bs-target="#compra" onClick={handleOpenModal}>
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default ContenedorCompras