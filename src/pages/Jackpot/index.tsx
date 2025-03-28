// import { JackpotKey } from "../../api/result/type";
import SwiperWrapper from "../../components/Swiper";

import { JackpotKey } from "../../store/result/jackpot/type";
import JackpotCard from "./components/JackpotCard";
import { getJackpots } from "../../store/result/jackpot";

const Jackpot = () => {
  const jackpots = getJackpots();

  console.log('Jackpot parent rebuild')

  return (
    <>
      <div className="hidden sm:block">
        <div className="flex flex-wrap flex-row gap-4 justify-center">
          {jackpots.map((jackpot) => {
            const { type } = jackpot;
            return (
              <div key={type} id={type} className="mx-4 w-[400px]">
                <JackpotCard
                  jackpotKey={type as JackpotKey}
                  jackpotData={jackpot}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="block sm:hidden">
        <SwiperWrapper>
          {jackpots.map((jackpot) => {
            const { type } = jackpot;
            return (
              <div key={type} className="max-w-full w-full h-screen">
                <JackpotCard
                  jackpotKey={type as JackpotKey}
                  jackpotData={jackpot}
                />
              </div>
            );
          })}
        </SwiperWrapper>
      </div>
    </>
  );
};

export default Jackpot;
