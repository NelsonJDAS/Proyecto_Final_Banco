import React, { useContext, useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Mensaje from "./Mensaje.jsx";

const ContenedorPrincipalChat = () => {
    const [userLoad, SetUserLoad] = useState(false)
    const navigate = useNavigate("")
    const [pregunta, SetPregunta] = useState([]);

    const ElegirRespusta = (value) => {
        switch (value) {
            case 1:
                return (
                    <Mensaje
                        textoBot="En Geek Bank, nuestras tarifas y comisiones varían según el tipo de cuenta. Puedes consultarlas en detalle a través de nuestra página web o aplicación móvil, o bien contactando a nuestro servicio al cliente."
                        textoUser="¿Cuáles son las tarifas y comisiones asociadas a mis cuentas?"
                    />
                );

            case 2:
                return (
                    <Mensaje
                        textoBot="Puedes cambiar tu PIN o contraseña ingresando a la configuración de seguridad en nuestra aplicación móvil o banca en línea. También puedes solicitar asistencia llamando a nuestro servicio al cliente."
                        textoUser="¿Cómo puedo cambiar mi PIN o contraseña de acceso?"
                    />
                );

            case 3:
                return (
                    <Mensaje
                        textoBot="En Geek Bank, contamos con una amplia red de sucursales y cajeros. Puedes usar nuestro localizador en la aplicación o el sitio web para encontrar el más cercano."
                        textoUser="¿Dónde están ubicadas las sucursales y cajeros automáticos del banco?"
                    />
                );

            case 4:
                return (
                    <Mensaje
                        textoBot="Nuestros horarios de atención están disponibles en nuestra página web o aplicación móvil. Además, algunas de nuestras sucursales ofrecen horarios extendidos."
                        textoUser="¿Cuáles son los horarios de atención del banco?"
                    />
                );

            case 5:
                return (
                    <Mensaje
                        textoBot="Para abrir una cuenta en Geek Bank, necesitarás tu identificación oficial, comprobante de domicilio reciente y, en algunos casos, un comprobante de ingresos."
                        textoUser="¿Qué documentos necesito para abrir una cuenta?"
                    />
                );

            case 6:
                return (
                    <Mensaje
                        textoBot="Sí, tenemos una aplicación móvil que puedes descargar desde Google Play o App Store. Desde ahí podrás realizar todas tus operaciones bancarias fácilmente."
                        textoUser="¿El banco tiene aplicación móvil? ¿Cómo la descargo?"
                    />
                );

            case 7:
                return (
                    <Mensaje
                        textoBot="Si detectas un cargo no reconocido en tu cuenta, por favor notifícalo de inmediato a través de nuestra aplicación móvil, sitio web o servicio al cliente. Nuestro equipo investigará el caso."
                        textoUser="¿Qué debo hacer si detecto un cargo no reconocido en mi cuenta?"
                    />
                );

            case 8:
                return (
                    <Mensaje
                        textoBot="Puedes actualizar tus datos personales, como dirección, correo o teléfono, directamente desde nuestra aplicación móvil o visitando una sucursal con tu identificación oficial."
                        textoUser="¿Cómo puedo actualizar mis datos personales (como dirección, correo o teléfono)?"
                    />
                );

            case 9:
                return (
                    <Mensaje
                        textoBot="Las transferencias bancarias nacionales suelen procesarse en cuestión de minutos, pero pueden tardar hasta 24 horas dependiendo del tipo de transferencia y horario."
                        textoUser="¿Cuánto tiempo tarda en procesarse una transferencia bancaria?"
                    />
                );

            case 10:
                return (
                    <Mensaje
                        textoBot="Sí, puedes usar tu tarjeta en el extranjero. Asegúrate de activarla para uso internacional desde nuestra aplicación móvil antes de viajar."
                        textoUser="¿Puedo usar mi tarjeta en el extranjero?"
                    />
                );

            default:
                break;

        }
    }


    useEffect(() => {
        SetUserLoad(true)
    }, [])


    return (
        <div className="container w-50 espaciado-chat">
            <div className="row bg-secondary cabecera-chat">
                <div className="col-6 align-content-center text-center">
                    <span className="nombre-chat">Chat Virtual</span>
                </div>
                <div className="col-6 align-content-center text-end">
                    <i className="fs-2 mx-2"><FaUserCircle /></i>
                </div>
            </div>
            <div className="row bg-secondary  contenedor-chat p-2">
                <div className="container bg-white rounded-3 contenedor-mensajes">
                    {
                        Object.entries(pregunta).map((index, elem) => {
                            return ElegirRespusta(index[1])
                        })
                    }
                </div>
            </div>
            <div className="row bg-secondary  footer-chat">
                <div className="col-12 px-0">
                    <select class="form-select text-dark text-center fw-bold footer-chat" aria-label="Default select example" onChange={(e) => {
                        const dato = e.target.value
                        SetPregunta((prevArray) => [...prevArray, dato]);
                    }}>
                        <option className="fw-bold text-dark" value="hola" selected disabled>Pregunta aqui!</option>
                        <option className="fw-bold text-dark" value="1">¿Cuáles son las tarifas y comisiones asociadas a mis cuentas?</option>
                        <option className="fw-bold text-dark" value="2">¿Cómo puedo cambiar mi PIN o contraseña de acceso?</option>
                        <option className="fw-bold text-dark" value="3"> ¿Dónde están ubicadas las sucursales y cajeros automáticos del banco?</option>
                        <option className="fw-bold text-dark" value="4"> ¿Cuáles son los horarios de atención del banco?</option>
                        <option className="fw-bold text-dark" value="5">¿Qué documentos necesito para abrir una cuenta?</option>
                        <option className="fw-bold text-dark" value="6"> ¿El banco tiene aplicación móvil? ¿Cómo la descargo?</option>
                        <option className="fw-bold text-dark" value="7"> ¿Qué debo hacer si detecto un cargo no reconocido en mi cuenta?</option>
                        <option className="fw-bold text-dark" value="8">  ¿Cómo puedo actualizar mis datos personales (como dirección, correo o teléfono)?</option>
                        <option className="fw-bold text-dark" value="9">  ¿Cuánto tiempo tarda en procesarse una transferencia bancaria?</option>
                        <option className="fw-bold text-dark" value="10">  ¿Puedo usar mi tarjeta en el extranjero?</option>
                    </select>
                </div>
            </div>
        </div >
    )
}

export default ContenedorPrincipalChat