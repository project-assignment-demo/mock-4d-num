import LotteryInfoVideoSection from "./components/LotteryInfoVideoSection";
import LotteryJackpotSection from "./components/LotteryJackpotSection";
import LotteryInfoHeader from "./components/LotteryInfoHeader";
import LotteryInfoBody from "./components/LotteryInfoBody";
import { FilteredResultDTO } from "../../../api/result/type";
import { useState } from "react";

const LotteryInfoCard = (props: FilteredResultDTO) => {
  const getPrimaryColor = (id: string): string => {
    switch (id) {
      case "M":
        return "#000000";

      case "PMP":
        return "#1D377B";

      case "ST":
        return "#EC2024";

      case "SG":
        return "#0093D8";

      case "CS":
        return "#0FA227";

      case "STC":
        return "#F5C530";

      case "EE":
        return "#FA0504";
      case "H":
        return "#1A81BB";

      case "P":
        return "#1E68A2";

      // case "GD":
      //   return "Grand Dragon 4D";

      case "WB":
        return "#612FAE";

      default:
        return "#000000";
    }
  };

  const getSecondaryColor = (id: string): string => {
    switch (id) {
      case "M":
        return "#F5C530";

      case "PMP":
        return "#EC2024";

      case "ST":
        return "#000000";

      case "SG":
        return "#1D377B";

      case "CS": {
        return "#EC2024";
      }
      case "STC": {
        return "#017A37";
      }
      case "EE":
        return "#1E68A2";

      case "H":
        return "#1D377B";

      case "P":
        return "#EC2024";

      // case "GD": {
      //   return "Grand Dragon 4D";
      // }
      case "WB":
        return "#B44EF2";

      default:
        return "#000000";
    }
  };

  const primaryColor = getPrimaryColor(props.type);
  const secondaryColor = getSecondaryColor(props.type);
  const { logo, children, type, label } = props;
  const hasMoreTimeSelect = children.length > 1;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const info = children[selectedIndex];
  const { video, winningPrize, special, consolation, fourDJackpot, jackpot } =
    info;
  return (
    <div
      id={type}
      className="w-[400px] text-center rounded-2xl bg-white pb-[20px] flex flex-col gap-2"
    >
      <LotteryInfoHeader
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        label={label}
        selectedTimeIndex={selectedIndex}
        onUpdateTime={(index) => setSelectedIndex(index)}
        logo={logo}
        date={info.date}
        drawNo={info.drawNo}
        showTimeSelection={hasMoreTimeSelect}
      />
      {video && (
        <div className="px-[15px]">
          {" "}
          <LotteryInfoVideoSection url={video} />
        </div>
      )}
      <LotteryInfoBody
        winningPrize={winningPrize}
        special={special}
        consolation={consolation}
      />

      {jackpot && (
        <div className="px-[15px]">
          {" "}
          <LotteryJackpotSection {...jackpot} />{" "}
        </div>
      )}

      {fourDJackpot && (
        <div className="px-[15px]">
          <div className="bg-black items-center w-full flex rounded-t-lg">
            <div className="border-r border-[rgb(94,94,94)]  p-[6px] flex-1">
              <p className="text-white text-[16px] font-bold text-center">
                4D Jackpot 1 Prize
              </p>
            </div>
            <div className="flex-1">
              <p className="text-white text-[16px] font-bold text-center">
                {" "}
                4D Jackpot 2 Prize
              </p>
            </div>
          </div>
          <div className="items-center w-full flex rounded-b-lg shadow-md">
            <div className="border-r border-[#E9E9E9]  p-[6px] flex-1">
              <p className="text-[16px] font-bold text-center">
                RM{" "}
                {new Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(Number(fourDJackpot[0]))}
              </p>
            </div>
            <div className="flex-1">
              <p className="text-[16px] font-bold text-center">
                RM{" "}
                {new Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(Number(fourDJackpot[1]))}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LotteryInfoCard;
