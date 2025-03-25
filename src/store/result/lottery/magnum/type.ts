import { LotteryResultChild } from "../../type";
import { GetLotteryConfig } from "../type";

interface MagnumLottery extends LotteryResultChild {
    jackpots: string[]
}

type GetMagnumLotteryConfig = GetLotteryConfig;

export type { MagnumLottery, GetMagnumLotteryConfig }