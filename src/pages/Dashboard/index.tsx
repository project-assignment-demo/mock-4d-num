import LotteryInfoCard from "../components/LotteryInfoCard";
import { useQuery } from "@tanstack/react-query";
import { getResults } from "../../api/result";
import { useSettingStore } from "../../store";
import dayjs from "dayjs";

const Dashboard = () => {

  const selectedDate = useSettingStore(state => state.selectedDate);

  const {
    isPending,
    error,
    data: results,
  } = useQuery({
    queryKey: ["result", selectedDate],
    queryFn: () => getResults(dayjs(selectedDate).format('YYYY-MM-DD')),
    refetchOnReconnect: false,
  });

  if (isPending) return <div>Loading ...</div>;

  if (error) return <div>Error !! {error.message}</div>;

  return (
    <div className="flex justify-center flex-wrap gap-[0.5rem] px-6 h-full">
      {results.map((result) => (
        <div className="max-w-[370px] sm:max-w-[400px] min-h-full">
          <LotteryInfoCard key={result.type} {...result} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
