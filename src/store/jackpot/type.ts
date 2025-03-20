import { ResultDTO } from "../../api/result/type";
import { Company } from "../company";

interface GetJackpotConfig {
    results: ResultDTO[];
    companies: Company[]
}

export type { GetJackpotConfig }