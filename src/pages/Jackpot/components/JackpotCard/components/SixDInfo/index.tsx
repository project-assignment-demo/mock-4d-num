import JackpotTable from "../../../../JackpotTable";
import JackpotInfoCard from "../../../JackpotInfoCard";
import JackpotInfoContent from "../../../JackpotInfoContent";
import type { SixDInfoProps } from "./type";



const SixDInfo = ({
  data,
  primaryColor,
  secondaryColor,
  textColor,
  title,
}: SixDInfoProps) => {
  const defaultTextColor = textColor ?? "#ffffff";

  const titles = ["ST", "ND", "RD", "TH"];
  const { datas } = data;
  const currentDataIndex = 0;
  const prizes = datas[currentDataIndex].sixDPrizes;
  return (
    <JackpotTable title={title} primaryColor={primaryColor}>
      <div className="mt-2 flex flex-col gap-2">
        {prizes.map((prize, index) => {
          return (
            <JackpotInfoCard
              title={`${index + 1}${titles[index > 3 ? 3 : index]}`}
              primaryColor={index === 0 ? secondaryColor : primaryColor}
              textColor={defaultTextColor}
            >
              <JackpotInfoContent prizes={prize} />
            </JackpotInfoCard>
          );
        })}
      </div>
    </JackpotTable>
  );
};

export default SixDInfo;
