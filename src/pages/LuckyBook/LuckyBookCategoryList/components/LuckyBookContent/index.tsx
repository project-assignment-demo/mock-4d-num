import { useCallback, useEffect, useRef, useState } from "react";
import { LuckyBookDto } from "../../../../../api/luckyBook/type";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getLuckyBook } from "../../../../../api/luckyBook";
import { useSiteStore } from "../../../../../store";

interface UseOnScreenOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useOnScreen = ({
  root = null,
  rootMargin = "0px",
  threshold = 0,
}: UseOnScreenOptions = {}) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const measureRef = useCallback(
    (node: Element | null) => {
      if (node) {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver(
          ([entry]) => {
            setIntersecting(entry.isIntersecting);
          },
          { root, rootMargin, threshold }
        );

        observerRef.current.observe(node);
      }
    },
    [root, rootMargin, threshold]
  );

  return {
    measureRef,
    isIntersecting,
    observer: observerRef.current,
  };
};

const LuckyBookContent = ({ id }: { id: string }) => {


  const [books, setBooks] = useState<LuckyBookDto[]>([]);

  const { measureRef, isIntersecting } = useOnScreen();

  const luckyBookFilterPointer = useSiteStore(
    (state) => state.luckyBookFilterPointer
  );

  const [page, setPage] = useState<number>(luckyBookFilterPointer.pointer);
  const { data, isLoading, isError } = useQuery<LuckyBookDto[], Error>({
    queryKey: ["items", page, id],
    placeholderData: keepPreviousData,
    queryFn: () => {
      return getLuckyBook({
        type: id!,
        locale: "en",
        index: page,
      });
    },
  });

  useEffect(() => {
    setPage(luckyBookFilterPointer.pointer);
  }, [luckyBookFilterPointer]);

  useEffect(() => {
    if (!data?.length) return;

    const shouldAppend = page > luckyBookFilterPointer.pointer;
    setBooks(shouldAppend ? (prev) => [...prev, ...data] : () => data);
  }, [data]);

  useEffect(() => {
    if (isIntersecting) {
      setPage((page) => (page += 20));
      // observer?.disconnect();
    }
  }, [isIntersecting]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data.</p>;
  return (
    <div
      className="flex justify-center w-full mx-auto pt-2 md:pt-8 overflow-y-auto h-full"
    >
      <div  className="flex justify-center flex-wrap w-full gap-5 px-2">
        {books.map((item, index) => {
          if (books.length - 1 === index) {
            return (
              <div
                ref={measureRef}
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
                <div className="w-full text-center">
                  <p className="text-black text-[14px] leading-[17px] font-[400]">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          }

          return (
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
              <div className="w-full text-center">
                <p className="text-black text-[14px] leading-[17px] font-[400]">
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* {isRefReady && <ScrollToTopButton scrollRef={containerRef} />} */}

      {isLoading && <li>Loading...</li>}
    </div>
  );
};

export default LuckyBookContent;
