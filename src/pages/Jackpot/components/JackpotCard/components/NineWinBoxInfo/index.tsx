import SixDInfo from "../SixDInfo";
import { NineWinBoxInfoProps } from "./type";

const NineWinBoxInfo = ({
  data,
  primaryColor,
  secondaryColor,
}: NineWinBoxInfoProps) => {
  const title = "9 Winbox";

  return (
    <SixDInfo
      title={title}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      data={data}
    />
  );
};

export default NineWinBoxInfo;
