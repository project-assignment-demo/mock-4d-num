import { useEffect, useMemo, useRef, useState } from "react";

import ResultCardHeader from "../../../../components/ResultCard/ResultCardHeader";
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
import html2canvas from 'html2canvas';

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

const JackpotCard = (props: JackpotCardProps) => {

  const cardRef = useRef<HTMLDivElement | null>(null);

  const { jackpotKey, jackpotData: source } = props;

  const sourcesResults = useSiteStore((state) => state.sourceResults);
  const updateContent = useSiteStore(state => state.updateModalContent);

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

    return jackpotData.children[childIndex];
  }, [jackpotData, childIndex]);

  return (
    
    <div ref={cardRef} onClick={async () => {
      // set 
      console.log('share le')
      console.log(cardRef.current);
     
      if (cardRef.current) {
        const canvas = await html2canvas(cardRef.current, {
          useCORS: true,
          backgroundColor: 'white',
          removeContainer:true,
        });
        console.log(canvas.toDataURL());
        updateContent({image: canvas.toDataURL()})
        // const canvas = await html2canvas(ref.current);
        // console.log(canvas);
        // const base64Image = canvas.toDataURL();
        // console.log(base64Image);
      }
     
    }} className="w-full md:rounded-[25px] bg-white shadow-2xl flex flex-col justify-start pb-[30px] h-full overflow-auto">
      <ResultCardHeader
        type={jackpotData.type}
        title={jackpotData.title}
        logo={jackpotData.logo}
        date={data.date}
        day={data.day}
        primaryColor={colors.primaryColor}
        drawNo={data.drawNo}
        showTimeSelection={jackpotData.children.length > 1}
        onUpdateSelectedTime={(index) => setChildIndex(index)}
        // sharedHandler={}
      />
      <div className="flex flex-col gap-[40px] px-5">
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
