import { useState } from "react";
import AnalysisSearchSection from "./components/AnalysisSearchSection";
import AnalysisSection from "./components/AnalysisSection";
import { AnalysisConfig } from "./type";

const NumberAnalysis = () => {
  const [analysisConfig, setAnalysisConfig] = useState<AnalysisConfig>();

  return analysisConfig ? (
    <AnalysisSection
      keyword={analysisConfig.keyword}
      analysisCategories={analysisConfig.categories}
    />
  ) : (
    <AnalysisSearchSection onUpdateConfig={setAnalysisConfig} />
  );
};

export default NumberAnalysis;
