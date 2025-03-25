import JackpotTable from "../../../../JackpotTable";
import JackpotInfoCard from "../../../JackpotInfoCard";
import JackpotInfoContent from "../../../JackpotInfoContent";
import PrimaryJackpotPrizes from "../../../PrimaryJackpotPrizes";
import ToToJackpotPrize from "../../../ToToJackpotPrize";
import { SportToToInfoProps } from "./type";

const SportToToInfo = ({
  data,
  primaryColor,
  secondaryColor,
  textColor: settingTextColor,
  title,
  logo
}: SportToToInfoProps) => {
  const { jackpots, fiveD, sixD} = data;

  const textColor = settingTextColor ?? "#ffffff";

  return (
    <>
      <JackpotTable primaryColor={primaryColor} title={title} icon={logo}>
        <div className="flex flex-col gap-2 mt-2">
          {jackpots.map((jackpot) => {
            return (
              <JackpotInfoCard
                key={jackpot.label}
                title={jackpot.label}
                primaryColor={secondaryColor}
                textColor={textColor}
              >
                <JackpotInfoContent prizes={jackpot.jackpots} />
                {jackpot.prizes.map((prize, index) => {
                  return (
                    <ToToJackpotPrize
                      key={prize}
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
      <JackpotTable primaryColor={primaryColor} title="Toto 5D" icon={logo}>
        <PrimaryJackpotPrizes
          layout="grid"
          prizes={fiveD}
          primaryColor={secondaryColor}
        />
      </JackpotTable>
      <JackpotTable primaryColor={primaryColor} title="Toto 6D" icon={logo}>
        <div className="mt-2">
          <PrimaryJackpotPrizes prizes={sixD} primaryColor={secondaryColor} />
        </div>
      </JackpotTable>
    </>
  );
};

export default SportToToInfo;
