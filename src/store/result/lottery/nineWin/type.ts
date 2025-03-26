import { LotteryResultChild, LotteryJackpot } from "../../type";
import { GetLotteryConfig } from "../type";

type NineWinLottery = LotteryResultChild & LotteryJackpot;

type GetNineWinLotteryConfig = GetLotteryConfig;

export type { NineWinLottery, GetNineWinLotteryConfig }