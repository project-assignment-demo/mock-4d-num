import { getMagnumJackpot } from "./magnum";
import {getSportToToJackpot } from './sportToTo';
import { Jackpots, ResultDTO } from "../../api/result/type";
import { getSabahLottoJackpot } from "./sabahLotto";
import { Company, useCompanies } from "../company";
import { getDaMaCaiJackpot } from "./daMaCai";
import { getSgFourDJackpot } from "./sgFourD";
import { getSixDJackpot } from "./sixD";
import { useSiteStore } from "..";


const fetchJackpots = (results: ResultDTO[], companies: Company[]): Jackpots | null => {

  if (results.length === 0 || companies.length === 0) return null; 

  return {
    M: getMagnumJackpot({results, companies}),
    PMP: getDaMaCaiJackpot({results, companies}),
    ST: getSportToToJackpot({results, companies}),
    SG: getSgFourDJackpot({results, companies}),
    EE:  getSabahLottoJackpot({results, companies}),
    H: getSixDJackpot({results, type: "H", companies}),
    WB: getSixDJackpot({results, type: "WB", companies}),
  };
};

function useJackpots() {
  const results = useSiteStore((state) => state.sourceResults);
  const companies = useCompanies("/jackpot");

  return fetchJackpots(results, companies);
}

export { useJackpots }


