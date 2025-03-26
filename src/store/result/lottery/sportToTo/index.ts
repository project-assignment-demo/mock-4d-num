import { getBaseLotteryInfo } from "../baseLotteryInfo";
import { SportToToLottery, GetSportToToConfig } from "./type";

function getSportToToLottery(config: GetSportToToConfig): SportToToLottery[] {
  return [getBaseLotteryInfo(config)];
}

export { getSportToToLottery };
