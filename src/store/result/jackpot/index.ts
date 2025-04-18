import { useCompanies, useSiteStore } from "../..";
import { getCompanies } from "../../company";
import { JackpotResultChild, Result, ResultType } from "../type";
import { getDaMaCaiJackpot } from "./daMaCai";
import { getEightLuckyJackpot } from "./eightLucky";
import { getMagnumJackpot } from "./magnum";
import { getNineWinBoxJackpot } from "./nineWin";
import { getSabahFourDJackpot } from "./sabahFourD";
import { getSingaporeFourDJackpot } from "./SingaporeFourD";
import { getSportToToJackpot } from "./sportToTo";
import { GetJackpotChildrenConfig, JackpotKey, MapJackpotConfig } from "./type";

function getJackpotChildren({
  results,
  type,
}: GetJackpotChildrenConfig): JackpotResultChild[] {
  const resultType: ResultType = "jackpot";
  switch (type) {
    case "M":
      return getMagnumJackpot({ results, type, resultType });
    case "EE":
      return getSabahFourDJackpot({ results, type, resultType });
    case "H":
      return getEightLuckyJackpot({ results, type, resultType });
    case "PMP":
      return getDaMaCaiJackpot({ results, type, resultType });
    case "SG":
      return getSingaporeFourDJackpot({ results, type, resultType });
    case "ST":
      return getSportToToJackpot({ results, type, resultType });
    case "WB":
      return getNineWinBoxJackpot({ results, type, resultType });
  }
}

function getJackpot({ type, companies, results }: MapJackpotConfig): Result {
  const company = companies.find((company) => company.id === type);
  if (!company) throw Error(`not found company ${type}`);
  const logo = company.source;
  const title = company.label;

  const children = getJackpotChildren({ results, type });

  return {
    type,
    logo,
    title,
    children,
  };
}

function getJackpots(): Result[] {
  const results = useSiteStore.getState().sourceResults;
  const companies = getCompanies("/jackpot");
    const jackpotTypes: JackpotKey[] = ["M", "PMP", "ST", "SG", "EE", "H", "WB"];

  const jackpots = jackpotTypes.map((type) =>
    getJackpot({
      results,
      type,
      companies,
    })
  );

  return jackpots;
}

export {  getJackpots };
