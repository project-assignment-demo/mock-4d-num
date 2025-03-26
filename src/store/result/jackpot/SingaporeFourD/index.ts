import { ResultDTO } from "../../../../api/result/type";
import { getResultBaseInfo } from "../../baseResultInfo";
import { GetSingaporeFourDJackpotConfig, SingaporeFourDJackpot } from "./type";

function getSGToTo(source: ResultDTO["fdData"]) {
  return {
    date: source.dd,
    day: source.day,
    drawNo: source.dn,
  };
}

function getSGWinningNumbers(source: ResultDTO["fdData"]) {
  return [
    source.n1,
    source.n2,
    source.n3,
    source.n4,
    source.n5,
    source.n6,
    source.n7,
  ]
    .map((val, index, sources) => {
      return index === sources.length - 1 ? ["+", val] : val;
    })
    .flat();
}

function getWinningShares(source: ResultDTO["fdData"]) {
  const sharesSource = source.others;
  if (!sharesSource)
    throw Error("Singapore ToTo Winning Shares source not found");
  const shares = (JSON.parse(sharesSource) as string[])
    .filter((share) => Boolean(share))
    .reduce<SingaporeFourDJackpot["winningShares"]>(
      (acc, curr, index, array) => {
        if (index % 2 === 0 && index + 1 < array.length) {
          acc.push({ shareAmount: curr, winningShare: array[index + 1] });
        }
        return acc;
      },
      []
    );

  return shares;
}

function getSingaporeFourDJackpot({
  results,
  resultType,
  type,
}: GetSingaporeFourDJackpotConfig): SingaporeFourDJackpot[] {
  const jackpotType = `JP6/45`;
  const sgFourDSource = results.find((result) => result.type === type);
  const sgFourDJackpotSource = results.find(
    (result) => result.type === `${type}${jackpotType}`
  );

  if (!sgFourDSource) throw Error("Singapore 4D base info not found");
  if (!sgFourDJackpotSource) throw Error("Singapore 4D jackpot not found");

  const singaporeFourDBaseInfo = getResultBaseInfo(sgFourDSource.fdData);

  const toto = getSGToTo(sgFourDJackpotSource.fdData);

  const winningNumbers = getSGWinningNumbers(sgFourDJackpotSource.fdData);

  const winningShares = getWinningShares(sgFourDJackpotSource.fdData);

  return [
    {
      ...singaporeFourDBaseInfo,
      type,
      resultType,
      toto,
      winningNumbers,
      winningShares,
    },
  ];
}

export { getSingaporeFourDJackpot };
