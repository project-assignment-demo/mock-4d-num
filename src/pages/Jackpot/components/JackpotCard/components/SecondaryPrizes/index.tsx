interface SecondaryPrizeProps {
  value: string;
}

interface SecondaryPrizesProps {
  prizes: string[];
}

const SecondaryPrizes = (props: SecondaryPrizesProps) => {
  const { prizes } = props;

  return (
    <div className="grid grid-cols-3 gap-0 w-full h-[152px]">
      {prizes.map((prize, index) => {
        return <SecondaryPrize key={index} value={prize} />;
      })}
    </div>
  );
};

const SecondaryPrize = (props: SecondaryPrizeProps) => {
  const { value } = props;
  return (
    <div className="flex justify-center items-center w-full h-full border border-[#E9E9E9]">
      <p className="text-center text-[16px] font-semibold"> {value} </p>
    </div>
  );
};

export default SecondaryPrizes;
