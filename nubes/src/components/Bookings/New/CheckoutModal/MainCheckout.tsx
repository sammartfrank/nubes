import { BookingDetail } from './BookingDetail';
import { Bookings } from '@/custom.types';
import { CreateBookingDto } from '../../../../../../nubes-back/src/bookings/dto/create-bookings.dto';

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
