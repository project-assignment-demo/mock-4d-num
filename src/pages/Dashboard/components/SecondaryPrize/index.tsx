import { SecondaryPrizeContentProps, SecondaryPrizesProps } from "./type";



const LotterySecondaryPrize = (props: SecondaryPrizesProps) => {
    const { title, prizes, primaryColor } = props;
  
    return (
      <div className="w-full rounded-md mt-[10px] overflow-hidden">
        <div className="py-[8px]" style={{backgroundColor: primaryColor}}>
          <p className="text-white font-bold text-center text-[14px]">{title}</p>
        </div>
        <div className=" grid grid-cols-5">
          {prizes.map((prize, index) => (
            <div className="border border-gray-100 bg-white" key={index}>
              <SecondaryPrizeContent id={prize.position} value={prize.value} />
            </div>
          ))}
        </div>
      </div>
    );
  };

const SecondaryPrizeContent = (props: SecondaryPrizeContentProps) => {
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

export default LotterySecondaryPrize;