import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineDateRange } from 'react-icons/md'

const CustomInput = React.forwardRef(({ value, onClick }: any, ref: any) => (
  <button
    className="p-2 rounded-lg bg-white drop-shadow-md flex justify-between gap-2 items-center"
    onClick={onClick}
    ref={ref}
  >
    <MdOutlineDateRange color="grey" size={25}/>
   {value}
  </button>
));

const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date!)}
      customInput={<CustomInput />}
    />
  );
};

export default CustomDatePicker;