import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { getLuckyBook } from "../../../api/luckyBook";
import { LuckyBookDto } from "../../../api/luckyBook/type";
import { useNavigate, useParams } from "react-router";
import ScrollToTopButton from "../../../components/ScrollToTopButton";
import LuckyBookSearchSection from "../components/LuckBookSearchBar";
import { LuckyBookSearchCategory } from "../../../store";
import LuckyBookContainer from "../components/LuckyBookContainer";

const LuckyBookCategoryList = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    navigate("/unknown");
  }

  const [books, setBooks] = useState<LuckyBookDto[]>([]);
  const [page, setPage] = useState<number>(0);

  const loaderRef = useRef(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isRefReady, setIsRefReady] = useState(false);
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
    console.log(containerRef);
    if (containerRef.current) {
      setIsRefReady(true);
    }
  }, [containerRef.current]);

  useEffect(() => {
    if (data?.length) {
      setBooks((prevBooks) => [...prevBooks, ...data]);
    }
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && !isLoading) {
          console.log('fetching ...')
          setPage((page) => page + 20);
        }
      },
      { threshold: 1, rootMargin: "100px" }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [isLoading]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data.</p>;

  return (
   <div className="flex w-full items-center justify-center">
     <LuckyBookContainer title="Tua Pek Kong (Wan) Dictionary">
      <div
        ref={containerRef}
        className="flex justify-center w-full mx-auto py-8 overflow-y-auto h-full"
      >
        {/* <LuckyBookSearchSection type={id as LuckyBookSearchCategory} /> */}
        <div className="flex justify-center flex-wrap w-full gap-5 px-2">
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
              <div className="w-full text-center">
                <p className="text-black text-[14px] leading-[17px] font-[400]">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {isRefReady && <ScrollToTopButton scrollRef={containerRef} />}
        <div ref={loaderRef} style={{ height: "30px" }}>
          {isLoading && <p>Loading...</p>}
        </div>
      </div>
    </LuckyBookContainer>
   </div>
  );
};



export default LuckyBookCategoryList;
