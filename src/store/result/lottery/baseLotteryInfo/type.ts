import { ResultDTO } from "../../../../api/result/type";
import { GetLotteryConfig } from "../type";

type GetBaseLotteryInfoConfig = GetLotteryConfig & {
    filterOption?: (results: ResultDTO[]) => ResultDTO; 
};

type GetLotteryBasicInfoConfig = Omit<GetLotteryConfig, "results"> & {
  result: ResultDTO;
};

export type {
  GetBaseLotteryInfoConfig,
  GetLotteryBasicInfoConfig,
};
