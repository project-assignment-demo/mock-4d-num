import { SabahJackpot } from "../../../../../../api/result/type";
import JackpotTable from "../../../../JackpotTable";
import JackpotInfoCard from "../../../JackpotInfoCard";
import JackpotInfoContent from "../../../JackpotInfoContent";
import ToToJackpotPrize from "../../../ToToJackpotPrize";
import { SabahFourDInfoProps } from "./type";

const SabahFourDInfo = ({
  data,
  primaryColor,
  secondaryColor,
  textColor: settingTextColor,
}: SabahFourDInfoProps) => {
  const { winningNumbers } = data;
  const textColor = settingTextColor ?? "#ffffff";
  return (
    <>
      <JackpotTable title="Sabah Lotto Jackpot" primaryColor={primaryColor}>
        <div className="flex flex-col gap-2 mt-2">
          <JackpotInfoCard
            title="Wining Numbers"
            primaryColor={secondaryColor}
            textColor={textColor}
          >
            <JackpotInfoContent prizes={winningNumbers.prizes} />
            {winningNumbers.jackpot.map((prize, index) => {
              return (
                <ToToJackpotPrize
                  label={`Jackpot ${index + 1}`}
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
