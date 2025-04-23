import AnalysisResultCard from "../AnalysisResultCard";
import cs from "classnames";
import { TotalWinHistoryCardProps } from "./type";

const TotalWinHistoryCard = ({ totalWinHistory }: TotalWinHistoryCardProps) => {
  function getWinHistoryText(source: string) {
    if (source === "first") return "1ST";
    if (source === "second") return "2ND";
    if (source === "third") return "3RD";
    if (source === "consolation") return "CON";
    if (source === "special") return "SPE";
  }

  return (
    <AnalysisResultCard title="Total Win History">
      <>
        <div className="grid grid-cols-5 gap-x-2.5">
          {totalWinHistory
            .filter((h) => h.type === "text")
            .map((history) => {
              return (
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="flex justify-center items-center w-[35px] h-[35px] md:w-[60px] md:h-[60px] xl:w-[40px] xl:h-[40px] bg-[rgb(255,184,2)] rounded-full">
                    <p className="text-[14px] md:text-[22px] xl:text-[14px] font-bold text-[rgb(130,39,0)]">
                      {getWinHistoryText(history.source)}
                    </p>
                  </div>
                  <div className="max-w-[35px] md:max-w-[65px] xl:max-w-[35px] w-full flex justify-center items-center bg-[rgb(239,239,239)] rounded-lg">
                    <p className="text-center text-[11px] md:text-[17px] xl:text-[11px] font-semibold">
                      {history.totalWin}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <hr className="my-[20px]" />
        <div className="grid grid-cols-5 gap-x-2.5 gap-y-5">
          {totalWinHistory
            .filter((h) => h.type === "image")
            .map((history) => {
              const imageClassname = cs(
                "w-[35px] h-[35px] md:w-[60px] md:h-[60px] xl:w-[40px] xl:h-[40px]",
                history.totalWin ? "" : "grayscale-[1]"
              );
              return (
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="flex justify-center items-center rounded-full">
                    <img className={imageClassname} src={history.source} />
                  </div>
                  <div className="max-w-[35px] md:max-w-[65px] xl:max-w-[35px] w-full flex justify-center items-center bg-[rgb(239,239,239)] rounded-lg">
                    <p className="text-center text-[11px] md:text-[17px] xl:text-[11px] font-semibold">
                      {history.totalWin}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    </AnalysisResultCard>
  );
};

export default TotalWinHistoryCard;
