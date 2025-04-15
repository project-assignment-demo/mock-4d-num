import { HotNumberDto } from "../../../../api/hotNumbers/type";

interface HotNumberTableProps {
    numbers: HotNumberDto[] | undefined;
    selectedYear: boolean;
    selectedType: boolean;
}

export type { HotNumberTableProps }