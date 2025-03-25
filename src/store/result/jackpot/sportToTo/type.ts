import { JackpotResultChild, WinningJackpot } from "../../type";
import { GetJackpotConfig } from "../type";

type ToToSixD = string | string[]

interface ToToWinningJackpot extends WinningJackpot{
    label: string;
}

interface SportToToJackpot extends JackpotResultChild {
  jackpots: ToToWinningJackpot[];
  fiveD: string[];
  sixD: ToToSixD[];
}

type GetSportToToConfig = GetJackpotConfig;

export type { SportToToJackpot, GetSportToToConfig }
