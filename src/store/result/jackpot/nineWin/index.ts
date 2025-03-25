import { getSixDJackpot } from "../sixD";
import { GetNineWinBoxConfig, NineWinJackpot } from "./type";

function getNineWinBoxJackpot({
  resultType,
  results,
  type,
}: GetNineWinBoxConfig): NineWinJackpot[] {
  return getSixDJackpot({ results, resultType, type });
}

export { getNineWinBoxJackpot };
