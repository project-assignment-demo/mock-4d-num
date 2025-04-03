import { useQuery } from "@tanstack/react-query";
import { getFourDNumberAnalysisResult } from "../../../../../../api/numberAnalysis";
import { AnalysisResultSectionProps } from "./type";
import AnalysisResultCard from "../AnalysisResultCard";
import { permutation } from "../../../../../../store/company";

const AnalysisResultSection = ({
  analysisCategories,
  analysisNumber,
}: AnalysisResultSectionProps) => {
  function getWinHistoryText(source: string) {
    if (source === "first") return "1ST";
    if (source === "second") return "2ND";
    if (source === "third") return "3RD";
    if (source === "consolation") return "CON";
    if (source === "special") return "SPE";
  }
  let categories = [...analysisCategories].map(category => category.id);
  const gotPermutation = analysisCategories.find(category => category.id === permutation.id);
  if (gotPermutation) {
    categories = analysisCategories.filter(category => category.id !== permutation.id).map(category => category.id);
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["analysis", analysisNumber, analysisCategories],
    queryFn: () =>
      getFourDNumberAnalysisResult({
        analysisNumber,
        analysisCategories: categories,
        permutation: Boolean(gotPermutation),
      }),
  });

  if (isLoading)
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <p className="text-center">Loading ...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <p className="text-center">{error.message}</p>
      </div>
    );

  const { totalWinHistory, fortureNumberMeaning, winningHistories } = data!;

  return (
    <div className="flex flex-col xl:flex-row w-full h-full gap-2">
      <div className="w-full flex flex-col gap-2">
        <AnalysisResultCard title="Total Win History">
          <div className="grid grid-cols-5 gap-4">
            {totalWinHistory.map((history) => {
              // TODO: if 0 should icon is grey
              return (
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  {history.type === "image" ? (
                    <img className="w-[40px] h-[40px]" src={history.source} />
                  ) : (
                    <div className="flex justify-center items-center w-[40px] h-[40px] bg-[rgb(255,184,2)] rounded-full">
                      <p className="text-[14px] font-bold text-[rgb(130,39,0)]">
                        {getWinHistoryText(history.source)}
                      </p>
                    </div>
                  )}
                  <div className="w-[40px] flex justify-center items-center bg-[rgb(239,239,239)] rounded-lg">
                    <p className="text-center text-[10px] font-semibold">
                      {history.totalWin}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnalysisResultCard>
        <AnalysisResultCard title="Forture Number Meaning">
          <div className="flex flex-col h-full overflow-y-auto">
            {fortureNumberMeaning.map((mean) => {
              return (
                <div className="flex items-center">
                  <img className="w-[28px] h-[28px]" src={mean.image} />
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p>{mean.title}</p>
                    </div>
                    <div>
                      <p className="text-center">{mean.totalWin}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnalysisResultCard>
      </div>
      <div className="w-full">
        <AnalysisResultCard title="Winning History">
          <div className="flex flex-col h-full overflow-y-auto">
            {winningHistories.map((history) => {
              return (
                <div className="flex items-center justify-between">
                  <img className="w-[28px] h-[28px]" src={history.image} />
                  <p>{history.number}</p>
                  <p>{history.prize}</p>
                  <p>{history.date}</p>
                  <p>{history.gap}</p>
                </div>
              );
            })}
          </div>
        </AnalysisResultCard>
      </div>
    </div>
  );
};

export default AnalysisResultSection;
