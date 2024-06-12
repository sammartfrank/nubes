export const generateMjml = ({ config }) => {
  const { createBookingDto } = config;
  return `<mjml>
  <mj-body>
    <mj-section background-color="#ADD8E6">
      <mj-column>
        <mj-text align="center">
          <h1>Las Nubes</h1>
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-section>
      <mj-column>
        <mj-text>
          <h1>Confirmación de Reserva</h1>
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-section>
      <mj-column>
        <mj-text>
          <h3>${createBookingDto?.booking_name},</h3>
          <p>Su reserva ha sido confirmada para ${createBookingDto?.booking_date} a las ${createBookingDto?.booking_time}.</p>
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-section>
      <mj-column>
         <mj-button font-family="Helvetica" background-color=""#ADD8E6" color="white">
          Confirmar Reserva
         </mj-button>
      </mj-column>
    </mj-section>
    <mj-section>
      <mj-column>
        <mj-text>
          <p>¡Gracias por elegir nuestro servicio!</p>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`;
};
