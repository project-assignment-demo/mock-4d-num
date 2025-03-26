import { useState } from "react";
import { LotteryKey } from "../../../../store/result/lottery/type";
import { Result } from "../../../../store/result/type";
import ResultCardHeader from "../../../../components/ResultCard/ResultCardHeader";

interface LotteryCardProps {
  lotteryKey: LotteryKey;
  lotteryData: Result;
}

const LotteryCard = (props: LotteryCardProps) => {
  const { lotteryKey, lotteryData } = props;
  const colors = {
    primaryColor: "#000000",
  };

  const [resultChild, setResultChild] = useState(lotteryData.children[0]);

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

      <div className="mt-[20px] flex flex-col gap-[40px] px-5">
        <p>{JSON.stringify(resultChild)}</p>
      </div>
    </div>
  );
};

export default LotteryCard;
