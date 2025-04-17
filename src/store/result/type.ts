import { JackpotKey } from "./jackpot/type";
import { LotteryKey } from "./lottery/type";

type ResultType = "lottery" | "jackpot";
type ResultKey = keyof Record<LotteryKey | JackpotKey, unknown>;

interface Result {
  type: string;
  logo: string;
  title: string;
  children: ResultChild[];
}

interface ResultChildBaseInfo {
  date: string;
  day: string;
  drawNo: string;
}

interface ResultChild extends ResultChildBaseInfo {
  type: string;
 
  resultType: ResultType;
}

interface LotteryResultChild extends ResultChild {
  video?: string | undefined;
  primaryPrizes: PrimaryPrize[];
  specials: SecondaryPrize[];
  consolations: SecondaryPrize[];
}

interface LotteryJackpot {
  jackpotPool: string;
  jackpotResults: JackpotResult[];
}

interface Prize {
  value: string | null;
}

interface PrimaryPrize extends SecondaryPrize {
  key: string;
}

interface SecondaryPrize extends Prize {
  position: string;
}

interface JackpotResult {
  noBonus: string;
  noPrize: string;
  totalWinner: string;
  perUnit: string;
}

type JackpotResultChild = ResultChild;

interface WinningJackpot {
  prizes: string[];
  jackpots: string[];
}


export type {
  Result,
  ResultType,
  ResultChild,
  ResultChildBaseInfo,
  LotteryResultChild,
  JackpotResultChild,
  Prize,
  PrimaryPrize,
  SecondaryPrize,
  WinningJackpot,
  LotteryJackpot,
  ResultKey,
};
