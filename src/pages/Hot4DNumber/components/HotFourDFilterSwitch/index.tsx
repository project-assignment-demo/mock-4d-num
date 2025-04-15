import { HotFourDFilterSwitchProps } from "./type";
import cs from "classnames";

const HotFourDFilterSwitch = ({
  checked,
  disabled,
  onChange,
}: HotFourDFilterSwitchProps) => {
  const switchLabelClassnames = cs(
    "flex select-none items-center",
    disabled ? "cursor-not-allowed" : "cursor-pointer"
  );

  const switchContainerClassnames = cs(
    `w-7.5 h-4 rounded-full flex box-content p-0.5`,
    checked ? "bg-[#31D94A]" : "bg-[#CBD5E0]",
    disabled ? "cursor-not-allowed" : "cursor-pointer"
  );

  const toggleClassnames = cs(
    "bg-white rounded-full w-4 h-4 transition-transform duration-300",
    checked ? "translate-x-3.5" : ""
  );

  return (
    <label className={switchLabelClassnames}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            if (!disabled) onChange(e.target.checked);
          }}
          disabled={disabled}
          className="sr-only"
        />
        {/* #31D94A */}
        <div className={switchContainerClassnames}>
          <div className={toggleClassnames}></div>
        </div>
      </div>
    </label>
  );
};

export default HotFourDFilterSwitch;
