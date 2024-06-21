'use client';

import { useCallback, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { openingHoursConfig } from '@/configs/appConfig';

import { useAvailabilityByDate } from '../useAvailability/queries/useAvailabilityByDate';
import { useBookingsQuery, useCreateBookingMutation } from '../useBookings';
import { useTablesQuery } from '../useTables';

import { Bookings, BookingStatusEnum, TableTypeEnum } from '@/custom.types';
import { generateTimeSlots } from '@/src/components/Bookings/utils';

import { TableType } from '../../../../nubes-back/src/tables/tables.entity';
import { CreateBookingDto } from '../../../../nubes-back/src/bookings/dto/create-bookings.dto';

export const useNewBooking = ({
  user,
  access_token,
}: {
  user: any;
  access_token: string;
}) => {
  const createBookingMutation = useCreateBookingMutation({
    access_token,
  });

  const [error, setError] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<Date>(selectedDate);

  const dateUTC = selectedDate.toISOString().split('T')[0];
  const timeUTC =
    selectedTime?.getHours().toString().padStart(2, '0') +
    ':' +
    selectedTime?.getMinutes().toString().padStart(2, '0') +
    ':' +
    selectedTime?.getSeconds().toString().padStart(2, '0');

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeSelection = (date: Date) => {
    if (selectedTime === date) return;
    setSelectedTime(date);
  };

  const { availability = [], isLoading: isLoadingAvailability } =
    useAvailabilityByDate({
      selectedDate: dateUTC,
      access_token,
    });

  const timeSlots = useMemo(
    () =>
      generateTimeSlots({
        date: selectedDate,
        openingHour: openingHoursConfig.opening,
        closingHour: openingHoursConfig.close,
      }),
    [selectedDate],
  );
  const { data: tables = [], isLoading: isLoadingTables } = useTablesQuery({
    access_token,
  });

  const { data: bookings = [], isLoading: isLoadingBookings } =
    useBookingsQuery({
      access_token,
    });

  const [selectedTableType, setSelectedTableType] =
    useState<TableTypeEnum | null>(null);

  const handleSelectedTableType = (tableType: TableTypeEnum) => {
    setSelectedTableType(tableType);
    setPax(1);
  };

  const [pax, setPax] = useState(1);

  const handleSelectedPax = useCallback((pax: number) => {
    setPax(pax);
  }, []);

  const handleCreateBooking = useCallback(() => {
    const booking = {
      booking_date: dateUTC,
      booking_status: BookingStatusEnum.PENDING,
      tableId: tables[0]?.id,
      userId: user?.id as string,
      booking_time: timeUTC,
      booking_name: user?.email as string,
      booking_details: '',
      table_type: 'Window' as TableType,
      pax,
    };

    console.log({ booking });

    if (!selectedDate || !selectedTime || !pax) {
      setError('Por favor, complete todos los campos antes de enviar.');
      toast.error('Por favor, complete todos los campos antes de enviar.');
      return;
    }
    setError('');
    return createBookingMutation.mutateAsync(
      {
        variables: {
          ...booking,
        },
      },
      {
        onSuccess: () => {
          toast.success('Reserva inicializada con éxito');
          return Promise.resolve();
        },
        onError: (error) => {
          console.error({ error });
          setError(error.message);
          toast.error('Error al crear la reserva');
          return Promise.reject();
        },
      },
    );
  }, [
    createBookingMutation,
    pax,
    selectedDate,
    tables,
    selectedTime,
    setError,
    dateUTC,
    timeUTC,
    user,
  ]) as () => Promise<CreateBookingDto>;

  const noWindowsTablesAvailable = false;
  const noHallTablesAvailable = false;

  const noTablesAvailable =
    noWindowsTablesAvailable && noWindowsTablesAvailable;

  const booking = {
    booking_date: dateUTC,
    booking_status: BookingStatusEnum.PENDING,
    tableId: tables[0]?.id,
    userId: user?.id as string,
    booking_time: timeUTC,
    booking_name: user?.email as string,
    booking_details: '',
    pax,
  } as Bookings;

  const [openDesktop, setOpenDesktop] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [checkoutOpenModal, setCheckoutModalOpen] = useState(false);

  return {
    handleCreateBooking,
    handleTimeSelection,
    handleDateChange,
    handleSelectedPax,
    handleSelectedTableType,
    bookings,
    booking,
    timeSlots,
    selectedTime,
    setSelectedTime,
    selectedTableType,
    pax,
    tableCapacity: TableTypeEnum.W === selectedTableType ? 4 : 12,
    error,
    availability,
    isLoadingAvailability,
    selectedDate,
    noWindowsTablesAvailable,
    noHallTablesAvailable,
    noTablesAvailable,
    openDesktop,
    setOpenDesktop,

    openModal,
    setOpenModal,
    checkoutOpenModal,
    setCheckoutModalOpen,

    // handleDeleteBooking,
  };
};
