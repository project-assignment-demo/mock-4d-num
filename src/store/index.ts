import { create } from "zustand";
import { CompanyIcon } from "../api/companyIcon/type";

export type SupportLocales = 'zh' | 'ms' | 'en';

interface Setting {
    locale: SupportLocales;
    updateLocale: (locale: SupportLocales) => void;
    openDrawer: boolean;
    updateDrawer: (val: boolean) => void;
    icons: CompanyIcon[];
    updateIcons: (icons: CompanyIcon[]) => void;
}


export const useSettingStore = create<Setting>((set) => ({
    locale: 'en',
    updateLocale: (locale: SupportLocales) => set({ locale, }),
    openDrawer: false,
    updateDrawer: (val: boolean) => set({openDrawer: val}),
    icons: [],
    updateIcons: (icons) => set({icons}),
}))
