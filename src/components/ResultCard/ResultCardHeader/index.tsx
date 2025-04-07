import { useEffect, useState } from "react";
import { ResultCardHeaderProps } from "./type";
import { FiChevronDown } from "react-icons/fi";
import classNames from "classnames";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { getPrexOrNextResultByDate } from "../../../api/result";
import ResultDatePicker from "../../LotteryDatePicker";
import { getResultCountry } from "../../../utils";
import { useSiteStore } from "../../../store";
import { getMergedResults } from "../../../store/result/utils";

const ResultCardHeader = ({
  title,
  logo,
  date,
  day,
  drawNo,
  primaryColor,
  showTimeSelection,
  type,
  onUpdateSelectedTime,
}: ResultCardHeaderProps) => {
  return (
    <div
      className="mb-[80px] h-[170px] w-full rounded-b-2xl sm:rounded-t-[25px] relative"
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
      <div className="px-5 absolute top-3/4 w-full h-full">
        <ResultCardHeaderInfoCard
          date={date}
          day={day}
          drawNo={drawNo}
          type={type}
          showTimeSelection={showTimeSelection}
          onUpdateSelectedTime={onUpdateSelectedTime}
        />
      </div>
    </div>
  );
};

interface ResultCardHeaderInfoCardProps {
  date: string;
  day: string;
  drawNo: string;
  type: string;
  onUpdateSelectedTime: (index: number) => void;
  showTimeSelection: boolean;
}

const ResultHeaderDateInfo = ({
  date,
  day,
  type,
}: {
  date: string;
  day: string;
  type: string;
}) => {
  const updateResults = useSiteStore((state) => state.updateResults);

  const getResultByDate = async (action: "prev" | "next") => {
    const target = getResultCountry(type);
    const results = await getPrexOrNextResultByDate({
      action,
      target,
      date,
    });

    const oldResults = useSiteStore.getState().sourceResults;

    const mergedResults = getMergedResults(oldResults, results, target);

    updateResults(mergedResults);
  };

  return (
    <div className="flex flex-col justify-start items-center h-[53px] w-full">
      <p className="text-center font-extralight text-[12px]">Date</p>
      <div className="flex items-center">
        <MdChevronLeft
          onClick={() => getResultByDate("prev")}
          className="text-[24px] font-[400] block sm:hidden"
        />
        <ResultDatePicker className="sm:hidden">
          <div>
            <p className="text-center font-bold text-[14px]">{date}</p>
            <p className="text-center font-bold text-[14px]">({day})</p>
          </div>
        </ResultDatePicker>
        <div className="hidden sm:block">
          <p className="text-center font-bold text-[14px]">{date}</p>
          <p className="text-center font-bold text-[14px]">({day})</p>
        </div>
        <MdChevronRight
          onClick={() => getResultByDate("next")}
          className="text-[24px] font-[400] block sm:hidden"
        />
      </div>
    </div>
  );
};

const ResultCardHeaderInfoCard = ({
  date,
  day,
  drawNo,
  type,
  onUpdateSelectedTime,
  showTimeSelection,
}: ResultCardHeaderInfoCardProps) => {
  return (
    <div className="rounded-lg shadow-md bg-white w-full h-[72px] p-1">
      <div className="flex h-full">
        <ResultHeaderDateInfo date={date} day={day} type={type} />
        <hr className="h-[30px] border-l  border-gray-300 m-auto" />
        {showTimeSelection && (
          <ResultTimeSelection onUpdateSelectedTime={onUpdateSelectedTime} />
        )}
        <div className="w-full h-[53px] flex flex-col justify-between">
          <p className="text-center font-extralight text-[12px]">Draw No.</p>
          <p className="text-center font-bold">{drawNo || "----"}</p>
        </div>
      </div>
    </div>
  );
};

interface ResultCardTimeSelectionProps {
  onUpdateSelectedTime: (index: number) => void;
}

const ResultTimeSelection = ({
  onUpdateSelectedTime,
}: ResultCardTimeSelectionProps) => {
  const timeSelections = [
    {
      time: "15:30",
      value: "https://4dnum.com/assets/noonTSLSS-802b79f8.png",
    },
    {
      time: "19:30",
      value: "https://4dnum.com/assets/nightTSLHH-fa466649.png",
    },
  ];

  const [showSelection, setShowSelection] = useState(false);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(0);

  useEffect(() => {
    onUpdateSelectedTime(selectedTimeIndex);
  }, [selectedTimeIndex]);

  return (
    <>
      <div
        onClick={() => setShowSelection(!showSelection)}
        className="w-full h-full flex items-center justify-center relative cursor-pointer"
      >
        <div>
          <img
            className="w-[46px] h-[46px]"
            src={timeSelections[selectedTimeIndex].value}
            alt=""
          />
        </div>
        <FiChevronDown className="text-[24px]" />
        {showSelection && (
          <div className="w-[70px] h-fit absolute z-1 mt-2 bg-white border-black shadow-lg rounded-md top-1/1 flex flex-col items-center space-y-2 py-2">
            {/*  */}
            {timeSelections.map((selection, index) => {
              const cs = classNames(
                "w-[46px] h-[46px]",
                index !== selectedTimeIndex ? "filter grayscale" : ""
              );
              return (
                <img
                  key={selection.time}
                  onClick={() => {
                    setSelectedTimeIndex(index);
                    setShowSelection(false);
                  }}
                  className={cs}
                  src={selection.value}
                  alt=""
                />
              );
            })}
          </div>
        )}
      </div>

      <hr className="h-[30px] border-l border-gray-300 m-auto" />
    </>
  );
};

export default ResultCardHeader;
