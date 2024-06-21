'use client';

import { LocalDatePicker } from './LocalDatePicker';
import { TimeSlotPicker } from './TimeSlotPicker/TimeSlotPicker';
import { TableTypePicker } from './TableTypePicker';
import { PaxPicker } from './PaxPicker';
import { useNewBooking } from '@/src/hooks/useNewBooking/useNewBooking';
import { ToastContainer } from 'react-toastify';
import { User } from '@supabase/supabase-js';

import { CheckoutDesktopModal } from './CheckoutModal';

export const NewBookingForm = ({
  user,
  access_token,
  preferenceCreated,
}: {
  user: User | null;
  access_token: string;
  preferenceCreated: string;
}) => {
  const {
    selectedDate,
    handleDateChange,
    selectedTime,
    handleTimeSelection,
    pax,
    handleSelectedPax,
    timeSlots,
    error,
    selectedTableType,
    handleSelectedTableType,
    tableCapacity,
    noWindowsTablesAvailable,
    noHallTablesAvailable,
    noTablesAvailable,
    booking,
    checkoutOpenModal,
    handleCheckoutModalOpen,
    handleCreateBooking,
    setCheckoutModalOpen,
  } = useNewBooking({ user, access_token });
  return (
    <form className="flex flex-col gap-5 text-center">
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="w-full max-h-full">
          <div className="flex flex-1">
            <LocalDatePicker
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
            />
          </div>
        </div>
        <div className="flex flex-1">
          <TimeSlotPicker
            timeSlots={timeSlots}
            selectedTime={selectedTime}
            handleTimeSelection={handleTimeSelection}
          />
        </div>
      </div>

      <>
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
            type="button"
            className="p-3 bg-primary text-white rounded-md hover:bg-primary-foreground hover:text-primary hover:border-border hover:border w-[235px] mx-auto disabled:bg-zinc-500 disabled:cursor-not-allowed disabled:text-white disabled:hover:bg-zinc-500 disabled:hover:text-white disabled:hover:border-border disabled:hover:border"
            onClick={handleCheckoutModalOpen}
            disabled={!selectedTime || !selectedDate || !pax}
          >
            Reservar
          </button>
        )}
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </>

      <CheckoutDesktopModal
        preferenceCreated={preferenceCreated}
        open={checkoutOpenModal}
        setOpen={setCheckoutModalOpen}
        booking={booking}
        handleCreateBooking={handleCreateBooking}
      />

      <ToastContainer className="text-left" />
    </form>
  );
};
