interface FourDNumberAnalysisDetails {
  type: string;
  times: number;
  image: string;
}

interface FoudDNumberAnlaysisDrawHistory {
  type: string;
  number: string;
  drawDate: string;
  prize: string;
  gapDate: number;
  image: string;
}
interface DreamData {
  number: string;
  cn: string;
  en: string;
  my: string;
  th: null;
  image: string;
}

type FoudDNumberAnlaysisDream = Record<string, DreamData[]>;

interface FourDAnalysisNumberDto {
  detail_type: FourDNumberAnalysisDetails[];
  history: FoudDNumberAnlaysisDrawHistory[];
  TotalComeOut: number;
  totalN1: number;
  totalN2: number;
  totalN3: number;
  TotalSpecial: number;
  TotalConsolation: number;
  dream: FoudDNumberAnlaysisDream;
}

interface BaseFourDAnalysisPayload {
  analysisNumber: string;
  analysisCategories: string[];
}

interface FourDAnalysisPayload extends BaseFourDAnalysisPayload {
  permutation: boolean;
}

type GetFourDAnalysisResultConfig = FourDAnalysisPayload;

type FourDAnalysisHistoriesPayload = BaseFourDAnalysisPayload;

type FourDNumberAnalysisHistoryDto = FoudDNumberAnlaysisDrawHistory;

// formatted data

interface AnalysisWinHistory {
  source: string;
  totalWin: number;
  type: 'image' | 'text';
}

interface FortureNumber {
  image: string;
  title: string;
  totalWin: string;
}

interface WinningHistory {
  image: string;
  number: string;
  prize: string;
  date: string;
  gap: number;
}

interface FourDNumberAnalysisResult {
  analysisNumber: number;
  totalWinHistory: AnalysisWinHistory[];
  fortureNumberMeaning: FortureNumber[];
  winningHistories: WinningHistory[];
}

export type {
  FourDAnalysisNumberDto,
  FourDAnalysisPayload,
  FourDNumberAnalysisHistoryDto,
  FourDNumberAnalysisResult,
  FourDAnalysisHistoriesPayload,
  GetFourDAnalysisResultConfig,
};
