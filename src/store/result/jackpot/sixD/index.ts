import { ResultDTO } from "../../../../api/result/type";
import { getResultBaseInfo } from "../../baseResultInfo";

import { GetSixDJackpotConfig, SixDJackpotResult } from "./type";

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

function getPrizeData(sources: string, limit?: number) {
  const prizes = sources.split("");
  return prizes.slice(0, limit);
}

function getSixDPrizes(source: ResultDTO["fdData"]) {
  // return [
  //   generatePrizes(source.n1?.split("") ?? []),
  //   generatePrizes(source.n2?.split("") ?? [], source.n3?.split("") ?? []),
  //   generatePrizes(
  //     source.n4?.slice(0, 2).split("") ?? [],
  //     source.n5?.split("") ?? []
  //   ),
  //   generatePrizes(source.n6?.split("") ?? [], source.n7?.split("") ?? []),
  //   generatePrizes(source.n8?.split("") ?? [], source.n9?.split("") ?? []),
  // ];

  return [
    generatePrizes(getPrizeData(source.n1, 6)),
    generatePrizes(getPrizeData(source.n2, 5), getPrizeData(source.n3, 5)),
    generatePrizes(getPrizeData(source.n4, 2), getPrizeData(source.n5, 4)),
    generatePrizes(getPrizeData(source.n6, 3), getPrizeData(source.n7, 3)),
    generatePrizes(getPrizeData(source.n8, 2), getPrizeData(source.n9, 2)),
  ];
}

function getSixDJackpot({
  results,
  type,
  resultType,
}: GetSixDJackpotConfig): SixDJackpotResult[] {
  const jackpotType = "JPT";
  const sources = results.filter((result) =>
    result.type.startsWith(`${type}${jackpotType}`)
  );

  return sources.map<SixDJackpotResult>((source) => {
    const match = source.type.match(/\d{2}:\d{2}/);
    const time = match ? match[0] : null;
    if (!time) throw Error("6 D jackpot time not found");
    const baseInfoSource = results.find(
      (result) => result.type === `${type}T${time}`
    );

    if (!baseInfoSource) {
      throw Error(`Not found ${type} data`);
    }

    const sixDBaseInfo = getResultBaseInfo(baseInfoSource.fdData);

    return {
      ...sixDBaseInfo,
      type,
      resultType,
      time,
      sixD: getSixDPrizes(source.fdData),
    };
  });
}

export { getSixDJackpot };
