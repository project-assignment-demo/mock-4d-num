import { FormEvent, useState } from "react";
import { NumberAnalysisSearchProps } from "./type";

const NumberAnalysisSearch = ({
    onSearchKeywordCompleted,
  }: NumberAnalysisSearchProps) => {
    const handleInput = (e: FormEvent<HTMLInputElement>) => {
      const formattedValue = e.currentTarget.value
        .replace(/[^0-9]/g, "")
        .slice(0, 4);
      setValue(formattedValue);
    };
  
    const handleSubmitSearch = () => {
      if (value.length !== 4) {
        setErrorMessage("* 4 Digits required (ex: 2020)");
        return;
      }
      setErrorMessage(null);
      onSearchKeywordCompleted(value);
    };
  
    const [value, setValue] = useState("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
    return (
      <div className="flex flex-col">
        <div className="flex">
          <input value={value} type="text" onInput={handleInput} />
          <button className="bg-blue-200 p-[10px]" onClick={handleSubmitSearch}>
            Search
          </button>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  };

  export default NumberAnalysisSearch;