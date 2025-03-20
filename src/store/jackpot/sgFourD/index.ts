import { ResultDTO, Singapor4DJackpot } from "../../../api/result/type";
import { GetJackpotConfig } from "../type";
import { getBaseResultInfo } from "../baseJackpot";

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
    .reduce<
      {
        amount: string;
        shares: string;
      }[]
    >((acc, curr, index, array) => {
      if (index % 2 === 0 && index + 1 < array.length) {
        acc.push({ amount: curr, shares: array[index + 1] });
      }
      return acc;
    }, []);

  return shares;
}

function getSgFourDJackpot({
  results,
  companies,
}: GetJackpotConfig): Singapor4DJackpot {
  const sgFourDSource = results.find((result) => result.type === "SGJP6/45");

  if (!sgFourDSource) throw Error("invalid Singapore Toto source");

  const toto = getSGToTo(sgFourDSource.fdData);

  const winningNumbers = getSGWinningNumbers(sgFourDSource.fdData);

  const winningShares = getWinningShares(sgFourDSource.fdData);

  return {
    ...getBaseResultInfo({
      type: "SG",
      data: sgFourDSource.fdData,
      companies: companies,
    }),
    toto,
    winningNumbers,
    winningShares,
  };
}

export { getSgFourDJackpot };
