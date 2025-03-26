import { ResultDTO } from "../../../api/result/type";
import { ResultChildBaseInfo } from "../type";


function getResultBaseInfo(result: ResultDTO['fdData']): ResultChildBaseInfo {
    return {
        date: result.dd,
        day: result.day,
        drawNo: result.dn
    }
}

export { getResultBaseInfo}