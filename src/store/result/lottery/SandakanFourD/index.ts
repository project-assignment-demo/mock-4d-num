import { getBaseLotteryInfo } from "../baseLotteryInfo";
import { GetSandakanFourDLotteryConfig, SandakanFourDLottery } from "./type";

function getSportToToLottery(
  config: GetSandakanFourDLotteryConfig
): SandakanFourDLottery[] {
  return [getBaseLotteryInfo(config)];
}

export { getSportToToLottery };
