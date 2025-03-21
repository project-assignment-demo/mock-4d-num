import JackpotCard from "./components/JackpotCard";
import { JackpotKey } from "../../api/result/type";
import { useJackpots } from "../../store";

const Jackpot = () => {
  const jackpots = useJackpots();
  if (!jackpots) return <div>Not Found jackpot</div>;
  return (
    <div className="flex flex-wrap flex-row gap-4 justify-center">
      {Object.entries(jackpots).map(([key]) => {
        return (
          <div key={key} id={key} className="mx-4 w-[400px]">
            <JackpotCard
              jackpotKey={key as JackpotKey}
              jackpotData={jackpots[key as JackpotKey]}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Jackpot;
