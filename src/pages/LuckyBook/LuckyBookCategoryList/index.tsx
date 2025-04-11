import BackArrow from "../../../assets/backArrow.svg?react";
import { useEffect} from "react";

import { useNavigate, useParams } from "react-router";

import {
  LuckyBookSearchCategories,
  LuckyBookSearchCategory,
  useSiteStore,
} from "../../../store";
import LuckyBookContainer from "../components/LuckyBookContainer";
import LuckyBookAction from "./components/LuckyBookAction";
import LuckyBookContent from "./components/LuckyBookContent";

const LuckyBookCategoryList = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const resetLuckyBookFilterPointer = useSiteStore(
    (state) => state.resetLuckyBookFilterPointer
  );

  const updateLuckyBookSearchCategory = useSiteStore(
    (state) => state.updateLuckyBookSearchCategory
  );

  if (!id) {
    navigate("/unknown");
  }

  useEffect(() => {
    if (LuckyBookSearchCategories.includes(id as any)) {
      updateLuckyBookSearchCategory(id as LuckyBookSearchCategory);
    }

    return () => {
      resetLuckyBookFilterPointer();
    };
  });

  return (
    <div className="flex w-full items-center justify-center">
      <LuckyBookContainer
        title="Tua Pek Kong (Wan) Dictionary"
        action={<LuckyBookAction />}
        navIcon={<LuckyBookNavIcon />}
      >
        <LuckyBookContent id={id!} />
      </LuckyBookContainer>
    </div>
  );
};


const LuckyBookNavIcon = () => {
  const navigate = useNavigate();

  function toBack() {
    navigate("/lucky-book");
  }
  return (
    <button
      className=" w-[34px] h-[34px] rounded-full flex justify-center items-center bg-[rgb(241,241,241)] md:hidden"
      onClick={toBack}
    >
      <BackArrow />
    </button>
  );
};

export default LuckyBookCategoryList;
