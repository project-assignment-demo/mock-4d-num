import AnalysisResultCard from "../AnalysisResultCard";

const AnalysisResultLoadingCard = () => {
  return (
    <div className="w-full h-full p-[10px]">
      <AnalysisResultCard>
        <div className="flex justify-center items-center h-full">
          <p className="text-center">Loading ...</p>
        </div>
      </AnalysisResultCard>
    </div>
  );
};

export default AnalysisResultLoadingCard;
