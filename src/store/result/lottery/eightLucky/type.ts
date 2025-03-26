import { LotteryJackpot, LotteryResultChild } from "../../type";
import { GetLotteryConfig } from "../type";

type  EightLuckyLottery = LotteryResultChild & LotteryJackpot;
type GetEightLuckyLotteryConfig = GetLotteryConfig;

export type { EightLuckyLottery , GetEightLuckyLotteryConfig }