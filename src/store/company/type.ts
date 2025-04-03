import { CompanyDTO } from "../../api/companyIcon/type";

interface MapCompaniesConfig {
  currentPath?: string;
  companies: CompanyDTO[];
}

interface Company extends CompanyDTO {
  label: string;
}

interface NumberAnalysisCompany extends Company {
  selected: boolean;
}

interface HotFourDNumberCompany extends Company {
  selected: boolean;
}

export type { MapCompaniesConfig, Company, NumberAnalysisCompany, HotFourDNumberCompany };
