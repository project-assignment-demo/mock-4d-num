import {
  DaMaCaiJackpot,
  EightLuckyJackpot,
  JackpotKey,
  JackpotType,
  MagnumJackpot,
  NineWinBoxJackpot,
  SabahJackpot,
  Singapor4DJackpot,
  SportToToJackpot,
} from "../../../../api/result/type";
import JackpotTable from "../../JackpotTable";
import JackpotHeader from "../JackpotHeader";
import JackpotInfoCard from "../JackpotInfoCard";
import JackpotInfoContent from "../JackpotInfoContent";
import PrimaryJackpotPrizes, {
  JackpotPrimaryPrize,
} from "../JackpotPrizeLayout";
import SecondaryPrizes from "../SecondaryPrizes";
import ToToJackpotPrize from "../ToToJackpotPrize";
interface JackpotCardProps {
  jackpotKey: JackpotKey;
  jackpotData: JackpotType;
}

const JackpotCard = (props: JackpotCardProps) => {
  const { jackpotKey, jackpotData } = props;

  // // const prizes = ["01", "03", "08", "13", "19", "24", "25", "32"];

  // const ExampleComponent = () => {
  //   <div className="w-full rounded-[25px] bg-white shadow-2xl flex flex-col justify-start pb-[30px]">
  //     <JackpotHeader />

  //     <div className="mt-[20px] flex flex-col gap-[50px] px-5">
  //       <JackpotTable title="Magnum Life">
  //         <div className="flex flex-col gap-2 mt-2">
  //           <JackpotInfoCard title="Winning Number" primaryColor="#F5C530">
  //             <JackpotInfoContent prizes={prizes} />
  //           </JackpotInfoCard>

  //           <JackpotInfoCard
  //             title="Bonus Numbers"
  //             primaryColor="#000000"
  //             textColor="#ffffff"
  //           >
  //             <div className="flex h-[40px] w-full max-h-full">
  //               <JackpotInfoContent prizes={["06", "22"]} />
  //             </div>
  //           </JackpotInfoCard>
  //         </div>
  //       </JackpotTable>

  //       <JackpotTable title="Gold Jackpot">
  //         <div className="flex flex-col gap-2 mt-2">
  //           <JackpotInfoCard title="Jackpot 1" primaryColor="#F5C530">
  //             <JackpotInfoContent
  //               prizes={["13", "17", "41", "46", "47", "48", "+", "2", "9"]}
  //               hasItemSpace={true}
  //             />
  //           </JackpotInfoCard>
  //           <JackpotInfoCard title="Jackpot 2" primaryColor="#F5C530">
  //             <JackpotInfoContent
  //               prizes={["13", "17", "41", "46", "47", "48", "+", "2", "9"]}
  //               hasItemSpace={true}
  //             />
  //             <hr className="text-[rgb(233,233,233)] my-[4px]" />
  //             <JackpotInfoContent
  //               prizes={["13", "17", "41", "46", "47", "", "+", "2", "9"]}
  //               hasItemSpace={true}
  //             />
  //           </JackpotInfoCard>
  //         </div>
  //       </JackpotTable>

  //       <JackpotInfoCard
  //         title={["Gold Jackpot 1 Prize", "Gold Jackpot 2 Prize"]}
  //         primaryColor="#000000"
  //         textColor="#ffffff"
  //       >
  //         <div className="flex h-[40px] w-full max-h-full">
  //           <JackpotInfoContent
  //             prizes={["RM 12,571,000.00", "RM 215,000.00"]}
  //           />
  //         </div>
  //       </JackpotInfoCard>

  //       <JackpotTable title="Gold Jackpot">
  //         <div className="flex flex-col gap-2 mt-2">
  //           <PrimaryJackpotPrizes
  //             prizes={["415 133", ["135 678", "135 678"], "833 636"]}
  //           />
  //         </div>
  //       </JackpotTable>
  //       <JackpotInfoCard
  //         title="Special"
  //         primaryColor="#1D377B"
  //         textColor="#ffffff"
  //       >
  //         <SecondaryPrizes
  //           prizes={[
  //             "328 780",
  //             "211 872",
  //             "216 285",
  //             "717 228",
  //             "526 614",
  //             "293 138",
  //             "856 590",
  //             "817 924",
  //             "678 452",
  //             "",
  //             "003 840",
  //             "",
  //           ]}
  //         />
  //       </JackpotInfoCard>

  //       <JackpotTable title="9 Winbox 6D">
  //         <div className="flex flex-col gap-2 mt-2">
  //           <JackpotInfoCard title="1ST" primaryColor="#F5C530">
  //             <JackpotInfoContent prizes={["8", "4", "3", "5", "3", "0"]} />
  //           </JackpotInfoCard>

  //           <JackpotInfoCard title="2ND" primaryColor="#F5C530">
  //             <JackpotInfoContent
  //               prizes={[
  //                 "6",
  //                 "9",
  //                 "4",
  //                 "2",
  //                 "7",
  //                 "",
  //                 "",
  //                 "9",
  //                 "4",
  //                 "2",
  //                 "7",
  //                 "1",
  //               ]}
  //             />
  //           </JackpotInfoCard>
  //           <JackpotInfoCard title="2ND" primaryColor="#F5C530">
  //             <JackpotInfoContent
  //               prizes={["8", "4", "", "", "", "", "", "", "", "", "3", "0"]}
  //             />
  //           </JackpotInfoCard>
  //         </div>
  //       </JackpotTable>
  //     </div>
  //   </div>;
  // };
  const Component = jackpotComponentMap[jackpotKey];

  console.log(<Component data={jackpotData} />);

  return (
    <div className="w-full rounded-[25px] bg-white shadow-2xl flex flex-col justify-start pb-[30px]">
      <JackpotHeader title={jackpotData.title} logo={jackpotData.logo} />

      <Component data={jackpotData} />
    </div>
  );
};

