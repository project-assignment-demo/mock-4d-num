import { JackpotResultChild, WinningJackpot } from "../../type"
import { GetJackpotConfig } from "../type"

interface SabahFourDJackpot extends JackpotResultChild {
  winningJackpot: WinningJackpot
}

type GetSabahFourDJackpotConfig = GetJackpotConfig;

export type { SabahFourDJackpot, GetSabahFourDJackpotConfig }
