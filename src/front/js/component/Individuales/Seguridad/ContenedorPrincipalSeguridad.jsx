import React, { useEffect, useState } from "react";
import ColTitulo from "../ColTitulo.jsx";
import { MdOutlineSecurity } from "react-icons/md";

const ContenedorPrincipalSeguridad = () => {
    const [userLoad, SetUserLoad] = useState(false);

    useEffect(() => {
        SetUserLoad(true)
    }, [])

    return (
        <>
            <div className={`container ${userLoad ? "animacion-arriba visible" : "animacion-arriba"}`}>
                <h1 className="titulo-principal-politica text-center"> Titulos Seguridad GeekBank </h1>
                <p className="fs-2 text-center">
                    A continuación, podrás ver diversos títulos relacionados con la seguridad, diseñados para reconocer
                    y validar el cumplimiento de estándares y mejores prácticas en áreas críticas. Estos certificados son un
                    reflejo del compromiso, la formación y las habilidades adquiridas en programas enfocados en la protección de sistemas,
                    datos y entornos laborales, garantizando la seguridad tanto de las personas como de la información.
                </p>
            </div>
            <div className="container">
                <div className="row">
                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title="Certificado de Reconocimiento en Seguridad Cibernética"
                        position="left"
                        descripcion="Este certificado reconoce el cumplimiento de prácticas de seguridad cibernética, demostrando una adecuada protección de datos e infraestructura frente a amenazas digitales."
                    />

                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title="Certificado de Participación en Programas de Seguridad"
                        position=""
                        descripcion="Otorgado a los profesionales que han participado activamente en programas de formación y capacitación sobre seguridad, seminarios y talleres relacionados con la protección de sistemas."
                    />

                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title="Certificado de Logro en Gestión de Riesgos"
                        position="left"
                        descripcion="Este certificado se concede a aquellos individuos que han completado con éxito un programa de gestión de riesgos y análisis de vulnerabilidades en entornos tecnológicos."
                    />

                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title="Certificado de Finalización de Curso en Seguridad de la Información"
                        position=""
                        descripcion="Este diploma se otorga a quienes han completado un curso de formación en seguridad de la información, gestionado por expertos en protección de datos y normativas de privacidad."
                    />

                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title="Certificado de Apreciación por Cumplimiento en Seguridad"
                        position="left"
                        descripcion="Este certificado expresa nuestro agradecimiento a los profesionales que han demostrado un compromiso ejemplar con las políticas de seguridad, manteniendo entornos laborales seguros y conformes a las normativas."
                    />

                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title="Certificado de Cumplimiento de Normativas de Seguridad"
                        position=""
                        descripcion="Certifica que el individuo ha cumplido con todas las normativas y políticas de seguridad establecidas, asegurando un entorno protegido y conforme a las leyes de seguridad y privacidad."
                    />

                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title="Certificado de Auditoría de Seguridad Aprobada"
                        position="left"
                        descripcion="Este certificado se otorga a aquellos que han aprobado una auditoría de seguridad, garantizando la revisión exitosa de sistemas y procesos relacionados con la protección de datos y recursos."
                    />

                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title="Diploma de Excelencia en Gestión de Seguridad"
                        position=""
                        descripcion="Reconoce a los profesionales que han demostrado un desempeño sobresaliente en la implementación y gestión de políticas de seguridad en su organización o empresa."
                    />

                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title="Certificado de Capacitación en Protección de Datos"
                        position="left"
                        descripcion="Este certificado acredita que el titular ha completado un curso sobre la protección de datos personales, cumpliendo con las leyes y regulaciones de privacidad establecidas."
                    />

                    <ColTitulo
                        logo={<MdOutlineSecurity />}
                        title="Certificado de Actualización en Protocolos de Seguridad"
                        position=""
                        descripcion="Este certificado se emite a los profesionales que han actualizado su conocimiento y habilidades en relación con los nuevos protocolos de seguridad implementados por la organización o industria."
                    />
                </div>
            </div>
        </>
    )
}

export default ContenedorPrincipalSeguridad
