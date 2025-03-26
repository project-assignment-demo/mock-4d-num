interface JackpotShareProps {
  values: { shareAmount: string; winningShare: string }[];
  primaryColor: string;
  secondaryColor: string;
}

const JackpotShare = ({ values, primaryColor, secondaryColor}: JackpotShareProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex flex-row items-center justify-between h-[54px] gap-1.5">
        <div className="w-[23vw] rounded-lg" style={{backgroundColor: primaryColor}}>
          <p className="text-center text-[18px] leading-4 p-2 font-[400] text-white">
            {" "}
            Prize Group
          </p>
        </div>
        <div className="w-[34vw] rounded-lg"  style={{backgroundColor: primaryColor}}>
          <p className="text-center text-[18px] leading-4 p-2 font-[400] text-white">
            Share Amount
          </p>
        </div>
        <div className="w-[34vw] rounded-lg" style={{backgroundColor: primaryColor}}>
          <p className="text-center text-[18px] leading-4 p-2 font-[400] text-white">
            Winning Share
          </p>
        </div>
      </div>
      {values.map((val, index) => {
        return (
          <div key={`${index}-${val.shareAmount}-${val.winningShare}`} className="w-full flex flex-row items-center justify-between h-[34px] gap-1.5">
            <div className="w-[23vw] shadow-md rounded-[10px]"  style={{backgroundColor: secondaryColor}}>
              <p className="text-center text-[18px] leading-4 p-2 font-[400] text-white">
                {index + 1}
              </p>
            </div>
            <div className="w-[34vw] bg-[#ffffff] shadow-[0px_1px_4px_0px_rgba(52,55,82,0.25)] rounded-[10px] border-none border-[E2E8F0]">
              <p className="text-center text-[18px] leading-4 p-2 font-bold">
                {val.shareAmount}
              </p>
            </div>
            <div className="w-[34vw] bg-[#ffffff] shadow-[0px_1px_4px_0px_rgba(52,55,82,0.25)] rounded-[10px] border-none border-[E2E8F0]">
              <p className="text-center text-[18px] leading-4 p-2 font-bold">
                {val.winningShare}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default JackpotShare;
