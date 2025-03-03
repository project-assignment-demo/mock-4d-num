import { PropsWithChildren } from "react";
import { useSettingStore } from "../../../store";

const ChangeLocaleDropDown = (props: PropsWithChildren & {className?: string}) => {

    const updateLocale = useSettingStore(state => state.updateLocale);
    return (
        <div {...props}>
        <p onClick={() => updateLocale('en')} >Change English</p>
        <p onClick={() => updateLocale('ms')} >Change my</p>
        <p onClick={() => updateLocale('zh')} > Change zh</p>
        </div>
    );
}

export default ChangeLocaleDropDown;