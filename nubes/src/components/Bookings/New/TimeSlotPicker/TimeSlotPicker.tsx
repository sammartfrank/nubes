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
  // those timeslots that are in the past from current time are not selectable, and should look disabled
  const currentTime = new Date();

  timeSlots = timeSlots.filter(
    (timeSlot) => timeSlot.getTime() >= currentTime.getTime(),
  );

  return (
    <div className="overflow-auto h-[385px] rounded-lg border border-border">
      <TimeSlots
        timeSlots={timeSlots}
        selectedTime={selectedTime}
        handleTimeSelection={handleTimeSelection}
        bookedTimeslots={bookedTimeslots}
      />
    </div>
  );
};
