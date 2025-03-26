import LotteryJackpotSection from "../../JackpotSection";
import BaseLotteryInfo from "../BaseLotteryInfo";
import { NineWinBoxLotteryInfoProps } from "./type";

function NineWinBoxLotteryInfo(props: NineWinBoxLotteryInfoProps) {
  
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

export default NineWinBoxLotteryInfo;
