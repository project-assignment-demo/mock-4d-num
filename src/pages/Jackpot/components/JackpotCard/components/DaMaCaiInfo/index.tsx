import JackpotTable from "../../../../JackpotTable";
import JackpotInfoCard from "../../../JackpotInfoCard";
import PrimaryJackpotPrizes from "../../../PrimaryJackpotPrizes";
import SecondaryPrizes from "../../../SecondaryPrizes";
import { DaMaCaiInfoProps } from "./type";

const DaMaCaiInfo = ({
  data,
  title,
  logo,
  primaryColor,
  secondaryColor,
  textColor: settingTextColor,
}: DaMaCaiInfoProps) => {
  const { bonus, specials, consolations } = data;

  const formattedSpecials = specials.map(special => special.value);
  
  const formattedConsolations = consolations.map(consolation => consolation.value);

  const textColor = settingTextColor ?? "#ffffff";

  return (
    <>
      <JackpotTable primaryColor={primaryColor} title={title} icon={logo}>
        <div className="flex flex-col gap-2 mt-2">
          <PrimaryJackpotPrizes
            prizes={bonus}
            primaryColor={secondaryColor}
          />
        </div>
      </JackpotTable>

      <JackpotInfoCard
        title="Special"
        primaryColor={primaryColor}
        textColor={textColor}
      >
        <SecondaryPrizes prizes={formattedSpecials} />
      </JackpotInfoCard>

      <JackpotInfoCard
        title="Consolation"
        primaryColor={primaryColor}
        textColor={textColor}
      >
        <SecondaryPrizes prizes={formattedConsolations} />
      </JackpotInfoCard>
    </>
  );
};

export default DaMaCaiInfo;
