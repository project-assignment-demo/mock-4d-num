// import { SixDJackpot } from "../../../api/result/type";

import { ResultDTO } from "../../../api/result/type";
import { getResultCountry } from "../../../utils";

function formatLotteryNumber(source: string) {
  return source.replace(/(\d{3})(\d{3})/, "$1 $2");
}

function getMergedResults(
  oldResults: ResultDTO[],
  newResults: ResultDTO[],
  target: "mysg" | "other"
): ResultDTO[] {
  const filteredResults = newResults.filter(
    (result) => getResultCountry(result.type) === target
  );

  const resultMap = new Map(oldResults.map((r) => [r.type, r]));

  filteredResults.forEach((result) => resultMap.set(result.type, result));

  return Array.from(resultMap.values());
}
export { formatLotteryNumber, getMergedResults };
