import { useMemo, useState } from "react";

import { getCompanies } from "../../store/company";
import FourDTypesSelection from "./components/HotFourDTypeSelection";
import FourDYearSelection from "./components/HotFourDYearSelection";
import { getYears } from "./utils";
import HotNumberTable from "./components/HotNumberTable";
import { HotFourDNumberConfig } from "./type";
import { useQuery } from "@tanstack/react-query";
import { getHotNumbers } from "../../api/hotNumbers";
import LuckyBookContainer from "../LuckyBook/components/LuckyBookContainer";

const Hot4DNumber = () => {
  const [hotFourDNumberConfig, setHotFourDNumberConfig] =
    useState<HotFourDNumberConfig>({
      fourDType: null,
      year: null,
      showPrimary: false,
      showThreeD: false,
    });

  const years = useMemo(() => {
    return getYears();
  }, []);

  const fourDTypes = useMemo(() => {
    return getCompanies();
  }, []);

  const yearTitle = useMemo(() => {
    return hotFourDNumberConfig.year ?? "From Year";
  }, [hotFourDNumberConfig.year]);

  const hotFourDTypeTitle = useMemo(() => {
    return (
      fourDTypes.find((type) => type.id === hotFourDNumberConfig.fourDType)
        ?.label ?? "4D Type"
    );
  }, [hotFourDNumberConfig.fourDType]);

  function onUpdateSelectedYearHandler(year: string) {
    setHotFourDNumberConfig((config) => ({
      ...config,
      year,
    }));
  }

  function onUpdateSelectedFourDHandler(fourDType: string) {
    setHotFourDNumberConfig((config) => ({
      ...config,
      fourDType,
    }));
  }

  return (
    <div className="w-full max-w-[760px] md:w-fit h-full flex items-start mx-auto">
      <LuckyBookContainer
        title="Hot 4D Number"
        className="bg-white rounded-b-[34px]"
        action={
          <div className="bg-white rounded-b-[34px]">
            <div className="relative -top-10 left-1/2 -translate-x-1/2 w-[85%] max-w-[700px] flex flex-col justify-center items-center">
              <div className="rounded-[14px] bg-white flex justify-center items-center w-full h-[79px] shadow-md">
                <div className="w-full">
                  <FourDTypesSelection
                    items={fourDTypes}
                    title={hotFourDTypeTitle}
                    onUpdateSelectedFourD={onUpdateSelectedFourDHandler}
                  />
                </div>
                <div className="w-full">
                  <FourDYearSelection
                    items={years}
                    title={yearTitle}
                    onUpdateSelectedYear={onUpdateSelectedYearHandler}
                  />
                </div>
              </div>
              <div className="w-full flex jusitfy-center items-center mt-[15px]">
                <div className="w-full flex">
                  <p>Show 1ST, 2ND, 3RD only</p>
                  <input
                    type="checkbox"
                    checked={hotFourDNumberConfig.showPrimary}
                    onChange={(e) =>
                      setHotFourDNumberConfig({
                        ...hotFourDNumberConfig,
                        showPrimary: e.target.checked,
                      })
                    }
                  />
                </div>
                <div className="w-full self-end">
                  <div className="flex justify-end">
                    <p>Show 3D only</p>
                    <input
                      type="checkbox"
                      checked={hotFourDNumberConfig.showThreeD}
                      onChange={(e) =>
                        setHotFourDNumberConfig({
                          ...hotFourDNumberConfig,
                          showThreeD: e.target.checked,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-full">
                <Hot4DNumberContent
                  hotFourDNumberConfig={hotFourDNumberConfig}
                />
              </div>
            </div>
          </div>
        }
      ></LuckyBookContainer>
    </div>
  );
};

const Hot4DNumberContent = ({
  hotFourDNumberConfig,
}: // setHotFourDNumberConfig,
{
  hotFourDNumberConfig: HotFourDNumberConfig;
  // setHotFourDNumberConfig: (config: HotFourDNumberConfig) => void;
}) => {
  const { data, error } = useQuery({
    queryKey: [
      "fetchHot4DNumber",
      hotFourDNumberConfig.year,
      hotFourDNumberConfig.fourDType,
      hotFourDNumberConfig.showPrimary,
      hotFourDNumberConfig.showThreeD,
    ],
    queryFn: () => {
      if (hotFourDNumberConfig.year && hotFourDNumberConfig.fourDType) {
        return getHotNumbers({
          resultType: hotFourDNumberConfig.fourDType,
          year: hotFourDNumberConfig.year,
          showFirstThreePrize: hotFourDNumberConfig.showPrimary,
          showThreeD: hotFourDNumberConfig.showThreeD,
        });
      }
      return Promise.reject("Missing year or fourDType");
    },
    enabled:
      hotFourDNumberConfig.year !== null &&
      hotFourDNumberConfig.fourDType !== null, // Only run the query if both values are not null),
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col h-ful overflow-y-hidden">
      <div className="flex-grow p-[10px]">
        <HotNumberTable numbers={data} />
      </div>
    </div>
  );
};

export default Hot4DNumber;
