// x completed need add jackpot

import { getBaseLotteryInfo } from "../baseLotteryInfo";
import { getLotteryJackpot } from "../utils";
import { NineWinLottery, GetNineWinLotteryConfig } from "./type";

function getNineWinBoxLottery(
  config: GetNineWinLotteryConfig
): NineWinLottery[] {
  const { results, type } = config;

  const filteredResults = results.filter(({ type: resultType }) =>
    resultType.startsWith(`${type}T`)
  );

  return filteredResults.map((source) => ({
    ...getBaseLotteryInfo({ ...config, filterOption: (_) => source }),
    ...getLotteryJackpot(source),
  }));
}

export { getNineWinBoxLottery };
