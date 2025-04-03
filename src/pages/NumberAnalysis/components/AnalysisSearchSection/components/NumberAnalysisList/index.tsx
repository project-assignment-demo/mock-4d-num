import { NumberAnalysisListProps } from "./type";

const NumberAnalysisList = ({
  items,
  onUpdateItems,
}: NumberAnalysisListProps) => {
  const isSelectedAll = items.every((item) => item.selected);
  const selectOptionLabel = isSelectedAll ? "Deselect All" : "Select All";

  return (
    <div className="flex flex-col w-[200px]">
      <div className="flex w-full justify-end">
        <div
          onClick={() =>
            onUpdateItems(
              isSelectedAll
                ? items.map((item) => ({ ...item, selected: false }))
                : items.map((item) => ({ ...item, selected: true }))
            )
          }
        >
          {selectOptionLabel}
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        {items.map((item, index) => {
          return (
            <div key={item.id} className="flex justify-between">
              <div className="flex items-start">
                <img className="w-[25px]" src={item.source} />
                <p>{item.label}</p>
              </div>
              <input
                type="checkbox"
                checked={item.selected}
                onChange={(e) => {
                  const updatedItems = [...items];
                  updatedItems[index] = { ...item, selected: e.target.checked };
                  onUpdateItems(updatedItems);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NumberAnalysisList;
