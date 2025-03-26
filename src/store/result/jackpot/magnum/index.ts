import { ResultDTO } from "../../../../api/result/type";
import { getResultBaseInfo } from "../../baseResultInfo";
import { GetMagnumJackpotConfig, MagnumJackpot } from "./type";

function getMagnumLife(data: ResultDTO["fdData"]): MagnumJackpot["magnumLife"] {
  const { n1, n2, n3, n4, n5, n6, n7, n8, n9, n10 } = data;
  return {
    winningNumbers: [n1, n2, n3, n4, n5, n6, n7, n8],
    bonusNumbers: [n9, n10],
  };
}

function getMagnumGoldJackpot(
  data: ResultDTO["fdData"]
): MagnumJackpot["magnumGoldJackpot"] {
  const { n1, n2, n3, n4 } = data;
  const sources = [n1, n2, n3, n4];
  const jackpot1Prizes = sources.flatMap((prize, index) =>
    index === 2 ? [...prize.split(""), "+"] : prize.split("")
  );

  const jackpot2FirstRow = jackpot1Prizes.map((val, index) =>
    index === 5 ? "" : val
  );
  const jackpot2SecondRow = jackpot1Prizes.map((val, index) =>
    index === 0 ? "" : val
  );

  const jackpots = [[jackpot1Prizes], [jackpot2FirstRow, jackpot2SecondRow]];
  return {
    jackpots,
    prizes: getJackpotPrize(data),
  };
}

function getJackpotPrize(data: ResultDTO["fdData"]): string[] {
  return [data.jp1, data.jp2];
}

function getMagnumJackpot({
  results,
  type,
  resultType,
}: GetMagnumJackpotConfig): MagnumJackpot[] {
  const magnumBaseInfoSource = results.find((result) => result.type === type);
  const jackpotTypes = ["JPLIFE","JPGOLD"];

  if (!magnumBaseInfoSource) throw Error("magnum base info not found");

  const magnumlifeSource = results.find((result) => result.type === `${type}${jackpotTypes[0]}`);

  if (!magnumlifeSource) throw Error("magnum life source not found");
  const magnumGoldSource = results.find((result) => result.type === `${type}${jackpotTypes[1]}`);

  if (!magnumGoldSource) throw Error("magnum gold not found");

  const magnumLife = getMagnumLife(magnumlifeSource.fdData);

  const magnumGoldJackpot = getMagnumGoldJackpot(magnumGoldSource.fdData);
  const magnumBaseInfo = getResultBaseInfo(magnumBaseInfoSource.fdData);

  return [
    {
      ...magnumBaseInfo,
      resultType,
      type,
      magnumLife,
      magnumGoldJackpot,
    },
  ];
}

export { getMagnumJackpot };
