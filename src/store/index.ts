import { create } from "zustand";
import { CompanyIcon, LotteryIcon } from "../api/companyIcon/type";

export type SupportLocales = "zh" | "ms" | "en";

interface Setting {
  locale: SupportLocales;
  updateLocale: (locale: SupportLocales) => void;
  openDrawer: boolean;
  updateDrawer: (val: boolean) => void;
  companies: LotteryIcon[];
  upateCompanies: (config: UpdateCompanyConfig) => Promise<void>;
  selectedDate: Date;
  updateSelectedDate: (date: Date) => void;
}

interface UpdateCompanyConfig {
  currentPath: string;
  icons: CompanyIcon[];
}

export const useSettingStore = create<Setting>((set) => ({
  locale: "en",
  updateLocale: (locale: SupportLocales) => set({ locale }),
  openDrawer: false,
  updateDrawer: (val: boolean) => set({ openDrawer: val }),
  companies: [],
  upateCompanies: async ({ currentPath, icons }) =>
    set({
      companies: await filterCompanies({ currentPath, icons }),
    }),
  selectedDate: new Date(),
  updateSelectedDate: (date) => set({ selectedDate: date }),
}));

type FilterCompanyConfig = UpdateCompanyConfig;

export async function filterCompanies({
  currentPath,
  icons,
}: FilterCompanyConfig) {
  const companies = mapToCompanies(icons);

  const isJackpotPath = currentPath.includes("/jackpot");
  return companies.filter(({ id }) =>
    isJackpotPath
      ? ["M", "PMP", "ST", "SG", "EE", "H", "WB"].includes(id)
      : id !== "GD"
  );
}

const getCompanyLabelById = (id: string): string => {
  switch (id) {
    case "M": {
      return "Magnum 4D";
    }
    case "PMP": {
      return "Da Ma Cai 1+3D";
    }
    case "ST": {
      return "SportsToto 4D";
    }
    case "SG": {
      return "Singapore 4D";
    }
    case "CS": {
      return "Special CashSweep";
    }
    case "STC": {
      return "Sandakan 4D";
    }
    case "EE":
      {
      }
      return "Sabah 88 4D";
    case "H": {
      return "8LUCKY";
    }
    case "P": {
      return "Perdana Lottery";
    }
    case "GD": {
      return "Grand Dragon 4D";
    }
    case "WB": {
      return "9 Winbox";
    }
    default: {
      throw Error(
        "invalid lottery key                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "
      );
    }
  }
};

function mapToCompanies(icons: CompanyIcon[]): LotteryIcon[] {
  return icons.map(({ id, source }) => {
    const label = getCompanyLabelById(id);
    return {
      id,
      source,
      label,
    };
  });
}
