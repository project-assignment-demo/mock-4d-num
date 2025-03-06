import { useLocation, useNavigate } from "react-router";
import { defineMessages, useIntl } from "react-intl";
import ChangeLocaleDropDown from "../components/LocaleDropDownButton";
import { PropsWithChildren, ReactElement } from "react";
import { MdDashboard } from "react-icons/md";
import cs from "classnames";

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

interface SidebarSectionProps extends PropsWithChildren {
  title: string;
}

const SidebarSection = (props: SidebarSectionProps) => {
  return (
    <div>
      <p className="font-bold text-md ml-2">{props.title}</p>
      {props.children}
    </div>
  );
};

interface SidebarAction {
  name: string;
  icon: ReactElement;
  onClick: () => void;
  isActive?: boolean;
}

const SidebarAction = (props: SidebarAction) => {
  const actionClassName = cs(
    "flex gap-2 items-center p-2 mr-2 rounded-xl cursor-pointer",
    props.isActive ? "bg-[#EDF2F7]" : ""
  );

  const labelClassName = cs(
    "text-sm font-medium",
    props.isActive ? "text-[rgb(38,76,170)]" : ""
  );

  return (
    <div className={actionClassName} onClick={props.onClick}>
      <div className={props.isActive ? "text-[rgb(38,76,170)]" : ""}>
        {props.icon}
      </div>
      <p className={labelClassName}>{props.name}</p>
    </div>
  );
};

const Sidebar = () => {
  const intl = useIntl();
  let navigate = useNavigate();
  const location = useLocation();

  const sidebarData = [
    {
      title: "Result",
      actions: [
        {
          value: messages.dashboard,
          path: "/",
          icon: () => {
            return <MdDashboard className="text-[30px]" />;
          },
        },
        {
          value: messages.jackpot,
          path: "/jackpot",
          icon: () => {
            return <MdDashboard className="text-[30px]" />;
          },
        },
      ],
    },
    {
        title: "Toolbox",
      actions: [
        {
          value: messages.specialDrawDate,
          path: "/special-date",
          icon: () => {
            return <MdDashboard className="text-[30px]" />;
          },
        },
        {
          value: messages.fourDNumberAnalysis,
          path: "/number-analysis",
          icon: () => {
            return <MdDashboard className="text-[30px]" />;
          },
        },
        {
          value: messages.spinMyLuck,
          path: "/spin-my-luck",
          icon: () => {
            return <MdDashboard className="text-[30px]" />;
          },
        },
        {
          value: messages.hot4DNumber,
          path: "/hot-dddd-num",
          icon: () => {
            return <MdDashboard className="text-[30px]" />;
          },
        },
        {
          value: messages.luckyBook,
          path: "/lucky-book",
          icon: () => {
            return <MdDashboard className="text-[30px]" />;
          },
        },
      ],
    },
  ];

  const sideNavData = sidebarData.map((section) => ({
    ...section,
    actions: section.actions.map((action) => ({
      ...action,
      value: intl.formatMessage(action.value),
    })),
  }));

  return (
    <section className="bg-white h-full rounded-r-[35px] w-full px-4">
      {/* Result section */}

      {sideNavData.map((section) => {
        const actions = section.actions;
        return (
          <SidebarSection title={section.title}>
            {actions.map((action) => {
              const isActive = location.pathname === action.path;

              return (
                <SidebarAction
                  onClick={() => navigate(action.path)}
                  icon={action.icon()}
                  name={action.value}
                  isActive={isActive}
                />
              );
            })}
          </SidebarSection>
        );
      })}


      {/* <SideSection onClick={() => navigate('/')} name={intl.formatMessage(messages.dashboard)} />
        <SideSection onClick={() => navigate('/jackpot')} name={intl.formatMessage(messages.jackpot)} />
        <SideSection onClick={() => navigate('/special-date')} name={intl.formatMessage(messages.specialDrawDate)} />
        <SideSection onClick={() => navigate('/number-analysis')} name={intl.formatMessage(messages.fourDNumberAnalysis)} />
        <SideSection onClick={() => navigate('/lucky-book')}  name={intl.formatMessage(messages.luckyBook)}/>
        <SideSection onClick={() => navigate('/hot-dddd-num')}  name={intl.formatMessage(messages.hot4DNumber)} />
        <SideSection onClick={() => navigate('/lucky-book')} name={intl.formatMessage(messages.luckyBook)}  />

        <hr />
        <ChangeLocaleDropDown className="hidden md:block"/> */}
    </section>
  );
};

export default Sidebar;
