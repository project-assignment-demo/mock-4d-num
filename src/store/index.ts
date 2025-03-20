import { create } from "zustand";
import { ResultDTO } from "../api/result/type";
import { CompanyDTO } from "../api/companyIcon/type";
import { useJackpots } from "./jackpot";
import { useCompanies } from "./company";

export type SupportLocales = "zh" | "ms" | "en";

type SiteState = {
  locale: SupportLocales;
  openDrawer: boolean;
  companies: CompanyDTO[];
  selectedDate: Date;
  sourceResults: ResultDTO[];
};

type SiteAction = {
  updateLocale: (locale: SupportLocales) => void;

  updateDrawer: (val: boolean) => void;

  upateCompanies: (companies: CompanyDTO[]) => Promise<void>;

  updateSelectedDate: (date: Date) => void;

  updateResults: (results: ResultDTO[]) => void;
};

const useSiteStore = create<SiteState & SiteAction>((set) => ({
  locale: "en",
  sourceResults: [],
  // jackpots: fetchJackpots(get().sourceResults),
  updateResults: (results) => {
    console.log("update global");
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
  selectedDate: new Date(),
  updateSelectedDate: (date) => set({ selectedDate: date }),
}));

export { useSiteStore, useJackpots, useCompanies };
