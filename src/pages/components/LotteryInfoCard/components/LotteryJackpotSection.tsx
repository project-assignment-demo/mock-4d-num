const JackpotResultSection = (props: {
  amount: string;
    noPrize: string;
    totalWinerUnit: string;
    usdUnit: string;
    title: string;
}) => {
  const { title, amount, noPrize, totalWinerUnit, usdUnit,  } = props;
  return (
    <div className="bg-white rounded-xl flex flex-col gap-2 shadow-md">
      <div className="bg-black rounded-t-xl py-2">
        <p className="text-white">{ title }</p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="bg-black rounded-md">
          <p className="text-white font-semibold"> No Bonus </p>
          <p className="text-white font-bold"> {amount} </p>
        </div>
        <div className="bg-[#EAEAEA] rounded-md p-1">
            <p className="font-semibold text-black">No Prize ({noPrize}%)</p>
          </div>
          <div className="bg-[#EAEAEA] rounded-md p-1">
            <p className="font-semibold text-black">Total Winner {totalWinerUnit} Unit</p>
          </div>
          <div className="bg-[#EAEAEA] rounded-md p-1">
            <p className="font-semibold text-black">USD {usdUnit} Unit</p>
          </div>
      </div>
    </div>
  );
};

const LotteryJackpotSection = (props:  {
  poolAmount: string;
  results: {
    amount: string;
    noPrize: string;
    totalWinerUnit: string;
    usdUnit: string;
  }[];
}) => {
  const { poolAmount, results } = props;

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full bg-black rounded-xl">
        <p className="text-white font-bold text-xl">Jackpot Pool</p>
        <p className="text-white font-bold text-lg"> {poolAmount} </p>
      </div>
      {results.map((result) => (
        <JackpotResultSection title={"Jackpot A Result"} {...result} />
      ))}
    </div>
  );
};

export default LotteryJackpotSection;
