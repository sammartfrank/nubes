import { NEW_BOOKING_URL } from '@/utils/constants';
import Link from 'next/link';

export const NoBookings = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <span>No hay reservas realizadas.</span>
      <Link
        href={NEW_BOOKING_URL}
        className="p-2 border border-border shadow-sm rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-transparent"
      >
        Crear Reserva
      </Link>
    </div>
  );
};
