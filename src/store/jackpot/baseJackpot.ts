import { BaseJackpot, ResultDTO } from "../../api/result/type";
import { Company } from "../company";

interface GetBaseJackpotConfig {
    type: string;
    data: ResultDTO['fdData'];
    companies: Company[]
    
}
function getBaseResultInfo({ type, data, companies }: GetBaseJackpotConfig): BaseJackpot {
    const company = companies.find(company => company.id === type);

    if (!company) throw Error(`Not found company ${type}`)
    return {
        type,
        date: data.dd,
        day: data.day,
        drawNo: data.dn,
        logo: company.source,
        title: company.label,
    }
}

export { getBaseResultInfo }