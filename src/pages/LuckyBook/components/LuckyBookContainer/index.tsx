import { PropsWithChildren, useMemo, useState } from "react";
import BackArrow from "../../../../assets/backArrow.svg?react";
import { useNavigate } from "react-router";
import LuckyBookSearchSection from "../LuckBookSearchBar";
import LuckyBookFilter, { LuckyBookFilterData } from "../LuckyBookFilter";

interface LuckyBookContainerProps extends PropsWithChildren {
  title: string;
}

const LuckyBookContainer = ({ children, title }: LuckyBookContainerProps) => {
  const navigate = useNavigate();

  ///TODO: temp use here
  const [selectedFilter, setSelectedFilter] =
    useState<LuckyBookFilterData | null>(null);

  const isShowLoadMore = useMemo(() => {
    return Boolean(selectedFilter && selectedFilter.index);
  }, [selectedFilter]);

  function toBack() {
    navigate("/lucky-book");
  }

  return (
    <div className="w-full md:w-[760px] 2xl:w-[900px] md:mt-[65px] xl:mt-[95px] flex items-center justify-center flex-col gap-2 relative">
      <div className="relative w-full  pb-20 md:pb-0">
        <div className="flex relative justify-center items-center overflow-hidden bg-[rgb(38,76,170)] w-full md:w-[768px] 2xl:w-[900px] h-[150px] md:h-[163px] rounded-b-[34px] md:rounded-t-[12px] md:rounded-b-[34px]">
          <p className="text-[22px] leading-[26px] font-[900] place-content-center text-white md:text-[30px]">
            {title}
          </p>
          <button
            onClick={toBack}
            className="absolute top-[20px] left-[20px] z-2  w-[34px] h-[34px] rounded-full flex justify-center items-center bg-[rgb(241,241,241)]"
          >
            <BackArrow />
          </button>
        </div>
        <div className="md:hidden w-[315px] flex flex-col h-25 absolute left-[50%] bottom-[0px] translate-x-[-50%]">
          <div className="w-full">
            <LuckyBookSearchSection type={"all"} />
          </div>
          <div className="flex">
            {isShowLoadMore && <p>Load More</p>}
            <LuckyBookFilter onSelected={(data) => setSelectedFilter(data)} />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default LuckyBookContainer;
