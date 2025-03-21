import { SixDJackpot } from "../../../api/result/type";

function formatLotteryNumber(source: string) {
  return source.replace(/(\d{3})(\d{3})/, "$1 $2");
}

function isSixDJackpot(data: unknown): data is SixDJackpot {
  return (
    typeof data === "object" &&
    data !== null &&
    "type" in data &&
    (data.type === "H" || data.type === "WB") &&
    "prizes" in data &&
    typeof data.prizes === "object" &&
    data.prizes !== null &&
    Object.values(data.prizes).every(
      (prize) =>
        Array.isArray(prize) &&
        prize.every(
          (row) =>
            Array.isArray(row) && row.every((item) => typeof item === "string")
        )
    )
  );
}
export { formatLotteryNumber, isSixDJackpot };
