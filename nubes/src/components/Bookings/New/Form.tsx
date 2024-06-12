'use client';

import { LocalDatePicker } from './LocalDatePicker';
import { TimeSlotPicker } from './TimeSlotPicker/TimeSlotPicker';
import { TableTypePicker } from './TableTypePicker';
import { PaxPicker } from './PaxPicker';
import { useNewBooking } from '@/src/hooks/useNewBooking/useNewBooking';
import { ToastContainer } from 'react-toastify';
import { User } from '@supabase/supabase-js';

export const NewBookingForm = ({
  user,
  access_token,
}: {
  user: User | null;
  access_token: string;
}) => {
  const {
    selectedDate,
    handleDateChange,
    selectedTime,
    handleTimeSelection,
    pax,
    handleSelectedPax,
    handleBooking,
    timeSlots,
    error,
    selectedTableType,
    handleSelectedTableType,
    tableCapacity,
    noWindowsTablesAvailable,
    noHallTablesAvailable,
    noTablesAvailable,
  } = useNewBooking({ user, access_token });

  return (
    <form className="flex flex-col space-y-4 text-center">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full max-h-full">
          <div className="flex flex-1" onClick={(e) => e.stopPropagation()}>
            <LocalDatePicker
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
            />
          </div>
        </div>
        <div className="flex flex-1" onClick={(e) => e.stopPropagation()}>
          <TimeSlotPicker
            timeSlots={timeSlots}
            selectedTime={selectedTime}
            handleTimeSelection={handleTimeSelection}
          />
        </div>
      </div>

      <div>
        <TableTypePicker
          selectedTableType={selectedTableType}
          handleSelectedTableType={handleSelectedTableType}
          noWindowsTablesAvailable={noWindowsTablesAvailable}
          noHallTablesAvailable={noHallTablesAvailable}
        />
        <PaxPicker
          pax={pax}
          handleSelectedPax={handleSelectedPax}
          tableCapacity={tableCapacity}
          noTables={noTablesAvailable}
        />
        {!noTablesAvailable && (
          <button
            onClick={handleBooking}
            type="button"
            className="p-3 bg-primary text-white rounded-md hover:bg-primary-foreground hover:text-primary"
          >
            Hace tu Reserva
          </button>
        )}
      </div>
      {error && <p className="text-white">{error}</p>}
      <ToastContainer className="text-left" />
    </form>
  );
};
