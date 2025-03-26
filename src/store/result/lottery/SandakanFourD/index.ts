import { getBaseLotteryInfo } from "../baseLotteryInfo";
import { GetSandakanFourDLotteryConfig, SandakanFourDLottery } from "./type";

function getSandakanFourDLottery(
  config: GetSandakanFourDLotteryConfig
): SandakanFourDLottery[] {
  return [getBaseLotteryInfo(config)];
}

export { getSandakanFourDLottery };
