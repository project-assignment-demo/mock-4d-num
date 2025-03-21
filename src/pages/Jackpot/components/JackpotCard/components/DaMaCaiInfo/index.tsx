import JackpotTable from "../../../../JackpotTable";
import JackpotInfoCard from "../../../JackpotInfoCard";
import PrimaryJackpotPrizes from "../../../PrimaryJackpotPrizes";
import SecondaryPrizes from "../../../SecondaryPrizes";
import { DaMaCaiInfoProps } from "./type";

const DaMaCaiInfo = ({
  data,
  primaryColor,
  secondaryColor,
  textColor: settingTextColor,
}: DaMaCaiInfoProps) => {
  const { threeDBonus, special, consolation, title, logo } = data;

  const textColor = settingTextColor ?? "#ffffff";

  return (
    <>
      <JackpotTable primaryColor={primaryColor} title={title} icon={logo}>
        <div className="flex flex-col gap-2 mt-2">
          <PrimaryJackpotPrizes
            prizes={threeDBonus}
            primaryColor={secondaryColor}
          />
        </div>
      </JackpotTable>

      <JackpotInfoCard
        title="Special"
        primaryColor={primaryColor}
        textColor={textColor}
      >
        <SecondaryPrizes prizes={special} />
      </JackpotInfoCard>

      <JackpotInfoCard
        title="Consolation"
        primaryColor={primaryColor}
        textColor={textColor}
      >
        <SecondaryPrizes prizes={consolation} />
      </JackpotInfoCard>
    </>
  );
};

export default DaMaCaiInfo;
