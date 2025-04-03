import { useMemo, useState } from "react";

import { getCompanies } from "../../store/company";
import FourDTypesSelection from "./components/HotFourDTypeSelection";
import FourDYearSelection from "./components/HotFourDYearSelection";
import { getYears } from "./utils";
import HotNumberTable from "./components/HotNumberTable";
import { HotFourDNumberConfig } from "./type";
import { useQuery } from "@tanstack/react-query";
import { getHotNumbers } from "../../api/hotNumbers";

const Hot4DNumber = () => {
  const years = useMemo(() => {
    return getYears();
  }, []);

  const fourDTypes = useMemo(() => {
    return getCompanies();
  }, []);

  const [hotFourDNumberConfig, setHotFourDNumberConfig] =
    useState<HotFourDNumberConfig>({
      fourDType: null,
      year: null,
      showPrimary: false,
      showThreeD: false,
    });

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
    <div className="h-[calc(-95px-0.5rem+100dvh)] max-h-[calc(1345px-0.5rem)]">
      <div className="flex">
        <div className="w-full">
          <FourDYearSelection
            items={years}
            title={yearTitle}
            onUpdateSelectedYear={onUpdateSelectedYearHandler}
          />
        </div>
        <div className="w-full">
          <FourDTypesSelection
            items={fourDTypes}
            title={hotFourDTypeTitle}
            onUpdateSelectedFourD={onUpdateSelectedFourDHandler}
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-full flex">
          <p>Show 1ST, 2ND, 3RD only</p>
          <input
            type="checkbox"
            checked={hotFourDNumberConfig.showPrimary}
            onChange={(e) =>
              setHotFourDNumberConfig((config) => ({
                ...config,
                showPrimary: e.target.checked,
              }))
            }
          />
        </div>
        <div className="w-full">
          <p>Show 3D only</p>
          <input
            type="checkbox"
            checked={hotFourDNumberConfig.showThreeD}
            onChange={(e) =>
              setHotFourDNumberConfig((config) => ({
                ...config,
                showThreeD: e.target.checked,
              }))
            }
          />
        </div>
      </div>
      <div className="flex flex-col h-full bg-gray-400 overflow-y-hidden">
        <div className="flex-grow bg-red-400 p-[10px]">
          <HotNumberTable numbers={data} />
        </div>
      </div>
    </div>
  );
};

export default Hot4DNumber;
