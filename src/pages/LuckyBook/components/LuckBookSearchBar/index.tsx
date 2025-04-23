import { useState } from "react";
import Search from "./icon/search.svg?react";
import { useNavigate } from "react-router";
const LuckyBookSearchSection = () => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/lucky-book-search-result?query=${value}`);
      }}
      className="flex flex-row h-[40px] w-full max-w-[400px] gap-[4px]"
    >
      <div className="w-full relative bg-transparent rounded-[10px] shadow-[0px_1px_6px_rgba(0,_0,_0,_0.15)] flex-grow-1">
        {/* <CiSearch /> */}
        <input
          className="w-full h-10 bg-white pl-10 pr-4 min-w-[0px] outline-transparent border  border-transparent rounded-md"
          type="text"
          name=""
          placeholder="e.g. 1001 or sky"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div className="absolute left-[0px] w-10 h-10 flex items-center justify-center top-0 z-2 pointer-events-none">
          <Search />
        </div>
      </div>
      <button
        disabled={!value.length}
        className="h-full min-w-fit disabled:cursor-not-allowed text-white bg-[rgb(38,76,170)] disabled:bg-[rgb(206,206,206)] border border-[rgb(206,206,206)] rounded-[5px] px-[10px] py-[4px] text-[14px] shadow-[rgba(0,0,0,0.15)_0px_1px_6px]"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default LuckyBookSearchSection;
