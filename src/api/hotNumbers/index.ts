import { api } from "../api";
import { HotNumberDto, HotNumberPayload } from "./type";

async function getHotNumbers({
  resultType,
  year,
  showFirstThreePrize,
  showThreeD,
}: HotNumberPayload): Promise<HotNumberDto> {
  const limitPrizeType = showFirstThreePrize ? 1 : 0;
  const limitThreeD = showThreeD ? 3 : 4;

  const result =  await api.get<HotNumberDto>(
    `/hotNumber/${resultType}/${limitPrizeType}/${year}/${limitThreeD}`
  );
  return result.data;
}
export { getHotNumbers };
