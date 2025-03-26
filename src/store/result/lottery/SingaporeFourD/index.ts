import { getBaseLotteryInfo } from "../baseLotteryInfo";
import { GetSingaporeFourDLotteryConfig, SingaporeFourDLottery } from "./type";

function getSingaporetToToLottery(
  config: GetSingaporeFourDLotteryConfig
): SingaporeFourDLottery[] {
  return [getBaseLotteryInfo(config)];
}

export { getSingaporetToToLottery };
