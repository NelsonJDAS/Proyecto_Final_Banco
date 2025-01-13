import React from 'react';

export const Tarifas = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ color: 'limegreen' }}>Tarifas y Comisiones - GeekBank</h1>
      <p>
        En GeekBank, nos esforzamos por mantener nuestras tarifas y comisiones transparentes para
        ofrecerle la mejor experiencia bancaria posible. A continuación, se detalla información
        sobre nuestras principales tarifas y comisiones.
      </p>

      <h2 style={{ color: 'limegreen' }}>1. Cuentas Bancarias</h2>
      <p>
        <ul>
          <li><strong>Mantenimiento de cuenta:</strong> 5 € mensuales (exento con saldo promedio mayor a 1,000 €).</li>
          <li><strong>Transferencias internas:</strong> Sin costo.</li>
          <li><strong>Transferencias internacionales:</strong> 15 € por transacción.</li>
        </ul>
      </p>

      <h2 style={{ color: 'limegreen' }}>2. Tarjetas de Crédito</h2>
      <p>
        <ul>
          <li><strong>Cuota anual:</strong> 50 € (exenta el primer año).</li>
          <li><strong>Retiros en cajeros automáticos:</strong> 3% del monto retirado, mínimo 3 €.</li>
          <li><strong>Intereses por pagos atrasados:</strong> 2% mensual sobre el saldo pendiente.</li>
        </ul>
      </p>

      <h2 style={{ color: 'limegreen' }}>3. Préstamos y Créditos</h2>
      <p>
        <ul>
          <li><strong>Comisión por apertura:</strong> 1.5% del monto del préstamo.</li>
          <li><strong>Pago anticipado:</strong> Sin costo.</li>
          <li><strong>Intereses moratorios:</strong> 3% mensual sobre el saldo vencido.</li>
        </ul>
      </p>

      <h2 style={{ color: 'limegreen' }}>4. Otros Servicios</h2>
      <p>
        <ul>
          <li><strong>Emisión de cheques de gerencia:</strong> 10 € por cheque.</li>
          <li><strong>Reposición de tarjeta:</strong> 15 € por tarjeta.</li>
          <li><strong>Consulta de saldo en cajeros externos:</strong> 1 € por consulta.</li>
        </ul>
      </p>

      <h2 style={{ color: 'limegreen' }}>5. Contacto</h2>
      <p>
        Si tiene preguntas sobre nuestras tarifas y comisiones, no dude en contactarnos a través de
        los siguientes canales:
        <ul>
          <li><strong>Correo electrónico:</strong> <a href="mailto:comisiones@geekbank.com">comisiones@geekbank.com</a></li>
          <li><strong>Teléfono:</strong> +1 (800) 123-4567</li>
        </ul>
      </p>
    </div>
  );
};