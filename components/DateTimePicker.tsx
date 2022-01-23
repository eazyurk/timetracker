import React from 'react';
import 'react-datetime/css/react-datetime.css';
import DateTime from 'react-datetime';
import { Input } from '@chakra-ui/react';

interface DateTimePickerProps {
  initialValue?: Date;
}

const DateTimePicker = ({ initialValue }: DateTimePickerProps) => {
  const renderInput = (props) => {
    return (
      <div>
        <Input {...props} />
      </div>
    );
  };

  return (
    <>
      <DateTime initialValue={initialValue} renderInput={renderInput} />
    </>
  );
};

export default DateTimePicker;
