import { JackpotResultChild } from "../../type";
import { GetJackpotConfig } from "../type";

interface MagnumLife {
    winningNumbers: string[];
    bonusNumbers: string[];
  }
  
  interface MagnumGoldJackpot {
    jackpots: string[][][];
    prizes: string[]
  }

interface MagnumJackpot extends JackpotResultChild {
    magnumLife: MagnumLife;
    magnumGoldJackpot: MagnumGoldJackpot;
}

type GetMagnumJackpotConfig = GetJackpotConfig;

export type { MagnumJackpot, GetMagnumJackpotConfig }