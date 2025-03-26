import { getResultBaseInfo } from "../../baseResultInfo";
import { LotteryResultChild } from "../../type";
import { getLotteryPrimaryPrize, getLotterySecondaryPrize } from "../utils";
import { GetBaseLotteryInfoConfig, GetLotteryBasicInfoConfig } from "./type";

function getLotteryBasicInfo({
  resultType,
  type,
  result,
}: GetLotteryBasicInfoConfig) {
  const { fdData } = result;

  const { videoUrl: video } = fdData;

  const lotteryBasicInfo = getResultBaseInfo(fdData);
  return {
    type,
    resultType,
    video,
    ...lotteryBasicInfo,
    primaryPrizes: getLotteryPrimaryPrize(result),
    ...getLotterySecondaryPrize(result),
  };
}

function getBaseLotteryInfo(
  config: GetBaseLotteryInfoConfig
): LotteryResultChild {
  const { results, type, resultType, filterOption } = config;

  const baseLotteryInfo = filterOption
    ? filterOption(results)
    : results.find((result) => result.type === type);

  if (!baseLotteryInfo) throw Error(`${type} info not found`);

  return getLotteryBasicInfo({
    resultType,
    type,
    result: baseLotteryInfo,
  });
}

export { getBaseLotteryInfo };
