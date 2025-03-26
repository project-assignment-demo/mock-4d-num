import { ResultDTO } from "../../../../api/result/type";
import { getResultBaseInfo } from "../../baseResultInfo";
import { GetSportToToConfig, SportToToJackpot } from "./type";

function getToToJackpot(results: ResultDTO[]): SportToToJackpot["jackpots"] {
  const matchTypes = ["STJP6/58", "STJP6/55", "STJP6/50"];
  const sources = results
    .filter((result) =>
      matchTypes.some((matchType) => matchType === result.type)
    )
    .map((result) => result.fdData);
  return sources.map((source) => {
    let jackpots = [
      source.n1,
      source.n2,
      source.n3,
      source.n4,
      source.n5,
      source.n6,
    ];

    if (source.jp_type === "6/50" && source.n7) {
      jackpots = [...jackpots, "+", source.n7];
    }

    const prizes = [source.jp1, source.jp2].filter(Boolean);

    return {
      label: source.jp_type ?? "",
      jackpots,
      prizes,
    };
  });
}

function getToToFiveD(source: ResultDTO["fdData"]) {
  return [
    source.n1,
    source.n2,
    source.n3,
    source.n4,
    source.n4,
    source.n5,
    source.n6,
  ];
}

function getToToSixD(source: ResultDTO["fdData"]) {
  return [
    source.n7,
    [source.n8, source.n9],
    [source.n10, source.n11],
    [source.n12, source.n13],
    [source.n14, source.n15],
  ];
}

function getToToFiveAndSixD(source: ResultDTO["fdData"]) {
  const fiveD = getToToFiveD(source);
  const sixD = getToToSixD(source);
  return {
    fiveD,
    sixD,
  };
}

function getSportToToJackpot({
  results,
  type,
  resultType,
}: GetSportToToConfig): SportToToJackpot[] {
  const sportToToBaseInfoSource = results.find(
    (result) => result.type === type
  );

  const fiveDAndSixDSource = results.find((result) => result.type === "STJP1");

  if (!sportToToBaseInfoSource) throw Error("Sports Toto base info not found");

  if (!fiveDAndSixDSource) throw Error("Sport ToTo 5D and 6D info not found");

  const sportToToBaseInfo = getResultBaseInfo(sportToToBaseInfoSource.fdData);

  const jackpots = getToToJackpot(results);

  const fiveDAndSixD = getToToFiveAndSixD(fiveDAndSixDSource.fdData);

  return [
    {
      ...sportToToBaseInfo,
      type,
      resultType,
      jackpots,
      ...fiveDAndSixD,
    },
  ];
}

export { getSportToToJackpot };
