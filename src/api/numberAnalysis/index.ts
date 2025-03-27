import { api } from "../api";
import {
  FourDAnalysisNumberDto,
  FourDAnalysisPayload,
  FourDAnalysisHistoriesPayload,
  FourDNumberAnalysisHistoryDto,
  GetFourDAnalysisResultConfig,
  FourDNumberAnalysisResult,
} from "./type";

async function getNumberAnalysis({
  analysisCategories,
  analysisNumber,
  permutation,
}: FourDAnalysisPayload) {
  const result = await api.get<FourDAnalysisNumberDto>(
    `/numberAnalysis/${analysisNumber}/${analysisCategories}${
      permutation ? `/${permutation}` : ""
    }`
  );

  return result.data;
}

async function getNumberAnalysisHistories({
  analysisCategories,
  analysisNumber,
}: FourDAnalysisHistoriesPayload) {
  const result = await api.get<FourDNumberAnalysisHistoryDto>(
    `/numberHistory/${analysisNumber}/${analysisCategories}`
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
      totalWin: source.totalSpecial,
      type: "text",
    },
    {
      source: "consolation",
      totalWin: source.totalConsolation,
      type: "text",
    },
  ];

  return [
    ...fixedHistories,
    ...source.detail_type.map((detail) => ({
      source: detail.image,
      type: "image" as const,
      totalWin: detail.times,
    })),
  ];
}

function getFourDNumberAnalysisResulFortureNumberMeaning(
  source: FourDAnalysisNumberDto
) {
  const locale = "en";
  return Object.values(source.dream)
    .flat()
    .map((dream) => ({
      image: dream.image,
      totalWin: dream.number,
      title: dream[locale],
    }));
}

function getFourDNumberAnalysisResulWinningHistories(
  source: FourDAnalysisNumberDto
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
