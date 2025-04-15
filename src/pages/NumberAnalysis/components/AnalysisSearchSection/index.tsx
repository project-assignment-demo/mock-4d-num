import { useState } from "react";
import NumberAnalysisList from "./components/NumberAnalysisList";
import NumberAnalysisSearch from "./components/NumberAnalysisSearch";
import { AnalysisSearchSectionProps } from "./type";
import { getNumberAnalysisCompanies } from "../../../../store/company";
import { Company } from "../../../../store/company/type";
import LuckyBookContainer from "../../../LuckyBook/components/LuckyBookContainer";

const AnalysisSearchSection = ({
  onUpdateConfig,
}: AnalysisSearchSectionProps) => {
  const [companies, setCompanies] = useState(getNumberAnalysisCompanies());

  const handleSearchCompletion = (keyword: string) => {
    const selectedCategories = companies
      .filter((company) => company.selected)
      .map<Company>((company) => ({
        id: company.id,
        label: company.label,
        source: company.source,
      }));
    onUpdateConfig({ keyword, categories: selectedCategories });
  };

  return (
    <div className="w-full max-w-[760px] md:w-fit h-full flex justify-center items-center mx-auto">
      <LuckyBookContainer
        title={"4D Number Analysis"}
        className="bg-white"
        action={
          <div className="relative -top-10 left-1/2 -translate-x-1/2 rounded-t-[46px] w-[85%] rounded-[14px] max-w-[700px] gap-6 bg-white pt-10 pb-2 flex justify-center items-center">
            <div className="flex flex-col gap-4 w-[300px]">
              <NumberAnalysisSearch
                onSearchKeywordCompleted={handleSearchCompletion}
              />
              <NumberAnalysisList
                items={companies}
                onUpdateItems={setCompanies}
              />
            </div>
            <img className="hidden md:block h-fit w-[250px]" src="https://4dnum.com/assets/number-analysis-logo-852d7c48.svg"/>
          </div>
        }
      ></LuckyBookContainer>
    </div>
  );
};

export default AnalysisSearchSection;
