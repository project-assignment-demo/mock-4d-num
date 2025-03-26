import { useState } from "react";
import { LotteryKey } from "../../../../store/result/lottery/type";
import { Result } from "../../../../store/result/type";
import ResultCardHeader from "../../../../components/ResultCard/ResultCardHeader";
import { LotteryComponentProps } from "../Lottery/type";
import { MagnumLottery } from "../../../../store/result/lottery/magnum/type";
import { DaMaCaiLottery } from "../../../../store/result/lottery/daMaCai/type";
import { SportToToLottery } from "../../../../store/result/lottery/sportToTo/type";
import { SingaporeFourDLottery } from "../../../../store/result/lottery/SingaporeFourD/type";
import { SpecialCashSweepLottery } from "../../../../store/result/lottery/specialCashSweep/type";
import { SandakanFourDLottery } from "../../../../store/result/lottery/SandakanFourD/type";
import { SabahFourDLottery } from "../../../../store/result/lottery/sabahFourD/type";
import { PerdanaLottery } from "../../../../store/result/lottery/perdana/type";
import { EightLuckyLottery } from "../../../../store/result/lottery/eightLucky/type";
import { NineWinLottery } from "../../../../store/result/lottery/nineWin/type";
import MagnumLotteryInfo from "../Lottery/MagnumLotteryInfo";
import DaMaCaiLotteryInfo from "../Lottery/DaMaCaiLotteryInfo";
import SportToToLotteryInfo from "../Lottery/SportToToLotteryInfo";
import SingaporeLotteryInfo from "../Lottery/SingaporeFourDLotteryInfo";
import SpecialCashSweepLotteryInfo from "../Lottery/SpeciaCashSweepLotteryInfo";
import SandakanLotteryInfo from "../Lottery/SandakanFourDLotteryInfo";
import SabahFourDLotteryInfo from "../Lottery/SabahFourDLotteryInfo";
import EightLuckyLotteryInfo from "../Lottery/EightLuckyLotteryInfo";
import PerdanaLotteryInfo from "../Lottery/PerdanaLotteryInfo";
import NineWinBoxLotteryInfo from "../Lottery/NineWinBoxLotteryInfo";
import { resultColorMap } from "../../../../utils";

interface LotteryCardProps {
  lotteryKey: LotteryKey;
  lotteryData: Result;
}

const LotteryCard = (props: LotteryCardProps) => {
  const { lotteryKey, lotteryData } = props;
  const colors = resultColorMap[lotteryKey];

  type LotteryComponentMap = {
    M: LotteryComponentProps<MagnumLottery>;
    PMP: LotteryComponentProps<DaMaCaiLottery>;
    ST: LotteryComponentProps<SportToToLottery>;
    SG: LotteryComponentProps<SingaporeFourDLottery>;
    CS: LotteryComponentProps<SpecialCashSweepLottery>;
    STC: LotteryComponentProps<SandakanFourDLottery>;
    EE: LotteryComponentProps<SabahFourDLottery>;
    H: LotteryComponentProps<EightLuckyLottery>;
    P: LotteryComponentProps<PerdanaLottery>;
    WB: LotteryComponentProps<NineWinLottery>;
  };

  const lotteryComponentMap: {
    [K in keyof LotteryComponentMap]: React.FC<LotteryComponentMap[K]>;
  } = {
    M: (props) => <MagnumLotteryInfo {...props} />,
    PMP: (props) => <DaMaCaiLotteryInfo {...props} />,
    ST: (props) => <SportToToLotteryInfo {...props} />,
    SG: (props) => <SingaporeLotteryInfo {...props} />,
    CS: (props) => <SpecialCashSweepLotteryInfo {...props} />,
    STC: (props) => <SandakanLotteryInfo {...props} />,
    EE: (props) => <SabahFourDLotteryInfo {...props} />,
    H: (props) => <EightLuckyLotteryInfo {...props} />,
    P: (props) => <PerdanaLotteryInfo {...props} />,
    WB: (props) => <NineWinBoxLotteryInfo {...props} />,
  };

  const [resultChild, setResultChild] = useState(lotteryData.children[0]);
  const Component = lotteryComponentMap[lotteryKey];
  return (
    <div className="w-full rounded-[25px] bg-white shadow-2xl flex flex-col justify-start pb-[30px] h-full">
      <ResultCardHeader
        title={lotteryData.title}
        logo={lotteryData.logo}
        date={resultChild.date}
        day={resultChild.day}
        primaryColor={colors.primaryColor}
        drawNo={resultChild.drawNo}
        showTimeSelection={lotteryData.children.length > 1}
        onUpdateSelectedTime={(index: number) =>
          setResultChild(lotteryData.children[index])
        }
      />

      <div className="mt-[-35px] flex flex-col gap-[10px] px-5">
        <Component
          title={lotteryData.title}
          logo={lotteryData.logo}
          data={resultChild as any}
          {...colors}
          selectedTime={undefined}
        />
      </div>
    </div>
  );
};

export default LotteryCard;
