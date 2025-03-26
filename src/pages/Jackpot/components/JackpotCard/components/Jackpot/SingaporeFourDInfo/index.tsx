import JackpotInfoCard from "../../JackpotInfoCard";
import JackpotInfoContent from "../../JackpotInfoContent";
import JackpotShare from "../../JackpotShare";
import JackpotTable from "../../JackpotTable";
import { SingaporeFourDInfoProps } from "./type";

const SingaporeFourDInfo = ({
  data,
  logo,
  primaryColor,
  secondaryColor,
  textColor: settingTextColor,
}: SingaporeFourDInfoProps) => {
  const textColor = settingTextColor ?? "#ffffff";

  const Extra = () => {
    return (
      <div className="bg-white h-[80px] rounded-[17px] shadow-md">
        <div className=" flex items-center justify-center p-2 h-full">
          <div className="flex-1 w-full h-full">
            <p className="text-center font-extralight text-[12px]">Date</p>
            <p className="text-center font-bold">2025-03-17</p>
            <p className="text-center font-bold">(Mon)</p>
          </div>
          <div className="h-[40%] border-l border-gray-300"></div>

          <div className="flex-1 w-full h-full flex flex-col">
            <p className="text-center font-extralight text-[12px]">Draw No.</p>
            <p className="flex-grow text-center font-bold">177/25</p>
          </div>
        </div>
      </div>
    );
  };

  const { winningNumbers, winningShares } = data;

  return (
    <>
      <JackpotTable
        icon={logo}
        title="Singapore Toto"
        primaryColor={primaryColor}
        extras={<Extra />}
      ></JackpotTable>
      <JackpotInfoCard
        title="Winning Number"
        primaryColor={secondaryColor}
        textColor={textColor}
      >
        <JackpotInfoContent prizes={winningNumbers} />
      </JackpotInfoCard>
      <JackpotShare
        values={winningShares}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
    </>
  );
};

export default SingaporeFourDInfo;
