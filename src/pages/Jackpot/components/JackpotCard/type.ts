import { JackpotResultChild } from "../../../../store/result/type";

interface JackpotComponentProps <T extends JackpotResultChild> {
    data: T;
    title: string;
    logo: string;
    primaryColor: string;
    secondaryColor: string;
    textColor?: string;
    selectedTime?: string;
}

export type { JackpotComponentProps }