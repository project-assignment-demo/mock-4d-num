import { JackporResultSectionProps, LotteryJackpotSectionProps } from "./type";

const JackpotResultSection = (props: JackporResultSectionProps) => {
  const {
    title,
    amount,
    noPrize,
    totalWinerUnit,
    usdUnit,
    primaryColor,
    secondaryColor,
  } = props;
  return (
    <div className="bg-white rounded-xl flex flex-col gap-2 shadow-md">
      <div
        className="rounded-t-xl py-2"
        style={{ backgroundColor: primaryColor }}
      >
        <p className="text-white">{title}</p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="rounded-md" style={{ backgroundColor: secondaryColor }}>
          <p className="text-white font-semibold"> No Bonus </p>
          <p className="text-white font-bold"> {amount} </p>
        </div>
        <div className="bg-[#EAEAEA] rounded-md p-1">
          <p className="font-semibold text-black">No Prize ({noPrize}%)</p>
        </div>
        <div className="bg-[#EAEAEA] rounded-md p-1">
          <p className="font-semibold text-black">
            Total Winner {totalWinerUnit} Unit
          </p>
        </div>
        <div className="bg-[#EAEAEA] rounded-md p-1">
          <p className="font-semibold text-black">USD {usdUnit} Unit</p>
        </div>
      </div>
    </div>
  );
};

const LotteryJackpotSection = (props: LotteryJackpotSectionProps) => {
  const { poolAmount, results, primaryColor, secondaryColor } = props;

  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full rounded-xl"
        style={{ backgroundColor: primaryColor }}
      >
        <p className="text-white font-bold text-xl">Jackpot Pool</p>
        <p className="text-white font-bold text-lg"> {poolAmount} </p>
      </div>
      {results.map((result) => (
        <JackpotResultSection
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          title={"Jackpot A Result"}
          {...result}
        />
      ))}
    </div>
  );
};

export default LotteryJackpotSection;
