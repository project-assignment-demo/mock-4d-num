import { useState } from "react";
import NumberAnalysisList from "./components/NumberAnalysisList";
import NumberAnalysisSearch from "./components/NumberAnalysisSearch";
import { AnalysisSearchSectionProps } from "./type";
import { getNumberAnalysisCompanies } from "../../../../store/company";
import { Company } from "../../../../store/company/type";

const AnalysisSearchSection = ({
    onUpdateConfig,
  }: AnalysisSearchSectionProps) => {
    const [companies, setCompanies] = useState(getNumberAnalysisCompanies());
  
    const handleSearchCompletion = (keyword: string) => {
      const selectedCategories = companies
        .filter((company) => company.selected)
        .map<Company>((company) =>({
          id:  company.id,
          label: company.label,
          source: company.source,
        }));
      onUpdateConfig({ keyword, categories: selectedCategories });
    };
  
    return (
      <div className="flex flex-col">
        <NumberAnalysisSearch onSearchKeywordCompleted={handleSearchCompletion} />
        <NumberAnalysisList items={companies} onUpdateItems={setCompanies} />
      </div>
    );
  };


export default AnalysisSearchSection;