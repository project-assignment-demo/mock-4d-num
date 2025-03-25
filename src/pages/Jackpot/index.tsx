
// import { JackpotKey } from "../../api/result/type";

import { useJackpots } from "../../store/result";
import { JackpotKey } from "../../store/result/jackpot/type";
import JackpotCard from "./components/JackpotCard";



const Jackpot = () => {
  const jackpots = useJackpots();
  console.log(jackpots);
  // const jackpots = useJackpots();
  // if (!jackpots) return <div>Not Found jackpot</div>;
  return (
    <div className="flex flex-wrap flex-row gap-4 justify-center">
      {jackpots.map((jackpot) => {
        
        const { type } = jackpot
        return (
          <div key={type} id={type} className="mx-4 w-[400px]">
            <JackpotCard
              jackpotKey={type as JackpotKey}
              jackpotData={jackpot}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Jackpot;
