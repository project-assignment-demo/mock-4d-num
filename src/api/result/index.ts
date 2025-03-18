import dayjs from "dayjs";
import {
  FourDJackpot,
  Jackpots,
  Result,
  ResultDTO,
  ResultItem,
  ResultPrize,
  ResultWiningPrize,
} from "./type";
import { useSettingStore } from "../../store";
import createApiClient, { API_BASE_URL } from "../utils";

interface MapResultItemConfig {
  source: ResultDTO;
  key: string;
}

interface MapSpecialPrizesConfig {
  source: string[];
  type: string;
}

const specialPositionIndex = 65;
const consolationPositionIndex = specialPositionIndex + 13;

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

const api = createApiClient(API_BASE_URL);

export const getResults = async (date: string): Promise<Result[]> => {
  try {
    const rawResults = await api.get<ResultDTO[]>(`api/v1/result/${date}`);
    return mapToResult(rawResults.data);
  } catch (error) {
    console.error("Error fetching result:", error);
    throw error;
  }
};

function mapToResultItem(data: MapResultItemConfig): ResultItem {
  const { source, key } = data;
  const { fdData } = source;

  const fourDJackpot: FourDJackpot | undefined =
    key === "M" ? [fdData.jp1, fdData.jp2] : undefined;

  const rawSpecialPrizes = [
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

  const specials = mapSpecialPrizes({
    source: rawSpecialPrizes,
    type: key,
  });

  const consolations = mapConsolationPrizes(rawConsolationPrizes);

  const winningPrizes: ResultWiningPrize = [
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
  ];

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
    winningPrizes,
    specials,
    consolations,
    fourDJackpot,
    jackpot,
  };
}

function mapToResult(source: ResultDTO[]): Result[] {
  const results = source.reduce<Result[]>((acc, curr) => {
    const matchedType = supportedLotteries.find(
      (item) => curr.type === item || curr.type.startsWith(`${item}T`)
    );
    if (!matchedType) return acc;

    const companies = useSettingStore.getState().companies;
    const logo = companies.find((company) => company.id === matchedType);

    if (!logo) throw Error("invalid logo");

    const existingItem = acc.find(
      (item) => curr.type === item.type || curr.type.startsWith(`${item.type}T`)
    );

    const result = mapToResultItem({ source: curr, key: matchedType });

    if (existingItem) {
      existingItem.children.push(result);
    } else {
      acc.push({
        label: logo.label,
        type: matchedType,
        children: [result],
        logo: logo.source,
      });
    }

    return acc;
  }, []);
  return results;
}

function mapSpecialPrizes(config: MapSpecialPrizesConfig): ResultPrize[] {
  let prizes: { key: number | null; value: string }[] = [];
  const lessSpecialPrizelotteries = ["PMP", "SG", "CS"];
  const isonly10Prizes = lessSpecialPrizelotteries.includes(config.type);
  const source = config.source.map<{ key: number | null; value: string }>(
    (value, key) => ({ key, value })
  );
  if (isonly10Prizes) {
    prizes = source.splice(0, 10);
  } else {
    const emptyData = { key: null, value: "" };
    source.splice(10, 0, emptyData);
    source.push(emptyData);
    prizes = source;
  }

  return prizes.map(({ key, value }) => {
    return {
      position:
        key !== null ? String.fromCharCode(specialPositionIndex + key) : "",
      value,
    };
  });
}

function mapConsolationPrizes(source: string[]): ResultPrize[] {
  return source.map<ResultPrize>((value, index) => {
    const position = String.fromCharCode(consolationPositionIndex + index);
    return { position, value };
  });
}

export const fetchJackpots = async (): Promise<Jackpots> => {
  return {
    M: {
      type: "M",
      date: dayjs(),
      drawNo: "",
      title: "Magnum 4D",
      logo: "https://share.4dnum.com/site-logo/4Dlogo-01.png",
      magnumLife: {
        winningNumbers: ["01", "03", "08", "13", "19", "24", "25", "32"],
        bonusNumbers: ["06", "22"],
      },
      goldJackpot: [
        [["4", "6", "7", "5", "3", "1", "+", "0", "9"]],
        [
          ["4", "6", "7", "5", "3", "", "+", "0", "9"],
          ["", "6", "7", "5", "3", "1", "+", "0", "9"],
        ],
      ],
      jackpotPrize: ["123", "123"],
    },
    PMP: {
      type: "M",
      date: dayjs(),
      drawNo: "",
      title: "Da Ma Cai 1+3D",
      logo: "https://share.4dnum.com/site-logo/4Dlogo-01.png",
      threeDBonus: ["415 133", "135 678", "833 636"],
      special: Array.from({ length: 12 }).map((_, index) => {
        if (index === 9 || index === 11) {
          return "";
        }
        return "139 677";
      }),
      consolation: Array.from({ length: 12 }).map((_, index) => {
        if (index === 9 || index === 11) {
          return "";
        }
        return "139 677";
      }),
    },
    ST: {
      type: "ST",
      date: dayjs(),
      drawNo: "",
      title: "SportsToto 4D",
      logo: "https://share.4dnum.com/site-logo/4Dlogo-01.png",
      totoJackpot: [
        {
          label: "6/58",
          jackpot: ["5", "14", "15", "25", "44", "46"],
          prizes: ["26,552,279.90"],
        },
        {
          label: "6/55",
          jackpot: ["5", "14", "15", "25", "44", "46"],
          prizes: ["26,552,279.90"],
        },
        {
          label: "6/50",
          jackpot: ["5", "14", "15", "25", "44", "46"],
          prizes: ["26,552,279.90", "26,552,279.90"],
        },
      ],
      fiveD: ["04615", "04615", "04615", "04615", "04615", "04615"],
      sixD: [
        "798 431",
        ["798 431", "798 431"],
        ["798 431", "798 431"],
        ["798 431", "798 431"],
        ["798 431", "798 431"],
      ],
    },
    SG: {
      type: "M",
      date: dayjs(),
      drawNo: "",
      title: "Singapore 4D",
      logo: "https://share.4dnum.com/site-logo/4Dlogo-01.png",
      winningNumbers: ["7", "30", "39", "42", "43", "48", "+", "33"],
      winningShares: [
        {
          amount: "3,172,134",
          shares: "1",
        },
        {
          amount: "-",
          shares: "-",
        },
        {
          amount: "3,172,134",
          shares: "1",
        },
        {
          amount: "3,172,134",
          shares: "1",
        },
        {
          amount: "3,172,134",
          shares: "1",
        },
        {
          amount: "3,172,134",
          shares: "1",
        },
        {
          amount: "10",
          shares: "129,785",
        },
      ],
    },
    EE: {
      type: "EE",
      date: dayjs(),
      drawNo: "",
      title: "Sabah 88 4D",
      logo: "https://share.4dnum.com/site-logo/4Dlogo-01.png",
      winningNumbers: {
        jackpot: ["01", "06", "11", "29", "35", "36", "+", "24"],
        prizes: ["7,398,334.72", "131,188.47"],
      },
    },
    H: {
      type: "H",
      date: dayjs(),
      drawNo: "",
      title: "8LUCKY",
      logo: "https://share.4dnum.com/site-logo/4Dlogo-01.png",
      sixDPrizes: [[""]],
    },
    WB: {
      type: "WB",
      date: dayjs(),
      drawNo: "",
      title: "9 Winbox",
      logo: "https://share.4dnum.com/site-logo/4Dlogo-01.png",
      sixDPrizes: [[""]],
    },
  };
};
