interface LotteryJackpotResultSectionProps {
    primaryColor: string;
    secondaryColor: string;
    title: string;
    noBonus: string;
    noPrize: string;
    totalWinner: string;
    perUnit: string;
}

interface LotteryJackpotSectionProps {
    poolAmount: string;
    jackpots: LotteryJackpotResult[];
    primaryColor?: string | undefined;
    secondaryColor?: string | undefined;
}

interface LotteryJackpotResult {
    noBonus: string;
    noPrize: string;
    totalWinner: string;
    perUnit: string;
}

export type { LotteryJackpotResultSectionProps, LotteryJackpotSectionProps }