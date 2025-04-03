import { MagnumLottery } from "./magnum/type";
import { DaMaCaiLottery } from "./daMaCai/type";
import { EightLuckyLottery } from "./eightLucky/type";
import { NineWinLottery } from "./nineWin/type";
import { PerdanaLottery } from "./perdana/type";
import { SabahFourDLottery } from "./sabahFourD/type";
import { SandakanFourDLottery } from "./SandakanFourD/type";
import { SpecialCashSweepLottery } from "./specialCashSweep/type";
import { SportToToLottery } from "./sportToTo/type";
import { ResultDTO } from "../../../api/result/type";
import { ResultType } from "../type";
import { Company } from "../../company/type";

type LotteryKey =
  | "M"
  | "PMP"
  | "ST"
  | "SG"
  | "CS"
  | "STC"
  | "EE"
  | "H"
  | "P"
  | "WB";

type LotteryType =
  | DaMaCaiLottery
  | EightLuckyLottery
  | MagnumLottery
  | NineWinLottery
  | PerdanaLottery
  | SabahFourDLottery
  | SpecialCashSweepLottery
  | SportToToLottery
  | SandakanFourDLottery;
interface GetLotteryConfig {
  type: LotteryKey;
  results: ResultDTO[];
  resultType: ResultType;
}

interface MapLotteryConfig {
  results: ResultDTO[];
  companies: Company[];
  type: LotteryKey;
}

export type { LotteryKey, LotteryType, GetLotteryConfig, MapLotteryConfig };
