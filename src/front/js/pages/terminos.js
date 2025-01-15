import React from "react";

export const Terminos = () => {
  return (
    <div
      style={{
        padding: "20px",
        "font-Family": "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      <h1 className="text-success text-center">
        Términos y Condiciones - GeekBank
      </h1>
      <p>
        Bienvenido a GeekBank. Al utilizar nuestros servicios, usted acepta los
        siguientes términos y condiciones. Por favor, lea detenidamente esta
        información.
      </p>

      <h2 style={{ color: "limegreen" }}>1. Uso de Nuestros Servicios</h2>
      <p>
        Nuestros servicios están diseñados para brindarle soluciones bancarias
        seguras y eficientes. Usted se compromete a utilizar nuestros servicios
        de manera responsable y conforme a las leyes aplicables.
      </p>

      <h2 style={{ color: "limegreen" }}>2. Responsabilidades del Cliente</h2>
      <p>
        Usted es responsable de:
        <ul>
          <li>Proveer información veraz y actualizada.</li>
          <li>Proteger la confidencialidad de sus credenciales de acceso.</li>
          <li>
            Notificar inmediatamente cualquier uso no autorizado de su cuenta.
          </li>
        </ul>
      </p>

      <h2 style={{ color: "limegreen" }}>3. Tarifas y Cargos</h2>
      <p>
        GeekBank puede aplicar tarifas por ciertos servicios. Estas tarifas
        serán comunicadas de manera transparente y están sujetas a cambios con
        previo aviso.
      </p>

      <h2 style={{ color: "limegreen" }}>4. Limitaciones de Responsabilidad</h2>
      <p>
        GeekBank no será responsable por pérdidas o daños derivados de:
        <ul>
          <li>El uso indebido de los servicios por parte del cliente.</li>
          <li>
            Interrupciones en el servicio por causas fuera de nuestro control.
          </li>
          <li>Errores en la información proporcionada por el cliente.</li>
        </ul>
      </p>

      <h2 style={{ color: "limegreen" }}>5. Modificaciones a los Términos</h2>
      <p>
        Nos reservamos el derecho de modificar estos términos y condiciones en
        cualquier momento. Cualquier cambio será notificado a través de nuestros
        canales oficiales.
      </p>

      <h2 style={{ color: "limegreen" }}>6. Contacto</h2>
      <p>
        Si tiene preguntas o inquietudes sobre estos términos y condiciones,
        puede comunicarse con nosotros a través del correo electrónico{" "}
        <a href="mailto:soporte@geekbank.com">soporte@geekbank.com</a>.
      </p>
    </div>
  );
};
