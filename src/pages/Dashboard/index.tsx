import { useLotteries } from "../../store/result";
import LotteryCard from "./components/LotteryCard";
import { LotteryKey } from "../../store/result/lottery/type";
import SwiperWrapper from "../../components/Swiper";

const Dashboard = () => {
  const lotteries = useLotteries();

  return (
    <>
      <div className="hidden sm:block">
        <div className="flex flex-wrap flex-row gap-4 justify-center">
          {lotteries.map((lottery) => {
            const { type } = lottery;
            return (
              <div key={type} id={type} className="mx-4 w-[400px]">
                <LotteryCard
                  lotteryKey={type as LotteryKey}
                  lotteryData={lottery}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="block sm:hidden">
        <SwiperWrapper>
          {lotteries.map((lottery) => {
            const { type } = lottery;
            return (
              <div className="max-w-full w-full h-screen">
                <LotteryCard
                  lotteryKey={type as LotteryKey}
                  lotteryData={lottery}
                />
              </div>
            );
          })}
        </SwiperWrapper>
      </div>
    </>
  );

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
};

export default Dashboard;
