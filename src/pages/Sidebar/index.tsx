import { useNavigate } from "react-router";
import { defineMessages, useIntl } from "react-intl";
import ChangeLocaleDropDown from "../components/ChangeLocaleDropDown";

const messages = defineMessages({
    dashboard: {
        id: "dashboard",
        defaultMessage: "Dashboard"
    },
    jackpot: {
        id: "jackpot",
        defaultMessage: "Jackpot"
    },
    specialDrawDate: {
        id: 'specialDrawDate',
        defaultMessage: "Special Draw Date",
    },
    fourDNumberAnalysis: {
        id: 'fourDNumberAnalysis',
        defaultMessage: "4D Number Analysis"
    },
    spinMyLuck: {
        id: 'spinMyLuck',
        defaultMessage: 'Spin My Luck'
    },
    hot4DNumber: {
        id: 'hot4DNumber',
        defaultMessage: 'Hot 4D Number',
    },
    luckyBook: {
        id: 'luckyBook',
        defaultMessage: 'Lucky Book'
    },
    entertainment: {
        id: 'entertainment',
        defaultMessage: 'Entertainment'
    },
    resultTitle: {
        id: 'resultTitle',
        defaultMessage: 'Result'
    },
    toolboxTitle: {
        id: 'toolboxTitle',
        defaultMessage: 'Toolbox'
    },
    settingTitle: {
        id: 'settingTitle',
        defaultMessage: 'Setting',
    },
    installApp: {
        id: 'Install App',
        defaultMessage: 'Install App',
    },
    darkMode: {
        id: 'darkMode',
        defaultMessage: 'Dark Mode',
    },
    lightMode: {
        id: 'lightMode',
        defaultMessage: 'Light Mode'
    }
})


interface SideProps {
    name: string;
    onClick: () => void;
}

const SideSection = (props: SideProps) => {
    return (
        <p  onClick={props.onClick}>{props.name}</p>
    )
}

const Sidebar = () => {

    const intl = useIntl();
    let navigate = useNavigate();

    return (
       <section>
        <SideSection onClick={() => navigate('/')} name={intl.formatMessage(messages.dashboard)} />
        <SideSection onClick={() => navigate('/jackpot')} name={intl.formatMessage(messages.jackpot)} />
        <SideSection onClick={() => navigate('/special-date')} name={intl.formatMessage(messages.specialDrawDate)} />
        <SideSection onClick={() => navigate('/number-analysis')} name={intl.formatMessage(messages.fourDNumberAnalysis)} />
        <SideSection onClick={() => navigate('/lucky-book')}  name={intl.formatMessage(messages.luckyBook)}/>
        <SideSection onClick={() => navigate('/hot-dddd-num')}  name={intl.formatMessage(messages.hot4DNumber)} />
        <SideSection onClick={() => navigate('/lucky-book')} name={intl.formatMessage(messages.luckyBook)}  />

        <hr />
        <ChangeLocaleDropDown className="hidden md:block"/>
       </section>
    )
}

export default Sidebar;