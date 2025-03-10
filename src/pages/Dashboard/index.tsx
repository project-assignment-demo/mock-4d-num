import dayjs from "dayjs";
import LotteryInfoCard from "../components/LotteryInfoCard";
import { LotteryInfoCardProps } from "../components/LotteryInfoCard/types";
import Dinero from "dinero.js";

const items: LotteryInfoCardProps[] = Array.from({ length: 25 }, (_, i) => ({
  header: {
    logo: {
      url: "https://share.4dnum.com/site-logo/4Dlogo-01.png",
      title: "Magnum 4D",
    },
    draw: {
      date: dayjs(),
      no: "172/25",
    },
  },
  video:
    i == 0
      ? "https://www.youtube.com/embed/-2wVuzpWTA8?autoplay=1&mute=1&controls=1&origin=https%3A%2F%2F4dnum.com&playsinline=1&showinfo=1&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=9&forigin=https%3A%2F%2F4dnum.com%2F&aoriginsup=1&vf=1"
      : undefined,
  prizes: {
    primary: {
      "1": { label: "1ST", prize: { prefix: "C", value: "0455" } },
      "2": { label: "2ND", prize: { prefix: "F", value: "1285" } },
      "3": { label: "3RD", prize: { prefix: "B", value: "0904" } },
    },
    secondary: {
      "1": {
        label: "Special",
        prizes: [
          { prefix: "A", value: "0624" },
          { prefix: "B", value: "----" },
          { prefix: "C", value: "----" },
          { prefix: "D", value: "1181" },
          { prefix: "E", value: "6112" },
          { prefix: "F", value: "0624" },
          { prefix: "G", value: "----" },
          { prefix: "H", value: "----" },
          { prefix: "I", value: "1181" },
          { prefix: "J", value: "6112" },
          { prefix: "K", value: "0624" },
          { prefix: "L", value: "----" },
          { prefix: "", value: "" },
          { prefix: "M", value: "----" },
          { prefix: "N", value: "1181" },
        ],
      },
      "2": {
        label: "Consolation",
        prizes: [
          { prefix: "A", value: "0624" },
          { prefix: "B", value: "----" },
          { prefix: "C", value: "----" },
          { prefix: "D", value: "1181" },
          { prefix: "E", value: "6112" },
          { prefix: "F", value: "0624" },
          { prefix: "G", value: "----" },
          { prefix: "H", value: "----" },
          { prefix: "I", value: "1181" },
          { prefix: "J", value: "6112" },
          { prefix: "K", value: "0624" },
          { prefix: "L", value: "----" },
          { prefix: "", value: "" },
          { prefix: "M", value: "----" },
          { prefix: "N", value: "1181" },
        ],
      },
    },
  },
  jackpot: {
    pool: {
      title: "Jackpot Pool",
      amount: Dinero({amount: 854209300, currency: "USD"})
    },
    jackpots:[
      {
        title: "Jackpot A Result",
        noBonus: {
          title: "No bonus",
          // amount: "8,542,093.00"
          amount: Dinero({amount: 854209300, currency: "USD"})
        },
        extra: [
          "No Prize (0%)",
          "Total Winner 0 Unit",
          "USD 0/Unit"
        ]
      },
      {
        title: "Jackpot B Result",
        noBonus: {
          title: "No bonus",
          amount: Dinero({amount: 854209300, currency: "USD"})
        },
        extra: [
          "No Prize (0%)",
          "Total Winner 0 Unit",
          "USD 0/Unit"
        ]
      }
    ]
  }
}));

const DashBoard = () => {
  return (
    <div className="max-w-[1280px] w-full mx-auto px-4 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <LotteryInfoCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
