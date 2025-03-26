import LotteryJackpotResultSection from "./LotteryJackpotResultSection";
import { LotteryJackpotSectionProps } from "./type";

const LotteryJackpotSection = (props: LotteryJackpotSectionProps) => {
  const { poolAmount, jackpots, primaryColor, secondaryColor } = props;

  const mergedPrimaryColor = primaryColor ?? "#000000";
  const mergedSecondaryColor = secondaryColor ?? "#000000";

  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full rounded-xl flex justify-center items-center flex-col p-[5px]"
        style={{ backgroundColor: mergedPrimaryColor }}
      >
        <p className="text-white font-[500] text-xl">Jackpot Pool</p>
        <p className="text-white font-[500] text-lg"> USD {poolAmount} </p>
      </div>
      {jackpots.map((result, index) => (
        <LotteryJackpotResultSection
          key={index}
          primaryColor={mergedPrimaryColor}
          secondaryColor={mergedSecondaryColor}
          title={"Jackpot A Result"}
          {...result}
        />
      ))}
    </div>
  );
};

export default LotteryJackpotSection;
