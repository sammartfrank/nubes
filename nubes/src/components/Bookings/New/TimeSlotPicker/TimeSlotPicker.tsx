import { TimeSlots } from './TimeSlots';

export const TimeSlotPicker = ({
  timeSlots,
  selectedTime,
  handleTimeSelection,
  bookedTimeslots,
}: {
  timeSlots: Date[];
  selectedTime?: Date;
  handleTimeSelection: (date: Date) => void;
  bookedTimeslots?: string[];
}) => {
  return (
    <div className="overflow-auto h-[385px] rounded-lg">
      <TimeSlots
        timeSlots={timeSlots}
        selectedTime={selectedTime}
        handleTimeSelection={handleTimeSelection}
        bookedTimeslots={bookedTimeslots}
      />
    </div>
  );
};