const JackpotMagnumInfo = (props: { data: MagnumJackpot }) => {
  console.log(props);
  const { magnumLife, goldJackpot, jackpotPrize } = props.data;

  return (
    <div className="mt-[20px] flex flex-col gap-[40px] px-5">
      <JackpotTable primaryColor="#000000" title="Magnum Life">
        <div className="flex flex-col gap-2 mt-2">
          <JackpotInfoCard title="Winning Number" primaryColor="#F5C530">
            <JackpotInfoContent prizes={magnumLife.winningNumbers} />
          </JackpotInfoCard>

          <JackpotInfoCard
            title="Bonus Numbers"
            primaryColor="#000000"
            textColor="#ffffff"
          >
            <div className="flex h-[40px] w-full max-h-full">
              <JackpotInfoContent prizes={magnumLife.bonusNumbers} />
            </div>
          </JackpotInfoCard>
        </div>
      </JackpotTable>
      <JackpotTable primaryColor="#000000" title="Gold Jackpot">
        <div className="flex flex-col gap-2 mt-2">
          {goldJackpot.map((jackpots, index) => {
            const label = `Jackpot ${index}`;
            return (
              <JackpotInfoCard key={label} title={label} primaryColor="#F5C530">
                {jackpots.map((jackpot, index) => {
                  return (
                    <>
                      <JackpotInfoContent
                        prizes={jackpot}
                        hasItemSpace={true}
                      />
                      {index < jackpots.length - 1 && (
                        <hr className="text-[rgb(233,233,233)] my-[4px]" />
                      )}
                    </>
                  );
                })}
              </JackpotInfoCard>
            );
          })}
        </div>
      </JackpotTable>
      <JackpotInfoCard
        title={["Gold Jackpot 1 Prize", "Gold Jackpot 2 Prize"]}
        primaryColor="#000000"
        textColor="#ffffff"
      >
        <div className="flex h-[40px] w-full max-h-full">
          <JackpotInfoContent prizes={jackpotPrize} />
        </div>
      </JackpotInfoCard>
    </div>
  );
};

