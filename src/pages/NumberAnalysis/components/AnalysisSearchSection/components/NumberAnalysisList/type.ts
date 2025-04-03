import { NumberAnalysisCompany } from "../../../../../../store/company/type";

interface NumberAnalysisListProps {
    items: NumberAnalysisCompany[];
    onUpdateItems: (items: NumberAnalysisCompany[]) => void;
}

export type { NumberAnalysisListProps }