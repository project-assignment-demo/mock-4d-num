import LotteryJackpotSection from "../../JackpotSection";
import BaseLotteryInfo from "../BaseLotteryInfo";
import { EightLuckyLotteryInfoProps } from "./type";

function EightLuckyLotteryInfo(props: EightLuckyLotteryInfoProps) {
  const { data, primaryColor, secondaryColor } = props;
  const { jackpotPool, jackpotResults } = data;

  return (
    <>
      <BaseLotteryInfo {...props} />
      <LotteryJackpotSection
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        poolAmount={jackpotPool}
        jackpots={jackpotResults}
      />
    </>
  );
}

export default EightLuckyLotteryInfo;
