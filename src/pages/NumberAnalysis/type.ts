import { Company } from "../../store/company/type";

interface AnalysisConfig {
  keyword: string;
  categories: Company[];
}

export type { AnalysisConfig };
