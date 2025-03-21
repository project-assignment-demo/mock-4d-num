import { ResultDTO } from "../../../api/result/type";
import { GetJackpotConfig } from "../type";
import { getBaseResultInfo } from "../baseJackpot";

function getSabahLottoJackpotWinningNumbersPrizes(source: ResultDTO["fdData"]) {
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

function getSabahLottoJackpotWinningNumbersJackpot(
  source: ResultDTO["fdData"]
) {
  return [source.jp1, source.jp2];
}

function getSabahLottoJackpotWinningNumbers(source: ResultDTO["fdData"]) {
  const prizes = getSabahLottoJackpotWinningNumbersPrizes(source);
  const jackpot = getSabahLottoJackpotWinningNumbersJackpot(source);
  return {
    prizes,
    jackpot,
  };
}

function getSabahLottoJackpot({ results, companies }: GetJackpotConfig) {
  const sabahToToSource = results.find((result) => result.type === "EEJP6/45");

  if (!sabahToToSource) throw Error("Sabah Lotto Jackpot source Not Found");

  const winningNumbers = getSabahLottoJackpotWinningNumbers(
    sabahToToSource.fdData
  );

  return {
    ...getBaseResultInfo({
      type: "EE",
      data: sabahToToSource.fdData,
      companies: companies,
    }),
    winningNumbers,
  };
}

export { getSabahLottoJackpot };
