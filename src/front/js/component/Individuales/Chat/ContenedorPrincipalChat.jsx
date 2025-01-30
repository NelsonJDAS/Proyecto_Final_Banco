import React, { useContext, useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Mensaje from "./Mensaje.jsx";
import { Context } from "../../../store/appContext.js";

const ContenedorPrincipalChat = () => {
    const [userLoad, SetUserLoad] = useState(false)
    const navigate = useNavigate("")
    const [pregunta, SetPregunta] = useState([]);
    const scrollref = useRef();

    const { store, actions } = useContext(Context);

    const Scroll = () => {
        scrollref.current.scrollTo({
            top: scrollref.current.scrollHeight,
            behavior: "smooth", // Esto hace que el desplazamiento sea suave
        });

    };

    const ElegirRespusta = (value) => {
        if (value == 1) {
            return (
                <Mensaje
                    textoBot="En Geek Bank, nuestras tarifas y comisiones varían según el tipo de cuenta. Puedes consultarlas en detalle a través de nuestra página web , o bien contactando a nuestro servicio al cliente."
                    textoUser="¿Cuáles son las tarifas y comisiones asociadas a mis cuentas?"
                />
            );
        } else if (value == 2) {
            return (
                <Mensaje
                    textoBot="Puedes cambiar tu PIN o contraseña ingresando al enlace de cambiar contraseña en la seccion inciciar sesion en banca en línea. También puedes solicitar asistencia llamando a nuestro servicio al cliente."
                    textoUser="¿Cómo puedo cambiar mi PIN o contraseña de acceso?"
                />
            );
        } else if (value == 3) {
            return (
                <Mensaje
                    textoBot="En Geek Bank, contamos con una amplia red de sucursales y cajeros. Puedes usar nuestro localizador del sitio web para encontrar el más cercano."
                    textoUser="¿Dónde están ubicadas las sucursales y cajeros automáticos del banco?"
                />
            );
        } else if (value == 4) {
            return (
                <Mensaje
                    textoBot="Nuestros horarios de atención están disponibles en nuestra página web . Además, algunas de nuestras sucursales ofrecen horarios extendidos."
                    textoUser="¿Cuáles son los horarios de atención del banco?"
                />
            );
        } else if (value == 5) {
            return (
                <Mensaje
                    textoBot="Para abrir una cuenta en Geek Bank, necesitarás tu identificación oficial y, en algunos casos, un comprobante de ingresos."
                    textoUser="¿Qué documentos necesito para abrir una cuenta?"
                />
            );
        } else if (value == 6) {
            return (
                <Mensaje
                    textoBot="Actualmente no contamos con una aplicación móvil disponible, pero nos encontramos trabajando en su desarrollo. Pronto podrás disfrutar de una herramienta innovadora para gestionar todas tus operaciones bancarias de manera fácil y segura. ¡Mantente atento a las novedades!"
                    textoUser="¿El banco tiene aplicación móvil? ¿Cómo la descargo?"
                />
            );
        } else if (value == 7) {
            return (
                <Mensaje
                    textoBot="Si detectas un cargo no reconocido en tu cuenta, por favor notifícalo de inmediato a través de servicio al cliente. Nuestro equipo investigará el caso."
                    textoUser="¿Qué debo hacer si detecto un cargo no reconocido en mi cuenta?"
                />
            );
        } else if (value == 8) {
            return (
                <Mensaje
                    textoBot="Puedes actualizar tus datos personales, como dirección, correo o teléfono, directamente desde nuestra web o visitando una sucursal con tu identificación oficial."
                    textoUser="¿Cómo puedo actualizar mis datos personales (como dirección, correo o teléfono)?"
                />
            );
        } else if (value == 9) {
            return (
                <Mensaje
                    textoBot="Las transferencias bancarias nacionales suelen procesarse en cuestión de minutos, pero pueden tardar hasta 24 horas dependiendo del tipo de transferencia y horario."
                    textoUser="¿Cuánto tiempo tarda en procesarse una transferencia bancaria?"
                />
            );
        } else if (value == 10) {
            return (
                <Mensaje
                    textoBot="Sí, puedes usar tu tarjeta en el extranjero. Asegúrate de activarla para uso internacional desde nuestra pagina web antes de viajar."
                    textoUser="¿Puedo usar mi tarjeta en el extranjero?"
                />
            );
        } else {
            return null;
        }
    }


    useEffect(() => {
        SetUserLoad(true)
    }, [])

    useEffect(() => {
        Scroll();
    }, [pregunta])


    return (
        <div className={`container w-50 espaciado-chat ${store.fondo === "fondo-modo-claro" ? "text-info" : "text-dark "} ${userLoad ? "animacion-abajo visible" : "animacion-abajo"}`}>
            <div className="row bg-secondary cabecera-chat">
                <div className="col-6 align-content-center text-center">
                    <span className="nombre-chat">Chat Virtual</span>
                </div>
                <div className="col-6 align-content-center text-end">
                    <i className="fs-2 mx-2"><FaUserCircle /></i>
                </div>
            </div>
            <div className="row bg-secondary  contenedor-chat p-2">
                <div className="container bg-white rounded-3 contenedor-mensajes" ref={scrollref}>
                    {
                        Object.entries(pregunta).map((index, elem) => {
                            return ElegirRespusta(index[1])
                        })
                    }
                </div>
            </div>
            <div className="row bg-secondary  footer-chat">
                <div className="col-12 px-0">
                    <select class={`form-select text-center fw-bold footer-chat ${store.fondo === "fondo-modo-claro" ? "bg-secondary text-info" : "text-dark "}`} aria-label="Default select example" onChange={(e) => {
                        const dato = e.target.value
                        SetPregunta((prevArray) => [...prevArray, dato]);
                    }}>
                        <option className={`fw-bold ${store.fondo === "fondo-modo-claro" ? "text-info" : "text-dark"}`} value="hola" selected disabled>Pregunta aqui!</option>
                        <option className={`fw-bold ${store.fondo === "fondo-modo-claro" ? "text-info" : "text-dark"}`} value="1">¿Cuáles son las tarifas y comisiones asociadas a mis cuentas?</option>
                        <option className={`fw-bold ${store.fondo === "fondo-modo-claro" ? "text-info" : "text-dark"}`} value="2">¿Cómo puedo cambiar mi PIN o contraseña de acceso?</option>
                        <option className={`fw-bold ${store.fondo === "fondo-modo-claro" ? "text-info" : "text-dark"}`} value="3"> ¿Dónde están ubicadas las sucursales y cajeros automáticos del banco?</option>
                        <option className={`fw-bold ${store.fondo === "fondo-modo-claro" ? "text-info" : "text-dark"}`} value="4"> ¿Cuáles son los horarios de atención del banco?</option>
                        <option className={`fw-bold ${store.fondo === "fondo-modo-claro" ? "text-info" : "text-dark"}`} value="5">¿Qué documentos necesito para abrir una cuenta?</option>
                        <option className={`fw-bold ${store.fondo === "fondo-modo-claro" ? "text-info" : "text-dark"}`} value="6"> ¿El banco tiene aplicación móvil? ¿Cómo la descargo?</option>
                        <option className={`fw-bold ${store.fondo === "fondo-modo-claro" ? "text-info" : "text-dark"}`} value="7"> ¿Qué debo hacer si detecto un cargo no reconocido en mi cuenta?</option>
                        <option className={`fw-bold ${store.fondo === "fondo-modo-claro" ? "text-info" : "text-dark"}`} value="8">  ¿Cómo puedo actualizar mis datos personales (como dirección, correo o teléfono)?</option>
                        <option className={`fw-bold ${store.fondo === "fondo-modo-claro" ? "text-info" : "text-dark"}`} value="9">  ¿Cuánto tiempo tarda en procesarse una transferencia bancaria?</option>
                        <option className={`fw-bold ${store.fondo === "fondo-modo-claro" ? "text-info" : "text-dark"}`} value="10">  ¿Puedo usar mi tarjeta en el extranjero?</option>
                    </select>
                </div>
            </div>
        </div >
    )
}

export default ContenedorPrincipalChat