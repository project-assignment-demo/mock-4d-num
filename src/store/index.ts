import { create } from "zustand";

interface Setting {
    locale: string;
    updateLocale: (locale: string) => void;
}


export const useSettingStore = create<Setting>((set) => ({
    locale: 'en',
    updateLocale: (locale: string) => set({ locale, })
}))
