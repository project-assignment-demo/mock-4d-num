import LotteryInfoPrizeTable from "./LotteryInfoTable";
import { LotteryInfoBodyProps } from "./type";

const LotteryInfoBody = (props: LotteryInfoBodyProps
  
) => {
  const { winningPrize, special, consolation, primaryColor, secondaryColor } = props;
  const LotteryPrizesSection = (props: { 
    prizes: [{ key: string; position: string; value: string }, 
      { key: string; position: string; value: string }, { key: string; position: string; value: string }],
      backgroundColor: string
    }) => {
    const { prizes, backgroundColor } = props;
    const titles = prizes.map(prize => prize.key);

    const textColor = 'text-white';
    
    return (
      <>
        <div className="flex gap-[20px] justify-center items-center">
          {titles.map((title) => (
            <div
              key={title}
              className="max-w-[109px] w-full rounded-lg px-[6px] py-[10px]"
              style={{backgroundColor: backgroundColor }}
            >
              <p className={`font-extralight text-[12px] ${textColor}`}>
                <span className="font-bold mr-1">{title}</span>
                Prize
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-[20px] justify-evenly items-center mt-2">
          {prizes.map((prize) => (
            <div
              key={prize.value}
              className="max-w-[105px] w-full bg-white shadow-md rounded-sm p-[2px] relative"
            >
              <p className="text-[10px] text-red-400 font-bold absolute top-[4px] left-[4px]">
                {prize.position}
              </p>
              <p className="text-[28px] font-semibold">{prize.value}</p>
            </div>
          ))}
        </div>
      </>
    );
  };

  const SecondaryPrizeSection = (props: {
    prizes: {position: string; value: string }[],
    title: string;
    primaryColor: string;
  }) => {
    const { title, prizes } = props;

    return (
      <div className="px-2">
        <LotteryInfoPrizeTable primaryColor={primaryColor} title={title} prizes={prizes} />
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <LotteryPrizesSection backgroundColor={secondaryColor} prizes={winningPrize} />
      <SecondaryPrizeSection primaryColor={primaryColor} title={"Special"} prizes={special} />
      <SecondaryPrizeSection  primaryColor={primaryColor} title={"Consolation"} prizes={consolation} />
    </div>
  );
};

export default LotteryInfoBody;
