import { PropsWithChildren, ReactNode, useState } from "react";

interface SlotMachineProps {
  // slotNumbers: number;
  title: string;
  totalDigit: number;
  children?: (params: { digits: number[]; rollKey: number }) => ReactNode;
}

const SpinContainer = ({ children, title, totalDigit }: SlotMachineProps) => {
  const [digits, setDigits] = useState<number[]>(
    Array.from({ length: totalDigit }).map((_) => 0)
  );
  const [rollKey, setRollKey] = useState<number>(0);

  const handleSpin = () => {
    const newDigits = Array.from({ length: digits.length }, () =>
      Math.floor(Math.random() * 10)
    );
    setDigits(newDigits);
    setRollKey((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-center items-center bg-[rgb(38,76,170)] border-[3.92px] border-white shadow-md rounded-[56.37px] w-[200px] md:w-[264px] h-[50px] md:h-[51px] p-[10px] z-1">
        <p className="text-[rgb(255,184,2)] font-bold text-center text-[17px]">
          {title}
        </p>
      </div>
      <div className="relative flex flex-col justify-center border-[2px] border-[rgb(38,76,170)] rounded-[26.14px] bg-white -mt-6 px-4 md:px-10 w-[290px] md:w-[450px] h-[180px] md:h-[210px]">
        <div className="flex flex-col absolute left-2.5 py-2.5 h-full justify-between">
          <div className="h-[11.77px] w-[11.77px] bg-[rgb(255,184,2)] rounded-full"></div>
          <div className="h-[11.77px] w-[11.77px] bg-[rgb(255,184,2)] rounded-full"></div>
        </div>
        {children?.({ digits, rollKey })}

        {/* <div className="flex items-center justify-center w-full font-bold scale-90">
        </div> */}
        <div className="flex flex-col absolute right-2.5 py-2.5 h-full justify-between">
          <div className="h-[11.77px] w-[11.77px] bg-[rgb(255,184,2)] rounded-full"></div>
          <div className="h-[11.77px] w-[11.77px] bg-[rgb(255,184,2)] rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center -mt-[50px] relative">
        <div
          onClick={handleSpin}
          className="flex w-[100px] h-[100px] rounded-full bg-[rgb(38,76,170)] justify-center items-center"
        >
          <button className="flex justify-center items-center select-none outline-offset-2 min-w-10 px-4 font-bold text-[25px] leading-[32px] text-white bg-[rgb(38,76,170)] w-[85px] md:w-[90px] h-[85px] md:h-[90px] whitespace-nowrap m-1 border-2 border-white rounded-full">
            SPIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpinContainer;
