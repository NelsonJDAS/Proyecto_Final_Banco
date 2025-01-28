import React from "react";
import ColTitulo from "../ColTitulo.jsx";

const ContenedorPrincipalCertificaciones = () => {
    return (
        <>
            <div className="container">
                <h1 className="titulo-principal-politica text-center"> Certificaciones GeekBank </h1>
                <p className="fs-2 text-center">
                    A continuación podras ver diversos títulos de certificados,
                    los cuales están diseñados para reconocer y validar el cumplimiento
                    de objetivos y logros en áreas específicas. Estos certificados son un
                    reflejo de la formación, el rendimiento y el compromiso demostrado en los respectivos programas
                </p>
            </div>
            <div className="row">
                <ColTitulo title="Certificado de Reconocimiento" position="left" />
                <ColTitulo title="Certificado de Participación" position="" />
                <ColTitulo title="Certificado de Logro Académico" position="left" />
                <ColTitulo title="Diploma de Finalización de Curso" position="" />
                <ColTitulo title="Certificado de Apreciación" position="left" />
                <ColTitulo title="Certificado de Cumplimiento" position="" />
                <ColTitulo title="Certificado de Formación Profesional" position="left" />
                <ColTitulo title="Diploma de Excelencia" position="" />
                <ColTitulo title="Certificado de Capacitación" position="left" />
                <ColTitulo title="Certificado de Reconocimiento" position="" />
                <ColTitulo title="Certificado de Participación" position="left" />
                <ColTitulo title="Certificado de Logro Académico" position="" />
                <ColTitulo title="Diploma de Finalización de Curso" position="left" />
            </div>
        </>
    )
}

export default ContenedorPrincipalCertificaciones



