interface LotteryJackpotPrize {
  labelTextColor?: string;
  contentTextColor?: string;
  primaryColor: string;
  titles?: string[];
  prizes: string[];
}

const LotteryJackpotPrize = ({
  prizes,
  contentTextColor,
  labelTextColor,
  titles,
  primaryColor,
}: LotteryJackpotPrize) => {
  const mergedlabelTextColor = labelTextColor ?? "#ffffff";

  const mergedContentTextColor = contentTextColor ?? "#000000";

  const mergeTitles =
    titles ??
    new Array(prizes.length)
      .fill(null)
      .map((_, index) => `4D jackpot ${index + 1} Prize`);

  return (
    <div className="bg-white rounded-[10px] flex flex-col shadow-sm">
      <div
        className="flex h-[40px] p-2 justify-center items-center rounded-t-[10px]"
        style={{ backgroundColor: primaryColor }}
      >
        {mergeTitles.map((t) => {
          return (
            <div
              key={t}
              className="flex-1 border-r border-[rgb(94,94,94)] last:border-none"
            >
              <p
                className="text-center font-bold text-[14px]"
                style={{ color: mergedlabelTextColor }}
              >
                {t}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col h-fit">
        <div className="flex w-full max-h-full h-[40px]">
          {prizes.map((prize, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center w-full"
              >
                <p
                  className="text-center text-[16px] font-semibold"
                  style={{ color: mergedContentTextColor }}
                >
                  {prize}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LotteryJackpotPrize;
