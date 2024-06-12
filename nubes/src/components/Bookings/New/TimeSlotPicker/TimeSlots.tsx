import { useState } from 'react';
import { TimeSlot } from './TimeSlot';
import { BookedSlot } from './BookedSlot';

export const TimeSlots = ({
  timeSlots,
  selectedTime,
  handleTimeSelection,
  bookedTimeslots,
}: {
  timeSlots: Date[];
  selectedTime?: Date;
  handleTimeSelection: (date: Date) => void;
  bookedTimeslots: any;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | undefined>();

  return (
    <div className="grid grid-cols-2 w-96">
      {timeSlots?.map((timeSlot, index, arr) => {
        const handleMouseEnter = () => setHoveredIndex(index);
        const handleMouseLeave = () => setHoveredIndex(undefined);

        const isHovered = [index].includes(hoveredIndex!);
        const isSelected = timeSlot.getTime() === selectedTime?.getTime();
        const time = timeSlot.toISOString().slice(11, 19);

        if (bookedTimeslots?.has(time)) {
          return <BookedSlot key={timeSlot.toString()} />;
        }
        return (
          <TimeSlot
            key={timeSlot.toString()}
            slotTime={timeSlot}
            handleClick={handleTimeSelection}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            isSelected={isSelected}
            isHovered={isHovered}
          />
        );
      })}
    </div>
  );
};
