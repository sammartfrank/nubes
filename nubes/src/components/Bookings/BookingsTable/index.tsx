import { Bookings } from '@/custom.types';
import { BookingDetails } from '../BookingsDetails/BookingDetails';
import { CancelProcess } from '../New/CheckoutModal/CancelBookingProcess';
import { BookingsTable } from './BookingsTable';

export function BookingsTableView({
  bookings,
  bookingDetails,
  isCancelOpen,
  setIsCancelOpen,
  detailModalIsOpen,
  handleCancelBooking,
  handleCancelOnDropDown,
  handleCloseDetails,
  handleOnViewDetails,
  isCancelling = false,
}: {
  bookings: Bookings[];
  bookingDetails?: Bookings;
  isCancelOpen: boolean;
  setIsCancelOpen: (val: boolean) => void;
  handleCancelBooking: (bookingId: string) => Promise<any>;
  detailModalIsOpen: boolean;
  handleCancelOnDropDown: (val: Bookings) => void;
  handleCloseDetails: () => void;
  handleOnViewDetails: (val: Bookings) => void;
  isCancelling: boolean;
}) {
  return (
    <div className="container bg-white p-4 rounded-lg">
      <BookingDetails
        bookingDetails={bookingDetails}
        isOpen={detailModalIsOpen}
        handleCloseDetails={handleCloseDetails}
      />
      <CancelProcess
        cancelModalOpen={isCancelOpen}
        setCancelModalOpen={setIsCancelOpen}
        handleCancelBooking={handleCancelBooking}
        bookingDetails={bookingDetails}
        isCancelling={isCancelling}
      />
      <BookingsTable
        bookings={bookings}
        handleCancelOnDropDown={handleCancelOnDropDown}
        handleOnViewDetails={handleOnViewDetails}
      />
    </div>
  );
}
