import { ResultDTO } from "../../../../api/result/type";
import { getBaseLotteryInfo } from "../baseLotteryInfo";
import { GetMagnumLotteryConfig, MagnumLottery } from "./type";

function getMagnumJackpot(result: ResultDTO["fdData"]): string[] {
  return [result.jp1, result.jp2];
}

function getMagnumLottery(config: GetMagnumLotteryConfig): MagnumLottery[] {
  const { results, type } = config;
  const magnumInfo = results.find((result) => result.type === type);

  if (!magnumInfo) throw Error("Magnum 4D info not found");

  return [
    {
      jackpots: getMagnumJackpot(magnumInfo.fdData),
      ...getBaseLotteryInfo(config),
    },
  ];
}

export { getMagnumLottery };
