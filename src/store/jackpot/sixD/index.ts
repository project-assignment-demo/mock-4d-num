import dayjs from "dayjs";
import { ResultDTO, SixDJackpot } from "../../../api/result/type";
import { GetJackpotConfig } from "../type";
import { getBaseResultInfo } from "../baseJackpot";

interface GetSixDJackpotConfig extends GetJackpotConfig {
  type: string;
}

function generatePrizes(start: string[], end?: string[]) {
  if (!end) return start;

  const defaultPrizesLength = 12;

  const prizesLength = defaultPrizesLength - end.length;

  let prizes = start.slice(0, prizesLength);

  while (prizes.length < prizesLength) {
    prizes.push("");
  }

  return [...prizes, ...end];
}

function getSixDPrizes(source: ResultDTO["fdData"]) {

  return [
    generatePrizes(source.n1?.split("") ?? []),
    generatePrizes(source.n2?.split("") ?? [], source.n3?.split("") ?? []),
    generatePrizes(
      source.n4?.slice(0, 2).split("") ?? [],
      source.n5?.split("") ?? []
    ),
    generatePrizes(source.n6?.split("") ?? [], source.n7?.split("") ?? []),
    generatePrizes(source.n8?.split("") ?? [], source.n9?.split("") ?? []),
  ];
}

function getSixDJackpot({ results, type, companies }: GetSixDJackpotConfig): SixDJackpot {
  const sources = results.filter((result) =>
    result.type.startsWith(`${type}JPT`)
  );

  const datas: {
    sixDPrizes: string[][];
  }[] = sources.map<{
    sixDPrizes: string[][];
  }>((source) => {
    const sixDPrizes: string[][] = getSixDPrizes(source.fdData);
    return {
      sixDPrizes,
    };
  });

  return {

    ...getBaseResultInfo({
      type,
      data: sources[0].fdData,
      companies: companies,
    }),
    datas,
  };
}

export { getSixDJackpot };
