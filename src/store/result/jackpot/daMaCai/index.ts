import { ResultDTO } from "../../../../api/result/type";
import { getResultBaseInfo } from "../../baseResultInfo";
import { Prize } from "../../type";
import { formatLotteryNumber } from "../../utils";
import { DaMaCaiJackpot, GetDaMaCaiConfig } from "./type";

function get3DBonus(data: ResultDTO["fdData"]): string[] {
  return [data.n1, data.n2, data.n3].map((val) => formatLotteryNumber(val));
}

function getSecondaryPrizes(prizes: string[]): Prize[] {
  const formattedPrizes = prizes.map((prize) => formatLotteryNumber(prize));
  return [
    ...formattedPrizes.slice(0, 9),
    "",
    ...formattedPrizes.slice(9),
    "",
  ].map((prize) => ({ value: prize }));
}

function getSpecials(source: ResultDTO["fdData"]): Prize[] {
  return getSecondaryPrizes([
    source.s1,
    source.s2,
    source.s3,
    source.s4,
    source.s5,
    source.s6,
    source.s7,
    source.s8,
    source.s9,
    source.s10,
  ]);
}

function getConsolations(source: ResultDTO["fdData"]): Prize[] {
  return getSecondaryPrizes([
    source.c1,
    source.c2,
    source.c3,
    source.c4,
    source.c5,
    source.c6,
    source.c7,
    source.c8,
    source.c9,
    source.c10,
  ]);
}

function getDaMaCaiJackpot({
  results,
  type,
  resultType,
}: GetDaMaCaiConfig): DaMaCaiJackpot[] {
  const jackpotTypes = ["JP1"];

  const daMaCaiBaseInfoSource = results.find((result) => result.type === type);

  const damacaiSource = results.find(
    (result) => result.type === `${type}${jackpotTypes[0]}`
  );

  if (!daMaCaiBaseInfoSource) throw Error("Da Ma Cai base info not found");

  if (!damacaiSource) throw Error("Da Ma Cai 1+3D source not found");

  const daMaCaiBaseInfo = getResultBaseInfo(daMaCaiBaseInfoSource.fdData);

  const bonus = get3DBonus(damacaiSource.fdData);

  const specials = getSpecials(damacaiSource.fdData);

  const consolations = getConsolations(damacaiSource.fdData);

  return [
    {
      ...daMaCaiBaseInfo,
      bonus,
      type,
      specials,
      consolations,
      resultType,
    },
  ];
}
export { getDaMaCaiJackpot };
