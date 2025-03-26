import { LotteryResultChild } from "../../../../../store/result/type";
import { LotteryComponentProps } from "../type";

type BaseLotteryInfoProps = LotteryComponentProps<LotteryResultChild> & {primaryPrizeLabelTextColor?: string};

export type { BaseLotteryInfoProps }