const JackpotDaMaCaiInfo = (props: { data: DaMaCaiJackpot }) => {
  const { threeDBonus, special, consolation } = props.data;

  return (
    <div className="mt-[20px] flex flex-col gap-[40px] px-5">
      <JackpotTable primaryColor="#1D377B" title="3+3D Bonus">
        <div className="flex flex-col gap-2 mt-2">
          <PrimaryJackpotPrizes prizes={threeDBonus} primaryColor="#E9181B" />
        </div>
      </JackpotTable>

      <JackpotInfoCard
        title="Special"
        primaryColor="#1D377B"
        textColor="#ffffff"
      >
        <SecondaryPrizes prizes={special} />
      </JackpotInfoCard>

      <JackpotInfoCard
        title="Consolation"
        primaryColor="#1D377B"
        textColor="#ffffff"
      >
        <SecondaryPrizes prizes={consolation} />
      </JackpotInfoCard>
    </div>
  );
};

const JackpotSportToToInfo = ({ data }: { data: SportToToJackpot }) => {
  const { totoJackpot, fiveD, sixD } = data;

  const prizesLabels = ["ST", "ND", "RD", "TH"];

  return (
    <div className="mt-[20px] flex flex-col gap-[40px] px-5">
      <JackpotTable primaryColor="#EC2024" title="3+3D Bonus">
        <div className="flex flex-col gap-2 mt-2">
          {totoJackpot.map((jackpot) => {
            return (
              <JackpotInfoCard
                title={jackpot.label}
                primaryColor="#000000"
                textColor="#ffffff"
              >
                <JackpotInfoContent prizes={jackpot.jackpot} />
                {jackpot.prizes.map((prize, index) => {
                  return (
                    <ToToJackpotPrize
                      label={`Jackpot ${index + 1}`}
                      value={prize}
                    />
                  );
                })}
              </JackpotInfoCard>
            );
          })}
        </div>
      </JackpotTable>
      <JackpotTable primaryColor="#EC2024" title="Toto 5D">
        <div className="grid gap-2 grid-cols-2 w-full mt-[8px]">
          {fiveD.map((prize, index) => {
            return (
              <JackpotPrimaryPrize
                primaryColor="#000000"
                label={`${index + 1}${prizesLabels[index > 3 ? 3 : index]}`}
                prize={prize}
              />
            );
          })}
        </div>
      </JackpotTable>
      <JackpotTable primaryColor="#EC2024" title="Toto 6D">
        <div className="mt-2">
          <PrimaryJackpotPrizes prizes={sixD} primaryColor="#000000" />
        </div>
      </JackpotTable>
    </div>
  );
};

const JackpotSingaporeToTo = ({ data }: { data: Singapor4DJackpot }) => (
  <div>
    <h2>{data.title} - Singapore 4D</h2>
    <p>Winning Numbers: {data.winningNumbers.join(", ")}</p>
  </div>
);

const JackpotSabahFourD = ({ data }: { data: SabahJackpot }) => (
  <div>
    <h2>{data.title} - Sabah</h2>
    {/* <p>Jackpot Numbers: {data.winningNumbers.jackpot.join(", ")}</p> */}
  </div>
);

const JackpotEightLucky = ({ data }: { data: EightLuckyJackpot }) => (
  <div>
    <h2>{data.title} - Eight Lucky</h2>
  </div>
);

const JackpotNineWinBox = ({ data }: { data: NineWinBoxJackpot }) => (
  <div>
    <h2>{data.title} - Nine Win Box</h2>
  </div>
);

// Map Jackpot Types to Components
const jackpotComponentMap: Record<
  JackpotKey,
  React.FC<{ data: JackpotType }>
> = {
  M: (props) => <JackpotMagnumInfo data={props.data as MagnumJackpot} />,
  PMP: (props) => <JackpotDaMaCaiInfo data={props.data as DaMaCaiJackpot} />,
  ST: (props) => <JackpotSportToToInfo data={props.data as SportToToJackpot} />,
  SG: (props) => (
    <JackpotSingaporeToTo data={props.data as Singapor4DJackpot} />
  ),
  EE: (props) => <JackpotEightLucky data={props.data as EightLuckyJackpot} />,
  H: (props) => <JackpotSabahFourD data={props.data as SabahJackpot} />,
  WB: (props) => <JackpotNineWinBox data={props.data as NineWinBoxJackpot} />,
};

export default JackpotCard;
