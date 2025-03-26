import classNames from "classnames";

const JackpotInfoContent = (props: {
  prizes: string[];
  hasItemSpace?: boolean;
}) => {
  const { hasItemSpace } = props;

  const is6D = props.prizes.length === 12;

  const prizes = is6D
    ? props.prizes.reduce<string[]>((acc, curr, index) => {
        if (index !== 6) {
          acc.push(curr);
        } else {
          acc.push("|");
          acc.push(curr);
        }
        return acc;
      }, [])
    : [...props.prizes];

  //px-[15px] py-[2px] gap-[4px]
  const wrappercs = classNames(
    "flex w-full max-h-full h-[40px]",
    hasItemSpace ? "px-[15px] py-[4px] gap-[4px]" : ""
  );
  return (
    <div className={wrappercs}>
      {prizes.map((prize, index) => {
        const cs = classNames(
          "flex justify-center items-center w-full",
          hasItemSpace ? "rounded-sm" : "",
          prize === "+"
            ? ""
            : "border border-[rgb(233,233,233)] first:border-r last:border-l",
          prize === "" ? "bg-[#EAEAEA]" : ""
        );
        return (
          <div key={index} className={cs}>
            {prize === "|" ? (
              <hr className="h-[26px] w-px border-l border-[#EAEAEA] opacity-60" />
            ) : (
              <p className="text-center text-[16px] font-semibold">{prize}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default JackpotInfoContent;
