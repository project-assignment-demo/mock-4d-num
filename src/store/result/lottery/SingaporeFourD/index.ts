import { getBaseLotteryInfo } from "../baseLotteryInfo";
import { GetSingaporeFourDLotteryConfig, SingaporeFourDLottery } from "./type";

function getSportToToLottery(
  config: GetSingaporeFourDLotteryConfig
): SingaporeFourDLottery[] {
  return [getBaseLotteryInfo(config)];
}

export { getSportToToLottery };
