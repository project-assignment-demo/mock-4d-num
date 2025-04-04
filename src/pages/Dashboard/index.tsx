
import LotteryCard from "./components/LotteryCard";
import { LotteryKey } from "../../store/result/lottery/type";
import SwiperWrapper from "../../components/Swiper";
import { getLotteries } from "../../store/result";

const Dashboard = () => {
  const lotteries = getLotteries();

  return (
    <>
      <div className="hidden md:block">
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

      <div className="block md:hidden">
        <SwiperWrapper>
          {lotteries.map((lottery) => {
            const { type } = lottery;
            return (
              <div key={type} className="max-w-full w-full h-screen">
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
};

export default Dashboard;
