import classNames from "classnames";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { MdShare } from 'react-icons/md';

const LotteryInfoHeader = (props: {
  logo: string;
  drawNo: string;
  date: Dayjs;
  showTimeSelection: boolean;
  selectedTimeIndex: number;
  onUpdateTime?: (ibdex: number) => void;
}) => {
  const {
    logo,
    drawNo,
    date,
    showTimeSelection,
    selectedTimeIndex,
    onUpdateTime,
  } = props;

  const LotteryIcon = () => {
    return (
      <div className="flex flex-col items-center">
        {/* icon image */}
        <div className="w-[70px] h-[70px] bg-white rounded-full p-[6px]">
          <img src={logo} alt="site-logo" />
        </div>
        {/* icon text */}
        <p className="text-center text-white font-bold">{"Magnum 4D"}</p>
      </div>
    );
  };

  const LotterySimpleInfo = () => {
    const timeSelections = [
      "https://4dnum.com/assets/noonTSLSS-802b79f8.png",
      "https://4dnum.com/assets/nightTSLHH-fa466649.png",
    ];
    const [showSelection, setShowSelection] = useState(false);

    return (
      <div className="bg-white w-[85%] h-[80px] rounded-2xl shadow-md flex items-center justify-center p-2 relative">
        <div className="flex-1 w-full h-full">
          <p className="font-extralight text-[12px]">Date</p>
          <p className="text-center font-bold">{date.format("YYYY-MM-DD")}</p>
          <p className="text-center font-bold">{`(${date.format("ddd")})`}</p>
        </div>
        <div className="h-[40%] border-l border-gray-300"></div>
        {showTimeSelection && (
          <>
            <div className="flex-1 w-full h-full flex items-center justify-center">
              <div>
                <img
                  className="w-[46px] h-[46px]"
                  src={timeSelections[selectedTimeIndex]}
                  alt=""
                />
              </div>
              <FiChevronDown
                onClick={() => setShowSelection(!showSelection)}
                className="text-[24px]"
              />
            </div>
            {showSelection && (
              <div className="w-[70px] h-fit absolute mt-2 bg-white border-black shadow-lg rounded-md top-1/1 flex flex-col items-center space-y-2 py-2">
                {/*  */}
                {timeSelections.map((selection, index) => {
                  const cs = classNames(
                    "w-[46px] h-[46px]",
                    index !== selectedTimeIndex ? "filter grayscale" : ""
                  );
                  return (
                    <img
                      onClick={() => onUpdateTime?.(index)}
                      className={cs}
                      src={selection}
                      alt=""
                    />
                  );
                })}
              
              </div>
            )}
            <div className="h-[40%] border-l border-gray-300"></div>
          </>
        )}
        <div className="flex-1 w-full h-full flex flex-col">
          <p className="font-extralight text-[12px]">Draw No.</p>
          <p className="flex-grow text-center font-bold">{drawNo}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black h-[160px] rounded-t-2xl rounded-b-4xl relative mb-[70px]">
      <div className="flex items-center justify-center py-[16px]">
        <LotteryIcon />
      </div>
      <div className="absolute right-[15px] top-[15px] text-white text-[24px] rounded-full hover:bg-gray-400 p-[4px] flex justify-center items-center">
        <MdShare/>
      </div>

      <div className="flex justify-center items-center">
        <LotterySimpleInfo />
      </div>
    </div>
  );
};

export default LotteryInfoHeader;
