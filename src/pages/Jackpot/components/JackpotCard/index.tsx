import {
  DaMaCaiJackpot,
  JackpotKey,
  JackpotType,
  MagnumJackpot,
  SabahJackpot,
  Singapor4DJackpot,
  SixDJackpot,
  SportToToJackpot,
} from "../../../../api/result/type";
import JackpotHeader from "../JackpotHeader";
import DaMaCaiInfo from "./components/DaMaCaiInfo";
import EightLuckyInfo from "./components/EighLuckyInfo";
import MagnumInfo from "./components/MagnumInfo";
import NineWinBoxInfo from "./components/NineWinBoxInfo";
import SabahFourDInfo from "./components/SabahFourDInfo";
import SingaporeFourDInfo from "./components/SingaporeFourDInfo";
import SportToToInfo from "./components/SportToToInfo";
import { JackpotComponentProps } from "./type";

interface JackpotCardProps {
  jackpotKey: JackpotKey;
  jackpotData: JackpotType;
}

const JackpotCard = (props: JackpotCardProps) => {
  const { jackpotKey, jackpotData } = props;
  const Component = jackpotComponentMap[jackpotKey];
  const colors = jackpotComponentColorMap[jackpotKey];

  return (
    <div className="w-full rounded-[25px] bg-white shadow-2xl flex flex-col justify-start pb-[30px] h-full">
      <JackpotHeader title={jackpotData.title} logo={jackpotData.logo} />

      <div className="mt-[20px] flex flex-col gap-[40px] px-5">
        <Component data={jackpotData} {...colors} />
      </div>
    </div>
  );
};

const jackpotComponentMap: Record<
  JackpotKey,
  React.FC<JackpotComponentProps<JackpotType>>
> = {
  M: (props) => <MagnumInfo {...props} data={props.data as MagnumJackpot} />,
  PMP: (props) => (
    <DaMaCaiInfo {...props} data={props.data as DaMaCaiJackpot} />
  ),
  ST: (props) => (
    <SportToToInfo {...props} data={props.data as SportToToJackpot} />
  ),
  SG: (props) => (
    <SingaporeFourDInfo {...props} data={props.data as Singapor4DJackpot} />
  ),
  EE: (props) => <SabahFourDInfo {...props} data={props.data as SabahJackpot} />,
  H: (props) => <EightLuckyInfo {...props} data={props.data as SixDJackpot} />,
  WB: (props) => <NineWinBoxInfo {...props} data={props.data as SixDJackpot} />,
};

const jackpotComponentColorMap: Record<
  JackpotKey,
  { primaryColor: string; secondaryColor: string }
> = {
  M: {
    primaryColor: "#000000",
    secondaryColor: "#F5C530",
  },
  PMP: {
    primaryColor: "#1D377B",
    secondaryColor: "#E9181B",
  },
  ST: {
    primaryColor: "#E9181B",
    secondaryColor: "#000000",
  },
  SG: {
    primaryColor: "#0093D8",
    secondaryColor: "#1D377B",
  },
  EE: {
    primaryColor: "#FA0504",
    secondaryColor: "#1E68A2",
  },
  H: {
    primaryColor: "#1A81BB",
    secondaryColor: "#1D377B",
  },
  WB: {
    primaryColor: "#612FAE",
    secondaryColor: "#B44EF2",
  },
};

export default JackpotCard;
