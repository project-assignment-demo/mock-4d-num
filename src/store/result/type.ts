type ResultType = "lottery" | "jackpot";

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
  video: string;
  primaryPrizes: PrimaryPrize[];
  specials: SecondaryPrize[];
  consolations: SecondaryPrize[];
}

interface JackpotLottery {
  jackpotPool: string;
  jackpotResults: JackpotResult[];
}

interface Prize {
  value: string;
}

interface PrimaryPrize extends SecondaryPrize {
  key: string;
}

interface SecondaryPrize extends Prize {
  postion: string;
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
  JackpotLottery,
};
