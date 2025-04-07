import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";
import { LuckyBookSearchCategory, useSiteStore } from "../../../../store";

interface LuckyBookSearchSectionProps {
  type: LuckyBookSearchCategory;
}

const LuckyBookSearchSection = ({ type }: LuckyBookSearchSectionProps) => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const updateLuckyBookSearchCategory = useSiteStore(
    (state) => state.updateLuckyBookSearchCategory
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateLuckyBookSearchCategory(type);
        navigate(`/lucky-book-search-result?query=${value}`);
      }}
      className="flex flex-row h-[40px] w-[400px] gap-[4px]"
    >
      <div className="w-full flex flex-row items-center">
        <CiSearch />
        <input
          className=""
          type="text"
          name=""
          defaultValue=""
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default LuckyBookSearchSection;
