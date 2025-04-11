import { useNavigate } from "react-router";
import Cancel from "../../../../../assets/cancel.svg?react";
import { LuckyBookSearchCategory, useSiteStore } from "../../../../../store";
import LuckyBookSearchSection from "../../../components/LuckBookSearchBar";

const LuckyBookSearchResultAction = ({
  keyword,
  totalResult,
}: {
  keyword: string;
  totalResult: number | null;
}) => {
  const navigate = useNavigate();
  function clearAndNavigateLuckBook(type: LuckyBookSearchCategory) {
    let path = "";
    if (type === "all") {
      path = "/lucky-book";
    } else {
      path = `/lucky-book-category-list/${type}`;
    }

    navigate(path);
  }

  const LuckyBookSearchCategory = useSiteStore(
    (state) => state.luckyBookSearchCategory
  );

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[90%]">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="w-full md:hidden">
          <LuckyBookSearchSection />
        </div>
        {totalResult !== null && (
          <div className=" py-1 pl-[10px] md:pl-[14px] min-w-[250px] max-w-[82%] md:min-w-[350px] md:max-w-[40%] flex justify-center items-center bg-white shadow-md rounded-full border-none text-[17px] text-[#264CAA]">
            <p className="flex-grow text-[14px] md:text-[17px] mx-auto text-center">
              Found {totalResult} result for{" "}
              <span className="font-[900]">{keyword}</span>
            </p>
            <Cancel
              onClick={() => clearAndNavigateLuckBook(LuckyBookSearchCategory)}
              className="flex-1 w-6 h-6 cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LuckyBookSearchResultAction;
