import { TimeSlots } from './TimeSlots';

export const TimeSlotPicker = ({
  timeSlots,
  selectedTime,
  handleTimeSelection,
}: {
  timeSlots: Date[];
  selectedTime?: Date;
  handleTimeSelection: (date: Date) => void;
}) => {

  return (
    <div className="overflow-auto h-[385px] rounded-lg bg-zinc-500">
      <TimeSlots
        timeSlots={timeSlots}
        selectedTime={selectedTime}
        handleTimeSelection={handleTimeSelection}
      />
    </div>
  );
};
