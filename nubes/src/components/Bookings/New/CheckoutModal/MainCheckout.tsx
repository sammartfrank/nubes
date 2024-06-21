import { BookingDetail } from './BookingDetail';
import { Bookings, CreateBookingDto } from '@/custom.types';

type MainProps = {
  openModal: boolean;
  handleCancel: () => void;
  booking: Bookings;
  preferenceCreated: string;
  handleCreateBooking: () => Promise<CreateBookingDto>;
};

export const MainCheckout = ({
  openModal,
  handleCancel,
  booking,
  preferenceCreated,
  handleCreateBooking,
}: MainProps) => {
  return (
    <BookingDetail
      booking={booking}
      preferenceId={preferenceCreated}
      handleCreateBooking={handleCreateBooking}
    />
  );
};
