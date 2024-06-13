'use client';

import { useCallback, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { generateTimeSlots } from '@/src/components/Bookings/utils';
import { openingHoursConfig } from '@/configs/appConfig';
import { useAvailabilityByDate } from '../useAvailability/queries/useAvailabilityByDate';
import { useCreateBookingMutation } from '../useBookings';

import { BookingStatusEnum, TableTypeEnum } from '@/custom.types';
import { useTablesQuery } from '../useTables';
import { BOOKINGS_URL } from '@/utils/constants';
import { useRouter } from 'next/navigation';

export const useNewBooking = ({
  user,
  access_token,
}: {
  user: any;
  access_token: string;
}) => {
  const router = useRouter();

  const createBookingMutation = useCreateBookingMutation({
    access_token,
  });

  const timeSlots = useMemo(
    () =>
      generateTimeSlots({
        openingHour: openingHoursConfig.opening,
        closingHour: openingHoursConfig.close,
      }),
    [],
  );

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

  const date = selectedDate.toISOString().split('T')[0];
  const { availability = [], isLoading: isLoadingAvailability } =
    useAvailabilityByDate({
      selectedDate: date,
      access_token,
    });

  // We need to make an object with the dates that have bookings. Or
  // const datesBooked = useMemo(() => {
  //   const uniqueDates = Array.from(
  //     new Set(availability.map((date) => new Date(date.booking_date))),
  //   );
  //   return uniqueDates;
  // }, [availability]);

  // we need to get the times booked on the date selected if there are any
  // const timeslotsBooked = useMemo(
  //   () =>
  //     availability?.reduce((acc, curr) => {
  //       // we need to each booking_date: [booking_time]
  //       const bookingTime = curr?.booking_time;
  //       const bookingDate = curr?.booking_date;

  //       if (!acc[bookingDate]) {
  //         acc[bookingDate] = new Set();
  //       }

  //       acc[bookingDate].add(bookingTime);

  //       return acc;
  //     }, {} as Record<string, Set<string>>),
  //   [availability],
  // );
  // console.log('🚀 ~ timeslotsBooked:', timeslotsBooked);

  const { data: tables = [], isLoading: isLoadingTables } = useTablesQuery({
    access_token,
  });
  console.log('🚀 ~ tables:', tables);

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

  const handleBooking = useCallback(async () => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    const formattedTime = selectedTime
      ?.toISOString()
      .split('T')[1]
      .substring(0, 8) as string;

    const booking = {
      booking_date: formattedDate,
      booking_status: BookingStatusEnum.PENDING,
      tableId: tables[0]?.id,
      userId: user?.id as string,
      booking_time: formattedTime,
      booking_name: user?.email as string,
      booking_details: '',
      pax,
    };

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
  }, []);

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
    // datesBooked,
    // timeslotsBooked,
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
