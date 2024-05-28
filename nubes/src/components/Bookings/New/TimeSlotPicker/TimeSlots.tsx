import { useState } from 'react';
import { TimeSlot } from './TimeSlot';
// import { BookedSlot } from './BookedSlot';

export const TimeSlots = ({
  timeSlots,
  selectedTime,
  handleTimeSelection,
}: {
  timeSlots: Date[];
  selectedTime?: Date;
  handleTimeSelection: (date: Date) => void;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | undefined>();

  return (
    <div className="grid grid-cols-2 w-96">
      {timeSlots?.map((timeSlot, index, arr) => {
        const handleMouseEnter = () => setHoveredIndex(index);
        const handleMouseLeave = () => setHoveredIndex(undefined);

        const isHovered = [index].includes(hoveredIndex!);
        const isSelected = timeSlot.getTime() === selectedTime?.getTime();
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
