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
  let categories = [...analysisCategories].map((category) => category.id);
  const gotPermutation = analysisCategories.find(
    (category) => category.id === permutation.id
  );
  if (gotPermutation) {
    categories = analysisCategories
      .filter((category) => category.id !== permutation.id)
      .map((category) => category.id);
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
    <>
      <div className="xl:w-[32%] h-full flex flex-col gap-2">
        <AnalysisResultCard title="Total Win History">
          <>
            <div className="grid grid-cols-5 gap-x-2.5">
              {totalWinHistory
                .filter((h) => h.type === "text")
                .map((history) => {
                  // TODO: if 0 should icon is grey

                  return (
                    <div className="flex flex-col items-center justify-center gap-2">
                      {/* {history.type === "image" ? (
                    <img className="w-[40px] h-[40px]" src={history.source} />
                  ) : (
                   
                  )} */}
                      <div className="flex justify-center items-center w-[40px] h-[40px] bg-[rgb(255,184,2)] rounded-full">
                        <p className="text-[14px] font-bold text-[rgb(130,39,0)]">
                          {getWinHistoryText(history.source)}
                        </p>
                      </div>
                      <div className="w-[40px] flex justify-center items-center bg-[rgb(239,239,239)] rounded-lg">
                        <p className="text-center text-[10px] font-semibold">
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
                  // TODO: if 0 should icon is grey
                  return (
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="flex justify-center items-center w-[40px] h-[40px] bg-[rgb(255,184,2)] rounded-full">
                        <img
                          className="w-[40px] h-[40px]"
                          src={history.source}
                        />
                      </div>
                      <div className="w-[40px] flex justify-center items-center bg-[rgb(239,239,239)] rounded-lg">
                        <p className="text-center text-[10px] font-semibold">
                          {history.totalWin}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </>
        </AnalysisResultCard>
        <AnalysisResultCard title="Forture Number Meaning">
          <div className="flex flex-col overflow-y-auto h-[330px] pr-[20px]">
            {fortureNumberMeaning.map((mean) => {
              return (
                <div className="flex items-center gap-[15px]">
                  <img
                    className="w-[28px] h-[28px] xl:w-[50px] xl:h-[50px]"
                    src={mean.image}
                  />
                  <div className="flex justify-between items-center w-full">
                    <p className="text-[14px] font-[400] ml-2 mr-10 xl:mx-2">
                      {mean.title}
                    </p>
                    <p className="text-center">{mean.totalWin}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnalysisResultCard>
      </div>
      <div className="xl:w-[32%]">
        <AnalysisResultCard title="Winning History">
          <div className=" h-[680px] overflow-y-auto">
            <table className=" table-fixed text-[12px] w-full rounded-[9px]">
              <thead className="bg-[rgb(255,184,2)] h-[30px] sticky">
                <tr className="text-[11px] font-bold">
                  <th></th>
                  <th className="text-center text-[rgb(130,39,0)]">4D</th>
                  <th className="text-center text-[rgb(130,39,0)]">Prize</th>
                  <th className="text-center text-[rgb(130,39,0)]">Date</th>
                  <th className="text-center text-[rgb(130,39,0)]">Gap</th>
                </tr>
              </thead>
              <tbody>
                {winningHistories.map((history) => {
                   const isPrimary = history.prize === '1ST' || history.prize === '2ND' || history.prize === '3RD';
                  return (
                    <tr>
                      <td className="text-center">
                        <img
                          className="w-[26px] h-[26px]"
                          src={history.image}
                        />
                      </td>
                      <td className="text-center font-medium text-[11px]">
                        <p>{history.number}</p>
                      </td>
                      <td className="text-center font-medium text-[11px]">
                        <div className={`w-[90%] rounded-[3px] ${isPrimary ? 'bg-[rgb(237,64,64)] text-white': 'bg-[rgb(239,239,239)] text-black'}  mx-auto`}>
                          <p className="">{history.prize}</p>
                        </div>
                      </td>
                      <td className="text-center font-medium text-[11px]">
                        <p>{history.date}</p>
                      </td>
                      <td className="text-center font-medium text-[11px]">
                        <p>{history.gap}</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* {winningHistories.map((history) => {
              return (
                <div className="flex items-center justify-between">
                  <img className="w-[28px] h-[28px]" src={history.image} />
                  <p>{history.number}</p>
                  <p>{history.prize}</p>
                  <p>{history.date}</p>
                  <p>{history.gap}</p>
                </div>
              );
            })} */}
          </div>
        </AnalysisResultCard>
      </div>
    </>
  );
};

export default AnalysisResultSection;
