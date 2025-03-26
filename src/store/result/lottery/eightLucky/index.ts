import { getBaseLotteryInfo } from "../baseLotteryInfo";
import { getLotteryJackpot } from "../utils";
import { EightLuckyLottery, GetEightLuckyLotteryConfig } from "./type";

function getEightLuckyLottery(
  config: GetEightLuckyLotteryConfig
): EightLuckyLottery[] {
  const { results, type } = config;

  const filteredResults = results.filter(({ type: resultType }) =>
    resultType.startsWith(`${type}T`)
  );

  return filteredResults.map((source) => ({
    ...getBaseLotteryInfo({ ...config, filterOption: (_) => source }),
    ...getLotteryJackpot(source),
  }));
}

export { getEightLuckyLottery };
