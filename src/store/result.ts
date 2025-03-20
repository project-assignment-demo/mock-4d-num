// // get lotteries

// import dayjs from "dayjs";
// import { Jackpots, ResultDTO } from "../api/result/type";

// // get jackpots
// const getJackpots = async (results: ResultDTO[]): Promise<Jackpots> => {
//   return {
//     M: {
//       type: "M",
//       date: dayjs(),
//       drawNo: "",
//       title: "Magnum 4D",
//       logo: "https://share.4dnum.com/site-logo/4Dlogo-01.png",
//       magnumLife: {
//         winningNumbers: ["01", "03", "08", "13", "19", "24", "25", "32"],
//         bonusNumbers: ["06", "22"],
//       },
//       goldJackpot: [
//         [["4", "6", "7", "5", "3", "1", "+", "0", "9"]],
//         [
//           ["4", "6", "7", "5", "3", "", "+", "0", "9"],
//           ["", "6", "7", "5", "3", "1", "+", "0", "9"],
//         ],
//       ],
//       jackpotPrize: ["123", "123"],
//     },
//     PMP: {
//       type: "M",
//       date: dayjs(),
//       drawNo: "",
//       title: "Da Ma Cai 1+3D",
//       logo: "https://share.4dnum.com/site-logo/4Dlogo-01.png",
//       threeDBonus: ["415 133", "135 678", "833 636"],
//       special: Array.from({ length: 12 }).map((_, index) => {
//         if (index === 9 || index === 11) {
//           return "";
//         }
//         return "139 677";
//       }),
//       consolation: Array.from({ length: 12 }).map((_, index) => {
//         if (index === 9 || index === 11) {
//           return "";
//         }
//         return "139 677";
//       }),
//     },
//     ST: {
//       type: "ST",
//       date: dayjs(),
//       drawNo: "",
//       title: "SportsToto 4D",
//       logo: "https://share.4dnum.com/site-logo/4Dlogo-01.png",
//       totoJackpot: [
//         {
//           label: "6/58",
//           jackpot: ["5", "14", "15", "25", "44", "46"],
//           prizes: ["RM 26,552,279.90"],
//         },
//         {
//           label: "6/55",
//           jackpot: ["5", "14", "15", "25", "44", "46"],
//           prizes: ["RM 26,552,279.90"],
//         },
//         {
//           label: "6/50",
//           jackpot: ["5", "14", "15", "25", "44", "46"],
//           prizes: ["RM 26,552,279.90", "RM 26,552,279.90"],
//         },
//       ],
//       fiveD: ["04615", "04615", "04615", "04615", "04615", "04615"],
//       sixD: [
//         "798 431",
//         ["798 431", "798 431"],
//         ["798 431", "798 431"],
//         ["798 431", "798 431"],
//         ["798 431", "798 431"],
//       ],
//     },
//     SG: {
//       type: "M",
//       date: dayjs(),
//       drawNo: "",
//       title: "Singapore 4D",
//       logo: "https://share.4dnum.com/site-logo/4Dlogo-01.png",
//       winningNumbers: ["7", "30", "39", "42", "43", "48", "+", "33"],
//       winningShares: [
//         {
//           amount: "3,172,134",
//           shares: "1",
//         },
//         {
//           amount: "-",
//           shares: "-",
//         },
//         {
//           amount: "3,172,134",
//           shares: "1",
//         },
//         {
//           amount: "3,172,134",
//           shares: "1",
//         },
//         {
//           amount: "3,172,134",
//           shares: "1",
//         },
//         {
//           amount: "3,172,134",
//           shares: "1",
//         },
//         {
//           amount: "10",
//           shares: "129,785",
//         },
//       ],
//     },
//     EE: {
//       type: "EE",
//       date: dayjs(),
//       drawNo: "",
//       title: "Sabah 88 4D",
//       logo: "https://share.4dnum.com/site-logo/4Dlogo-01.png",
//       winningNumbers: {
//         prizes: ["01", "06", "11", "29", "35", "36", "+", "24"],
//         jackpot: ["7,398,334.72", "131,188.47"],
//       },
//     },
//     H: {
//       type: "H",
//       date: dayjs(),
//       drawNo: "",
//       title: "8LUCKY",
//       logo: "https://share.4dnum.com/site-logo/4Dlogo-01.png",
//       datas: [
//         {
//           sixDPrizes: [
//             ["0", "6", "8", "5", "2", "2"],
//             ["6", "9", "4", "2", "7", "", "", "9", "4", "2", "7", "1"],
//             ["6", "9", "4", "2", "7", "", "", "9", "4", "2", "7", "1"],
//             ["6", "9", "4", "2", "7", "", "", "9", "4", "2", "7", "1"],
//             ["6", "9", "4", "2", "7", "", "", "9", "4", "2", "7", "1"],
//           ],
//         },
//       ],
//     },
//     WB: {
//       type: "WB",
//       date: dayjs(),
//       drawNo: "",
//       title: "9 Winbox",
//       logo: "https://share.4dnum.com/site-logo/4Dlogo-01.png",
//       datas: [
//         {
//           sixDPrizes: [
//             ["0", "6", "8", "5", "2", "2"],
//             ["6", "9", "4", "2", "7", "", "", "9", "4", "2", "7", "1"],
//             ["6", "9", "", "", "", "", "", "", "4", "2", "7", "1"],
//             ["6", "9", "4", "2", "7", "", "", "9", "4", "2", "7", "1"],
//             ["6", "9", "4", "2", "7", "", "", "9", "4", "2", "7", "1"],
//           ],
//         },
//       ],
//     },
//   };
// };
