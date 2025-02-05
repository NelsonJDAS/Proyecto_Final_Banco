import React, { useContext, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Context } from "../../store/appContext";
import { IoClose } from "react-icons/io5";

const PurchaseModal = ({ show, onClose, userDetails, totalPrice, onAcceptOrder }) => {
  if (!show) return null;

  const { store, actions } = useContext(Context);

  useEffect(() => {
  }, [userDetails]);

  return (
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
