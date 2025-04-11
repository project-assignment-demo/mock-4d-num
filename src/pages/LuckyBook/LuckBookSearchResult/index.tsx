import { useSearchParams } from "react-router";
import LuckyBookContainer from "../components/LuckyBookContainer";
import LuckyBookSearchResultContent from "./components/LuckyBookSearchResultContent";
import LuckyBookSearchResultAction from "./components/LuckyBookSearchResultAction";
import { useState } from "react";

const LuckyBookSearchResult = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("query");

  const [totalResult, updateTotalResult] = useState<number | null>(null);

  if (!keyword) return null;

  return (
    <div className="flex w-full items-center justify-center">
      <LuckyBookContainer
        title="Dictionary"
        action={
          <LuckyBookSearchResultAction
            keyword={keyword}
            totalResult={totalResult}
          />
        }
      >
        <LuckyBookSearchResultContent
          keyword={keyword}
          onUpdateResult={(results) => updateTotalResult(results.length)}
        />
      </LuckyBookContainer>
    </div>
  );
};

export default LuckyBookSearchResult;
