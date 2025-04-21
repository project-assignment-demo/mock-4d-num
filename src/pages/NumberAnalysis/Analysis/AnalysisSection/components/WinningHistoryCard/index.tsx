import AnalysisResultCard from "../AnalysisResultCard";
import { WinningHistoryCardProps } from "./type";

const WinningHistoryCard = ({ winningHistories }: WinningHistoryCardProps) => {
  return (
    <AnalysisResultCard title="Winning History">
      <div className="overflow-y-auto scroll-box">
        <table className=" table-auto text-[12px] w-full rounded-[9px]">
          <thead className="bg-[rgb(255,184,2)] h-[30px] rounded-t-[9px]">
            <tr className="text-[11px] font-bold">
              <th className="rounded-tl-[9px]">&nbsp;</th>
              <th className="text-center text-[rgb(130,39,0)]">4D</th>
              <th className="text-center text-[rgb(130,39,0)]">Prize</th>
              <th className="text-center text-[rgb(130,39,0)]">Date</th>
              <th className="text-center text-[rgb(130,39,0)] rounded-tr-[9px]">
                Gap
              </th>
            </tr>
          </thead>
          <tbody>
            {winningHistories.map((history) => {
              const isPrimary =
                history.prize === "1ST" ||
                history.prize === "2ND" ||
                history.prize === "3RD";
              return (
                <tr>
                  <td className="flex items-center justify-center">
                    <img className="w-[26px] h-[26px]" src={history.image} />
                  </td>
                  <td className="text-center font-medium text-[11px]">
                    <p>{history.number}</p>
                  </td>
                  <td className="text-center font-medium text-[11px]">
                    <div
                      className={`w-[90%] rounded-[3px] ${
                        isPrimary
                          ? "bg-[rgb(237,64,64)] text-white"
                          : "bg-[rgb(239,239,239)] text-black"
                      }  mx-auto`}
                    >
                      <p className="">{history.prize}</p>
                    </div>
                  </td>
                  <td className="text-center font-medium text-[11px]">
                    <p>{history.date}</p>
                  </td>
                  <td className="text-center font-medium text-[11px]">
                    <p>{history.gap}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </AnalysisResultCard>
  );
};

export default WinningHistoryCard;
