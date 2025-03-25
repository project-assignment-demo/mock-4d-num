import { getBaseLotteryInfo } from "../baseLotteryInfo";
import { GetGetSabahFourDLotteryLotteryConfig, SabahFourDLottery } from "./type";

function getSportToToLottery(
  config: GetGetSabahFourDLotteryLotteryConfig
): SabahFourDLottery[] {
  return [getBaseLotteryInfo(config)];
}

export { getSportToToLottery };
