interface GetLotterySpecialPrizeConfig {
  sources: string[];
  type: string;
}

interface GetLotteryConsolationPrizeConfig {
  sources: string[];
}

interface GenerateLotterySpecialPrizeConfig {
  sources: string[];
  type: string;
}

interface RawSpecialPrize {
  key: number | null;
  value: string;
}

export type {
  GetLotterySpecialPrizeConfig,
  GenerateLotterySpecialPrizeConfig,
  GetLotteryConsolationPrizeConfig,
  RawSpecialPrize,
};
