import SixDInfo from "../SixDInfo";
import { EighLuckyInfoProps } from "./type";

const EightLuckyInfo = (props: EighLuckyInfoProps) => {
  const title = "8LUCKY 6D";
  return (
    <SixDInfo
      {...props}
      title={title}
    />
  );
};

export default EightLuckyInfo;
