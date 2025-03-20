import { MagnumJackpot, ResultDTO } from "../../../api/result/type";
import { getBaseResultInfo } from "../baseJackpot";
import { GetJackpotConfig } from "../type";


function getMagnumLife(data: ResultDTO["fdData"]) {
  const { n1, n2, n3, n4, n5, n6, n7, n8, n9, n10 } = data;
  return {
    winningNumbers: [n1, n2, n3, n4, n5, n6, n7, n8],
    bonusNumbers: [n9, n10],
  };
}

function getMagnumGoldJackpot(data: ResultDTO["fdData"]) {
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
  return [[jackpot1Prizes], [jackpot2FirstRow, jackpot2SecondRow]];
}

function getJackpotPrize(data: ResultDTO["fdData"]): [string, string] {
  return [data.jp1, data.jp2];
}



function getMagnumJackpot({
  results,
  companies,
}: GetJackpotConfig): MagnumJackpot {
  const magnumlifeSource = results.find((result) => result.type === "MJPLIFE");

  if (!magnumlifeSource) throw Error("magnum life source not found");

  const magnumLife = getMagnumLife(magnumlifeSource.fdData);

  const magnumGoldSource = results.find((result) => result.type === "MJPGOLD");

  if (!magnumGoldSource) throw Error("magnum gold not found");

  const goldJackpot = getMagnumGoldJackpot(magnumGoldSource.fdData);

  const jackpotPrize = getJackpotPrize(magnumGoldSource.fdData);

  return {
    ...getBaseResultInfo({
      type: "M",
      data: magnumlifeSource.fdData,
      companies: companies,
    }),
    magnumLife,
    goldJackpot,
    jackpotPrize,
  };
}

export { getMagnumJackpot };
