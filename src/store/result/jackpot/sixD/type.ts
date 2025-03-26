import { JackpotResultChild } from "../../type";
import { GetJackpotConfig } from "../type";

type SixDJackpot = string[][];

interface SixDJackpotResult extends JackpotResultChild {
  time: string;
  sixD: SixDJackpot;
}

type GetSixDJackpotConfig = GetJackpotConfig;
export type { GetSixDJackpotConfig, SixDJackpotResult, SixDJackpot };
