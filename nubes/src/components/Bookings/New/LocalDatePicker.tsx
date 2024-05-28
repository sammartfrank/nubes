import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export const LocalDatePicker = ({
  selectedDate = null,
  handleDateChange,
}: {
  selectedDate: Date | null;
  handleDateChange: (date: Date) => void;
}) => {
  // Reservas de hoy en adelante
  const TODAY = new Date();
  // 1 Mes la reserva
  const MAX_DATE = new Date(new Date().setMonth(new Date().getMonth() + 1));

  return (
    <DatePicker
      onChange={handleDateChange}
      inline
      startDate={TODAY}
      minDate={TODAY}
      maxDate={MAX_DATE}
      selected={selectedDate}
    />
  );
};
