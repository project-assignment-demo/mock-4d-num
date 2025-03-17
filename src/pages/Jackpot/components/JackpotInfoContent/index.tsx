import classNames from "classnames";

const JackpotInfoContent = (props: { prizes: string[], hasItemSpace?: boolean }) => {
  const { prizes, hasItemSpace } = props;

  //px-[15px] py-[2px] gap-[4px]
  const wrappercs = classNames("flex w-full max-h-full h-[40px]", hasItemSpace ? "px-[15px] py-[4px] gap-[4px]" : "");
  return (
    <div className={wrappercs}>
      {prizes.map((prize) => {
        const cs = classNames(
          "flex justify-center items-center w-full",
          hasItemSpace? "rounded-sm": "",
          prize === "+"
            ? ""
            : "border border-[rgb(233,233,233)] first:border-r last:border-l",
          prize === "" ? "bg-[#EAEAEA]" : ""
        );
        return (
          <div className={cs}>
            <p className="text-center text-[16px] font-semibold">{prize}</p>
          </div>
        );
      })}
    </div>
  );
};

export default JackpotInfoContent;
