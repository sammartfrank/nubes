'use client';

import { Session, User } from '@supabase/supabase-js';

import { BookingsTableView } from '@/src/components/Bookings/BookingsTable';
import { Loader } from '@/src/components/Loader';
import { useBookingsSection } from '@/src/hooks/useBookingsSection';
import { NoBookings } from '@/src/components/Bookings/BookingsSection/NoBookings';
import { useMediaQuery } from '@/src/hooks';
import { MobileBookingsView } from '@/src/components/Bookings/BookingsSection/MobileBookingsView';

export const BookingsSection = ({
  access_token,
  user,
}: {
  access_token: Session['access_token'];
  user: User | null;
}) => {
  const {
    bookings,
    isLoadingBookings,
    handleCancelBooking,
    isCancelOpen,
    setIsCancelOpen,
    isCancelling,
    bookingDetails,
    handleCancelOnDropDown,
    handleCloseDetails,
    handleOnViewDetails,
    detailModalIsOpen,
  } = useBookingsSection({
    access_token,
    user,
  });
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isLoadingBookings) return <Loader />;
  if (bookings.length === 0) return <NoBookings />;

  if (!isDesktop)
    return (
      <MobileBookingsView
        bookings={bookings}
        bookingDetails={bookingDetails}
        detailModalIsOpen={detailModalIsOpen}
        isCancelOpen={isCancelOpen}
        setIsCancelOpen={setIsCancelOpen}
        handleCancelBooking={handleCancelBooking}
        handleCancelOnDropDown={handleCancelOnDropDown}
        handleCloseDetails={handleCloseDetails}
        handleOnViewDetails={handleOnViewDetails}
        isCancelling={isCancelling}
      />
    );

  return (
    <section>
      <BookingsTableView
        bookings={bookings}
        bookingDetails={bookingDetails}
        detailModalIsOpen={detailModalIsOpen}
        isCancelOpen={isCancelOpen}
        setIsCancelOpen={setIsCancelOpen}
        handleCancelBooking={handleCancelBooking}
        handleCancelOnDropDown={handleCancelOnDropDown}
        handleCloseDetails={handleCloseDetails}
        handleOnViewDetails={handleOnViewDetails}
        isCancelling={isCancelling}
      />
    </section>
  );
};
