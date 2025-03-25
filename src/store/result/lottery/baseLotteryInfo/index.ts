import { ResultDTO } from "../../../../api/result/type";
import { getResultBaseInfo } from "../../baseResultInfo";
import { LotteryResultChild } from "../../type";
import { GetLotteryConfig } from "../type";
import { getLotterySecondaryPrize } from "../utils";
import { GetBaseLotteryInfoConfig } from "./type";

type GetLotteryBaseInfoConfig = GetLotteryConfig & { info: ResultDTO };

function getLotteryBaseInfo({
  resultType,
  type,
  info,
  video,
}: GetLotteryBaseInfoConfig) {
  const lotteryBasicInfo = getResultBaseInfo(info.fdData);
  return {
    type,
    resultType,
    video,
    ...lotteryBasicInfo,
    primaryPrizes: [],
    ...getLotterySecondaryPrize(info),
  };
}

function getBaseLotteryInfo(
  config: GetBaseLotteryInfoConfig
): LotteryResultChild {
  const { results, type } = config;

  const baseLotteryInfo = results.find((result) => result.type === type);

  if (!baseLotteryInfo) throw Error(`${type} info not found`);

  return getLotteryBaseInfo({
    ...config,
    info: baseLotteryInfo,
  });
}

function getMultipleBaseLotteryInfo(
  config: GetBaseLotteryInfoConfig
): LotteryResultChild[] {
  const { results, type } = config;
  const sources = results.filter((result) =>
    result.type.startsWith(`${type}T`)
  );

  return sources.map((source) => {
    return getLotteryBaseInfo({
      ...config,
      info: source,
    });
  });
}

export { getBaseLotteryInfo, getMultipleBaseLotteryInfo };
