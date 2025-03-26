import LotteryJackpotPrize from "../../LottertJackpotPrize";
import BaseLotteryInfo from "../BaseLotteryInfo";
import { MagnumLotteryInfoProps } from "./type";

function MagnumLotteryInfo(props: MagnumLotteryInfoProps) {
  const { data, primaryColor } = props;

  const { jackpots } = data;

  return (
    <>
      <BaseLotteryInfo {...props} primaryPrizeLabelTextColor={'#000000'} />
      <LotteryJackpotPrize primaryColor={primaryColor} prizes={jackpots} />
    </>
  );
}

export default MagnumLotteryInfo;
