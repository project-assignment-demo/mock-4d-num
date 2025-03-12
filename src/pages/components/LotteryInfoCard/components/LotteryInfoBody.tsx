interface PrizeContentProps {
  value: string;
  id: string;
  fontSize?: number;
}

const PrizeInnerContent = (props: PrizeContentProps) => {
  const fontSize = props.fontSize ?? 36;

  return (
    <div className="relative w-full h-full">
      <p className="absolute top-0 left-0 text-[12px] text-red-500 font-semibold">
        {props.id}
      </p>
      <p
        className="font-bold text-center px-2 py-2"
        style={{ fontSize: `${fontSize} px` }}
      >
        {props.value}
      </p>
    </div>
  );
};

const PrizeTable = (props: {title: string; prizes: {position: string; value: string }[]}) => {
  const { title, prizes } = props;

  return (
    <div className="w-full rounded-md mt-[10px] overflow-hidden">
      <div className="bg-black py-[8px]">
        <p className="text-white font-bold text-center text-[14px]">{title}</p>
      </div>
      <div className=" grid grid-cols-5">
        {prizes.map((prize, index) => (
          <div className="border border-gray-100 bg-white" key={index}>
            <PrizeInnerContent id={prize.position} value={prize.value} />
          </div>
        ))}
      </div>
    </div>
  );
};

const LotteryInfoBody = (props: 
  {
    winningPrize: [{ key: string; position: string; value: string }, { key: string; position: string; value: string }, { key: string; position: string; value: string }];
    special: {position: string; value: string }[];
    consolation: {position: string; value: string }[];
  }
) => {
  const { winningPrize, special, consolation } = props;
  const LotteryPrizesSection = (props: { prizes: [{ key: string; position: string; value: string }, { key: string; position: string; value: string }, { key: string; position: string; value: string }]}) => {
    const { prizes } = props;
    const titles = prizes.map(prize => prize.key);
    
    return (
      <>
        <div className="flex gap-[20px] justify-center items-center">
          {titles.map((title) => (
            <div
              key={title}
              className="max-w-[109px] w-full bg-[#F5C500] rounded-lg px-[6px] py-[10px]"
            >
              <p className="font-extralight text-[12px]">
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
  }) => {
    const { title, prizes } = props;

    return (
      <div className="px-2">
        <PrizeTable title={title} prizes={prizes} />
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <LotteryPrizesSection prizes={winningPrize} />
      <SecondaryPrizeSection title={"Special"} prizes={special} />
      <SecondaryPrizeSection title={"Consolation"} prizes={consolation} />
    </div>
  );
};

export default LotteryInfoBody;
