import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { searchLuckyBookContent } from "../../../../../api/luckyBook";
import { useSiteStore } from "../../../../../store";
import { useNavigate } from "react-router";
import ScrollToTopButton from "../../../../../components/ScrollToTopButton";
import { SearchLuckyBookDto } from "../../../../../api/luckyBook/type";

const LuckyBookSearchResultContent = ({ keyword, onUpdateResult }: { keyword: string, onUpdateResult?: (books:SearchLuckyBookDto['data']) => void }) => {
  const navigate = useNavigate();
  const [isRefReady, setIsRefReady] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const LuckyBookSearchCategory = useSiteStore(
    (state) => state.luckyBookSearchCategory
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ["luckyBookSearch", keyword],
    queryFn: () =>
      searchLuckyBookContent({
        locale: "en",
        type: LuckyBookSearchCategory,
        keyword: keyword,
      }),
  });

  if (isLoading) return <div>Loading ...</div>;

  if (!data || error) return <div>Error</div>;

  

  const { data: books } = data;

  onUpdateResult?.(books);

  return (
    <div
      ref={containerRef}
      className="mt-10 md:mt-0 flex flex-col w-full mx-auto py-8 overflow-y-auto h-full"
    >
      <div className="flex items-center justify-center flex-wrap w-full gap-5 px-2">
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
              onClick={() => navigate(`/lucky-book-category-list/${item.cat}`)}
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
  );
};

export default LuckyBookSearchResultContent;
