import { getBaseLotteryInfo } from "../baseLotteryInfo";
import { GetPerdanayLotteryConfig, PerdanaLottery } from "./type";

function getPerdanaLottery(
  config: GetPerdanayLotteryConfig
): PerdanaLottery[] {
  const { results, type } = config;

  const filteredResults = results.filter(({ type: resultType }) =>
    resultType.startsWith(`${type}T`)
  );

  return filteredResults.map((source) =>
    getBaseLotteryInfo({ ...config, filterOption: (_) => source })
  );
}

export { getPerdanaLottery };
