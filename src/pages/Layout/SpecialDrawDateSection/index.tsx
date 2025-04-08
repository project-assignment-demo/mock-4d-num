import dayjs from "dayjs";
import { useSiteStore } from "../../../store";

const SpecialDrawDateSection = () => {
  const specialDrawResults = useSiteStore((state) => state.specialDrawResults);

  const specialDrawDateTitle = "Special Draw Date";

  const specialDrawDateDescription = "Upcoming Special Draw Date";

  const specialDrawDateIcon =
    "https://4dnum.com/assets/realistic8ball-db33aff8.png";

  return (
    <div className="hidden xl:block absolute z-[9999] w-[206px] right-[0px] top-1/2 -translate-y-1/2">
      <div className="w-full rounded-l-[50px] bg-[rgb(255,255,255)]">
        <div className="flex flex-col items-center justify-center relative">
          <img
            className="w-[102px] h-[102px] absolute -top-[70px]"
            src={specialDrawDateIcon}
            alt="black ball"
          />
          <div className="flex flex-col items-center justify-center py-8">
            <p className="text-[17px] text-center leading-[21.09px] font-bold text-[rgb(118,118,118)]">
              {specialDrawDateTitle}
            </p>
            <p className="text-[15px] text-center leading-[17.58px] font-light text-[rgb(118,118,118)] py-[6px]">
              {specialDrawDateDescription}
            </p>
            <div className="w-[90%]">
              <div className="flex flex-col justify-center py-[5px] items-center">
                {specialDrawResults.map((result) => {
                  return (
                    <>
                      <p
                        key={result}
                        className="font-normal text-[14px] leading-[17.58px] text-center p-[9px]"
                      >
                        {"• "} {result}
                        {"("}
                        {dayjs(new Date(result)).format("ddd")}
                        {"}"}
                      </p>
                      <hr className="h-[0px] opacity-60 w-full text-[rgb(205,205,205)]" />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialDrawDateSection;
