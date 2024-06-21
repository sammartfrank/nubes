export const generateTimeSlots = ({
  date,
  openingHour,
  closingHour,
}: {
  date: Date;
  openingHour: number;
  closingHour: number;
}): Date[] => {
  const totalTimeSlots = (closingHour - openingHour) * 2;
  const currentTime = new Date(date);
  const now = new Date();
  return Array.from({ length: totalTimeSlots }, (_, i) => {
    let hours = openingHour + Math.floor(i / 2);
    const minutes = i % 2 === 0 ? 0 : 30;
    const timeSlot = new Date(currentTime);
    timeSlot.setHours(hours, minutes, 0, 0);
    return timeSlot;
  }).filter((timeSlot) => {
    // If the date is not today, return all time slots
    if (currentTime.toDateString() !== now.toDateString()) {
      return true;
    }
    // If the date is today, only return time slots in the future
    return timeSlot.getTime() >= now.getTime();
  });
};
