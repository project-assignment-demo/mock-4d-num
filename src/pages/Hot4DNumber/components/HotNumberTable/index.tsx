import { HotNumberTableProps } from "./type";

const HotNumberTable = ({
  numbers,
  selectedType,
  selectedYear,
}: HotNumberTableProps) => {
  const headers = ["No.", "4D NUMBERS", "WIN TIMES"];

  return (
    <div className="w-full h-full relative">
      <table className="table-auto w-full border border-[rgb(233,232,232)] rounded-lg">
        <thead className="rounded-lg sticky top-[0px]">
          <tr className="rounded-lg bg-[rgb(255,184,2)]">
            {headers.map((header) => {
              return (
                <th className="px-4 py-1 text-sm 2xl:text-xl text-[rgb(130,39,0)]">
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        {Array.isArray(numbers) && (
          <tbody className=" overflow-y-scroll">
            {numbers.map((number, index) => {
              return (
                <tr className="border-b border-[rgb(233,232,232)] bg-white">
                  <td className="text-center font-bold text-[16px] 2xl:text-[18px] 2xl:px-6 2xl:py-4">
                    {index + 1}
                  </td>
                  <td className="text-center font-bold text-[16px] 2xl:text-[18px] 2xl:px-6 2xl:py-4">
                    {number.num}
                  </td>
                  <td className="text-center font-bold text-[16px] 2xl:text-[18px] 2xl:px-6 2xl:py-4">
                    {" "}
                    {number.total}{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      {!Boolean(numbers && numbers.length > 0) && (
        <div className="flex justify-center items-center">
          <p className="text-center">
            {!selectedType && !selectedYear
              ? "Please select type and year"
              : !selectedType
              ? "Please select type"
              : !selectedYear
              ? "Please select year"
              : null}
          </p>
        </div>
      )}
    </div>
  );
};

export default HotNumberTable;
