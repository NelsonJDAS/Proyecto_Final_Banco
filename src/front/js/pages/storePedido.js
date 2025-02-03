import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import TituloStore from "../component/GeekStore/TituloStore.jsx";
import PurchaseModal from "../component/GeekStore/PurchaseModal.jsx";
import "../../styles/store.css";

export const StorePedido = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

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
      alert("No se encontró el usuario");
      return;
    }
    actions.fetchUserDetails(userId);
    setShowPurchaseModal(true);
  };

  // Función que se ejecuta al aceptar el pedido desde el modal
  const handleBuy = () => {
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
            alert("Error: " + data.error);
          } else {
            alert("Compra realizada con éxito. Nuevo saldo: " + data.saldo_actual);
            actions.clearCart();
            setShowPurchaseModal(false);
            navigate("/tienda");
          }
        })
        .catch((error) => {
          console.error("Error en la compra:", error);
          alert("Error al realizar la compra");
        });
    } else {
      alert("Saldo insuficiente para realizar la compra");
    }
  };

  return (
    <div className="container my-4">
      <TituloStore />
      <h2 className="my-3 text-center">Tu Carrito de Compras</h2>
      <div className="row text-dark">
        {store.cart && store.cart.length > 0 ? (
          store.cart.map((item) => (
            <div key={item.id} className="col-12 mb-3 d-flex justify-content-center">
              <div className="card w-75">
                <div className="row g-0">
                  {/* Columna para la imagen */}
                  <div className="col-md-4">
                    <img
                      src={item.image_url}
                      className="img-fluid rounded-start"
                      alt={item.title}
                      style={{ objectFit: "cover", height: "100%" }}
                    />
                  </div>
                  {/* Columna para el contenido (título, precio y botón para eliminar) */}
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.price}</p>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => actions.removeFromCart(item.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
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
        <span className="fs-4">Total: {totalPrice.toFixed(2)} €</span>
      </div>
      {/* Botones para volver a la tienda y para comprar */}
      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/tienda")}
        >
          Volver a la tienda
        </button>
        <button className="btn btn-primary" onClick={handleOpenModal}>
          Comprar
        </button>
      </div>
      {/* Renderizado condicional del modal de compra */}
      {showPurchaseModal && (
        <PurchaseModal
          show={showPurchaseModal}
          onClose={() => setShowPurchaseModal(false)}
          userDetails={store} // Se asume que store contiene los datos actualizados del usuario (cuentas, cliente, etc.)
          totalPrice={totalPrice}
          onAcceptOrder={handleBuy}
        />
      )}
    </div>
  );
};

export default StorePedido;
