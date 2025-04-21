import { create } from "zustand";
import { ResultDTO } from "../api/result/type";
import { CompanyDTO } from "../api/companyIcon/type";
import { useCompanies } from "./company";
import { LuckyBookFilterData } from "../pages/LuckyBook/components/LuckyBookFilter";
import { Company } from "./company/type";

export type SupportLocales = "zh" | "ms" | "en";

export const LuckyBookSearchCategories = ["all", "wzt", "gzt", "qzt"] as const;

export type LuckyBookSearchCategory = typeof LuckyBookSearchCategories[number];

interface AnalysisConfig {
  keyword: string;
  categories: Company[];
}

interface LuckyBookFilterPointerData extends LuckyBookFilterData {
  pointer: number;
}

type SiteState = {
  locale: SupportLocales;
  luckyBookSearchCategory: LuckyBookSearchCategory;
  openDrawer: boolean;
  companies: CompanyDTO[];
  selectedDate: Date;
  sourceResults: ResultDTO[];
  specialDrawResults: string[];
  luckyBookFilterPointer: LuckyBookFilterPointerData;
  analysisConfig: AnalysisConfig;
};

type SiteAction = {
  updateLocale: (locale: SupportLocales) => void;

  updateLuckyBookSearchCategory: (category: LuckyBookSearchCategory) => void;

  updateDrawer: (val: boolean) => void;

  upateCompanies: (companies: CompanyDTO[]) => Promise<void>;

  updateSelectedDate: (date: Date) => void;

  updateResults: (results: ResultDTO[]) => void;

  updateSpecialDrawResults: (results: string[]) => void;

  updateLuckyBookFilterPointer: (newPointer: LuckyBookFilterData) => void;

  decrementLuckyBookFilterPointer: () => void;

  resetLuckyBookFilterPointer: () => void;

  updateAnalysisConfig: (config: AnalysisConfig) => void;
};

const useSiteStore = create<SiteState & SiteAction>((set, get) => ({
  locale: "en",
  luckyBookSearchCategory: "all",
  sourceResults: [],
  specialDrawResults: [],
  selectedDate: new Date(),
  luckyBookFilterPointer: { start: 0, end: 499, index: 0, pointer: 0 },
  analysisConfig: {
    keyword: "",
    categories: []
  },
  updateResults: (results) => {
    set({ sourceResults: results });
  },
  updateLuckyBookSearchCategory: (category) =>
    set({ luckyBookSearchCategory: category }),
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
  updateLuckyBookFilterPointer: (data) =>
    set({ luckyBookFilterPointer: { ...data, pointer: data.start } }),
  decrementLuckyBookFilterPointer: () => {
    const filterData = { ...get().luckyBookFilterPointer };
    if (filterData.pointer >= 20) {
      filterData.pointer -= 20;
    }
    console.log(filterData.pointer);
    set({ luckyBookFilterPointer: filterData });
  },
  resetLuckyBookFilterPointer: () =>
    set({
      luckyBookFilterPointer: { start: 0, end: 499, index: 0, pointer: 0 },
    }),

    updateAnalysisConfig: (config) => (set({analysisConfig: config}))
}));

export { useSiteStore, useCompanies };
