import { useQuery } from "@tanstack/react-query";
import JackpotCard from "./components/JackpotCard";
import { fetchJackpots } from "../../api/result";
import { JackpotKey } from "../../api/result/type";

const Jackpot = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["jackpot"],
    queryFn: fetchJackpots,
  });
  if (isPending) return <div>Loading ...</div>;
  return (
    <div className="flex flex-wrap flex-row">
     {

        Object.entries(data!).map(([key]) => {
                return <div className="mx-4 w-[400px]">
                <JackpotCard jackpotKey={key as JackpotKey} jackpotData={data![key as JackpotKey]} />
              </div>
        })
        // Object.entries(data).map([key, value] => {
        //     return (
        //         <div className="mx-4 w-[400px]">
        //         <JackpotCard jackpotKey={key} jackpotData={data[value]} />
        //       </div>
        //     )
        // })
     }
    </div>
  );
};

export default Jackpot;
