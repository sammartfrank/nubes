'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NewBookingProps } from '../../components/Bookings/New';
import { generateTimeSlots } from '@/src/components/Bookings/utils';
import { openingHoursConfig } from '@/configs/appConfig';
import { useAvailabilityByDate } from '../useAvailability/queries/useAvailabilityByDate';
import { useCreateBookingMutation } from '../useBookings';

import { TableTypeEnum } from '@/custom.types';
import { useTablesQuery } from '../useTables';
import { BOOKINGS_URL } from '@/utils/constants';
import { useRouter } from 'next/navigation';

export const useNewBooking = ({ user, access_token }: NewBookingProps) => {
  const router = useRouter();
  const createBookingMutation = useCreateBookingMutation({
    access_token,
  });

  const timeSlots = generateTimeSlots({
    openingHour: openingHoursConfig.opening,
    closingHour: openingHoursConfig.close,
  });

  const [error, setError] = useState('');

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
  const [selectedTime, setSelectedTime] = useState<Date | undefined>();
  const handleTimeSelection = (date: Date) => {
    if (selectedTime === date) return;
    setSelectedTime(date);
  };

  const { availability = [], isLoading: isLoadingAvailability } =
    useAvailabilityByDate({
      selectedDate: selectedDate.toISOString().split('T')[0],
      access_token,
    });

  const { data: tables = [], isLoading: isLoadingTables } = useTablesQuery({
    access_token,
  });

  console.log('🚀 ~ useNewBooking ~ tables:', tables);

  const [selectedTableType, setSelectedTableType] = useState(TableTypeEnum.W);
  const handleSelectedTableType = (tableType: TableTypeEnum) => {
    setSelectedTableType(tableType);
  };
  const [pax, setPax] = useState(1);
  const handleSelectedPax = (pax: number) => {
    setPax(pax);
  };

  // const availableTables = tables.filter(
  //   (table) => table.table_status === TableStatus.AVAILABLE,
  // );
  // console.log("🚀 ~ useNewBooking ~ availableTables:", availableTables)

  // const availableTablesByType = availableTables.filter(
  //   (table) => table.table_type === selectedTableType.toString(),
  // );
  // console.log("🚀 ~ useNewBooking ~ availableTablesByType:", availableTablesByType)

  // we make sure to provide the highest amount of pax available for the selected table type.
  // const sortedTablesByCapacity = availableTablesByType.sort(
  //   (a, b) => b.table_capacity - a.table_capacity,
  // );
  // const tableCapacity = sortedTablesByCapacity[0]?.table_capacity as number;

  // const totalTimeSlots = timeSlots.length;

  // const noWindowsTablesAvailable =
  //   availableTables.filter(
  //     (table) => table.table_type === TableType.W.toString(),
  //   ).length === 0;

  // const noHallTablesAvailable =
  //   availableTables.filter(
  //     (table) => table.table_type === TableType.H.toString(),
  //   ).length === 0;

  const handleBooking = async () => {
    
    const formattedDate = selectedDate.toISOString().split('T')[0];
    const formattedTime = selectedTime
      ?.toISOString()
      .split('T')[1]
      .substring(0, 8) as string;

    const booking = {
      booking_date: formattedDate,
      booking_time: formattedTime,
      booking_name: user?.email as string,
      booking_details: '',
      pax,
      userId: user?.id as string,
    };

    console.log('{ payload }', booking);

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
          toast.success('Reserva creada con éxito');
          router.push(BOOKINGS_URL);
        },
        onError: (error) => {
          console.error({ error });
          toast.error('Error al crear la reserva');
        },
      },
    );
  };

  const noWindowsTablesAvailable = false;
  const noHallTablesAvailable = true;

  const noTablesAvailable =
    noWindowsTablesAvailable && noWindowsTablesAvailable;

  return {
    handleBooking,
    handleTimeSelection,
    handleDateChange,
    handleSelectedPax,
    handleSelectedTableType,
    timeSlots,
    selectedTime,
    setSelectedTime,
    selectedTableType,
    pax,
    tableCapacity: 4,
    error,
    availability,
    isLoadingAvailability,
    selectedDate,
    noWindowsTablesAvailable,
    noHallTablesAvailable,
    noTablesAvailable,
  };
};
