import { MdMenu, MdRefresh } from "react-icons/md";
import { useSettingStore } from "../../store";
import CustomDatePicker from "../components/LotteryDatePicker";
import ChangeLocaleDropDown from "../components/LocaleDropDownButton";

interface LotteryTabProps {
  onClick: (id: string) => void;
}
const LotteryTab = (props: LotteryTabProps) => {
  const lotteries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_) => ({
    source: "https://share.4dnum.com/site-logo/4Dlogo-01.png",
  }));

  return (
    <div className="flex justify-between gap-3 p-2">
      {lotteries.map((lottery, index) => {
        return (
          <img
            key={index}
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
