import { LotteryInfoCardProps } from "./types";
import LotteryInfoVideoSection from "./components/LotteryInfoVideoSection";
import LotteryJackpotSection from "./components/LotteryJackpotSection";
import LotteryInfoHeader from "./components/LotteryInfoHeader";
import LotteryInfoBody from "./components/LotteryInfoBody";

const LotteryInfoCard = (props: LotteryInfoCardProps) => {
  const { header, video, prizes, jackpot } = props;

  return (
    <div className="w-[400px] text-center rounded-2xl bg-white pb-[20px] flex flex-col gap-2">
      <LotteryInfoHeader {...header} />
      {video && (
        <div className="px-[15px]">
          {" "}
          <LotteryInfoVideoSection url={video} />
        </div>
      )}
      <LotteryInfoBody {...prizes} />
      {jackpot && (
        <div className="px-[15px]">
          {" "}
          <LotteryJackpotSection {...jackpot} />{" "}
        </div>
      )}
    </div>
  );
};

export default LotteryInfoCard;
