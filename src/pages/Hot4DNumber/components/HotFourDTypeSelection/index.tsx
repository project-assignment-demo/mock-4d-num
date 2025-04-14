import { useState } from "react";
import HotFourDSelectionWrapper from "../HotFourDSelectionWrapper";
import type { FourDTypesSelectionProps } from "./type";

const FourDTypesSelection = ({
  items,
  title,
  onUpdateSelectedFourD,
}: FourDTypesSelectionProps) => {
  const [selectedId, updateSelectedId] = useState<string | null>(null);
  return (
    <HotFourDSelectionWrapper title={title}>
      <div>
        {items.map((item) => (
          <div
            onClick={() => {
              updateSelectedId(item.id);
              onUpdateSelectedFourD(item.id);
            }}
            key={item.id}
            className="p-2"
          >
            <div className="flex flex-row items-center gap-2  w-[256px]">
              <img className="w-[35px] h-[35px] md:w-[40px] md:h-[40px]" src={item.source} />
              <p className="text-[14px]"> {item.label}</p>
              <div className="flex-1 basis-0 place-self-stretch"></div>
              <input type="radio" checked={item.id === selectedId} />
            </div>
          </div>
        ))}
      </div>
    </HotFourDSelectionWrapper>
  );
};

export default FourDTypesSelection;
