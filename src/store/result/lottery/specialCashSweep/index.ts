import { getBaseLotteryInfo } from "../baseLotteryInfo";
import { GetSpecialCashSweepLotteryConfig, SpecialCashSweepLottery } from "./type";

function getSpecialCashSweepLottery(
  config: GetSpecialCashSweepLotteryConfig
): SpecialCashSweepLottery[] {
  return [getBaseLotteryInfo(config)];
}

export { getSpecialCashSweepLottery };
