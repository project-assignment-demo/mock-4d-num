
import LotteryCard from "./components/LotteryCard";
import { LotteryKey } from "../../store/result/lottery/type";
import SwiperWrapper from "../../components/Swiper";
import { getLotteries } from "../../store/result";
import { useRef } from "react";
import { getCompanies } from "../../store/company";
import { useLocation } from "react-router";

// import html2canvas from 'html2canvas-pro';
// import { toPng } from 'html-to-image';
// import { useSiteStore } from "../../store";

const Dashboard = () => {
  const lotteries = getLotteries();
  const location = useLocation();

  const companies = getCompanies(location.pathname);

  // testing
  // const lotteryRef=  useRef<HTMLDivElement | null>(null);
  // const updateModalContent = useSiteStore((state) => state.updateModalContent);
  // const openModal = useSiteStore(state => state.openModal);

  return (
    <>
      <div className="hidden md:block">
        <div className="flex flex-wrap flex-row gap-2 justify-center">
          {lotteries.map((lottery) => {
            const { type } = lottery;
            return (
              <div key={type} id={type} className="w-[370px] lg:w-[400px]">
                <LotteryCard
                  lotteryKey={type as LotteryKey}
                  lotteryData={lottery}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="block md:hidden overflow-auto">
        <SwiperWrapper
        companies={companies}>
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
