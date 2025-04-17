import { AnalysisSectionProps } from "./type";
import AnalysisResultSection from "./components/AnalysisResultSection";
import LuckyBookContainer from "../../../LuckyBook/components/LuckyBookContainer";

const AnalysisSection = ({
  keyword,
  analysisCategories,
}: AnalysisSectionProps) => {
  return (
    <>
      {" "}
      <div className="block xl:hidden w-full max-w-[760px] h-full justify-center items-center mx-auto">
        <LuckyBookContainer
          title={"4D Number Analysis"}
          action={
            <div className="hidden relative -top-10 left-1/2 -translate-x-1/2 rounded-t-[46px] w-full md:w-[85%] rounded-[14px] max-w-[700px] gap-6 bg-white pb-2 md:flex justify-center items-center">
              <div className="flex flex-col w-full">
                <div className="bg-white border-none p-5 rounded-t-[46px]">
                  <div className="flex items-center justify-center rounded-[16px] bg-[rgb(243,243,243)]">
                    <p className="text-center text-[55px] font-bold">
                      {keyword}
                    </p>
                  </div>
                </div>
                <AnalysisResultSection
                  analysisNumber={keyword}
                  analysisCategories={analysisCategories}
                />
              </div>
            </div>
          }
        >
          <div className="block md:hidden">
            <div className="flex flex-col w-full">
              <div className="bg-white border-none p-5 rounded-t-[46px]">
                <div className="flex items-center justify-center rounded-[16px] bg-[rgb(243,243,243)]">
                  <p className="text-center text-[55px] font-bold">{keyword}</p>
                </div>
              </div>
              <AnalysisResultSection
                analysisNumber={keyword}
                analysisCategories={analysisCategories}
              />
            </div>
          </div>
        </LuckyBookContainer>
      </div>
      <div className="hidden xl:block h-[calc(-120px+100dvh)] max-w-[calc(1714px)] 2xl:max-w-[calc(1620px)] 2xl:px-[94px]">
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
