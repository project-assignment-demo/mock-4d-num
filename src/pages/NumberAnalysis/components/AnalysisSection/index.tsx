import { AnalysisSectionProps } from "./type";
import AnalysisResultSection from "./components/AnalysisResultSection";

const AnalysisSection = ({
  keyword,
  analysisCategories,
}: AnalysisSectionProps) => {
  return (
    <div className="flex flex-col xl:flex-row gap-2">
      <div className="flex-1/3">
        <p>{keyword}</p>
      </div>
      <div className="flex-2/3">
        <AnalysisResultSection
          analysisNumber={keyword}
          analysisCategories={analysisCategories}
        />
      </div>
    </div>
  );
};

export default AnalysisSection;
