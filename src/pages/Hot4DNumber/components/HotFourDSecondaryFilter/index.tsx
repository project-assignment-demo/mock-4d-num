import HotFourDFilterSwitch from "../HotFourDFilterSwitch";
import { HotFourDNumberSecondaryFilterProps } from "./type";

const HotFourDNumberSecondaryFilter = ({
  checked,
  onChange,
  disabled,
  label,
  Icon,
}: HotFourDNumberSecondaryFilterProps) => {
  return (
    <div className="flex p-2 items-center">
      {typeof Icon === "string" ? (
        <img className="w-[17px] h-[17px] md:w-[22px] md:h-[22px] mr-[5px]" src={Icon} />
      ) : (
        <Icon className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] leading-4 mr-[7px] text-[rgb(38,76,170)]" />
      )}

      <p className="text-left mr-[30px] font-semibold text-[14px] md:text-[15px]">
        {label}
      </p>
      <HotFourDFilterSwitch
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default HotFourDNumberSecondaryFilter;
