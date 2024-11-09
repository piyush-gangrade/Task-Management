import React, { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Instance } from 'flatpickr/dist/types/instance';

interface DatePickerProps {
  value: Date;
  onChange: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
  const datepickerRef = useRef<HTMLInputElement>(null);
  const flatpickrInstance = useRef<Instance | null>(null);

  useEffect(() => {
    if (datepickerRef.current) {
      flatpickrInstance.current = flatpickr(datepickerRef.current, {
        defaultDate: value,
        onChange: (selectedDates) => {
          onChange(selectedDates[0]);
        },
        dateFormat: 'Y-m-d',
      });
    }

    return () => {
      flatpickrInstance.current?.destroy();
    };
  }, [value, onChange]);

  return <span ref={datepickerRef} className="calendar--btn">Deadline</span>;
};

export default DatePicker;
