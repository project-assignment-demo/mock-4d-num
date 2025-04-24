
import LotteryCard from "./components/LotteryCard";
import { LotteryKey } from "../../store/result/lottery/type";
import SwiperWrapper from "../../components/Swiper";
import { getLotteries } from "../../store/result";
import { useRef } from "react";

// import html2canvas from 'html2canvas-pro';
// import { toPng } from 'html-to-image';
// import { useSiteStore } from "../../store";

const Dashboard = () => {
  const lotteries = getLotteries();

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

  // return <div onClick={async () => {
  //   if (lotteryRef.current) {
  //     // const canvas = await html2canvas(lotteryRef.current, {
  //     //   backgroundColor: '#ffffff',
  //     //     removeContainer: true,
  //     // });

  //     // const image =  canvas.toDataURL('image/png');

  //     const image = await toPng(lotteryRef.current);

  //     updateModalContent({image});
  //     openModal();

  //   }
  // }}  className="flex items-center justify-center w-full h-full">
  //   <div ref={lotteryRef} className="w-[400px] shadow-md bg-white rounded-lg h-[700px]">
  //     <div className="flex flex-col w-full">
  //       <div className="bg-red-400 h-[400px]">

  //       </div>
  //     </div>
  //   </div>
  // </div>

};

export default Dashboard;
