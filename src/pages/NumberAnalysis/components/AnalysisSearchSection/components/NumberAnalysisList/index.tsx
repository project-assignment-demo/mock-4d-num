import HotFourDFilterSwitch from "../../../../../Hot4DNumber/components/HotFourDFilterSwitch";
import { NumberAnalysisListProps } from "./type";
import cs from "classnames";

const NumberAnalysisList = ({
  items,
  onUpdateItems,
}: NumberAnalysisListProps) => {
  const isSelectedAll = items.every((item) => item.selected);
  const selectOptionLabel = isSelectedAll ? "Deselect All" : "Select All";

  const selectIcon =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFoSURBVHgB7VQ9TgJBFH5vZkwsLLyBNBpio5xA7TFZGyIV7AnUEwA3gBMAFZGKxJ8WjmBlMDZ7hDWCMTAzz501m7Bkl50o5X7NZDNvvu9975sdgBw5/gu0LSyWB+ca+A0i+FxB5/W58mJzLlPAEBOIxm+xbJl19Xv6WJ38SaB4OawTYQ2QPOSqNR1Vvdi+MyhoxZpAeEIInfeHSs9a4NAZnoKE7lLML7yR68MGHAe1UsJ4IVTJW2siVcDgqHzfJGBny9nsypu4vnGkNYSjIQYt03HoYsnHCLrz9nTdBlsHq4hlIKQbCkjRNSvXdJcVNloRJ4QZOUIGk6SMNgpE1hkqN+uWhEIAjcXnvGRGub7Pkg59w25YSMhrRgzSyIO98KYRfSSRpzqIdWeCRewxIfvRGApOd39H7TVQkxMFnsaRHbIZl2T1wE7NkCHhQdBxPfg/+gvx1c66xvZPRSCkJL9FIN+GOEeO7eEHSXq4HPSvSS8AAAAASUVORK5CYII=";
  const selectClassnames = cs(
    "flex justify-center items-center transform transition duration-300 ease-in-out",
    isSelectedAll ? "rotate-180" : "rotate-0"
  );

  return (
    <div className="bg-[rgb(248,248,248)] rounded-[35px] border-none relative cursor-pointer">
      <div className="flex flex-col mx-3 py-2 overflow-y-auto">
        <u
          onClick={() =>
            onUpdateItems(
              isSelectedAll
                ? items.map((item) => ({ ...item, selected: false }))
                : items.map((item) => ({ ...item, selected: true }))
            )
          }
          className="flex justify-center items-center transform transition duration-300 ease-in-out absolute top-4 right-4 rounded-md bg-[#EDF2F7] text-[rgb(38,76,170)] px-2 text-xs min-w-4 height-4 font-medium"
        >
          <img className={selectClassnames} src={selectIcon} />
          {selectOptionLabel}
        </u>
        <div className="mt-6">
          {items.map((item, index) => {
            return (
              <div key={item.id} className=" pl-[20px] pt-[5px] my-[8px]">
                <div className="flex relative -left-[15px] w-full h-[19px] font-medium text-[13px] leading-[19px] items-center text-black mt-2 mb-2 ">
                  <img className="w-[25px]" src={item.source} />
                  <p className="text-sm font-medium leading-[19px] text-black ml-2 flex-grow">
                    {item.label}
                  </p>
                  <HotFourDFilterSwitch
                    className="scale-[0.8]"
                    checked={item.selected}
                    onChange={(val) => {
                      const updatedItems = [...items];
                      updatedItems[index] = {
                        ...item,
                        selected: val,
                      };
                      onUpdateItems(updatedItems);
                    }}
                    disabled={false}
                  />
                </div>
                {/* <div className="flex items-start">
                  <img className="w-[25px]" src={item.source} />
                  <p>{item.label}</p>
                </div>
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={(e) => {
                    const updatedItems = [...items];
                    updatedItems[index] = {
                      ...item,
                      selected: e.target.checked,
                    };
                    onUpdateItems(updatedItems);
                  }}
                /> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NumberAnalysisList;
