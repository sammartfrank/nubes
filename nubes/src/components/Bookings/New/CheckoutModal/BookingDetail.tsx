import { Separator } from '@/components/ui/separator';
import { Bookings } from '@/custom.types';

import dynamic from 'next/dynamic';
import { CreateBookingDto } from '../../../../../../nubes-back/src/bookings/dto/create-bookings.dto';
const Checkout = dynamic(
  () => import('../../../Checkout').then((mod) => mod.Checkout),
  {
    ssr: false,
  },
);

export const BookingDetail = ({
  booking,
  preferenceId,
  handleCreateBooking,
}: {
  booking: Bookings;
  preferenceId: string;
  handleCreateBooking: () => Promise<CreateBookingDto>;
}) => {
  const fDate = booking.booking_date.split('-')[2];
  const fMonth = booking.booking_date.split('-')[1];
  const fYear = booking.booking_date.split('-')[0];
  const formattedDate = `${fDate}/${fMonth}/${fYear}`;

  const time = booking.booking_time.split(':');
  const hours = time[0];
  const minutes = time[1];
  const formattedTime = `${hours}:${minutes}`;

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-2 p-4 py-5 border border-border rounded-md">
        <div className="flex flex-row justify-between">
          <span>Fecha</span>
          <span className="bg-gray-200 px-1 rounded-lg font-mono">
            {formattedDate}
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <span>Hora</span>
          <span className="bg-gray-200 px-1 rounded-lg font-mono">
            {formattedTime}
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <span>Nombre</span>
          <span className="bg-gray-200 px-1 rounded-lg font-mono">
            {booking.booking_name}
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <span>Personas</span>
          <span className="bg-gray-200 px-1 rounded-lg font-mono">
            {booking.pax}
          </span>
        </div>
        <Separator />
        <div className="flex flex-row justify-between">
          <span>Importe</span>
          <span className="bg-gray-200 px-1 rounded-lg font-mono">$4000</span>
        </div>
        <div className="text-xs text-zinc-300 mt-5">
          <p className="text-justify">
            * Por favor tenga en cuenta que la tarifa de reserva se descontará
            del total de su compra. De esta manera, el costo de la reserva se
            deducirá de su consumo total.
          </p>
        </div>
      </div>
      <div className="h-[105px] mt-2 flex justify-center bg-zinc-100 rounded-lg">
        <Checkout
          preferenceId={preferenceId}
          handleCreateBooking={handleCreateBooking}
        />
      </div>
    </div>
  );
};
