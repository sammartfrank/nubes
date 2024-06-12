import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './index.css';

export const LocalDatePicker = ({
  selectedDate = null,
  handleDateChange,
}: {
  selectedDate: Date | null;
  handleDateChange: (date: Date) => void;
}) => {
  const TODAY = new Date();
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
