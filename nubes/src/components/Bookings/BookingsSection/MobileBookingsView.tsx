import { Bookings } from '@/custom.types';
import { BookingDetails } from '../BookingsDetails/BookingDetails';
import { CancelProcess } from '../New/CheckoutModal/CancelBookingProcess';

export const MobileBookingsView = ({
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
}) => {
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
      <div>
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex justify-between items-center p-4 border-b border-gray-200"
          >
            <div>
              <p className="text-sm text-gray-500">Reserva</p>
              <p className="text-lg font-semibold">{booking.booking_name}</p>
              <div className="text-xs text-gray-400">
                <p>{booking.booking_date}</p>
                <p>{booking.booking_time}</p>
                <p>{booking.pax} pax</p>
              </div>
            </div>
            <button
              type="button"
              className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-md hover:bg-primary-dark"
              onClick={() => handleOnViewDetails(booking)}
            >
              Ver detalles
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
