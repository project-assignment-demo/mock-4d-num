import { AnalysisSectionProps } from "./type";
import AnalysisResultSection from "./components/AnalysisResultSection";

const AnalysisSection = ({
  keyword,
  analysisCategories,
}: AnalysisSectionProps) => {
  return (
    <>
      {" "}
      <div className="block lg:hidden">Mobile view</div>
      <div className="hidden lg:block h-[calc(-120px+100dvh)]">
        <div className=" flex flex-col lg:flex-row w-full justify-evenly 2xl:max-w-[1714px] h-full">
          <>
            <div className="xl:w-[32%]  h-full flex flex-col gap-16 items-center bg-white border-none p-5 rounded-[46px]">
              <div className="aspect-square flex justify-center items-center rounded-[16px] w-full bg-[rgb(243,243,243)]">
                <p className="text-center text-[55px] font-bold">{keyword}</p>
              </div>
              <img
                className="w-[80%] aspect-square "
                src="https://4dnum.com/assets/number-analysis-logo-852d7c48.svg"
              />
            </div>
            <AnalysisResultSection
              analysisNumber={keyword}
              analysisCategories={analysisCategories}
            />
          </>
        </div>
      </div>
    </>
  );
};

export default AnalysisSection;
