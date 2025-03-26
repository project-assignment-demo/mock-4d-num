import { PropsWithChildren } from "react";

type PrizeType = string | string[];

interface JackpotPrizeLayoutProps {
  prizes: PrizeType[];
  primaryColor: string;
  layout?: "flex" | "grid";
}

interface JackpotPrimaryPrize {
  label: string;
  prize: PrizeType;
  primaryColor: string;
  prefixWidth: 20 | 40;
}
const PrimaryJackpotPrizes = ({
  prizes,
  layout = "flex",
  primaryColor,
}: JackpotPrizeLayoutProps) => {
  const prizesLabels = ["ST", "ND", "RD", "TH"];

  const PrizesLayout = ({
    layout,
    children,
  }: PropsWithChildren & { layout: "flex" | "grid" }) => {
    switch (layout) {
      case "flex": {
        return <div className="flex flex-col gap-[5px]">{children}</div>;
      }
      case "grid": {
        return (
          <div className="grid gap-2 grid-cols-2 w-full mt-[8px]">
            {children}
          </div>
        );
      }
    }
  };
  return (
    <PrizesLayout layout={layout}>
      {prizes.map((prize, index) => {
        const label = `${index + 1}${prizesLabels[index > 3 ? 3 : index]}`;
        return (
          <JackpotPrimaryPrize
            key={label}
            prefixWidth={layout === "flex" ? 20 : 40}
            primaryColor={primaryColor}
            label={label}
            prize={prize}
          />
        );
      })}
    </PrizesLayout>
  );
};

const JackpotPrimaryPrize = (props: JackpotPrimaryPrize) => {
  const { label, prize, prefixWidth } = props;
  return (
    <div className="flex items-center w-full gap-[10px] h-[42px]">
      <div
        className="rounded-md h-full flex justify-center items-center"
        style={{
          backgroundColor: props.primaryColor,
          width: `${prefixWidth}%`,
        }}
      >
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
