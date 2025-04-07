import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router";
import { searchLuckyBookContent } from "../../../api/luckyBook";
import { useRef, useState } from "react";
import ScrollToTopButton from "../../../components/ScrollToTopButton";
import { MdCancel } from "react-icons/md";
import { LuckyBookSearchCategory, useSiteStore } from "../../../store";

function useRouterQuery() {
  return new URLSearchParams(useLocation().search);
}

const LuckyBookSearchResult = () => {
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

  const [isRefReady, setIsRefReady] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const query = useRouterQuery();
  const searchKeyword = query.get("query");
  if (!searchKeyword) return;

  // this need get from global state
  const LuckyBookSearchCategory = useSiteStore(
    (state) => state.luckyBookSearchCategory
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ["luckyBookSearch", query],
    queryFn: () =>
      searchLuckyBookContent({
        locale: "en",
        type: LuckyBookSearchCategory,
        keyword: searchKeyword,
      }),
  });

  if (isLoading) return <div>Loading ...</div>;

  if (error) return <div>Error: {error.message}</div>;

  if (!data) return <div>Not Found Data</div>;

  const { data: books } = data;

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[40%] min-w-[350px] text-[rgb(38,76,170)] flex items-center justify-between">
        <p>
          Found 12 result for{" "}
          <span className="font-[900]">{searchKeyword}</span>
        </p>
        <MdCancel
          onClick={() => clearAndNavigateLuckBook(LuckyBookSearchCategory)}
          className="text-[20px]"
        />
      </div>

      <div
        ref={containerRef}
        className="flex flex-col w-[760px] mx-auto py-8 overflow-y-auto h-full"
      >
        <div className="flex flex-wrap w-full gap-5 px-2">
          {books.map((item) => (
            <div
              className="w-[150px] min-h-[250px] flex flex-col items-center bg-white gap-2 p-[20px] rounded-[18px]"
              key={item.number}
            >
              <div className="w-[120px] h-[33.5px] border border-[rgb(198,198,198)] bg-[rgb(255,255,255)] rounded-[13px]">
                <p className="text-black text-[22px] leading-[26px] font-[900] mt-[3px] text-center">
                  {item.number}
                </p>
              </div>
              <img
                src={item.image}
                className="w-[120px] h-[120px] rounded-[14px]"
              />
              <button
                onClick={() =>
                  navigate(`/lucky-book-category-list/${item.cat}`)
                }
                className="bg-[rgb(38,76,170)] text-white  w-[49px] h-[21px] rounded-[5px] flex items-center justify-center hover:bg-[#E2E8F0]"
              >
                {item.cat}
              </button>
              <div className="w-full text-center">
                <p className="text-black text-[14px] leading-[17px] font-[400]">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {isRefReady && <ScrollToTopButton scrollRef={containerRef} />}
      </div>
    </div>
  );
};

export default LuckyBookSearchResult;
