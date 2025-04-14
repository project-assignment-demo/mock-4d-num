import HotFourDSelectionWrapper from "../HotFourDSelectionWrapper";
import { HotFourDYearSelectionProps } from "./type";

const FourDYearSelection = ({
  items,
  title,
  onUpdateSelectedYear,
}: HotFourDYearSelectionProps) => {
  return (
    <HotFourDSelectionWrapper title={title}>
      {items.map((item) => (
        <div
          onClick={() => onUpdateSelectedYear(item)}
          key={item}
          className="p-2"
        >
          {item}
        </div>
      ))}
    </HotFourDSelectionWrapper>
  );
};

export default FourDYearSelection;
