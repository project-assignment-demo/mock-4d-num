import SixDInfo from "../SixDInfo";
import { NineWinBoxInfoProps } from "./type";

const NineWinBoxInfo = (props: NineWinBoxInfoProps) => {
  const title = "9 Winbox";
  return <SixDInfo {...props} title={title} />;
};

export default NineWinBoxInfo;
