import SwiperWrapper from "../../components/Swiper";

import { JackpotKey } from "../../store/result/jackpot/type";
import JackpotCard from "./components/JackpotCard";
import { getJackpots } from "../../store/result/jackpot";

const Jackpot = () => {
  const jackpots = getJackpots();

  return (
    <>
      <div className="hidden md:block">
        <div className="flex flex-wrap flex-row gap-2 justify-center">
          {jackpots.map((jackpot) => {
            const { type } = jackpot;
            return (
              <div key={type} id={type} className="w-[370px] lg:w-[400px]">
                <JackpotCard
                  jackpotKey={type as JackpotKey}
                  jackpotData={jackpot}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="block md:hidden overflow-auto">
        <SwiperWrapper>
          {jackpots.map((jackpot) => {
            const { type } = jackpot;
            return (
              <div key={type} className="max-w-full w-full h-full">
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
