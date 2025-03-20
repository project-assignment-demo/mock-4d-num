import { PropsWithChildren, useState } from "react";
import { SupportLocales, useSiteStore } from "../../../store";
import cs from 'classnames';
import { CircleFlag } from 'react-circle-flags';
import { FaChevronDown } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';


function getLanguage(locale: SupportLocales) {
    switch (locale) {
        case 'en':
            return 'English';
        case 'ms':
            return 'Malay';
        case 'zh':
            return '简体中文';

    }
}

function getCountryCode(locale: SupportLocales) {
    switch (locale) {
        case 'en':
            return 'uk';
        case 'ms':
            return 'my';
        case 'zh':
            return 'cn';

    }
}

interface LanguageSectionProps extends React.PropsWithChildren {
    onChangeLocale: (locale: SupportLocales) => void;
    locale: SupportLocales;
}

const LanguageSection = (props: LanguageSectionProps) => {
    const selectedLocale = useSiteStore(state => state.locale);
    const isCurrentLocale = selectedLocale === props.locale;
    const currentClassName = cs(isCurrentLocale ? 'text-purple-500': '');
    return (
        <div className="p-[4px] flex justify-between items-center cursor-pointer" onClick={ () =>  props.onChangeLocale(props.locale) }>
            <p className={currentClassName }>{props.children}</p>
            <div>
            { isCurrentLocale && <MdDone className="text-purple-500" />}
            </div>
        </div>
    );
}

const ChangeLocaleDropDown = (props: PropsWithChildren & { className?: string, showLabel?: boolean }) => {

    const onChangeLocale = (locale: SupportLocales) => {
        updateLocale(locale);
        updateOpen(false);
    }
    const [open, updateOpen] = useState(false);
    const updateLocale = useSiteStore(state => state.updateLocale);
    const selectedLocale = useSiteStore(state => state.locale);
    const classname = cs('flex flex-col items-end gap-1.5');
    const selectionClassName = cs(open ? 'block' : 'hidden', 'bg-white p-[6px] rounded-md w-[100px]')
    const rotateClassName = cs(open ? 'rotate-180' : 'rotate-0', 'transform transition-transform duration-300')
    return (
      
        <div className={classname}>
            {/* picker box */}
            <div className="bg-white p-[6px] rounded-md flex justify-between items-center gap-1.5 drop-shadow-md" onClick={() => updateOpen(!open)}>
                {/* {selectedLocale} */}
                <CircleFlag countryCode={getCountryCode(selectedLocale)} className="w-[20px]" />
                 {props.showLabel && <p>{getLanguage(selectedLocale)}</p>} 
                <FaChevronDown className={rotateClassName} />
            </div>
            <div className={selectionClassName}>
                <LanguageSection onChangeLocale={onChangeLocale} locale="en">
                    {'English'}
                </LanguageSection>
                <LanguageSection onChangeLocale={onChangeLocale} locale="zh">
                    {'简体中文'}
                </LanguageSection>
                <LanguageSection onChangeLocale={onChangeLocale}  locale="ms">
                    {'Malay'}
                </LanguageSection>


            </div>
        </div>
    );
}

export default ChangeLocaleDropDown;