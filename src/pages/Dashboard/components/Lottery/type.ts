import { LotteryResultChild } from "../../../../store/result/type";

interface LotteryComponentProps <T extends LotteryResultChild> {
    data: T;
    title: string;
    logo: string;
    primaryColor: string;
    secondaryColor: string;
    textColor?: string;
    selectedTime?: string;
}

export type { LotteryComponentProps }