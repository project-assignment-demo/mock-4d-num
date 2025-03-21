
import { useEffect } from "react";
import { ResultCardHeaderProps } from "./type";

const CardHeader = ({
  title,
  logo,
  date,
  day,
  drawNo,
  primaryColor,
  availableTimes,
  setSelectedTime,
}: ResultCardHeaderProps) => {


  useEffect(() => {
    if (availableTimes?.length) {
      setSelectedTime(availableTimes[1]);
    }
  }, [])

  return (
    <div
      className="mb-[80px] h-[170px] w-full rounded-b-2xl rounded-t-[25px] relative"
      style={{ backgroundColor: primaryColor }}
    >
      <div className="flex flex-col justify-start mt-[15px]">
        <div className="flex justify-center items-center">
          <div className="w-[70px] h-[70px] bg-white rounded-full p-1">
            <img src={logo} alt="" />
          </div>
        </div>
        <p className="text-center text-white font-bold my-1">{title}</p>
      </div>
      <div className="px-5 mt-[-50px] absolute top-[180px] z-10 w-full h-full">
        <HeaderInfoCard date={date} day={day} drawNo={drawNo} />
      </div>
    </div>
  );
};

const HeaderInfoCard = ({
  date,
  day,
  drawNo,
}: {
  date: string;
  day: string;
  drawNo: string;
}) => {
  return (
    <div className="rounded-lg shadow-md bg-white w-full h-[72px]">
      <div className=" flex items-center justify-start p-4 h-full">
        <div className="flex flex-col justify-center flex-1 w-full h-[53px]">
          <p className="text-center font-extralight text-[12px]">Date</p>
          <p className="text-center font-bold">{date}</p>
          <p className="text-center font-bold">({day})</p>
        </div>
        <div className="h-[40%] border-l border-gray-300"></div>

        <div className="flex-1 w-full h-[53px] flex flex-col justify-between">
          <p className="text-center font-extralight text-[12px]">Draw No.</p>
          <p className="flex-grow text-center font-bold">{drawNo}</p>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
