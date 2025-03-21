import type { SixDJackpot } from "../../../../../../api/result/type";

interface SixDInfoProps {
    data: SixDJackpot;
    primaryColor: string;
    secondaryColor: string;
    textColor?: string;
    title: string;
    selectedTime: string | undefined;
}

export type { SixDInfoProps }