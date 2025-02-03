import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const PurchaseModal = ({ show, onClose, userDetails, totalPrice, onAcceptOrder }) => {
  if (!show) return null;

  useEffect(() => {
  }, [userDetails]);

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered text-dark">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirmar Pedido</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>
              <strong>Saldo disponible:</strong>{" "}
              {userDetails && userDetails.cuentas && userDetails.cuentas.saldo
                ? userDetails.cuentas.saldo
                : ""}
            </p>
            <p>
              <strong>Domicilio:</strong>{" "}
              {userDetails && userDetails.cliente && userDetails.cliente.direccion
                ? userDetails.cliente.direccion
                : "N/A"}
            </p>
            <p>
              <strong>Total a pagar:</strong> {totalPrice.toFixed(2)} €
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="button" className="btn btn-primary" onClick={onAcceptOrder}>
              Aceptar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
