import { BaseJackpot } from "../../../../api/result/type"

interface JackpotComponentProps <T extends BaseJackpot> {
    data: T;
    primaryColor: string;
    secondaryColor: string;
    textColor?: string;
}

export type { JackpotComponentProps }

// { data: JackpotType }