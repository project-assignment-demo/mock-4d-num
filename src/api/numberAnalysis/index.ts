import { lotteryIconAccTemplate } from "../../utils";
import { api } from "../api";
import {
  FourDAnalysisNumberDto,
  FourDAnalysisPayload,
  FourDAnalysisHistoriesPayload,
  FourDNumberAnalysisHistoryDto,
  GetFourDAnalysisResultConfig,
  FourDNumberAnalysisResult,
  FourDAnalysisNumber,
} from "./type";

async function getNumberAnalysis({
  analysisCategories,
  analysisNumber,
  permutation,
}: FourDAnalysisPayload): Promise<FourDAnalysisNumber> {
  const encodedParams = encodeURIComponent(JSON.stringify(analysisCategories));

  const result = await api.get<FourDAnalysisNumberDto>(
    `/numberAnalysis/${analysisNumber}/${encodedParams}${
      permutation ? `/1` : ""
    }`
  );

  const history = await getNumberAnalysisHistories({
    analysisCategories,
    analysisNumber,
  });

  return {
    ...result.data,
    history,
  };
}

async function getNumberAnalysisHistories({
  analysisCategories,
  analysisNumber,
}: FourDAnalysisHistoriesPayload) {
  const encodedParams = encodeURIComponent(JSON.stringify(analysisCategories));
  const result = await api.get<FourDNumberAnalysisHistoryDto[]>(
    `/numberHistory/${analysisNumber}/${encodedParams}`
  );

  return result.data;
}

async function getFourDNumberAnalysisResult(
  config: GetFourDAnalysisResultConfig
): Promise<FourDNumberAnalysisResult> {
  const data = await getNumberAnalysis(config);
  return {
    analysisNumber: data.TotalComeOut,
    totalWinHistory: getFourDNumberAnalysisResultotalWinHistory(data),
    fortureNumberMeaning: getFourDNumberAnalysisResulFortureNumberMeaning(data),
    // winningHistories: []
    winningHistories: getFourDNumberAnalysisResulWinningHistories(data),
  };
}

function getFourDNumberAnalysisResultotalWinHistory(
  source: FourDAnalysisNumberDto
): FourDNumberAnalysisResult["totalWinHistory"] {
  const fixedHistories: FourDNumberAnalysisResult["totalWinHistory"] = [
    {
      source: "first",
      totalWin: source.totalN1,
      type: "text",
    },
    {
      source: "second",
      totalWin: source.totalN2,
      type: "text",
    },
    {
      source: "third",
      totalWin: source.totalN3,
      type: "text",
    },
    {
      source: "special",
      totalWin: source.TotalSpecial,
      type: "text",
    },
    {
      source: "consolation",
      totalWin: source.TotalConsolation,
      type: "text",
    },
  ];
  console.log(source.detail_type);
  const hisotries = lotteryIconAccTemplate.map((lottery) => {

    const detail = source.detail_type.find((detail) => detail.type === lottery);
    console.log('detail', detail)
    return {
      source: detail?.image ?? "",
      type: "image" as const,
      totalWin: detail?.times ?? 0,
    };
  });


  return [...fixedHistories, ...hisotries];
}

function getFortureNumberImage(id: string) {
  switch (id) {
    case "gzt":
      return "https://4dnum.com/assets/fortuneNum1-7e0e71b0.png";
    case "qzt":
      return "https://4dnum.com/assets/fortuneNum2-1dee6038.png";
    case "wzt":
      return "https://4dnum.com/assets/fortuneNum3-10ceef7f.png";
    default:
      return null;
  }
}

function getFourDNumberAnalysisResulFortureNumberMeaning(
  source: FourDAnalysisNumberDto
): FourDNumberAnalysisResult["fortureNumberMeaning"] {
  const locale = "en";
  if (Array.isArray(source.dream)) {
    return [];
  }

  const dream = { ...source.dream };

  const d = Object.keys(dream).reduce<
    FourDNumberAnalysisResult["fortureNumberMeaning"]
  >((acc, key) => {
    const currData = dream[key];
    const formarData = currData.map((d) => ({
      image: getFortureNumberImage(key) ?? d.image,
      totalWin: d.number,
      title: d[locale],
    }));
    acc.push(...formarData);
    return acc;
  }, []);
  return d;
}

function getFourDNumberAnalysisResulWinningHistories(
  source: FourDAnalysisNumber
) {
  return source.history.map((h) => ({
    image: h.image,
    number: h.number,
    prize: h.prize,
    date: h.drawDate,
    gap: h.gapDate,
  }));
}

export {
  getNumberAnalysis,
  getNumberAnalysisHistories,
  getFourDNumberAnalysisResult,
};
