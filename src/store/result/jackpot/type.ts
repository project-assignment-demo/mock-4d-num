import { ResultDTO } from "../../../api/result/type";
import { ResultType } from "../type";
import { DaMaCaiJackpot } from "./daMaCai/type";
import { EightLuckyJackpot } from "./eightLucky/type";
import { MagnumJackpot } from "./magnum/type";
import { NineWinJackpot } from "./nineWin/type";
import { SabahFourDJackpot } from "./sabahFourD/type";
import { SingaporeFourDJackpot } from "./SingaporeFourD/type";
import { SportToToJackpot } from "./sportToTo/type";

type JackpotKey = "M" | "PMP" | "ST" | "SG" | "EE" | "H" | "WB";

// type SixDJackpot = Record<string, string[][]>;


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

export type { JackpotKey, JackpotLottery, GetJackpotConfig };
