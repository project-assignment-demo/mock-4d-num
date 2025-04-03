import { useEffect, useMemo, useState } from "react";

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
import { resultColorMap } from "../../../../utils";
import { useSiteStore } from "../../../../store";
import { getJackpots } from "../../../../store/result";

interface JackpotCardProps {
  jackpotKey: JackpotKey;
  jackpotData: Result;
}

const   JackpotCard = (props: JackpotCardProps) => {
  const { jackpotKey, jackpotData: source } = props;

  const sourcesResults = useSiteStore((state) => state.sourceResults);

  const [jackpotData, setJackpotData] = useState(source);
  const [childIndex, setChildIndex] = useState(0);

  const Component = jackpotComponentMap[jackpotKey];
  const colors = resultColorMap[jackpotKey];

  useEffect(() => {
    setJackpotData(source);
  }, [source]);

  useEffect(() => {
    const d = getJackpots().find((j) => j.type === jackpotKey)!;
    setJackpotData(d);
  }, [sourcesResults]);

  const data = useMemo(() => {
    if (jackpotKey === "ST") {
      console.log("update memo");
      console.log(jackpotData.children[childIndex]);
    }

    return jackpotData?.children?.[childIndex];
  }, [jackpotData, childIndex]);

  return (
    <div className="w-full rounded-[25px] bg-white shadow-2xl flex flex-col justify-start pb-[30px] h-full">
      <CardHeader
        type={jackpotData.type}
        title={jackpotData.title}
        logo={jackpotData.logo}
        date={data.date}
        day={data.day}
        primaryColor={colors.primaryColor}
        drawNo={data.drawNo}
        showTimeSelection={jackpotData.children.length > 1}
        onUpdateSelectedTime={(index) => setChildIndex(index)}
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
  M: (props) => {
    console.log(props);
    return <MagnumInfo {...props} />;
  },
  PMP: (props) => <DaMaCaiInfo {...props} />,
  ST: (props) => <SportToToInfo {...props} />,
  SG: (props) => <SingaporeFourDInfo {...props} />,
  EE: (props) => <SabahFourDInfo {...props} />,
  H: (props) => <EightLuckyInfo {...props} />,
  WB: (props) => <NineWinBoxInfo {...props} />,
  
};

export default JackpotCard;
