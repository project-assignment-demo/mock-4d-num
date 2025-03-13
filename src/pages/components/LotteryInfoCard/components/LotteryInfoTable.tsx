import LotteryPrizeContent from "./LotteryPrizeContent";
import { LotteryInfoPrizeTableProps } from "./type";

const LotteryInfoPrizeTable = (props: LotteryInfoPrizeTableProps) => {
    const { title, prizes, primaryColor } = props;
  
    return (
      <div className="w-full rounded-md mt-[10px] overflow-hidden">
        <div className="py-[8px]" style={{backgroundColor: primaryColor}}>
          <p className="text-white font-bold text-center text-[14px]">{title}</p>
        </div>
        <div className=" grid grid-cols-5">
          {prizes.map((prize, index) => (
            <div className="border border-gray-100 bg-white" key={index}>
              <LotteryPrizeContent id={prize.position} value={prize.value} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default LotteryInfoPrizeTable;