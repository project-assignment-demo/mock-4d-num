import { create } from "zustand";
import { ResultDTO } from "../api/result/type";
import { CompanyDTO } from "../api/companyIcon/type";
import { useCompanies } from "./company";

export type SupportLocales = "zh" | "ms" | "en";

type SiteState = {
  locale: SupportLocales;
  openDrawer: boolean;
  companies: CompanyDTO[];
  selectedDate: Date;
  sourceResults: ResultDTO[];
  specialDrawResults: string[];
};

type SiteAction = {
  updateLocale: (locale: SupportLocales) => void;

  updateDrawer: (val: boolean) => void;

  upateCompanies: (companies: CompanyDTO[]) => Promise<void>;

  updateSelectedDate: (date: Date) => void;

  updateResults: (results: ResultDTO[]) => void;

  updateSpecialDrawResults: (results: string[]) => void;
};

const useSiteStore = create<SiteState & SiteAction>((set) => ({
  locale: "en",
  sourceResults: [],
  specialDrawResults: [],
  selectedDate: new Date(),
  updateResults: (results) => {
    set({ sourceResults: results });
  },
  updateLocale: (locale: SupportLocales) => set({ locale }),
  openDrawer: false,
  updateDrawer: (val: boolean) => set({ openDrawer: val }),
  companies: [],
  upateCompanies: async (companies) =>
    set({
      companies,
    }),

  updateSelectedDate: (date) => set({ selectedDate: date }),
  updateSpecialDrawResults: (specialDrawResults) => set({ specialDrawResults }),
}));

export { useSiteStore, useCompanies };
