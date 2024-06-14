import { Button } from '@/components/ui/button';
import { Bookings } from '@/custom.types';
import { Checkout } from '@/src/components/Checkout';

export const BookingDetail = ({
  booking,
  handleSubmit,
}: {
  booking: Bookings;
  handleSubmit: () => void;
}) => {
  const formattedDate = new Date(booking.booking_date).toLocaleDateString(
    'es-AR',
  );

  return (
    <div className="h-[300px] flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <span>Fecha</span>
          <span>{formattedDate}</span>
        </div>
        <div className="flex flex-row justify-between">
          <span>Hora</span>
          <span>{booking.booking_time}</span>
        </div>
        <div className="flex flex-row justify-between">
          <span>Nombre</span>
          <span>{booking.booking_name}</span>
        </div>
        <div className="flex flex-row justify-between">
          <span>Detalles</span>
          <select className="border rounded p-1">
            <option value={''}>Seleccione una opción</option>
            <option value="birthday">Cumpleaños</option>
            <option value="dietary">Restricciones Dietéticas</option>
            <option value="other">Otro</option>
          </select>
        </div>
        <div className="flex flex-row justify-between">
          <span>Pax</span>
          <span>{booking.pax}</span>
        </div>
      </div>
      <div className="flex justify-center">
        {/* <Button onClick={handleSubmit}>Abonar Reserva</Button> */}
        <Checkout preferenceId="" />
      </div>
    </div>
  );
};
