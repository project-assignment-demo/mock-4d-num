import { useSiteStore } from "../../../store";
import AnalysisSection from "./AnalysisSection";

const Analysis = () => {

    const analysisConfig = useSiteStore(state => state.analysisConfig);

    return (
           <AnalysisSection
      keyword={analysisConfig.keyword}
      analysisCategories={analysisConfig.categories}
    />
    );
}

export default Analysis;