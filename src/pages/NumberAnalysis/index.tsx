import { useEffect, useState } from "react";
import { getFourDNumberAnalysisResult } from "../../api/numberAnalysis";
import { FourDNumberAnalysisResult } from "../../api/numberAnalysis/type";

const NumberAnalysis = () => {
  const [keyword] = useState(localStorage.getItem("number"));

  const [analysisData, setAnalysisData] =
    useState<FourDNumberAnalysisResult | null>(null);

  useEffect(() => {
    getFourDNumberAnalysisResult({
      analysisNumber: "1234",
      analysisCategories: [
        "M",
        "PMP",
        "ST",
        "SG",
        "CS",
        "STC",
        "EE",
        "H",
        "WB",
        "P",
      ],
    }).then((result) => {
      setAnalysisData(result);
    });
  }, [keyword]);

  return (
    <div>
      {!keyword && <NumberAnalysisSearch />}
      {keyword && <div>{analysisData && JSON.stringify(analysisData)}</div>}
    </div>
  );
};

const NumberAnalysisSearch = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <div>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <button
        onClick={async () => {
          localStorage.setItem("number", JSON.stringify(keyword));
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Button
      </button>
    </div>
  );
};

export default NumberAnalysis;
