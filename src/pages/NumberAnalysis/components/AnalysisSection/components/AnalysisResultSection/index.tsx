import { useQuery } from "@tanstack/react-query";
import { getFourDNumberAnalysisResult } from "../../../../../../api/numberAnalysis";
import { AnalysisResultSectionProps } from "./type";
import { permutation } from "../../../../../../store/company";
import TotalWinHistoryCard from "../TotalWinHistoryCard";
import FortuneNumberMeaningCard from "../FortuneNumberMeaningCard";
import WinningHistoryCard from "../WinningHistoryCard";
import AnalysisResultLoadingCard from "../AnalysisResultLoadingCard";
import { Company } from "../../../../../../store/company/type";

function useFourDNumberAnalysisResult({
  analysisCategories,
  analysisNumber,
}: {
  analysisCategories: Company[];
  analysisNumber: string;
}) {
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

  return { data, isLoading, error };
}

const AnalysisResultSection = ({
  analysisCategories,
  analysisNumber,
}: AnalysisResultSectionProps) => {
  const { isLoading, data, error } = useFourDNumberAnalysisResult({
    analysisCategories,
    analysisNumber,
  });

  if (isLoading || !data) return <AnalysisResultLoadingCard />;

  if (error)
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <p className="text-center">{error.message}</p>
      </div>
    );

  const { totalWinHistory, fortureNumberMeaning, winningHistories } = data;

  return (
    <>
      <div className="xl:w-[32%] h-full flex flex-col gap-2">
        <TotalWinHistoryCard totalWinHistory={totalWinHistory} />
        <FortuneNumberMeaningCard fortureNumberMeaning={fortureNumberMeaning} />
      </div>
      <div className="xl:w-[32%]">
        <WinningHistoryCard winningHistories={winningHistories} />
      </div>
    </>
  );
};

export default AnalysisResultSection;
