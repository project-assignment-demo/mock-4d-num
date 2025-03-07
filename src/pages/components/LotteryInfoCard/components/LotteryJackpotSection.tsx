import { JackpotResult, LotteryJackpot } from "../types";

const JackpotResultSection = (props: JackpotResult) => {
  const { title, extra, noBonus } = props;

  return (
    <div className="bg-white rounded-xl flex flex-col gap-2 shadow-md">
      <div className="bg-black rounded-t-xl py-2">
        <p className="text-white">{title}</p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="bg-black rounded-md">
          <p className="text-white font-semibold"> {noBonus.title} </p>
          <p className="text-white font-bold"> {`USD ${noBonus.amount}`} </p>
        </div>
        {extra.map((e) => (
          <div className="bg-[#EAEAEA] rounded-md p-1" key={e}>
            <p className="font-semibold text-black">{e}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const LotteryJackpotSection = (props: LotteryJackpot) => {
  const { pool, jackpots } = props;

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full bg-black rounded-xl">
        <p className="text-white font-bold text-xl">{pool.title}</p>
        <p className="text-white font-bold text-lg"> {`USD ${pool.amount}`} </p>
      </div>
      {jackpots.map((jackpot) => (
        <JackpotResultSection key={jackpot.title} {...jackpot} />
      ))}
    </div>
  );
};

export default LotteryJackpotSection;
