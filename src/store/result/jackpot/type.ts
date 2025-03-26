import { ResultDTO } from "../../../api/result/type";
import { Company } from "../../company";
import { ResultType } from "../type";
import { DaMaCaiJackpot } from "./daMaCai/type";
import { EightLuckyJackpot } from "./eightLucky/type";
import { MagnumJackpot } from "./magnum/type";
import { NineWinJackpot } from "./nineWin/type";
import { SabahFourDJackpot } from "./sabahFourD/type";
import { SingaporeFourDJackpot } from "./SingaporeFourD/type";
import { SportToToJackpot } from "./sportToTo/type";

type JackpotKey = "M" | "PMP" | "ST" | "SG" | "EE" | "H" | "WB";

type JackpotLottery =
  | DaMaCaiJackpot
  | EightLuckyJackpot
  | MagnumJackpot
  | NineWinJackpot
  | SabahFourDJackpot
  | SingaporeFourDJackpot
  | SportToToJackpot;

interface GetJackpotConfig {
  type: JackpotKey;
  results: ResultDTO[];
  resultType: ResultType;
}

interface MapJackpotConfig {
  results: ResultDTO[];
  companies: Company[];
  type: JackpotKey;
}

type GetJackpotChildrenConfig = Pick<MapJackpotConfig, 'results'| 'type'>

export type { JackpotKey, JackpotLottery, GetJackpotConfig, GetJackpotChildrenConfig, MapJackpotConfig };
