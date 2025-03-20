import dayjs from "dayjs";
import { DaMaCaiJackpot, ResultDTO } from "../../../api/result/type";
import { formatLotteryNumber } from "../utils";
import { GetJackpotConfig } from "../type";
import { getBaseResultInfo } from "../baseJackpot";

function get3DBonus(data: ResultDTO["fdData"]): [string, string, string] {
  return [data.n1, data.n2, data.n3].map((val) => formatLotteryNumber(val)) as [
    string,
    string,
    string
  ];
}

function getSecondaryPrizes(prizes: string[]) {
  const formattedPrizes = prizes.map((prize) => formatLotteryNumber(prize));
  return [...formattedPrizes.slice(0, 9), "", ...formattedPrizes.slice(9), ""];
}

function getSpecials(source: ResultDTO["fdData"]): string[] {
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

function getConsolations(source: ResultDTO["fdData"]): string[] {
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

function getDaMaCaiJackpot({ results, companies }: GetJackpotConfig): DaMaCaiJackpot {
  const damacaiSource = results.find((result) => result.type === "PMPJP1");

  if (!damacaiSource) throw Error("invalid Da Ma Cai 1+3D source");

  const threeDBonus = get3DBonus(damacaiSource.fdData);
  const special = getSpecials(damacaiSource.fdData);
  const consolation = getConsolations(damacaiSource.fdData);
  return {
    ...getBaseResultInfo({
      type: "PMP",
      data: damacaiSource.fdData,
      companies: companies,
    }),
    // type: "PMP",
    // date: dayjs(),
    // drawNo: "",
    // title: "Da Ma Cai 1+3D",
    // logo: "https://share.4dnum.com/site-logo/4Dlogo-01.png",
    threeDBonus,
    special,
    consolation,
  };
}

export { getDaMaCaiJackpot };
