import { Dayjs } from "dayjs";

export interface ResultDTO {
  type: string;
  fdData: {
    jp_type: string | null;
    n1: string;
    n1_pos: string;
    n2: string;
    n2_pos: string;
    n3: string;
    n3_pos: string;
    n4: string;
    n5: string;
    n6: string;
    n7: string;
    n8: string;
    n9: string;
    n10: string;
    n14: string;
    n15: string;
    n11: string;
    n12: string;
    n13: string;

    s1: string;
    s2: string;
    s3: string;
    s4: string;
    s5: string;
    s6: string;
    s7: string;
    s8: string;
    s9: string;
    s10: string;
    s11: string;
    s12: string;
    s13: string;

    c1: string;
    c2: string;
    c3: string;
    c4: string;
    c5: string;
    c6: string;
    c7: string;
    c8: string;
    c9: string;
    c10: string;

    jp1: string;
    jp2: string;
    jp3: string;
    jp4: string;
    jp5: string;
    jp6: string;
    jp7: string;
    jp8: string;

    dd: string;
    dn: string;
    day: string;
    isLive: string;
    isToday: number;
    videoUrl: string;
    jackpotAmount: string;
    jackpot_prize: string;
    jackpot_number: string;
    jackpot_share: string;
    jackpot_per_share: string;
    jackpot_percent: string;
    jackpotAmount2: string;
    jackpot_prize2: string;
    jackpot_number2: string;
    jackpot_share2: string;
    jackpot_per_share2: string;
    jackpot_percent2: string;
    count: string;
    others: string | null;
  };
}

export interface Result {
  type: string;
  logo: string;
  label: string;
  children: ResultItem[];
}

export interface ResultItem {
  id: string;
  date: Dayjs;
  drawNo: string;
  // timeSelection?: [string, string];
  video: string;
  winningPrizes: ResultWiningPrize;
  specials: ResultPrize[];
  consolations: ResultPrize[];
  fourDJackpot?: FourDJackpot;
  jackpot?: ResultJackpot;
}

export type ResultWiningPrize = [
  { key: string; position: string; value: string },
  { key: string; position: string; value: string },
  { key: string; position: string; value: string }
];

export interface ResultPrize {
  position: string;
  value: string;
}

export type FourDJackpot = [string, string];

export interface ResultJackpot {
  poolAmount: string;
  results: ResultJackpotResult[];
}

export interface ResultJackpotResult {
  amount: string;
  noPrize: string;
  totalWinerUnit: string;
  usdUnit: string;
}

export interface BaseJackpot {
  type: string;
  date: string;
  day: string;
  drawNo: string;
  title: string;
  logo: string;
}

export interface MagnumJackpot extends BaseJackpot {
  magnumLife: {
    winningNumbers: string[];
    bonusNumbers: string[];
  };
  goldJackpot: string[][][];
  jackpotPrize: [string, string];
}

export interface DaMaCaiJackpot extends BaseJackpot {
  threeDBonus: [string, string, string];
  special: string[];
  consolation: string[];
}

type ToToSixD = string | string[];

export interface SportToToJackpot extends BaseJackpot {
  totoJackpot: {
    label: string;
    jackpot: string[];
    prizes: string[];
  }[];
  fiveD: string[];
  sixD: ToToSixD[];
}

export interface Singapor4DJackpot extends BaseJackpot {
  winningNumbers: string[];
  toto: {
    date: string;
    day: string;
    drawNo: string;
  }
  winningShares: { amount: string; shares: string }[];
}

export interface SabahJackpot extends BaseJackpot {
  winningNumbers: {
    jackpot: string[];
    prizes: string[];
  };
}

export interface SixDJackpot extends BaseJackpot {
  datas: {
    sixDPrizes: string[][];
  }[]
}


export type JackpotKey = "M" | "PMP" | "ST" | "SG" | "EE" | "H" | "WB";
export type JackpotType =
  | MagnumJackpot
  | DaMaCaiJackpot
  | SportToToJackpot
  | Singapor4DJackpot
  | SabahJackpot
  | SixDJackpot;

export type Jackpots = Record<JackpotKey, JackpotType>;
