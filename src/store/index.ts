import { create } from "zustand";
import { LotteryIcon } from "../api/companyIcon/type";

export type SupportLocales = 'zh' | 'ms' | 'en';

interface Setting {
    locale: SupportLocales;
    updateLocale: (locale: SupportLocales) => void;
    openDrawer: boolean;
    updateDrawer: (val: boolean) => void;
    icons: LotteryIcon[];
    updateIcons: (icons: LotteryIcon[]) => void;
    selectedDate: Date;
    updateSelectedDate: (date: Date) => void;
}


export const useSettingStore = create<Setting>((set) => ({
    locale: 'en',
    updateLocale: (locale: SupportLocales) => set({ locale, }),
    openDrawer: false,
    updateDrawer: (val: boolean) => set({openDrawer: val}),
    icons: [],
    updateIcons: (icons) => set({icons}),
    selectedDate: new Date(),
    updateSelectedDate: (date) => set({selectedDate: date})
}))
