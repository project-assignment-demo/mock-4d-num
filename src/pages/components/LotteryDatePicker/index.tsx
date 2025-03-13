import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineDateRange } from 'react-icons/md'
import { useSettingStore } from "../../../store";

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
  const selectedDate = useSettingStore(state => state.selectedDate);
  const updateSelectedDate = useSettingStore(state => state.updateSelectedDate);

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => updateSelectedDate(date!)}
      maxDate={new Date()}
      customInput={<CustomInput />}
    />
  );
};

export default CustomDatePicker;