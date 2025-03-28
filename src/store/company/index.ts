import { useSiteStore } from "..";
import { CompanyDTO } from "../../api/companyIcon/type";

interface MapCompaniesConfig {
  currentPath: string;
  companies: CompanyDTO[];
}

export interface Company extends CompanyDTO {
  label: string;
}

function mapCompanies(config: MapCompaniesConfig) {
  const companies = mapToCompaniesWithLabel(config.companies);

  const isJackpotPath = config.currentPath.includes("/jackpot");
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

function mapToCompaniesWithLabel(companies: CompanyDTO[]): Company[] {
  return companies.map(({ id, source }) => {
    const label = getCompanyLabelById(id);
    return {
      id,
      source,
      label,
    };
  });
}

function useCompanies(currentPath: string) {
  // const companies = useSiteStore((state) => state.companies);
  const companies = useSiteStore.getState().companies;
  return mapCompanies({ currentPath, companies });
}

export { useCompanies };
