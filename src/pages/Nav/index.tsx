import { MdMenu, MdRefresh } from "react-icons/md";
import { useSettingStore } from "../../store";
import CustomDatePicker from "../components/LotteryDatePicker";
import ChangeLocaleDropDown from "../components/LocaleDropDownButton";
import { useSwiperControl } from "../../context/SwiperContext";

const CompanyTabBar = () => {
  const companies = useSettingStore((state) => state.companies);

  const { goTo } = useSwiperControl();

  const companyIconHandler = (id: string, index: number) => {
    goTo(index);
    // const element = document.getElementById(id);
    // console.log(id);
    // if (element) {
    //   element.scrollIntoView({ behavior: "smooth", block: "start" });
    // }

  };

  return (
    <div className="flex w-full justify-evenly pt-[5px]">
      {companies.map((company, index) => {
        return (
          <img
            key={company.id}
            onClick={() => companyIconHandler(company.id, index)}
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] cursor-pointer"
            src={company.source}
          />
        );
      })}
    </div>
  );
};

const Nav = () => {
  const openDrawer = useSettingStore((state) => state.updateDrawer);

  return (
    <>
      <nav className="hidden sm:block">
        <div className="flex justify-between gap-2 px-2 py-4 max-w-[700px]">
          <div className="block sm:hidden" onClick={() => openDrawer(true)}>
            <MdMenu className="text-[20px]" />
          </div>
          <div className="bg-white drop-shadow-md rounded-xl flex items-center justify-between">
            <CompanyTabBar />
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
        </div>
      </nav>
      <nav className="block sm:hidden w-full bg-white px-2 py-2">
        <CompanyTabBar />
      </nav>
    </>
  );
};

export default Nav;
