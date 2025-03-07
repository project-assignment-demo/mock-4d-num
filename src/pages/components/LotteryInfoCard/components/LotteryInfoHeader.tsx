import { LotteryInfoHeaderProps } from "../types";

const LotteryInfoHeader = (props: LotteryInfoHeaderProps) => {
  const { logo, draw } = props;

  const LotteryIcon = () => {
    return (
      <div className="flex flex-col items-center">
        {/* icon image */}
        <div className="w-[70px] h-[70px] bg-white rounded-full p-[6px]">
          <img src={logo.url} alt="site-logo" />
        </div>
        {/* icon text */}
        <p className="text-center text-white font-bold">{logo.title}</p>
      </div>
    );
  };

  const LotterySimpleInfo = () => {
    return (
      <div className="bg-white h-[80px] w-[380px] rounded-2xl shadow-md flex items-center">
        {/* date */}
        <div className="h-[53px] flex-auto items-center">
          <p className="font-extralight text-[12px]">Date</p>
          <p className="text-center font-bold">
            {draw.date.format("YYYY-MM-DD")}
          </p>
          <p className="text-center font-bold">{`(${draw.date.format(
            "ddd"
          )})`}</p>
        </div>
        <hr />
        {/* draw no */}
        <div className="h-[53px] flex flex-col flex-auto justify-center items-center m-auto">
          <p className="font-extralight text-[12px]">Draw No.</p>
          <p className="flex-grow text-center font-bold">{draw.no}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black h-[160px] rounded-t-2xl rounded-b-4xl relative mb-[70px]">
      <div className="flex items-center justify-center py-[16px]">
        <LotteryIcon />
      </div>
      {/* absolute card */}
      <div className="absolute -bottom-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
        <LotterySimpleInfo />
      </div>
    </div>
  );
};

export default LotteryInfoHeader;