interface HotNumberDto {
    num: string;
    total: number;
}

interface HotNumberPayload {
    resultType: string;
    year: string;
    showFirstThreePrize: boolean;
    showThreeD: boolean;
}

export type { HotNumberDto, HotNumberPayload }