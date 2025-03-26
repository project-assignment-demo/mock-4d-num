import LotteryInfoCard from "../components/LotteryInfoCard";
import { useQuery } from "@tanstack/react-query";
import { getResults } from "../../api/result";
import { useSiteStore } from "../../store";
import dayjs from "dayjs";
import SwiperWrapper from "./components/Swiper";
import { useLotteries } from "../../store/result";

const Dashboard = () => {
  const selectedDate = useSiteStore((state) => state.selectedDate);

  const lotteries = useLotteries();

  console.log(lotteries);

  // const {
  //   isPending,
  //   error,
  //   data: results,
  // } = useQuery({
  //   queryKey: ["result", selectedDate],
  //   queryFn: () => getResults(dayjs(selectedDate).format("YYYY-MM-DD")),
  //   refetchOnReconnect: false,
  // });

  // if (isPending) return <div>Loading ...</div>;

  // if (error) return <div>Error !! {error.message}</div>;

  // return (
  //   <>
  //     <div className="hidden sm:block">
  //       <div className="flex justify-center flex-wrap gap-[0.5rem] px-6 h-full">
  //         {results.map((result) => (
  //           <div className="max-w-[370px] sm:max-w-[400px] min-h-full">
  //             <LotteryInfoCard key={result.type} {...result} />
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //     <div className="block sm:hidden">
  //       <SwiperWrapper>
  //         {results.map((result) => (
  //           <div className="max-w-full w-full min-h-full">
  //             <LotteryInfoCard key={result.type} {...result} />
  //           </div>
  //         ))}
  //       </SwiperWrapper>
  //     </div>
  //   </>
  // );
  return <div>Dashboard</div>
};

export default Dashboard;
