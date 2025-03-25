import { getMultipleBaseLotteryInfo } from "../baseLotteryInfo";
import { EightLuckyLottery, GetEightLuckyLotteryConfig } from "./type";

function getEightLuckyLottery(
  config: GetEightLuckyLotteryConfig
): EightLuckyLottery[] {
  return getMultipleBaseLotteryInfo(config);
}

export { getEightLuckyLottery };
