'use client';

import { useCallback, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { openingHoursConfig } from '@/configs/appConfig';

import { useBookingsQuery, useCreateBookingMutation } from '../useBookings';
import { useTablesQuery } from '../useTables';

import {
  Bookings,
  BookingStatusEnum,
  CreateBookingDto,
  TableTypeEnum,
} from '@/custom.types';
import { generateTimeSlots } from '@/src/components/Bookings/utils';

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
  const [openModal, setOpenModal] = useState(false);
  const [checkoutOpenModal, setCheckoutModalOpen] = useState(false);

  const [pax, setPax] = useState(1);

  const handleSelectedPax = useCallback((pax: number) => {
    setPax(pax);
  }, []);

  const [selectedTableType, setSelectedTableType] =
    useState<TableTypeEnum | null>(null);

  const handleSelectedTableType = useCallback((tableType: TableTypeEnum) => {
    setSelectedTableType(tableType);
    setPax(1);
  }, []);

  const handleCheckoutModalOpen = useCallback(() => {
    if (!selectedDate || !selectedTime || !pax || !selectedTableType) return;
    setCheckoutModalOpen(true);
  }, [
    selectedDate,
    selectedTime,
    setCheckoutModalOpen,
    pax,
    selectedTableType,
  ]);

  const dateUTC = selectedDate.toISOString().split('T')[0];
  const timeUTC =
    selectedTime?.getHours().toString().padStart(2, '0') +
    ':' +
    selectedTime?.getMinutes().toString().padStart(2, '0') +
    ':' +
    selectedTime?.getSeconds().toString().padStart(2, '0');

  const handleDateChange = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  const handleTimeSelection = useCallback(
    (date: Date) => {
      if (selectedTime === date) return;
      setSelectedTime(date);
    },
    [selectedTime],
  );

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

  const handleCreateBooking = useCallback(() => {
    const booking = {
      booking_date: dateUTC,
      booking_status: BookingStatusEnum.PENDING,
      // TODO: add logic and remove Harcoded ID.
      tableId: tables[0]?.id,
      userId: user?.id as string,
      booking_time: timeUTC,
      booking_name: user?.email as string,
      booking_details: '' as string,
      table_type: selectedTableType as TableTypeEnum,
      pax,
    } as CreateBookingDto;

    if (!selectedDate || !selectedTime || !pax || !selectedTableType) {
      setError('Por favor, complete todos los campos antes de enviar.');
      toast.error('Por favor, complete todos los campos antes de enviar.');
      return Promise.reject();
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
    selectedTableType,
    user,
  ]);
  const noWindowsTablesAvailable = false;
  const noHallTablesAvailable = false;

  const noTablesAvailable =
    noWindowsTablesAvailable && noWindowsTablesAvailable;

  const booking = useMemo(() => {
    return {
      booking_date: dateUTC,
      booking_status: BookingStatusEnum.PENDING,

      // TODO: add logic and remove Harcoded ID.
      tableId: tables[0]?.id,
      userId: user?.id as string,
      booking_time: timeUTC,
      booking_name: user?.email as string,
      booking_details: '',
      pax,
    };
  }, [dateUTC, pax, tables, timeUTC, user]) as Bookings;

  const tableCapacity = TableTypeEnum.W === selectedTableType ? 4 : 12;

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
    selectedTableType,
    pax,
    tableCapacity,
    selectedDate,
    error,
    noWindowsTablesAvailable,
    noHallTablesAvailable,
    noTablesAvailable,
    openModal,
    setOpenModal,
    checkoutOpenModal,
    setCheckoutModalOpen,
    handleCheckoutModalOpen,
    isLoadingTables,
    isLoadingBookings,
  };
};
