export const generateTimeSlots = ({
  openingHour,
  closingHour,
}: {
  openingHour: number;
  closingHour: number;
}): Date[] => {
  const totalTimeSlots = (closingHour - openingHour) * 2;
  const timeSlots: Date[] = Array.from({ length: totalTimeSlots }, (_, i) => {
    let hours = openingHour + Math.floor(i / 2);
    const minutes = i % 2 === 0 ? 0 : 30;
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  });
  return timeSlots;
};
