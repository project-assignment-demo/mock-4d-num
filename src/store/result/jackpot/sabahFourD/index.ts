import { ResultDTO } from "../../../../api/result/type";
import { getResultBaseInfo } from "../../baseResultInfo";
import { GetSabahFourDJackpotConfig, SabahFourDJackpot } from "./type";
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

function getSabahLottoJackpotWinningJackpots(source: ResultDTO["fdData"]) {
  const prizes = getSabahLottoJackpotWinningNumbersPrizes(source);
  const jackpots = getSabahLottoJackpotWinningNumbersJackpot(source);
  return {
    prizes,
    jackpots,
  };
}

function getSabahFourDJackpot({
  resultType,
  results,
  type,
}: GetSabahFourDJackpotConfig): SabahFourDJackpot[] {
  const sabahFourDInfoSource = results.find((result) => result.type === type);

  const sabahJackpotLottoSource = results.find(
    (result) => result.type === "EEJP6/45"
  );

  if (!sabahFourDInfoSource) throw Error("Sabah 4D source Not Found");

  if (!sabahJackpotLottoSource)
    throw Error("Sabah Lotto Jackpot source Not Found");

  const sabahFourDInfo = getResultBaseInfo(sabahFourDInfoSource.fdData);

  const winningJackpot = getSabahLottoJackpotWinningJackpots(
    sabahJackpotLottoSource.fdData
  );
  return [
    {
      resultType,
      type,
      ...sabahFourDInfo,
      winningJackpot,
    },
  ];
}

export { getSabahFourDJackpot };
