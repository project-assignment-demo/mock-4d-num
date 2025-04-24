import { ResulCardMap } from "./type";

const resultColorMap: ResulCardMap = {
  M: {
    primaryColor: "#000000",
    secondaryColor: "#F5C530",
  },
  PMP: {
    primaryColor: "#1D377B",
    secondaryColor: "#E9181B",
  },
  ST: {
    primaryColor: "#E9181B",
    secondaryColor: "#000000",
  },
  SG: {
    primaryColor: "#0093D8",
    secondaryColor: "#1D377B",
  },
  EE: {
    primaryColor: "#FA0504",
    secondaryColor: "#1E68A2",
  },
  H: {
    primaryColor: "#1A81BB",
    secondaryColor: "#1D377B",
  },
  WB: {
    primaryColor: "#612FAE",
    secondaryColor: "#B44EF2",
  },

  CS: {
    primaryColor: "#0FA227",
    secondaryColor: "#EC2024",
  },
  STC: {
    primaryColor: "#F5C530",
    secondaryColor: "#017A37",
  },
  P: {
    primaryColor: "#1E68A2",
    secondaryColor: "#EC2024",
  },
};

const getResultCountry = (type: string): "mysg" | "other" => {
  const mySgList = ["M", "PMP", "ST", "SG", "EE"];
  const isMySg =
    mySgList.includes(type) ||
    mySgList.some(
      (matchType) =>
        type.startsWith(`${matchType}T`) ||
        type.startsWith(`${matchType}JP`) ||
        type.startsWith(`${matchType}JPT`)
    );
  if (isMySg) {
    return "mysg";
  }
  return "other";
};

const getImgByProxy = (url: string) => `https://corsproxy.io/?url=${url}`;

const lotteryIconAccTemplate: string[] = [
  "M",
  "PMP",
  "ST",
  "SG",
  "STC",
  "EE",
  "CS",
  "H",
  "WB",
  "P",
];

const getResultTypeName = (type: string, isJp?: boolean, time?: string) => {
  switch (type) {
    case "M":
      return `${isJp ? "jp_" : ""}Magnum_4D`;
    case "PMP":
      return `${isJp ? "jp_" : ""}DaMaCai_3D`;
    case "ST":
      return `${isJp ? "jp_" : ""}SportsToto_4D`;
    case "SG":
      return `${isJp ? "jp_" : ""}Singapore_4D`;
    case "CS":
      return "Special_CashSweep";
    case "STC":
      return "Sandakan_4D";
    case "EE":
      return `${isJp ? "jp_" : ""}Sabah_88_4D`;
    case "H":
      return `${isJp ? "jp_" : ""}LuckyHariHariHT${time}`;
    case "WB":
      return `${isJp ? "jp_" : ""}9WinboxWBT${time}`;
    case "P":
      return `PerdanaLotteryPT${time}`;
    default:
      throw Error("invalid result type");
  }
};

export {
  resultColorMap,
  getResultCountry,
  getImgByProxy,
  getResultTypeName,
  lotteryIconAccTemplate,
};
