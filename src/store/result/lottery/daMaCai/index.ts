import { getBaseLotteryInfo } from "../baseLotteryInfo";
import { DaMaCaiLottery, GetDaMaCaiConfig } from "./type";

function getDaMaCaiLottery(config: GetDaMaCaiConfig): DaMaCaiLottery[] {

  return [getBaseLotteryInfo(config)];
}

export { getDaMaCaiLottery };
