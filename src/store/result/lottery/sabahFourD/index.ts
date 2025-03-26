import { getBaseLotteryInfo } from "../baseLotteryInfo";
import { GetGetSabahFourDLotteryLotteryConfig, SabahFourDLottery } from "./type";

function getSabahFourDLottery(
  config: GetGetSabahFourDLotteryLotteryConfig
): SabahFourDLottery[] {
  return [getBaseLotteryInfo(config)];
}

export { getSabahFourDLottery };
