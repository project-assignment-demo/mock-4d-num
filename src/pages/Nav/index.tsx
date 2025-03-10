import { MdMenu, MdRefresh } from "react-icons/md";
import { useSettingStore } from "../../store";
import CustomDatePicker from "../components/LotteryDatePicker";
import ChangeLocaleDropDown from "../components/LocaleDropDownButton";
import { useQuery } from '@tanstack/react-query';
import { getCompanyIcon } from "../../api/companyIcon";
import { useLocation } from "react-router";

interface LotteryTabProps {
  onClick: (id: string) => void;
}
const LotteryTab = (props: LotteryTabProps) => {

  const { isPending, error, data:iconSources } = useQuery({
    queryKey: ['site-logo'],
    queryFn: getCompanyIcon
      
  })

  if (isPending) return <div></div>

  if (error) return 'An error has occurred: ' + error.message;

  const location = useLocation();
  const isJackpotPath = location.pathname === "/jackpot";
  const lotteries = iconSources.filter((source) => {
    if (isJackpotPath) {
      const includeList = ["M", "PMP", "ST", "SG", "EE", "H", 'WB']
      return includeList.includes(source.id)
    } else {
      return source.id !== "GD";
    }
  })

  return (
    <div className="flex justify-center gap-3 p-2 max-w-[700px] w-full">
      {lotteries.map((lottery) => {
        return (
          <img
            key={lottery.id}
            onClick={() => props.onClick(lottery.source)}
            className="w-[40px] h-[40px] cursor-pointer"
            src={lottery.source}
          />
        );
      })}
    </div>
  );
};

const Nav = () => {
  const openDrawer = useSettingStore((state) => state.updateDrawer);

  return (
    <nav className="flex justify-between gap-2 px-2 py-4">
      <div className="block sm:hidden" onClick={() => openDrawer(true)}>
        <MdMenu className="text-[20px]" />
      </div>
      <div className="bg-white drop-shadow-md rounded-xl flex items-center justify-between">
        <LotteryTab onClick={(id) => console.log(id)} />
      </div>
      <div>
        <CustomDatePicker />
      </div>
      <div className="bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center drop-shadow-md">
        <MdRefresh className="text-[20px]" />
      </div>
      <div className="hidden sm:block">
        <ChangeLocaleDropDown />
      </div>
    </nav>
  );
};

export default Nav;

