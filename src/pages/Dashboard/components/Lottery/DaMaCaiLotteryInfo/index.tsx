import BaseLotteryInfo from "../BaseLotteryInfo";
import { DaMaCaiLotteryInfoProps } from "./type";

function DaMaCaiLotteryInfo(props: DaMaCaiLotteryInfoProps) {
  return (
    <>
      <BaseLotteryInfo {...props} />
    </>
  );
}

export default DaMaCaiLotteryInfo;
