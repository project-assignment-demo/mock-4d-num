import { FormEvent, useMemo, useState } from "react";
import { NumberAnalysisSearchProps } from "./type";
import Search from "../../../../../../assets/search.svg?react";
import Wrong from "../../../../../../assets/wrong.svg?react";

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

  const handleResetKeyword = () => {
    setValue("");
  };

  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isValidSearch = useMemo(() => {
    return value.length === 4;
  }, [value]);

  return (
    <div className="flex flex-col">
      <div className="flex gap-1 items-center">
        <div className="flex w-full relative">
          <div className="flex items-center justify-center w-8 h-8 absolute top-0 left-0 z-2">
            <Search className="w-4 h-4 leading-4 text-[rgb(178,178,178)]" />
          </div>
          <div className="w-full relative z-0">
            <input
              value={value}
              onInput={handleInput}
              type="text"
              placeholder="Number"
              className="w-full min-w-0 h-8 px-8 relative appearance-none outline-2 outline-transparent focus-visible:outline-1 focus-visible:outline-[rgb(38,76,170)] transition-all duration-200 text-sm bg-white border-[0.5px] border-[rgb(165,165,165)] rounded-[8px] text-left"
            />
          </div>
          <div className="flex items-center justify-center w-8 h-8 absolute top-0 right-0 z-2">
            <button
              type="button"
              onClick={handleResetKeyword}
              className="w-3 h-3 flex justify-center items-center"
            >
              <Wrong className="w-4 h-4 text-sm text-[rgb(178,178,178)]" />
            </button>
          </div>
        </div>
        <button
          onClick={handleSubmitSearch}
          type="button"
          disabled={!isValidSearch}
          className="cursor-pointer transition-colors duration-200 flex items-center justify-center w-fit min-w-10 h-[32px] text-sm leading-[1.2] font-semibold rounded-[5px] bg-[rgb(38,76,170)] disabled:bg-[rgb(206,206,206)] text-white px-2"
        >
          Search
        </button>
      </div>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default NumberAnalysisSearch;
