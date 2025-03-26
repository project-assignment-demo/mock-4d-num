interface primaryPrize {
  key: string;
  position: string;
  value: string;
}

interface LotteryPrimaryPrizeProps {
  prizes: primaryPrize[];
  backgroundColor: string;
  labelTextColor?: string;
  prizeTextColor?: string;
}

const LotteryPrimaryPrize = (props: LotteryPrimaryPrizeProps) => {
  const { prizes, backgroundColor, labelTextColor, prizeTextColor  } = props;
  const titles = prizes.map((prize) => prize.key);

  const mergelabelTextColor = labelTextColor ??  '#ffffff';
  const mergePrizTextColor =  prizeTextColor ?? '#000000';

  return (
    <div className="px-2">
      <div className="flex gap-[20px] justify-center items-center">
        {titles.map((title) => (
          <div
            key={title}
            className="max-w-[109px] w-full rounded-lg px-[6px] py-[6px]"
            style={{ backgroundColor: backgroundColor }}
          >
            <div className="w-full h-full flex justify-center items-center">
            <p className={`font-[200] text-[16px]`} style={{ 'color': mergelabelTextColor }}>
              <span className="font-bold mr-1 text[18px]">{title}</span>
              Prize
            </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-[20px] justify-evenly items-center mt-2">
        {prizes.map((prize) => (
          <div
            key={prize.position ? prize.position : prize.value}
            className="max-w-[105px] w-full bg-white shadow-md rounded-sm p-[2px] relative"
          >
            <p className="text-[10px] text-red-400 font-bold absolute top-[4px] left-[4px]">
              {prize.position}
            </p>
            <div className="w-full h-full flex justify-center items-center">
            <p className="text-[28px] font-semibold" style={{ 'color': mergePrizTextColor }}>{prize.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LotteryPrimaryPrize;
