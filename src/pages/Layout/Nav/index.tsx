import ResultDatePicker from "../../../components/LotteryDatePicker";
import { useCompanies } from "../../../store/company";
import Refresh from "../../../assets/refresh.svg?react";
import Next from "../../../assets/next.svg?react";
import LuckyBookSearchSection from "../../LuckyBook/components/LuckBookSearchBar";
import LuckyBookFilter from "../../LuckyBook/components/LuckyBookFilter";
import ChangeLocaleDropDown from "../../../components/LocaleDropDownButton";
import { useSwiperControl } from "../../../context/SwiperContext";
import { Link, useLocation, useNavigate, useParams } from "react-router";
import { useSiteStore } from "../../../store";
import { useMemo } from "react";
import { categories } from "../../LuckyBook";

const useNavigateIcon = (location: string) => {
  if (location === "/") {
    return "https://4dnum.com/assets/dashboard-9afa325f.svg";
  } else if (location === "/jackpot") {
    return "https://4dnum.com/assets/jackpotIcon-0c38e317.svg";
  } else if (location === "/special-date") {
    return "https://4dnum.com/assets/calendar-290949a5.svg";
  } else if (location === "/number-analysis") {
    return "https://4dnum.com/assets/analysis-2918ebbf.svg";
  } else if (location === "/spin-my-luck") {
    return "https://4dnum.com/assets/spin-ae7fa84f.svg";
  } else if (location === "/hot-dddd-num") {
    return "https://4dnum.com/assets/hot-fb60f46e.svg";
  } else if (location.startsWith("/lucky-book")) {
    return "https://4dnum.com/assets/lucky-251bc6d4.svg";
  }
};

function useLuckyBookTitle(id: string | undefined) {
  return useMemo(() => {
    return categories.find((c) => c.id === id?.toUpperCase())?.label ?? "";
  }, [id]);
}

const Nav = () => {
  // bg-[rgb(243,243,243)]
  const updateDrawer = useSiteStore((state) => state.updateDrawer);
  const { id } = useParams();
  const navigate = useNavigate();
  const title = useLuckyBookTitle(id);

  const isLuckybookChildren = useMemo(() => {
    return (
      location.pathname.includes("/lucky-book") &&
      !(location.pathname === "/lucky-book")
    );
  }, [location.pathname]);

  return (
    <div className="hidden w-full lg:max-w-[1250px] md:flex md:items-center md:justify-between xl:left-[206px] xl:w-[calc(100%-206px)] xl:max-w-none xl:pl-5  absolute z-[9998] top-[0px] left-[0px] px-2 gap-4 h-[65px]">
      <div className="xl:hidden flex items-center">
        <img
          onClick={() => updateDrawer(true)}
          className="cursor-pointer"
          src="https://4dnum.com/assets/menu-696a0cd6.svg"
          alt=""
        />
        <button
          onClick={() => navigate("/")}
          type="button"
          className="flex items-center gap-[10px]"
        >
          <img
            src="https://4dnum.com/assets/logo-223c3117.png"
            className="w-[40px] rounded-full"
          />
        </button>
      </div>
      <div className="hidden xl:flex items-center">
        <button type="button" className="w-[40px] h-[40px]">
          <img
            src={useNavigateIcon(location.pathname)}
            className="w-full h-full"
          />
        </button>
        {isLuckybookChildren && (
          <div className="flex justify-center items-center">
            <Next className="w-6 h-6 leading-[1em] text-[rgb(35,31,32)]" />
            <Link to={"/lucky-book"} className="w-full">
              <p className="font-[500] text-transparent bg-clip-text bg-gradient-to-l from-red-600 to-indigo-600 text-md xl:text-xl whitespace-nowrap overflow-ellipsis">
                {title}
              </p>
            </Link>
          </div>
        )}
      </div>
      {isLuckybookChildren ? (
        <>
          <div className="flex">
            <LuckyBookSearchSection />
          </div>
          <div className="flex">
            <LuckyBookFilter />
          </div>
        </>
      ) : (
        <>
          <CompanyIconNavBar />
          <div className="flex justify-center">
            <ResultDatePicker />
          </div>
        </>
      )}
      <div className="flex justify-center items-center">
        <Refresh />
      </div>
      <div className="flex">
        <ChangeLocaleDropDown />
      </div>
    </div>
  );
};

const CompanyIconNavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const companies = useCompanies(location.pathname);
  // const { goTo } = useSwiperControl();
  const companyIconHandler = async (id: string) => {
    // goTo(index);
    if (location.pathname !== "/") {
      await navigate("/");
    }
    const element = document.getElementById(id);
    console.log(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="hidden md:flex py-2 px-3 justify-center items-center gap-3 rounded-[20px] bg-white w-full max-w-[500px] xl:max-w-[530px] 2xl:max-w-[700px] 2xl:gap-6">
      {companies.map((company) => {
        return (
          <div
            onClick={() => companyIconHandler(company.id)}
            className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px] flex justify-center items-center rounded-full aspect-square cursor-pointer"
          >
            <img src={company.source} />
          </div>
        );
      })}
    </div>
  );
};

export default Nav;
