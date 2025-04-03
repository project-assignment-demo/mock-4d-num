import { HotNumberTableProps } from "./type";

const HotNumberTable = ({ numbers }: HotNumberTableProps) => {
  const headers = ["No.", "4D NUMBERS", "WIN TIMES"];

  return (
    <div className="w-full">
      <table>
        <thead>
          <tr>
            {headers.map((header) => {
              return <th>{header}</th>;
            })}
          </tr>
        </thead>
        {Array.isArray(numbers) && (
          <tbody>
            {numbers.map((number, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{number.num}</td>
                  <td> {number.total} </td>
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
