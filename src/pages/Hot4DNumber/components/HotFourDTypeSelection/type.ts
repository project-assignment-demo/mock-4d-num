import { Company } from "../../../../store/company/type";

interface FourDTypesSelectionProps {
    items: Company[];
    onUpdateSelectedFourD: (id: string) => void;
    title: string;
}

export type { FourDTypesSelectionProps }