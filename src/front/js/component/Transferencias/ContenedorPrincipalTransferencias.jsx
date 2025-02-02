import React, { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineEuroSymbol } from "react-icons/md";
import { Context } from "../../store/appContext";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Swal from 'sweetalert2';
import { IoClose } from "react-icons/io5";


const ContenedorPrincipalTransferencias = () => {
    const notyf = new Notyf();

    const { store, actions } = useContext(Context);
    const [userLoad, SetUserLoad] = useState(false);
    const [name, setName] = useState('');
    const [subname, setSubname] = useState('');
    const [cuentaDestino, setCuentaDestino] = useState('');
    const [estadoDestinatario, setEstadoDestinatario] = useState('');
    const [monto, setMonto] = useState('');
    const [concepto, setConcepto] = useState('');
    const [error, setError] = useState('');
    const [codigo1, setCodigo1] = useState()
    const [codigo2, setCodigo2] = useState()


    const codigo1Ref = useRef(null)
    const codigo2Ref = useRef(null)
    const modalRef = useRef(null)

    const [tarjeta, setTarjeta] = useState('');

    const generarCodigos = () => {
        codigo1Ref.current.value = ""
        codigo2Ref.current.value = ""
        setCodigo1(store.tarjetaCoord[Math.floor(Math.random() * 15) + 1]);
        setCodigo2(store.tarjetaCoord[Math.floor(Math.random() * 15) + 1]);
    }

    useEffect(() => {
        setTarjeta(store.tarjetaCoord);
    }, [store.tarjetaCoord])

    useEffect(() => {
        generarCodigos();
    }, [store.tarjetaCoord])


    useEffect(() => {
        const storedId = localStorage.getItem("userId")
        actions.fetchUserDetails(storedId)
        console.log("Tarjeta de coordenadas", store.tarjetaCoord)
        SetUserLoad(true);
        console.log(store.cliente)

    }, []);

    useEffect(() => {
        setName(store.cliente.nombre == "Introduzca apellido" || store.cliente.nombre == undefined ? "" : store.cliente.nombre);
        setSubname(store.cliente.apellidos == "Introduzca apellido" || store.cliente.apellidos == undefined ? "" : store.cliente.apellidos);
    }, [store.cliente])

    const handleCondiciones = () => {
        // Validar campos obligatorios
        if (!monto || !cuentaDestino || !estadoDestinatario) {
            notyf.error("Por favor complete todos los campos obligatorios")
            return;
        }

        // Validar que el monto sea un número positivo
        const montoNumerico = parseFloat(monto);
        if (isNaN(montoNumerico) || montoNumerico <= 0) {
            notyf.error("El monto debe ser un número positivo")
            return;
        }

        // Obtener ID de cuenta origen
        const cuentaOrigenId = store.cuentas?.id;
        if (!cuentaOrigenId) {
            notyf.error("Verifique la cuenta de origen")
        }

        // Obtener saldo de la cuenta origen
        const saldoCuentaOrigen = store.cuentas?.saldo || 0;

        // Validar si hay suficiente saldo para la transferencia
        if (saldoCuentaOrigen < montoNumerico) {
            notyf.error("Saldo insuficiente para realizar la transferencia")
            return;
        }

        if (modalRef.current) {
            const modal = new bootstrap.Modal(modalRef.current);
            modal.show();
        }

    }

    const handleTransferencia = async () => {
        console.log(tarjeta)
        // Dividir nombre completo en nombre y apellidos
        const [nombre, ...apellidos] = estadoDestinatario.split(' ');
        const cuentaOrigenId = store.cuentas?.id;
        const saldoCuentaOrigen = store.cuentas?.saldo || 0;
        const montoNumerico = parseFloat(monto);


        // Realizar la transferencia

        if (codigo1Ref.current.value == codigo1.valor && codigo2Ref.current.value == codigo2.valor) {
            try {
                const resultado = await actions.realizarTransferencia(
                    cuentaOrigenId,
                    cuentaDestino,
                    nombre,
                    apellidos.join(' '), // Unir los apellidos
                    montoNumerico,
                    concepto
                );
                console.log(resultado);

                // Limpiar formulario
                // setCuentaDestino('');
                // setEstadoDestinatario('');
                // setMonto('');
                // setConcepto('');
                Swal.fire({
                    title: '¡Transferencia Exitosa!',
                    text: `La transferencia destinada a la cuenta ${cuentaDestino} con monto de ${monto} €  se ha realizado correctamente.`,
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
                // generarCodigos();
            } catch (error) {
                Swal.fire({
                    title: '¡Error!',
                    text: 'Error al hacer la transferencia, Confirma los datos solicitados',
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
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
            }
        } else {
            notyf.error("Codigos erroneos")
        }


    };

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
                                    <button className="btn btn-outline-success rounded-pill w-50" onClick={handleTransferencia}>
                                        Comprobar Codigos
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <h1 className={`text-center titulo-transferencia ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>Transferencias</h1>
            <div className={`container w-90 contenedor-principal-transferencias ${userLoad ? "animacion-abajo visible" : "animacion-abajo"} ${store.fondo === "fondo-modo-claro" ? "bg-white" : "bg-dark text-white"}`}>

                <div className="row">
                    <div className={`my-2 col-lg-6 d-flex flex-column text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                        <label className="my-1 fw-bold fs-4 label-t">Cuenta Remitente</label>
                        <input
                            className={`mx-md-3 text-center py-1 rounded-3 border fs-4 fw-bold input-transferencias ${store.fondo === "fondo-modo-claro" ? "bg-secondary border-black  bg-opacity-25 text-dark" : "bg-white text-dark border-white"}`}
                            value={`${name} ${subname}`}
                            disabled
                            type="text"
                        />
                        <label className="my-1 fw-bold text-end label-t mx-3">
                            Saldo: {store.cuentas?.saldo?.toFixed(2) || '0.00'} €
                        </label>
                    </div>

                    <div className={`my-md-2 col-lg-6 d-flex flex-column text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                        <label className="fw-bold fs-3 label-t">Monto</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text py-2"><MdOutlineEuroSymbol /></span>
                            <input
                                type="number"
                                className={`form-control text-center fs-4 fw-bold input-transferencias contorno-input ${store.fondo === "fondo-modo-claro" ? "bg-secondary border-black  bg-opacity-25 text-dark" : "bg-white text-dark border-white"}`}
                                aria-label="Amount"
                                value={monto}
                                onChange={(e) => setMonto(e.target.value)}
                                step="0.01"
                            />
                            <span className="input-group-text py-2">.00</span>
                        </div>
                    </div>

                    <div className={`my-2 col-lg-6 d-flex flex-column text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                        <label className="fw-bold fs-3 label-t">Nombre Completo Destinatario</label>
                        <input
                            className={`mx-md-3 text-center py-1 rounded-3 border fs-4 fw-bold input-transferencias  ${store.fondo === "fondo-modo-claro" ? "bg-secondary border-black  bg-opacity-25 text-dark" : "bg-white text-dark border-white"}`}
                            type="text"
                            value={estadoDestinatario}
                            onChange={(e) => setEstadoDestinatario(e.target.value)}
                            placeholder="Ej: Juan Pérez García"
                        />
                    </div>

                    <div className={`my-2 col-lg-6 d-flex flex-column text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                        <label className="my-1 fw-bold fs-4 label-t">Cuenta Destinatario</label>
                        <input
                            className={`mx-md-3 text-center py-1 rounded-3 border fs-4 fw-bold input-transferencias ${store.fondo === "fondo-modo-claro" ? "bg-secondary border-black  bg-opacity-25 text-dark" : "bg-white text-dark border-white"}`}
                            type="text"
                            value={cuentaDestino}
                            onChange={(e) => setCuentaDestino(e.target.value)}
                            placeholder="Ej: GEEK-ES24********"
                        />
                    </div>

                    <div className={`my-1 col-12 d-flex flex-column text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                        <label className="my-1 fw-bold fs-4 label-t">Concepto (opcional)</label>
                        <textarea
                            className={`mx-md-3 concepto-transferencias rounded-1 border  fs-4 fw-bold input-transferencias ${store.fondo === "fondo-modo-claro" ? "bg-secondary border-black  bg-opacity-25 text-dark" : "bg-white text-dark border-white"}`}
                            type="text"
                            value={concepto}
                            onChange={(e) => setConcepto(e.target.value)}
                        />
                    </div>

                    <div className={`col-12 mt-3 d-flex flex-column text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"} `}>
                        <div className="container">
                            <button
                                className={`btn btn-transferencias w-25 ${store.fondo === "fondo-modo-claro" ? "text-dark" : "text-white"}`}
                                onClick={handleCondiciones}
                            >
                                Enviar Transferencia
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContenedorPrincipalTransferencias;