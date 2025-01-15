import React from "react";

export const Aviso = () => {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      <h1 style={{ color: "limegreen" }}>Aviso Legal - GeekBank</h1>
      <p>
        Este aviso legal regula el acceso, uso y navegación en el sitio web y
        servicios proporcionados por GeekBank. Al utilizar este sitio web, usted
        acepta las condiciones establecidas en este aviso.
      </p>

      <h2 style={{ color: "limegreen" }}>1. Información General</h2>
      <p>
        GeekBank es una entidad financiera debidamente registrada y regulada por
        las autoridades competentes. Para más información, puede contactarnos
        en:
        <ul>
          <li>
            <strong>Dirección:</strong> Calle Ficticia 123, Ciudad Geek.
          </li>
          <li>
            <strong>Correo electrónico:</strong>{" "}
            <a href="mailto:legal@geekbank.com">legal@geekbank.com</a>
          </li>
          <li>
            <strong>Teléfono:</strong> +1 (800) 123-4567
          </li>
        </ul>
      </p>

      <h2 style={{ color: "limegreen" }}>2. Propiedad Intelectual</h2>
      <p>
        Todos los contenidos, marcas, logos, imágenes, textos y diseños
        presentes en este sitio web son propiedad exclusiva de GeekBank o de sus
        licenciantes, y están protegidos por las leyes de propiedad intelectual
        aplicables.
      </p>

      <h2 style={{ color: "limegreen" }}>3. Uso Permitido</h2>
      <p>
        Usted se compromete a utilizar este sitio web únicamente para fines
        lícitos y de manera que no infrinja los derechos de GeekBank o de
        terceros. Está estrictamente prohibido:
        <ul>
          <li>
            Reproducir, distribuir o modificar los contenidos del sitio sin
            autorización previa.
          </li>
          <li>Utilizar el sitio para actividades fraudulentas o ilícitas.</li>
          <li>
            Intentar acceder sin autorización a sistemas o datos de GeekBank.
          </li>
        </ul>
      </p>

      <h2 style={{ color: "limegreen" }}>4. Limitación de Responsabilidad</h2>
      <p>
        GeekBank no garantiza la disponibilidad continua del sitio web ni se
        responsabiliza de:
        <ul>
          <li>Errores o interrupciones en el funcionamiento del sitio.</li>
          <li>
            Daños derivados del uso indebido del sitio por parte del usuario.
          </li>
          <li>Contenidos de terceros enlazados desde este sitio.</li>
        </ul>
      </p>

      <h2 style={{ color: "limegreen" }}>5. Legislación y Jurisdicción</h2>
      <p>
        Este aviso legal se rige por las leyes aplicables en la jurisdicción de
        GeekBank. Cualquier disputa será resuelta ante los tribunales
        competentes de dicha jurisdicción.
      </p>

      <p>
        Para cualquier consulta relacionada con este aviso legal, puede
        comunicarse con nosotros a través del correo electrónico{" "}
        <a href="mailto:legal@geekbank.com">legal@geekbank.com</a>.
      </p>
    </div>
  );
};
