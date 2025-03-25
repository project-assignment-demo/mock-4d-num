import { JackpotResultChild } from "../../type";
import { GetJackpotConfig } from "../type";

interface SingaporeToTo {
  date: string;
  day: string;
  drawNo: string;
}

interface SingaporeWinningShare {
  shareAmount: string;
  winningShare: string;
}

interface SingaporeFourDJackpot extends JackpotResultChild {
  toto: SingaporeToTo;
  winningNumbers: string[];
  winningShares: SingaporeWinningShare[];
}

type GetSingaporeFourDJackpotConfig = GetJackpotConfig;

export type { SingaporeFourDJackpot, GetSingaporeFourDJackpotConfig }