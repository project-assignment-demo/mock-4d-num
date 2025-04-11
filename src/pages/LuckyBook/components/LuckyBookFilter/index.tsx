import {
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Filter from "../../../../assets/Filter.svg?react";

import cs from "classnames";
import { useSiteStore } from "../../../../store";

const LuckyBookFilter = (props: {onSelected?: (value: LuckyBookFilterData) => void}) => {
  return (
    <div className="flex flex-row items-center gap-2 text-[rgb(165,165,165)]">
      <Filter className="w-5 h-5 leading-4" />
      <LuckyBookFilterDropDown onSelected={props.onSelected} />
    </div>
  );
};

interface FourDDropDownProps extends PropsWithChildren {
    onSelected?: (value: LuckyBookFilterData) => void;
}

export interface LuckyBookFilterData {
  start: number;
  index: number;
  end: number;
}

const LuckyBookFilterDropDown = ({
    onSelected
}: FourDDropDownProps) => {
  const filterDatas = useMemo(() => {
    return generateFilterData();
  }, []);

  const [open, setOpen] = useState(false);

  const luckyBookFilterPointer = useSiteStore(state => state.luckyBookFilterPointer)
  const updateLuckyBookFilterPointer = useSiteStore(state => state.updateLuckyBookFilterPointer);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const dropdownClassnames = cs(
    "absolute z-[10] left-1/2 top-full mt-2 w-[150px] max-h-[420px] bg-green-300 overflow-y-auto border border-gray-400 shadow-lg rounded transform -translate-x-1/2",
    {
      block: open,
      hidden: !open,
    }
  );

  function format4Digit(source: number) {
    return source.toString().padStart(4, "0");
  }

  return (
    <div className="flex flex-col items-center relative cursor-pointer">
      <div className="relative group">
        <div ref={buttonRef} className="w-[120px] min-h-[32px] flex justify-center items-center">
          <p onClick={handleToggle}>
            {format4Digit(luckyBookFilterPointer.start)} -{" "}
            {format4Digit(luckyBookFilterPointer.end)}
          </p>
        </div>

        <div ref={dropdownRef} className={dropdownClassnames}>
          <div className="p-2 space-y-2">
            {filterDatas.map((data) => {
              return (
                <p
                  onClick={() => {
                    updateLuckyBookFilterPointer(data);
                    onSelected?.(data)
                    handleClose();
                  }}
                >
                  {format4Digit(data.start)} - {format4Digit(data.end)}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

function generateFilterData(): LuckyBookFilterData[] {
  const dataLength = 10000;
  const singleGapQuantity = 500;
  const totalGap = dataLength / singleGapQuantity;
  return Array.from({ length: totalGap }).map((_, index) => {
    const start = index * singleGapQuantity;
    const end = start + singleGapQuantity - 1;
    return {
      start,
      index,
      end,
    };
  });
}

export default LuckyBookFilter;
