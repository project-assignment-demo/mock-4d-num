import { PrizeContentProps } from "./type";


const LotteryPrizeContent = (props: PrizeContentProps) => {
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

export default LotteryPrizeContent;
