type PrizeType = string | string[];

interface JackpotPrizeLayoutProps {
  prizes: PrizeType[];
  primaryColor: string;
}

interface JackpotPrimaryPrize {
  label: string;
  prize: PrizeType;
  primaryColor: string;
}
const PrimaryJackpotPrizes = (props: JackpotPrizeLayoutProps) => {
  const { prizes } = props;
  const prizesLabels = ["ST", "ND", "RD", "TH"];
  return (
    <div className="flex flex-col gap-[5px]">
      {prizes.map((prize, index) => (
        <JackpotPrimaryPrize
          primaryColor={props.primaryColor}
          label={`${index + 1}${prizesLabels[index > 3 ? 3 : index]}`}
          prize={prize}
        />
      ))}
    </div>
  );
};

export const JackpotPrimaryPrize = (props: JackpotPrimaryPrize) => {
  const { label, prize } = props;
  return (
    <div className="flex items-center w-full gap-[10px] h-[42px]">
      <div className="w-[20%] rounded-md h-full flex justify-center items-center" style={{backgroundColor: props.primaryColor}}>
        <p className="text-white text-center font-semibold text-[16px]">
          {label}
        </p>
      </div>
      <div className="w-[80%] h-full">
        {Array.isArray(prize) ? (
          <div className="flex flex-row items-center h-full">
            <div className="flex-1 flex items-center justify-start h-full rounded-md border border-[#E9E9E9]">
              <p className="ml-[8px] font-semibold text-[18px]">79843</p>
            </div>
            <div className="mx-[4px]">
              <p className="font-semibold text-[22px]">or</p>
            </div>
            <div className="flex-1 flex items-center justify-end h-full rounded-md border border-[#E9E9E9]">
              <p className="mr-[8px] font-semibold text-[18px]">98431</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full rounded-md border border-[#E9E9E9]">
            <p className="text-center font-semibold text-[18px]">{prize}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrimaryJackpotPrizes;
