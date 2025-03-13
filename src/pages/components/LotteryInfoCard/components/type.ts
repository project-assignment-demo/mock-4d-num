import { Dayjs } from "dayjs";
import { ResultJackpot, ResultJackpotResult, ResultPrize, ResultWiningPrize } from "../../../../api/result/type";

export interface LotteryJackpotSectionProps extends ResultJackpot {
    primaryColor: string;
    secondaryColor: string;
  }
  
export interface JackporResultSectionProps extends ResultJackpotResult {
    primaryColor: string;
    secondaryColor: string;
    title: string;
}

export interface PrizeContentProps {
    value: string;
    id: string;
    fontSize?: number;
}

export interface LotteryInfoVideoSectionProps {
  url: string;
}

export interface LotteryInfoPrizeTableProps {title: string; prizes: ResultPrize[], primaryColor: string}

export interface LotteryInfoHeaderProps {
  logo: string;
  drawNo: string;
  label: string;
  date: Dayjs;
  showTimeSelection: boolean;
  selectedTimeIndex: number;
  primaryColor: string;
  onUpdateTime?: (ibdex: number) => void;
}


export interface LotteryInfoBodyProps  {
  winningPrize: ResultWiningPrize;
  special: ResultPrize[];
  consolation: ResultPrize[];
  primaryColor: string;
  secondaryColor: string;
}

  