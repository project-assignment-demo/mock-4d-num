import AnalysisResultCard from "../AnalysisResultCard";
import { FortuneNumberMeaningCardProps } from "./type";

const FortuneNumberMeaningCard = ({ fortureNumberMeaning }: FortuneNumberMeaningCardProps) => {
  return (
    <AnalysisResultCard title="Forture Number Meaning">
      <div className="flex flex-col h-full pr-[20px] overflow-y-scroll scroll-box">
        {fortureNumberMeaning.map((mean) => {
          return (
            <div className="flex items-center gap-[15px]">
              <img
                className="w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[30px] lg:h-[30px] xl:w-[20px] xl:h-[20px] 2xl:w-[50px] 2xl:h-[50px]"
                src={mean.image}
              />
              <div className="flex justify-between items-center w-full">
                <p className="text-[14px] font-[400] ml-2 mr-10 xl:mx-2">
                  {mean.title}
                </p>
                <p className="text-center text-[rgb(157,157,157)] text-[13px]">
                  {mean.totalWin}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </AnalysisResultCard>
  );
};

export default FortuneNumberMeaningCard;
