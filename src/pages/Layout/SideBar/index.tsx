import { useNavigate } from "react-router";
import { defineMessages, useIntl } from "react-intl";
import DashbaordIcon from "./assets/dashboard.svg?react";
import cs from "classnames";
import { JSX, ReactElement } from "react";
import { useCurrentRoute } from "../../../routes";
import { useSiteStore } from "../../../store";

const messages = defineMessages({
  dashboard: {
    id: "dashboard",
    defaultMessage: "Dashboard",
  },
  jackpot: {
    id: "jackpot",
    defaultMessage: "Jackpot",
  },
  specialDrawDate: {
    id: "specialDrawDate",
    defaultMessage: "Special Draw Date",
  },
  fourDNumberAnalysis: {
    id: "fourDNumberAnalysis",
    defaultMessage: "4D Number Analysis",
  },
  spinMyLuck: {
    id: "spinMyLuck",
    defaultMessage: "Spin My Luck",
  },
  hot4DNumber: {
    id: "hot4DNumber",
    defaultMessage: "Hot 4D Number",
  },
  luckyBook: {
    id: "luckyBook",
    defaultMessage: "Lucky Book",
  },
  entertainment: {
    id: "entertainment",
    defaultMessage: "Entertainment",
  },
  resultTitle: {
    id: "resultTitle",
    defaultMessage: "Result",
  },
  toolboxTitle: {
    id: "toolboxTitle",
    defaultMessage: "Toolbox",
  },
  settingTitle: {
    id: "settingTitle",
    defaultMessage: "Setting",
  },
  installApp: {
    id: "Install App",
    defaultMessage: "Install App",
  },
  darkMode: {
    id: "darkMode",
    defaultMessage: "Dark Mode",
  },
  lightMode: {
    id: "lightMode",
    defaultMessage: "Light Mode",
  },
});

const SideBar = () => {
  const sidebarData: {
    title: string;
    actions: {
      value: {
        id: string;
        defaultMessage: string;
      };
      path: string;
      icon: JSX.Element;
    }[];
  }[] = [
    {
      title: "Result",
      actions: [
        {
          value: messages.dashboard,
          path: "/",
          icon: <DashbaordIcon className="text-[30px]" />,
        },
        {
          value: messages.jackpot,
          path: "/jackpot",
          icon: <DashbaordIcon className="text-[30px]" />,
        },
      ],
    },
    {
      title: "Toolbox",
      actions: [
        {
          value: messages.specialDrawDate,
          path: "/special-date",
          icon: <DashbaordIcon className="text-[30px]" />,
        },
        {
          value: messages.fourDNumberAnalysis,
          path: "/number-analysis",
          icon: <DashbaordIcon className="text-[30px]" />,
        },
        {
          value: messages.spinMyLuck,
          path: "/spin-my-luck",
          icon: <DashbaordIcon className="text-[30px]" />,
        },
        {
          value: messages.hot4DNumber,
          path: "/hot-dddd-num",
          icon: <DashbaordIcon className="text-[30px]" />,
        },
        {
          value: messages.luckyBook,
          path: "/lucky-book",
          icon: <DashbaordIcon className="text-[30px]" />,
        },
      ],
    },
  ];
  const openDrawer = useSiteStore((state) => state.openDrawer);
  const updateDrawer = useSiteStore((state) => state.updateDrawer);

  return (
    <>
      <div className="hidden xl:block">
        <div className="bg-white xl:flex xl:flex-col w-[206px] rounded-r-[50px] pt-[20px] absolute z-[9999] top-0 bottom-0 left-0">
          <SideBarContent sidebarData={sidebarData} />
        </div>
      </div>

      <div
        onClick={() => updateDrawer(!openDrawer)}
        className={`fixed inset-0 z-[9999] block xl:hidden ${
          openDrawer ? "w-full" : `w-0`
        }`}
      >
        <div className="absolute inset-0 bg-black opacity-40" />
        <div
          className={`
        absolute top-0 bottom-0 left-0 w-[280px] bg-white rounded-r-[50px] pt-[20px] h-full
        transition-transform duration-300 transform
        ${openDrawer ? "translate-x-0" : "-translate-x-full"}
        pointer-events-auto
      `}
        >
          <SideBarContent sidebarData={sidebarData} />
        </div>
      </div>
    </>
  );
};

interface SidebarAction {
  name: string;
  icon: ReactElement;
  onClick: () => void;
  isActive: boolean;
}
interface SideBarSectionProps {
  title: string;
  actions: SidebarAction[];
}
const SideBarSection = ({ title, actions }: SideBarSectionProps) => {
  return (
    <>
      <p className="h-[16px] w-full font-bold text-[14px] leading-[16px] items-center pb-[20px] pt-[6px] text-black">
        {title}
      </p>
      {actions.map((action) => {
        const active = action.isActive;
        const navigateSectionClassNames = cs(
          "flex w-full h-[17px] text-[12.38px] leading-[19px] font-medium items-center  py-5 gap-2 rounded-[4px] cursor-pointer",
          active ? "text-[#264CAA]" : "text-[#9E9E9E]"
        );
        return (
          <div onClick={action.onClick} className="relative w-full h-[40px]">
            <div className={navigateSectionClassNames}>
              {action.icon}
              <div className="w-[74%] px-1">
                <p className="text-left text-[12.38px]">{action.name}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const SideBarContent = ({
  sidebarData,
}: {
  sidebarData: {
    title: string;
    actions: {
      value: {
        id: string;
        defaultMessage: string;
      };
      path: string;
      icon: JSX.Element;
    }[];
  }[];
}) => {
  const currentRoute = useCurrentRoute();

  const intl = useIntl();

  const navigate = useNavigate();
  const version = " v3.1.0.5";
  const logoSrc = "https://4dnum.com/assets/logo-223c3117.png";
  const logoTitleSrc = "https://4dnum.com/assets/4dnumText-a6b770e8.svg";

  function toHomePage() {
    navigate("/");
  }

  return (
    <>
      <div className="pl-[25px] relative">
        <div
          onClick={() => {
            toHomePage();
          }}
          className="md:flex flex-row items-center gap-[10px] mb-[20px] cursor-pointer hidden"
        >
          <img
            className="w-[35.6px] rounded-full"
            src={logoSrc}
            alt="4DNum Logo"
          />
          <img src={logoTitleSrc} alt="4DNum" />
        </div>
        {sidebarData.map((data) => (
          <SideBarSection
            key={data.title}
            title={data.title}
            actions={data.actions.map<SidebarAction>((action) => ({
              name: intl.formatMessage(action.value),
              icon: action.icon,
              isActive: currentRoute.path === action.path,
              onClick: () => {
                navigate(action.path);
              },
            }))}
          />
        ))}
      </div>
      <div className="w-[90%] mt-auto">
        <p className="text-center text-gray-400 opacity-50 font-medium my-3">
          {version}
        </p>
      </div>
    </>
  );
};

export default SideBar;
