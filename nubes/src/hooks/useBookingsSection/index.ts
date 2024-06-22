'use client';

import { toast } from 'react-toastify';
import { useCallback, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';

import { Bookings, BookingStatusEnum } from '@/custom.types';
import { useUpdateBookingStatusMutation } from '../useBookings/mutations/useUpdateBookingStatusMutation';
import { useBookingsQuery } from '../useBookings/queries/useBookingsQuery';

type UseBookingsSectionProps = {
  access_token: Session['access_token'];
  user: User | null;
};

export const useBookingsSection = ({
  access_token,
  user,
}: UseBookingsSectionProps) => {
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<Bookings>();
  const [detailModalIsOpen, setDetailModalIsOpen] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const updateBookingStatusMutation = useUpdateBookingStatusMutation({
    access_token,
  });

  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append('userId', user?.id ?? '');

  const { data: bookings = [], isLoading: isLoadingBookings } =
    useBookingsQuery({
      access_token,
      variables: urlSearchParams,
    });

  const handleCancelBooking = useCallback(
    (id: string) => {
      setIsCancelling(true);
      return updateBookingStatusMutation.mutateAsync(
        {
          id,
          booking_status: BookingStatusEnum.CANCELLED,
        },
        {
          onSuccess: () => {
            toast.success('Reserva cancelada exitosamente.');
            setIsCancelOpen(false);
            setIsCancelling(false);
          },
          onError: () => {
            toast.error('Error al cancelar la reserva');
            setIsCancelOpen(false);
            setIsCancelling(false);
          },
        },
      );
    },
    [updateBookingStatusMutation],
  );

  const handleOnViewDetails = useCallback(
    (booking: Bookings) => {
      setBookingDetails(booking);
      setDetailModalIsOpen(true);
    },
    [setBookingDetails, setDetailModalIsOpen],
  );

  const handleCloseDetails = useCallback(
    () => setDetailModalIsOpen(false),
    [setDetailModalIsOpen],
  );

  const handleCancelOnDropDown = useCallback(
    (booking: Bookings) => {
      setBookingDetails(booking);
      setIsCancelOpen(true);
    },
    [setIsCancelOpen, setBookingDetails],
  );

  return {
    bookings,
    isLoadingBookings,
    bookingDetails,
    setBookingDetails,
    detailModalIsOpen,
    setDetailModalIsOpen,
    handleCancelBooking,
    handleOnViewDetails,
    handleCloseDetails,
    handleCancelOnDropDown,
    isCancelOpen,
    setIsCancelOpen,
    isCancelling,
  };
};
