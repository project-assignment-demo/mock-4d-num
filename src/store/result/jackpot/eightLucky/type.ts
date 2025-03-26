import { SixDJackpot, SixDJackpotResult } from "../sixD/type";
import { GetJackpotConfig} from "../type"

interface EightLuckyJackpot extends SixDJackpotResult {
    sixD: SixDJackpot
}

type GetEightLuckyJackpotConfig = GetJackpotConfig;

export type { EightLuckyJackpot, GetEightLuckyJackpotConfig }
  