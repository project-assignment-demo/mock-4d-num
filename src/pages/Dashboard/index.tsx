import LotteryInfoCard from "../components/LotteryInfoCard";
import { useQuery } from "@tanstack/react-query";
import { getResults } from "../../api/result";

const Dashboard = () => {
  const {
    isPending,
    error,
    data: results,
  } = useQuery({
    queryKey: ["result"],
    queryFn: () => getResults("2025-03-10"),
    refetchOnReconnect: false,
  });

  if (isPending) return <div>Loading ...</div>;

  if (error) return <div>Error !! {error.message}</div>;

  return (
    <div className="flex justify-center flex-wrap gap-[0.5rem] px-6">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"> */}
      {results.map((result) => (
        <div className="max-w-[370px] sm:max-w-[400px]">
          <LotteryInfoCard key={result.id} {...result} />
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

export default Dashboard;
