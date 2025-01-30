import React, { useEffect, useState } from "react";
import ColTitulo from "../ColTitulo.jsx";
import { TbCertificate } from "react-icons/tb";

const ContenedorPrincipalCertificaciones = () => {
    const [userLoad, SetUserLoad] = useState(false);

    useEffect(() => {
        SetUserLoad(true)
    }, [])

    return (
        <>
            <div className={`container ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>
                <h1 className="titulo-principal-politica text-center"> Certificaciones GeekBank </h1>
                <p className="fs-2 text-center">
                    A continuación podras ver diversos títulos de certificados,
                    los cuales están diseñados para reconocer y validar el cumplimiento
                    de objetivos y logros en áreas específicas. Estos certificados son un
                    reflejo de la formación, el rendimiento y el compromiso demostrado en los respectivos programas
                </p>
            </div>
            <div className="container espaciado-fondo-titulos">
                <div className="row">
                    <ColTitulo
                        logo={<TbCertificate />}
                        title="Certificado de Reconocimiento Bancario"
                        position="left"
                        descripcion="Este certificado reconoce el uso responsable y exitoso de los productos financieros ofrecidos por el banco, demostrando una buena gestión de cuentas y pagos."
                    />

                    <ColTitulo
                        logo={<TbCertificate />}
                        title="Certificado de Participación en Programas Financieros"
                        position=""
                        descripcion="Otorgado a los clientes que han participado activamente en programas de educación financiera, seminarios y talleres organizados por la entidad bancaria."
                    />

                    <ColTitulo
                        logo={<TbCertificate />}
                        title="Certificado de Logro en Asesoría Financiera"
                        position="left"
                        descripcion="Este certificado se concede a aquellos clientes que han completado con éxito un programa de asesoría financiera personalizada con el banco."
                    />

                    <ColTitulo
                        logo={<TbCertificate />}
                        title="Certificado de Finalización de Curso en Finanzas Personales"
                        position=""
                        descripcion="Este diploma se otorga a los clientes que completaron un curso de formación en finanzas personales, gestionado por el banco, para mejorar su capacidad de manejar sus recursos financieros."
                    />

                    <ColTitulo
                        logo={<TbCertificate />}
                        title="Certificado de Apreciación por Lealtad Bancaria"
                        position="left"
                        descripcion="Este certificado expresa nuestro agradecimiento a los clientes por su lealtad y relaciones duraderas con el banco, demostrando un compromiso constante."
                    />

                    <ColTitulo
                        logo={<TbCertificate />}
                        title="Certificado de Cumplimiento de Normativas Bancarias"
                        position=""
                        descripcion="Certifica que el cliente ha cumplido con todas las normativas y políticas del banco, manteniendo un historial financiero limpio y confiable."
                    />

                    <ColTitulo
                        logo={<TbCertificate />}
                        title="Certificado de Crédito Aprobado"
                        position="left"
                        descripcion="Este certificado se otorga a clientes que han sido aprobados para un crédito, tras demostrar un buen historial financiero y capacidad de pago."
                    />

                    <ColTitulo
                        logo={<TbCertificate />}
                        title="Diploma de Excelencia en Gestión Financiera"
                        position=""
                        descripcion="Reconoce a los clientes que han demostrado un desempeño excepcional en la gestión de sus productos bancarios, como cuentas de ahorro, tarjetas de crédito, o inversiones."
                    />

                    <ColTitulo
                        logo={<TbCertificate />}
                        title="Certificado de Capacitación en Inversiones"
                        position="left"
                        descripcion="Este certificado acredita que el cliente ha completado con éxito un curso sobre estrategias de inversión y productos de inversión disponibles en el banco."
                    />

                    <ColTitulo
                        logo={<TbCertificate />}
                        title="Certificado de Actualización de Producto Bancario"
                        position=""
                        descripcion="Este certificado se emite a los clientes que han actualizado su información o sus productos financieros, como cuentas, tarjetas o préstamos, en el banco."
                    />
                </div>
            </div>
        </>
    )
}

export default ContenedorPrincipalCertificaciones



