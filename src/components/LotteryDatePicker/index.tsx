import React, { PropsWithChildren } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineDateRange } from "react-icons/md";
import { useSiteStore } from "../../store";
const CustomInput = React.forwardRef(({ value, onClick }: any, ref: any) => (
  <button
    className="p-2 rounded-lg bg-white drop-shadow-md flex justify-between gap-2 items-center"
    onClick={onClick}
    ref={ref}
  >
    <MdOutlineDateRange color="grey" size={25} />
    {value}
  </button>
));

interface ResultDatePickerProps extends PropsWithChildren {
  className?: string | undefined;
}

const ResultDatePicker = ({ children, className }: ResultDatePickerProps) => {
  const selectedDate = useSiteStore((state) => state.selectedDate);
  const updateSelectedDate = useSiteStore((state) => state.updateSelectedDate);

  return (
    <DatePicker
      className={className}
      selected={selectedDate}
      onChange={(date) => updateSelectedDate(date!)}
      maxDate={new Date()}
      customInput={React.isValidElement(children) ? children : <CustomInput />}
    />
  );
};

// interface ResultDatePickerProps extends PropsWithChildren {}

// const CustomDatePicker = ({ children }: ResultDatePickerProps) => {
//   const selectedDate = useSiteStore(state => state.selectedDate);
//   const updateSelectedDate = useSiteStore(state => state.updateSelectedDate);

//   return (
//     <DatePicker
//       selected={selectedDate}
//       onChange={(date) => updateSelectedDate(date!)}
//       maxDate={new Date()}
//       customInput={ React.isValidElement(children) children ?? <CustomInput/>}
//       // customInput={<CustomInput />}
//     />
//   );
// };

export default ResultDatePicker;
