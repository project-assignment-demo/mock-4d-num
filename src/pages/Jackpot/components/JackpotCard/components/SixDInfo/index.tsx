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
  selectedTime,
}: SixDInfoProps) => {
  const defaultTextColor = textColor ?? "#ffffff";

  const titles = ["ST", "ND", "RD", "TH"];
  const defaultSelectedTime = "15:30";
  const { prizes, logo } = data;
  const currentSelectedTime = selectedTime ?? defaultSelectedTime;
  const prize = prizes[currentSelectedTime];
  return (
    <JackpotTable title={title} primaryColor={primaryColor} icon={logo}>
      <div className="mt-2 flex flex-col gap-2">
        {prize.map((prize, index) => {
          const title = `${index + 1}${titles[index > 3 ? 3 : index]}`
          return (
            <JackpotInfoCard
              key={title}
              title={title}
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
