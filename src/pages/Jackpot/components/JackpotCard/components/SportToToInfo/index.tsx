import JackpotTable from "../../../../JackpotTable";
import JackpotInfoCard from "../../../JackpotInfoCard";
import JackpotInfoContent from "../../../JackpotInfoContent";
import PrimaryJackpotPrizes from "../../../JackpotPrizeLayout";
import ToToJackpotPrize from "../../../ToToJackpotPrize";
import { SportToToInfoProps } from "./type";

const SportToToInfo = ({
  data,
  primaryColor,
  secondaryColor,
  textColor: settingTextColor,
}: SportToToInfoProps) => {
  const { totoJackpot, fiveD, sixD, title } = data;

  const textColor = settingTextColor ?? "#ffffff";

  return (
    <>
      <JackpotTable primaryColor={primaryColor} title={title}>
        <div className="flex flex-col gap-2 mt-2">
          {totoJackpot.map((jackpot) => {
            return (
              <JackpotInfoCard
                title={jackpot.label}
                primaryColor={secondaryColor}
                textColor={textColor}
              >
                <JackpotInfoContent prizes={jackpot.jackpot} />
                {jackpot.prizes.map((prize, index) => {
                  return (
                    <ToToJackpotPrize
                      label={`Jackpot ${index + 1}`}
                      value={prize}
                    />
                  );
                })}
              </JackpotInfoCard>
            );
          })}
        </div>
      </JackpotTable>
      <JackpotTable primaryColor={primaryColor} title="Toto 5D">
        <PrimaryJackpotPrizes
          layout="grid"
          prizes={fiveD}
          primaryColor={secondaryColor}
        />
      </JackpotTable>
      <JackpotTable primaryColor={primaryColor} title="Toto 6D">
        <div className="mt-2">
          <PrimaryJackpotPrizes prizes={sixD} primaryColor={secondaryColor} />
        </div>
      </JackpotTable>
    </>
  );
};

export default SportToToInfo;
