import JackpotInfoCard from "../../JackpotInfoCard";
import JackpotInfoContent from "../../JackpotInfoContent";
import JackpotTable from "../../JackpotTable";
import ToToJackpotPrize from "../../ToToJackpotPrize";
import { SabahFourDInfoProps } from "./type";

const SabahFourDInfo = ({
  data,
  logo,
  primaryColor,
  secondaryColor,
  textColor: settingTextColor,
}: SabahFourDInfoProps) => {
  const { winningJackpot } = data;
  const { prizes, jackpots } = winningJackpot;
  const textColor = settingTextColor ?? "#ffffff";
  return (
    <>
      <JackpotTable title="Sabah Lotto Jackpot" primaryColor={primaryColor} icon={logo}>
        <div className="flex flex-col gap-2 mt-2">
          <JackpotInfoCard
            title="Wining Numbers"
            primaryColor={secondaryColor}
            textColor={textColor}
          >
            <JackpotInfoContent prizes={prizes} />
            {jackpots.map((prize, index) => {
              const label = `Jackpot ${index + 1}`
              return (
                <ToToJackpotPrize
                  key={label}
                  label={label}
                  value={prize}
                />
              );
            })}
          </JackpotInfoCard>
        </div>
      </JackpotTable>
    </>
  );
};

export default SabahFourDInfo;
