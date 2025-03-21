import SixDInfo from "../SixDInfo";
import { EighLuckyInfoProps } from "./type";

const EightLuckyInfo = ({
  data,
  primaryColor,
  secondaryColor,
  selectedTime
}: EighLuckyInfoProps) => {
  const title = "8LUCKY 6D";
  return (
    <SixDInfo
      selectedTime={selectedTime}
      title={title}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      data={data}
    />
  );
};

export default EightLuckyInfo;
