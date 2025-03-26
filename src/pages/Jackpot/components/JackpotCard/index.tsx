import { useState } from "react";

import CardHeader from "../../../../components/ResultCard/ResultCardHeader";
import { JackpotKey } from "../../../../store/result/jackpot/type";
import { Result } from "../../../../store/result/type";
import { JackpotComponentProps } from "./type";
import { MagnumJackpot } from "../../../../store/result/jackpot/magnum/type";
import { DaMaCaiJackpot } from "../../../../store/result/jackpot/daMaCai/type";
import { SportToToJackpot } from "../../../../store/result/jackpot/sportToTo/type";
import { SingaporeFourDJackpot } from "../../../../store/result/jackpot/SingaporeFourD/type";
import { SabahFourDJackpot } from "../../../../store/result/jackpot/sabahFourD/type";
import { NineWinJackpot } from "../../../../store/result/jackpot/nineWin/type";
import { EightLuckyJackpot } from "../../../../store/result/jackpot/eightLucky/type";

import {
  MagnumInfo,
  DaMaCaiInfo,
  SportToToInfo,
  SingaporeFourDInfo,
  SabahFourDInfo,
  EightLuckyInfo,
  NineWinBoxInfo,
} from "./components/Jackpot";

interface JackpotCardProps {
  jackpotKey: JackpotKey;
  jackpotData: Result;
}

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

const JackpotCard = (props: JackpotCardProps) => {
  const { jackpotKey, jackpotData } = props;

  const [data, setData] = useState(jackpotData.children[0]);
  const Component = jackpotComponentMap[jackpotKey];
  const colors = jackpotComponentColorMap[jackpotKey];

  return (
    <div className="w-full rounded-[25px] bg-white shadow-2xl flex flex-col justify-start pb-[30px] h-full">
      <CardHeader
        title={jackpotData.title}
        logo={jackpotData.logo}
        date={data.date}
        day={data.day}
        primaryColor={colors.primaryColor}
        drawNo={data.drawNo}
        showTimeSelection={jackpotData.children.length > 1}
        onUpdateSelectedTime={(index) => setData(jackpotData.children[index])}
      />

      <div className="mt-[20px] flex flex-col gap-[40px] px-5">
        <Component
          title={jackpotData.title}
          logo={jackpotData.logo}
          data={data as any}
          {...colors}
          selectedTime={undefined}
        />
      </div>
    </div>
  );
};

type JackpotComponentMap = {
  M: JackpotComponentProps<MagnumJackpot>;
  PMP: JackpotComponentProps<DaMaCaiJackpot>;
  ST: JackpotComponentProps<SportToToJackpot>;
  SG: JackpotComponentProps<SingaporeFourDJackpot>;
  EE: JackpotComponentProps<SabahFourDJackpot>;
  H: JackpotComponentProps<EightLuckyJackpot>;
  WB: JackpotComponentProps<NineWinJackpot>;
};

const jackpotComponentMap: {
  [K in keyof JackpotComponentMap]: React.FC<JackpotComponentMap[K]>;
} = {
  M: (props) => <MagnumInfo {...props} />,
  PMP: (props) => <DaMaCaiInfo {...props} />,
  ST: (props) => <SportToToInfo {...props} />,
  SG: (props) => <SingaporeFourDInfo {...props} />,
  EE: (props) => <SabahFourDInfo {...props} />,
  H: (props) => <EightLuckyInfo {...props} />,
  WB: (props) => <NineWinBoxInfo {...props} />,
};

export default JackpotCard;
