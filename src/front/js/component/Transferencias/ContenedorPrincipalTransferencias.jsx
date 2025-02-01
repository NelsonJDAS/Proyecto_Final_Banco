import React, { useContext, useEffect, useState } from "react";
import { MdOutlineEuroSymbol } from "react-icons/md";
import { Context } from "../../store/appContext";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Swal from 'sweetalert2';

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
    const [codigo1, setCodigo1] = useState("")
    const [codigo2, setCodigo2] = useState("")

    const [tarjeta, setTarjeta] = useState('');

    useEffect(() => {
        setCodigo1(Math.floor(Math.random() * 16) + 1)
        setCodigo2(Math.floor(Math.random() * 16) + 1)
        console.log(store.tarjetaCoord)
        setTarjeta(store.tarjetaCoord);
    }, [store.tarjetaCoord])

    useEffect(() => {
        SetUserLoad(true);
        if (store.cliente) {
            setName(store.cliente.nombre || '');
            setSubname(store.cliente.apellidos || '');
        }
    }, []);

    const handleTransferencia = async () => {
        // Dividir nombre completo en nombre y apellidos
        const [nombre, ...apellidos] = estadoDestinatario.split(' ');

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

        // Realizar la transferencia
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
            // setError('');
            // Swal.fire({
            //     title: '¡Éxito!',
            //     text: 'La operación fue exitosa.',
            //     icon: 'success',
            //     confirmButtonText: 'Aceptar'
            // });
            Swal.fire({
                title: 'Confima Las Coordenadas',
                html: `
                  <div>
                    <p>Este es un ejemplo de alerta personalizada con <b>HTML</b>.</p>
                    <p><i class="fas fa-check-circle"></i> ¡Todo está listo!</p>
                    <img src="https://example.com/imagen.jpg" alt="Imagen personalizada" width="100" />
                  </div>
                `,
                icon: 'warning',
                showConfirmButton: true,
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#3085d6',
            });
        } catch (error) {
            Swal.fire({
                title: '¡Error!',
                text: 'Algo salió mal, intenta nuevamente.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    return (
        <>
            <button onClick={() => {
                console.log(tarjeta)
                Swal.fire({
                    title: 'Confima Las Coordenadas',
                    html: `
                      <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex">${codigo1}   <input type="text" placeholder="Coordenada 1" className="input-coordenadas" /></div>
                            <div className="col-12 d-flex">${codigo2}   <input type="text" placeholder="Coordenada 2" className="input-coordenadas" /></div>
                        </div>
                    </div>
                    `,
                    icon: 'warning',
                    showConfirmButton: true,
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#3085d6',
                });
            }}>ad,koasdk</button>
            <h1 className={`text-center titulo-transferencia ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>Transferencias</h1>
            <div className={`container contenedor-principal-transferencias text-dark ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                {error && <div className="alert alert-danger text-center">{error}</div>}

                <div className="row">
                    <div className={`my-2 col-lg-6 d-flex flex-column text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                        <label className="my-1 fw-bold fs-4 label-t">Cuenta Remitente</label>
                        <input
                            className="mx-md-3 text-center py-1 rounded-3 bg-white border-1 border-white text-dark bg-opacity-50 fs-4 fw-bold input-transferencias"
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
                                className="form-control text-center bg-white text-dark bg-opacity-50 fs-4 fw-bold input-transferencias"
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
                            className="mx-md-3 text-center py-1 rounded-1 bg-white border-1 border-white text-dark bg-opacity-50 fs-4 fw-bold input-transferencias"
                            type="text"
                            value={estadoDestinatario}
                            onChange={(e) => setEstadoDestinatario(e.target.value)}
                            placeholder="Ej: Juan Pérez García"
                        />
                    </div>

                    <div className={`my-2 col-lg-6 d-flex flex-column text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                        <label className="my-1 fw-bold fs-4 label-t">Cuenta Destinatario</label>
                        <input
                            className="mx-md-3 text-center py-1 rounded-3 bg-white border-1 border-white text-dark bg-opacity-50 fs-4 fw-bold input-transferencias"
                            type="text"
                            value={cuentaDestino}
                            onChange={(e) => setCuentaDestino(e.target.value)}
                            placeholder="Ej: GEEK-ES24********"
                        />
                    </div>

                    <div className={`my-1 col-12 d-flex flex-column text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                        <label className="my-1 fw-bold fs-4 label-t">Concepto (opcional)</label>
                        <textarea
                            className="mx-md-3 concepto-transferencias rounded-1 bg-white border-1 border-white text-dark bg-opacity-50 fs-4 fw-bold input-transferencias"
                            type="text"
                            value={concepto}
                            onChange={(e) => setConcepto(e.target.value)}
                        />
                    </div>

                    <div className={`col-12 mt-3 d-flex flex-column text-center ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
                        <button
                            className="btn btn-transferencias"
                            onClick={handleTransferencia}
                        >
                            Enviar Transferencia
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContenedorPrincipalTransferencias;