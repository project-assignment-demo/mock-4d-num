import { getBaseLotteryInfo } from "../baseLotteryInfo";
import { GetSpecialCashSweepLotteryConfig, SpecialCashSweepLottery } from "./type";

function getSportToToLottery(
  config: GetSpecialCashSweepLotteryConfig
): SpecialCashSweepLottery[] {
  return [getBaseLotteryInfo(config)];
}

export { getSportToToLottery };
