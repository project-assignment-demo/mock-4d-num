import { useSiteStore } from "../..";
import { ResultDTO } from "../../../api/result/type";
import { useCompanies } from "../../company";
import { LotteryResultChild, Result, ResultType } from "../type";
import { getDaMaCaiLottery } from "./daMaCai";
import { getEightLuckyLottery } from "./eightLucky";
import { getMagnumLottery } from "./magnum";
import { getNineWinBoxLottery } from "./nineWin";
import { getPerdanaLottery } from "./perdana";
import { getSabahFourDLottery } from "./sabahFourD";
import { getSandakanFourDLottery } from "./SandakanFourD";
import { getSingaporetToToLottery } from "./SingaporeFourD";
import { getSpecialCashSweepLottery } from "./specialCashSweep";
import { getSportToToLottery } from "./sportToTo";
import { LotteryKey, MapLotteryConfig } from "./type";

function mapLottery({ type, companies, results }: MapLotteryConfig): Result {
  const company = companies.find((company) => company.id === type);
  if (!company) throw Error(`not found company ${type}`);
  const logo = company.source;
  const title = company.label;

  const children = getlotteryChildren({ results, type });

  return {
    type,
    logo,
    title,
    children,
  };
}

function getlotteryChildren({
  results,
  type,
}: {
  results: ResultDTO[];
  type: LotteryKey;
}): LotteryResultChild[] {
  const resultType: ResultType = "lottery";
  switch (type) {
    case "M":
      return getMagnumLottery({ results, type, resultType });
    case "PMP":
      return getDaMaCaiLottery({ results, type, resultType });
    case "ST":
      return getSportToToLottery({ results, type, resultType });
    case "SG":
      return getSingaporetToToLottery({ results, type, resultType });
    case "CS":
      return getSpecialCashSweepLottery({ results, type, resultType });
    case "STC":
      return getSandakanFourDLottery({ results, type, resultType });
    case "EE":
      return getSabahFourDLottery({ results, type, resultType });
    case "H":
      return getEightLuckyLottery({ results, type, resultType });
    case "P":
      return getPerdanaLottery({ results, type, resultType });
    case "WB":
      return getNineWinBoxLottery({ results, type, resultType });
  }
}

function useLotteries(): Result[] {
  const results = useSiteStore((state) => state.sourceResults);
  const companies = useCompanies("");
  const lotterryTypes: LotteryKey[] = [
    "M",
    "PMP",
    "ST",
    "SG",
    "CS",
    "STC",
    "EE",
    "H",
    "P",
    "WB",
  ];

  return lotterryTypes.map((type) =>
    mapLottery({
      results,
      type,
      companies,
    })
  );
}

export { useLotteries };
