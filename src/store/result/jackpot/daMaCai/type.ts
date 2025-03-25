import { JackpotResultChild, Prize } from "../../type";
import { GetJackpotConfig } from "../type";

interface DaMaCaiJackpot extends JackpotResultChild  {
  bonus: string[];
  specials: Prize[];
  consolations: Prize[];
}

type GetDaMaCaiConfig = GetJackpotConfig;

export type { DaMaCaiJackpot, GetDaMaCaiConfig };