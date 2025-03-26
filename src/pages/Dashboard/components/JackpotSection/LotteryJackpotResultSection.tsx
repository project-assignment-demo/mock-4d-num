import { LotteryJackpotResultSectionProps } from './type'

const LotteryJackpotResultSection = (props: LotteryJackpotResultSectionProps) => {
    const {
      title,
      noBonus,
      perUnit,
      noPrize,
      totalWinner,
      primaryColor,
      secondaryColor,
    } = props;
    return (
      <div className="bg-white rounded-xl flex flex-col gap-2 shadow-md">
        <div
          className="rounded-t-xl py-2 flex justify-center items-center"
          style={{ backgroundColor: primaryColor }}
        >
          <p className="text-white font-[500]">{title}</p>
        </div>
        <div className="flex flex-col  gap-[5px] px-2 pb-2">
          <div className="rounded-md flex flex-col justify-center items-center py-2 mb-[5px]" style={{ backgroundColor: secondaryColor }}>
            <p className="text-white font-[500]"> No Bonus </p>
            <p className="text-white font-bold"> {noBonus} </p>
          </div>
          <div className="bg-[#EAEAEA] rounded-md p-1">
            <p className="font-bold text-black text-center">No Prize ({noPrize}%)</p>
          </div>
          <div className="bg-[#EAEAEA] rounded-md p-1">
            <p className="font-bold text-black text-center">
              Total Winner {totalWinner} Unit
            </p>
          </div>
          <div className="bg-[#EAEAEA] rounded-md p-1">
            <p className="font-bold text-black text-center">USD {perUnit} Unit</p>
          </div>
        </div>
      </div>
    );
  };

export default LotteryJackpotResultSection;
  