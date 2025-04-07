import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { getLuckyBook } from "../../api/luckyBook";
import { LuckyBookDto } from "../../api/luckyBook/type";
import { useNavigate, useParams } from "react-router";

const LuckyBookCategoryList = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    navigate("/unknown");
  }

  const [books, setBooks] = useState<LuckyBookDto[]>([]);
  const [page, setPage] = useState<number>(0);

  const loaderRef = useRef(null);
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
    if (data?.length) {
      setBooks((prevBooks) => [...prevBooks, ...data]);
    }
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && !isLoading) {
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
    <div className="flex flex-col w-[760px] mx-auto py-8 overflow-y-auto">
      <div className="flex flex-wrap w-full gap-5 px-2">
        {books.map((item) => (
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
      </div>

      <div ref={loaderRef} style={{ height: "30px" }}>
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  );
};
export default LuckyBookCategoryList;
