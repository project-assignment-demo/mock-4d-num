import { ResultDTO } from "../../../../api/result/type";
import { LotteryJackpot, SecondaryPrize } from "../../type";
import {
  GenerateLotterySpecialPrizeConfig,
  GetLotteryConsolationPrizeConfig,
  GetLotterySpecialPrizeConfig,
  RawSpecialPrize,
} from "./type";

function generateSpecialPrizes({
  sources,
  type,
}: GenerateLotterySpecialPrizeConfig): RawSpecialPrize[] {
  let prizes: RawSpecialPrize[] = [];
  const lessSpecialPrizelotteries = ["PMP", "SG", "CS"];
  const isonly10Prizes = lessSpecialPrizelotteries.includes(type);
  const source = sources.map<{ key: number | null; value: string }>(
    (value, key) => ({ key, value })
  );
  if (isonly10Prizes) {
    prizes = source.splice(0, 10);
  } else {
    const emptyData = { key: null, value: "" };
    source.splice(10, 0, emptyData);
    source.push(emptyData);
    prizes = source;
  }
  return prizes;
}

function getSpecialPrize(
  config: GetLotterySpecialPrizeConfig
): SecondaryPrize[] {
  const startPositionIndex = 65;

  const sources = generateSpecialPrizes(config);

  return getLotterySecondaryPrizes({ sources, startPositionIndex });
}

function getConsolationPrizes({
  sources,
}: GetLotteryConsolationPrizeConfig): SecondaryPrize[] {
  const startPositionIndex = 78;

  return getLotterySecondaryPrizes({ sources, startPositionIndex });
}

interface GetSecondaryLotteryPrizesConfig {
  sources:
    | string[]
    | {
        key: number | null;
        value: string;
      }[];
  startPositionIndex: number;
}

function getLotterySecondaryPrizes({
  sources,
  startPositionIndex,
}: GetSecondaryLotteryPrizesConfig) {
  return sources.map<SecondaryPrize>((source, index) => {
    if (typeof source === "string") {
      const position = String.fromCharCode(startPositionIndex + index);
      return { position, value: source };
    }

    const { key, value } = source;
    return {
      position:
        key !== null ? String.fromCharCode(startPositionIndex + key) : "",
      value,
    };
  });
}

function getLotteryPrimaryPrize(result: ResultDTO) {
  const { fdData } = result;

  return [
    {
      key: "1ST",
      position: fdData.n1_pos,
      value: fdData.n1,
    },
    {
      key: "2ND",
      position: fdData.n2_pos,
      value: fdData.n2,
    },
    {
      key: "3RD",
      position: fdData.n3_pos,
      value: fdData.n3,
    },
  ];
}

function getLotterySecondaryPrize(result: ResultDTO) {
  const { type, fdData } = result;

  const specialsSources = [
    fdData.s1,
    fdData.s2,
    fdData.s3,
    fdData.s4,
    fdData.s5,
    fdData.s6,
    fdData.s7,
    fdData.s8,
    fdData.s9,
    fdData.s10,
    fdData.s11,
    fdData.s12,
    fdData.s13,
  ];

  const consolationsSources = [
    fdData.c1,
    fdData.c2,
    fdData.c3,
    fdData.c4,
    fdData.c5,
    fdData.c6,
    fdData.c7,
    fdData.c8,
    fdData.c9,
    fdData.c10,
  ];

  const specials = getSpecialPrize({
    sources: specialsSources,
    type,
  });

  const consolations = getConsolationPrizes({ sources: consolationsSources });

  return {
    consolations,
    specials,
  };
}

function getLotteryJackpot(result: ResultDTO): LotteryJackpot {
  const {
    jackpotAmount,
    jackpotAmount2,
    jackpot_prize,
    jackpot_prize2,
    jackpot_share,
    jackpot_share2,
    jackpot_per_share,
    jackpot_per_share2,
  } = result.fdData;

  return {
    jackpotPool: jackpotAmount,
    jackpotResults: [
      {
        noBonus: jackpotAmount,
        noPrize: jackpot_prize,
        totalWinner: jackpot_share,
        perUnit: jackpot_per_share,
      },
      {
        noBonus: jackpotAmount2,
        noPrize: jackpot_prize2,
        totalWinner: jackpot_share2,
        perUnit: jackpot_per_share2,
      },
    ],
  };
}

export { getLotterySecondaryPrize, getLotteryPrimaryPrize, getLotteryJackpot };
