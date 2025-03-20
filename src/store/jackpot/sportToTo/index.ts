import { ResultDTO, SportToToJackpot } from "../../../api/result/type";
import { GetJackpotConfig } from "../type";
import { getBaseResultInfo } from "../baseJackpot";

function getToToJackpot(sources: ResultDTO["fdData"][]) {
  return sources.map((source) => {
    let jackpot = [
      source.n1,
      source.n2,
      source.n3,
      source.n4,
      source.n5,
      source.n6,
    ];

    if (source.jp_type === "6/50" && source.n7) {
      jackpot = [...jackpot, "+", source.n7];
    }

    const prizes = [source.jp1, source.jp2].filter(Boolean);

    return {
      label: source.jp_type ?? "",
      jackpot,
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

function getSportToToJackpot({ results, companies }: GetJackpotConfig): SportToToJackpot {
  const matchTypes = ["STJP6/58", "STJP6/55", "STJP6/50"];
  const jackpotSources = results
    .filter((result) =>
      matchTypes.some((matchType) => matchType === result.type)
    )
    .map((result) => result.fdData);
  const fiveDAndSixDSource = results.find((result) => result.type === "STJP1");
  if (!fiveDAndSixDSource)
    throw Error("invalid find ToTo Sport 5D and 6D source");
  const totoJackpot = getToToJackpot(jackpotSources);
  const fiveDAndSixD = getToToFiveAndSixD(fiveDAndSixDSource.fdData);

  return {
    ...getBaseResultInfo({
      type: "ST",
      data: fiveDAndSixDSource.fdData,
      companies: companies,
    }),
    logo: "https://share.4dnum.com/site-logo/4Dlogo-01.png",
    totoJackpot,
    ...fiveDAndSixD,
  };
}

export { getSportToToJackpot };
