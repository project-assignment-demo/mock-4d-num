
import cs from "classnames";
import { useSiteStore } from "../../../../../store";
import { useMemo } from "react";
import LuckyBookSearchSection from "../../../components/LuckBookSearchBar";
import LuckyBookFilter from "../../../components/LuckyBookFilter";


const LuckyBookAction = () => {
    const luckyBookFilterPointer = useSiteStore(
      (state) => state.luckyBookFilterPointer
    );
  
    const decrementLuckyBookFilterPointer = useSiteStore(
      (state) => state.decrementLuckyBookFilterPointer
    );
  
    const isShowLoadPrevious = useMemo(() => {
      return Boolean(luckyBookFilterPointer.index);
    }, [luckyBookFilterPointer]);
  
    const filterSectionClassnames = cs(
      `flex items-center `,
      isShowLoadPrevious ? "justify-between" : "justify-end"
    );
    return (
      <div className="pt-20 md:pt-0">
        {isShowLoadPrevious && (
          <button
            onClick={decrementLuckyBookFilterPointer}
            className=" hidden md:block absolute left-1/2 -translate-x-1/2 top-[90%] h-9 w-[313px] bg-white shadow-md rounded-full border-none text-[17px] text-[#264CAA] cursor-pointer"
          >
            Load Previous
          </button>
        )}
        <div className="md:hidden w-[315px] flex flex-col gap-2 h-25 absolute left-[50%] bottom-[0px] translate-x-[-50%]">
          <div className="w-full">
            <LuckyBookSearchSection />
          </div>
          <div className={filterSectionClassnames}>
            {isShowLoadPrevious && (
              <button
                onClick={decrementLuckyBookFilterPointer}
                className="w-[145px] h-[32px] flex justify-center items-center bg-white rounded-[20px] leading-[1.2] px-4 border border-[rgb(198,197,198)]"
              >
                <p>Load previous</p>
              </button>
            )}
            <LuckyBookFilter />
          </div>
        </div>
      </div>
    );
  };

  export default LuckyBookAction;