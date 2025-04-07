import { HotNumberTableProps } from "./type";

const HotNumberTable = ({ numbers }: HotNumberTableProps) => {
  const headers = ["No.", "4D NUMBERS", "WIN TIMES"];

  return (
    <div className="w-full">
      <table className="table-auto w-full border border-[rgb(233,232,232)] rounded-lg">
        <thead className="rounded-lg">
          <tr className="rounded-lg bg-[rgb(255,184,2)]">
            {headers.map((header) => {
              return (
                <th className="px-4 py-1 text-sm text-[rgb(130,39,0)]">
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        {Array.isArray(numbers) && (
          <tbody>
            {numbers.map((number, index) => {
              return (
                <tr className="border-b border-[rgb(233,232,232)] bg-white">
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{number.num}</td>
                  <td className="text-center"> {number.total} </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      <div className="flex justify-center items-center">
        <p className="text-center">Please select type and year</p>
      </div>
    </div>
  );
};

export default HotNumberTable;
