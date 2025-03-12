import axios from "axios";
import { LotteryInfoCardProps } from "../../pages/components/LotteryInfoCard/types";
import Dinero from "dinero.js";
import dayjs from "dayjs";
import { FilteredResultDTO, Result, ResultDTO } from "./type";
import { useSettingStore } from "../../store";

const supportedLotteries = [
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

// Create an Axios instance
const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL || "https://dev.backend.4dnum.com/",
  timeout: 5000, // 5 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Define TypeScript type for the response
interface ApiResponse {
  data: any; // Adjust this to match the expected API response
}

export const getResults = async (
  date: string
): Promise<FilteredResultDTO[]> => {
  try {
    const rawResults = await api.get<ResultDTO[]>(`api/v1/result/${date}`);
    return formatToLotteryResultDto(rawResults.data);
  } catch (error) {
    console.error("Error fetching result:", error);
    throw error;
  }
};

function formatResult(data: { source: ResultDTO; key: string }): Result {
  const { source, key } = data;
  const { fdData } = source;

  const lessSpecialPrizelotteries = ["PMP", "SG", "CS"];

  const rawSpecialPrzies = [
    fdData.s1,
    fdData.s2,
    fdData.s3,
    fdData.s4,
    fdData.s5,
    fdData.s6,
    fdData.s7,
    fdData.s8,
    fdData.s9,
    fdData.s10,
    fdData.s11,
    fdData.s12,
    fdData.s13,
  ];
  const rawConsolationPrizes = [
    fdData.c1,
    fdData.c2,
    fdData.c3,
    fdData.c4,
    fdData.c5,
    fdData.c6,
    fdData.c7,
    fdData.c8,
    fdData.c9,
    fdData.c10,
  ];
  const specialPrizes = lessSpecialPrizelotteries.includes(key)
    ? rawSpecialPrzies.splice(0, 10)
    : rawSpecialPrzies;

  const jackpot = fdData.jackpotAmount
    ? {
        poolAmount: fdData.jackpotAmount,
        results: [
          {
            amount: fdData.jackpotAmount,
            noPrize: fdData.jackpot_prize,
            totalWinerUnit: fdData.jackpot_share,
            usdUnit: fdData.jackpot_per_share,
          },
          {
            amount: fdData.jackpotAmount2,
            noPrize: fdData.jackpot_prize2,
            totalWinerUnit: fdData.jackpot_share2,
            usdUnit: fdData.jackpot_per_share2,
          },
        ],
      }
    : undefined;
  return {
    id: data.key,
    date: dayjs(new Date(fdData.dd)),
    drawNo: fdData.dn,
    video: fdData.videoUrl,
    winningPrize: [
      {
        key: "1ST",
        position: fdData.n1_pos,
        value: fdData.n1,
      },
      {
        key: "2ND",
        position: fdData.n2_pos,
        value: fdData.n2,
      },
      {
        key: "3RD",
        position: fdData.n3_pos,
        value: fdData.n3,
      },
    ],
    special: specialPrizes.map((value, index) => {
      const position = String.fromCharCode(65 + index);
      return { position, value };
    }),
    consolation: rawConsolationPrizes.map((value, index) => {
      const step = 13;
      const position = String.fromCharCode(65 + step + index);
      return { position, value };
    }),
    fourDJackpot: key === "M" ? [fdData.jp1, fdData.jp2] : undefined,
    jackpot,
  };
}

function formatToLotteryResultDto(origin: ResultDTO[]): FilteredResultDTO[] {
  const summaryResults = origin.reduce<FilteredResultDTO[]>((acc, curr) => {
    const matchedType = supportedLotteries.find(
      (item) => curr.type === item || curr.type.startsWith(`${item}T`)
    );
    if (!matchedType) return acc;

    const icons = useSettingStore.getState().icons;
    const logo = icons.find((icon) => icon.id === matchedType);

    if (!logo) throw Error("invalid logo");

    const existingItem = acc.find(
      (item) => curr.type === item.type || curr.type.startsWith(`${item.type}T`)
    );

    const result = formatResult({ source: curr, key: matchedType });

    if (existingItem) {
      existingItem.children.push(result);
    } else {
      acc.push({ type: matchedType, children: [result], logo: logo.source });
    }

    return acc;
  }, []);

 return summaryResults;
}
