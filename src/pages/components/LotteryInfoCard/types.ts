import { Dayjs } from "dayjs";
import { Dinero } from 'dinero.js';
export type PrimaryPrize = Required<Record<"1" | "2" | "3", PrimaryPrizeInfo>>;
export type SecondaryPrize = Required<Record<"1" | "2", SecondaryPrizeInfo>>;
export type SecondaryPrizes<T> = T[];

// export type SecondaryPrizes<T> = T[];

export interface LotteryInfoCardProps {
  id: string;
  header: LotteryInfoHeaderProps;
  video?: string;
  prizes: LotteryPrize;
  jackpot?: LotteryJackpot;
  jackpotPrize: [string, string] 
}

export interface LotteryJackpot {
  pool: {
    title: string;
    amount: Dinero;
  };
  jackpots: JackpotResult[];
}

export interface JackpotResult {
  title: string;
  noBonus: {
    title: string;
    amount: Dinero;
  };
  extra: string[];
}

export interface LotteryPrizeInfo {
    prefix: string;
    value: string;
}

export interface LotteryPrize {
  primary: PrimaryPrize;
  secondary: SecondaryPrize;
}

export interface PrimaryPrizeInfo {
  label: string;
  prize: LotteryPrizeInfo;
}

export interface SecondaryPrizeInfo {
  label: string;
  prizes: LotteryPrizeInfo[];
}

export interface LotteryInfoHeaderProps {
  logo: {
    url: string;
    title: string;
  };
  draw: {
    date: Dayjs;
    no: string;
  };
}
