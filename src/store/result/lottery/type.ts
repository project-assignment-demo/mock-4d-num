import { MagnumLottery } from "../jackpot/magnum/type";
import { DaMaCaiLottery } from "./daMaCai/type";
import { EightLuckyLottery } from "./eightLucky/type";
import { NineWinLottery } from "./nineWin/type";
import { PerdanaLottery } from "./perdana/type";
import { SabahFourDLottery } from "./sabahFourD";
import { SandakanFourDLottery } from "./SandakanFourD/type";
import { SpecialCashSweepLottery } from "./specialCashSweep/type";
import { SportToToLottery } from "./sportToTo/type";

type LotteryKey = "M" | "PMP"| "ST" | "SG" | "CS" | "STC" | "EE" | "H" | "P" | "WB";

type LotteryType = DaMaCaiLottery | EightLuckyLottery | MagnumLottery | NineWinLottery | PerdanaLottery | SabahFourDLottery | SpecialCashSweepLottery | SportToToLottery | SandakanFourDLottery;

export type { LotteryKey, LotteryType }