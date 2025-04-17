interface SecondaryPrizeContentProps {
    value: string | null;
    id: string;
    fontSize?: number;
}

interface SecondaryPrizesProps {
    title: string; 
    prizes: SecondaryPrize[], 
    primaryColor: string
}

interface SecondaryPrize {
    position: string;
    value: string;
}

export type { SecondaryPrizesProps, SecondaryPrizeContentProps }
