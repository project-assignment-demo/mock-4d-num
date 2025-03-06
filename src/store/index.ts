import { create } from "zustand";

export type SupportLocales = 'zh' | 'ms' | 'en';

interface Setting {
    locale: SupportLocales;
    updateLocale: (locale: SupportLocales) => void;
    openDrawer: boolean;
    updateDrawer: (val: boolean) => void;
}


export const useSettingStore = create<Setting>((set) => ({
    locale: 'en',
    updateLocale: (locale: SupportLocales) => set({ locale, }),
    openDrawer: false,
    updateDrawer: (val: boolean) => set({openDrawer: val})
}))
