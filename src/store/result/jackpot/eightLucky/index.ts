import { getSixDJackpot } from "../sixD";
import { EightLuckyJackpot, GetEightLuckyJackpotConfig } from "./type";

function getEightLuckyJackpot({
  resultType,
  results,
  type,
}: GetEightLuckyJackpotConfig): EightLuckyJackpot[] {
  return getSixDJackpot({ results, resultType, type });
}

export { getEightLuckyJackpot };
