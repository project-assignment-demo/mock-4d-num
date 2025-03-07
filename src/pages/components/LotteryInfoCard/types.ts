import { Dayjs } from "dayjs";

export type PrimaryPrize = Required<Record<"1" | "2" | "3", PrimaryPrizeInfo>>;
export type SecondaryPrize = Required<Record<"1" | "2", SecondaryPrizeInfo>>;
// export type SecondaryPrizes<T> = [] & { length: 15 };

export type SecondaryPrizes<T> = T[];

export interface LotteryInfoCardProps {
  header: LotteryInfoHeaderProps;
  video?: string;
  prizes: LotteryPrize;
  jackpot?: LotteryJackpot;
}

export interface LotteryJackpot {
  pool: {
    title: string;
    amount: string;
  };
  jackpots: JackpotResult[];
}

export interface JackpotResult {
  title: string;
  noBonus: {
    title: string;
    amount: string;
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
  prizes: SecondaryPrizes<LotteryPrizeInfo>;
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
