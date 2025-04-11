import { PropsWithChildren, ReactNode, useMemo } from "react";
import cs from "classnames";
import { useSiteStore } from "../../../../store";

interface LuckyBookContainerProps extends PropsWithChildren {
  title: string;
  action?: ReactNode;
  navIcon?: ReactNode;
}

const LuckyBookContainer = ({
  children,
  title,
  action,
  navIcon,
}: LuckyBookContainerProps) => {
  const luckyBookFilterPointer = useSiteStore(
    (state) => state.luckyBookFilterPointer
  );

  const decrementLuckyBookFilterPointer = useSiteStore(
    (state) => state.decrementLuckyBookFilterPointer
  );

  const isShowLoadPrevious = useMemo(() => {
    console.log(luckyBookFilterPointer);
    return Boolean(luckyBookFilterPointer.index);
  }, [luckyBookFilterPointer]);

  console.log(isShowLoadPrevious);



  const filterSectionClassnames = cs(
    `flex items-center `,
    isShowLoadPrevious ? "justify-between" : "justify-end"
  );

  return (
    <div className="w-full md:w-[760px] 2xl:w-[900px] flex items-center justify-center flex-col gap-2 relative">
      <div className="relative w-full">
        <div className="flex relative justify-center items-center overflow-hidden bg-[rgb(38,76,170)] w-full md:w-[768px] 2xl:w-[900px] h-[150px] md:h-[163px] rounded-b-[34px] md:rounded-t-[12px] md:rounded-b-[34px]">
          <p className="text-[22px] leading-[26px] font-[900] place-content-center text-white md:text-[30px]">
            {title}
          </p>
          <div className="absolute top-[20px] left-[20px] z-2">{navIcon}</div>
        </div>
        {/* {isShowLoadPrevious && (
          <button onClick={decrementLuckyBookFilterPointer} className=" hidden md:block absolute left-1/2 -translate-x-1/2 top-[90%] h-9 w-[313px] bg-white shadow-md rounded-full border-none text-[17px] text-[#264CAA] cursor-pointer">
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
        </div> */}

        {action}
      </div>
      {children}
    </div>
  );
};

export default LuckyBookContainer;
