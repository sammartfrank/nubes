export const parseDateToTime = (date: Date = new Date()) =>
  date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
