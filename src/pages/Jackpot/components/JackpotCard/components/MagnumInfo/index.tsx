import JackpotTable from "../../../../JackpotTable";
import JackpotInfoCard from "../../../JackpotInfoCard";
import JackpotInfoContent from "../../../JackpotInfoContent";
import { MagnumInfoProps } from "./type";

const MagnumInfo = ({
  data,
  primaryColor,
  secondaryColor,
  textColor: settingTextColor,
}: MagnumInfoProps) => {
  const { magnumLife, goldJackpot, jackpotPrize, title } = data;

  const textColor = settingTextColor ?? "#ffffff";

  return (
    <>
      <JackpotTable primaryColor={primaryColor} title={title}>
        <div className="flex flex-col gap-2 mt-2">
          <JackpotInfoCard title="Winning Number" primaryColor={secondaryColor}>
            <JackpotInfoContent prizes={magnumLife.winningNumbers} />
          </JackpotInfoCard>

          <JackpotInfoCard
            title="Bonus Numbers"
            primaryColor="#000000"
            textColor="#ffffff"
          >
            <div className="flex h-[40px] w-full max-h-full">
              <JackpotInfoContent prizes={magnumLife.bonusNumbers} />
            </div>
          </JackpotInfoCard>
        </div>
      </JackpotTable>
      <JackpotTable primaryColor="#000000" title="Gold Jackpot">
        <div className="flex flex-col gap-2 mt-2">
          {goldJackpot.map((jackpots, index) => {
            const label = `Jackpot ${index}`;
            return (
              <JackpotInfoCard
                key={label}
                title={label}
                primaryColor={secondaryColor}
              >
                {jackpots.map((jackpot, index) => {
                  return (
                    <>
                      <JackpotInfoContent
                        prizes={jackpot}
                        hasItemSpace={true}
                      />
                      {index < jackpots.length - 1 && (
                        <hr className="text-[rgb(233,233,233)] my-[4px]" />
                      )}
                    </>
                  );
                })}
              </JackpotInfoCard>
            );
          })}
        </div>
      </JackpotTable>
      <JackpotInfoCard
        title={["Gold Jackpot 1 Prize", "Gold Jackpot 2 Prize"]}
        primaryColor={primaryColor}
        textColor={textColor}
      >
        <div className="flex h-[40px] w-full max-h-full">
          <JackpotInfoContent prizes={jackpotPrize} />
        </div>
      </JackpotInfoCard>
    </>
  );
};

export default MagnumInfo;
