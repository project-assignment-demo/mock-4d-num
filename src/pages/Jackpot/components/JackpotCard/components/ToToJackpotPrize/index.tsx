interface ToToJackpotPrizeProps {
  label: string;
  value: string;
}

const ToToJackpotPrize = (props: ToToJackpotPrizeProps) => {
  return (
    <div className="py-[6px] px-1">
      <div className="flex w-full items-center gap-[4px] h-[32px] ">
        <div className="w-[30%] bg-[rgb(234,234,234)] rounded-[8px] flex justify-center items-center p-[5px]">
          <p className="text-center text-[16px] font-bold">{props.label}</p>
        </div>
        <div className="w-[70%] bg-[rgb(234,234,234)] rounded-[8px] p-[5px]">
          <p className="text-center text-[16px] font-bold">{props.value}</p>
        </div>
      </div>
    </div>
  );
};

export default ToToJackpotPrize;
