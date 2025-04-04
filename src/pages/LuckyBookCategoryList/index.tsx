import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { getLuckyBook } from "../../api/luckyBook";
import { LuckyBookDto } from "../../api/luckyBook/type";

const LuckyBookCategoryList = () => {
  const [page, setPage] = useState<number>(0); // Start at page 0
  const loadMoreRef = useRef<HTMLDivElement | null>(null); // Ref for the "Load More" div
  const observerRef = useRef<IntersectionObserver | null>(null); // Ref for the observer

  // Query to fetch data based on the current page
  const { data, isLoading, isFetching, isError } = useQuery<LuckyBookDto[], Error>({
    queryKey: ["items", page],
    placeholderData: (prev) => prev, // Query key includes the page to trigger refetch
    queryFn: () => {
      console.log("get lucky book");
      return getLuckyBook({
        type: "wzt",
        locale: "en",
        index: page, // Use the current page to fetch data
      });
    },
    //   keepPreviousData: true, // Keep previous data while loading new data
  });

  // Effect to setup the IntersectionObserver
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "5px",
      threshold: 1.0, 
    };

    observerRef.current = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !isFetching) {
        console.log("loading more ...");
        if (Array.isArray(data) && data.length) {
          setPage((prevPage) => prevPage + 20);
          console.log(page);
        }
      }
    }, options);

    const currentLastItem = loadMoreRef.current;
    if (currentLastItem) {
      observerRef.current.observe(currentLastItem);
    }

    return () => {
      if (currentLastItem) {
        observerRef.current?.unobserve(currentLastItem);
      }
    };
  }, [data]); 


  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data.</p>;

  return (
    <div className="flex flex-wrap w-[760px] gap-5 px-2">
      {/* Render fetched data */}
      {data?.map((item) => (
        <div
          className="w-[150px] min-h-[250px] h-full flex flex-col items-center bg-white gap-2 p-[20px] rounded-[18px]"
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
          <div className="w-full text-center">
            <p className="text-black text-[14px] leading-[17px] font-[400]">
              {item.content}
            </p>
          </div>
        </div>
      ))}

      {/* This div triggers loading more data when it becomes visible */}
      <div ref={loadMoreRef} className="text-center h-[50px]">
        {isLoading && <p>Loading more...</p>}{" "}
        {/* Show loading text when more data is being fetched */}
      </div>
    </div>
  );
};
export default LuckyBookCategoryList;
