
import JackpotTable from "../../JackpotTable";
import JackpotHeader from "../JackpotHeader";
import JackpotInfoCard from "../JackpotInfoCard";
import JackpotInfoContent from "../JackpotInfoContent";
import JackpotPrizeLayout from "../JackpotPrizeLayout";


const JackpotCard = () => {
  const prizes = ["01", "03", "08", "13", "19", "24", "25", "32"];

  return (
    <div className="w-full rounded-[25px] bg-white shadow-2xl flex flex-col justify-start pb-[30px]">
      <JackpotHeader />

      <div className="mt-[20px] flex flex-col gap-[50px] px-5">
        <JackpotTable title="Magnum Life">
          <div className="flex flex-col gap-2 mt-2">
            <JackpotInfoCard title="Winning Number" primaryColor="#F5C530">
              <JackpotInfoContent prizes={prizes} />
            </JackpotInfoCard>

            <JackpotInfoCard
              title="Bonus Numbers"
              primaryColor="#000000"
              textColor="#ffffff"
            >
              <div className="flex h-[40px] w-full max-h-full">
                <JackpotInfoContent prizes={["06", "22"]} />
              </div>
            </JackpotInfoCard>
          </div>
        </JackpotTable>

        <JackpotTable title="Gold Jackpot">
          <div className="flex flex-col gap-2 mt-2">
            <JackpotInfoCard title="Jackpot 1" primaryColor="#F5C530">
              <JackpotInfoContent
                prizes={["13", "17", "41", "46", "47", "48", "+", "2", "9"]}
                hasItemSpace={true}
              />
            </JackpotInfoCard>
            <JackpotInfoCard title="Jackpot 2" primaryColor="#F5C530">
              <JackpotInfoContent
                prizes={["13", "17", "41", "46", "47", "48", "+", "2", "9"]}
                hasItemSpace={true}
              />
              <hr className="text-[rgb(233,233,233)] my-[4px]" />
              <JackpotInfoContent
                prizes={["13", "17", "41", "46", "47", "", "+", "2", "9"]}
                hasItemSpace={true}
              />
            </JackpotInfoCard>
          </div>
        </JackpotTable>

        <JackpotInfoCard
          title={["Gold Jackpot 1 Prize", "Gold Jackpot 2 Prize"]}
          primaryColor="#000000"
          textColor="#ffffff"
        >
          <div className="flex h-[40px] w-full max-h-full">
            <JackpotInfoContent
              prizes={["RM 12,571,000.00", "RM 215,000.00"]}
            />
          </div>
        </JackpotInfoCard>

        <JackpotTable title="Gold Jackpot">
          <div className="flex flex-col gap-2 mt-2">
           <JackpotPrizeLayout/>
          </div>
        </JackpotTable>
      </div>
    </div>
  );
};

export default JackpotCard;
