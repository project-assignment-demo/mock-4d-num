import { Link } from "react-router";
import LuckyBookSearchSection from "./components/LuckBookSearchBar";
import { useEffect } from "react";
import { useSiteStore } from "../../store";

interface LuckCategory {
  image: string;
  fullInfoImage: string;
  bannerImage: string;
  id: string;
  label: string;
}

export const categories: LuckCategory[] = [
  {
    image:
      "https://share.4dnum.com/assets/lucky-book/TuaPekKongWanNoText.png",
    fullInfoImage:
      "https://share.4dnum.com/assets/lucky-book/TuaPekKongWan.png",
    bannerImage: "https://share.4dnum.com/assets/lucky-book/hoverTPKW.png",
    id: "WZT",
    label: "Tua Pek Kong (Wan) Dictionary",
  },
  {
    image: "https://share.4dnum.com/assets/lucky-book/GuanYinQianNoText.png",
    fullInfoImage:
      "https://share.4dnum.com/assets/lucky-book/GuanYinQian.png",
    bannerImage: "https://share.4dnum.com/assets/lucky-book/hoverGYQ.png",
    id: "GZT",
    label: "Guan Yin Ma Dictionary",
  },
  {
    image:
      "https://share.4dnum.com/assets/lucky-book/TuaPekKongQianNoText.png",
    fullInfoImage:
      "https://share.4dnum.com/assets/lucky-book/TuaPekKongQian.png",
    bannerImage: "https://share.4dnum.com/assets/lucky-book/hoverTPKQ.png",
    id: "QZT",
    label: "Tua Pek Kong (Qian) Dictionary",
  },
];

const LuckyBook = () => {


  const updateLuckyBookSearchCategory = useSiteStore(
    (state) => state.updateLuckyBookSearchCategory
  );

  useEffect(() => {
    // set to all'
    updateLuckyBookSearchCategory("all"); 
  });

  const updateDrawer = useSiteStore(state => state.updateDrawer);

  return (
    <div className="w-full md:w-fit h-full md:h-[calc(-95px-0.5rem+100dvh)] md:max-h-[calc(1345px-0.5rem)] flex flex-col items-center bg-white md:mx-auto md:mt-[65px] xl:mt-[15px] rounded-[10px]">
      <div className="w-full md:w-[760px] h-[150px] md:h-[163px] bg-[rgb(38,76,170)] rounded-t-[0px] md:rounded-t-[12px] rounded-b-[34px] md:pb-[43px] relative flex justify-center items-center">
        <p className="text-center text-white font-[700] text-[22px] md:text-[30px] leading-[26px]">
          Lucky Book
        </p>
        <button onClick={() => updateDrawer(true)} className="absolute top-[20px] left-[20px] md:hidden"> 
          <img src="https://4dnum.com/assets/menu-696a0cd6.svg"/>
        </button>
      </div>
      <div className="flex flex-col w-full md:w-[85%] relative max-w-[700px] rounded-t-[46px] bg-white md:mt-[-30px] md:pt-[100px] px-1 md:px-0">
        <div className="relative md:absolute -top-[20px] left-[50%] -translate-x-[50%] w-[275px] sm:w-[315px] md:w-[400px]">
          <LuckyBookSearchSection />
        </div>

        <div className="flex justify-center items-center gap-2 px-2 md:gap-10 h-fit w-full xl:scale-[0.8]">
          {categories.map((category) => {
            return <LuckCategoryCard category={category} />;
          })}
        </div>
      </div>
    </div>
  );
};

interface LuckCategoryCardProps {
  category: LuckCategory;
}

const LuckCategoryCard = ({ category }: LuckCategoryCardProps) => {
  return (
    <>
      <div className="md:hidden flex flex-col gap-2 w-full items-center">
        <Link to={`/lucky-book-category-list/${category.id.toLowerCase()}`}>
          <div className="flex flex-col w-fit h-fit rounded-[25px] bg-[rgb(38,76,170)] py-4">
            <div className="flex items-center justify-center">
              <img
                className="w-[90%] max-h-[300px]"
                src={category.fullInfoImage}
              />
            </div>
            <p className="text-center mx-auto text-[12px] font-[700] text-[rgb(153,180,248)] px-0.5 min-h-16 w-[90%] mt-[20px]">
              {category.label}
            </p>
            <p className="text-center font-[700] text-[14px] text-[rgb(153,180,248)] text-overflow">
              ({category.id})
            </p>
          </div>
        </Link>

        <Link to={`/lucky-book-category-list/${category.id.toLowerCase()}`}>
          <button className="w-[116px]  h-[40px] rounded-full bg-[rgb(255,184,2)] flex items-center justify-center">
            <p className="text-[rgb(130,39,0)] text-[14px] font-[900] px-2">
              Enter
            </p>
            <img
              className="w-[15px] h-[15px]"
              src={"https://4dnum.com/assets/Icon-8b265033.svg"}
            />
          </button>
        </Link>
      </div>
      <div className="hidden  md:flex flex-col w-full items-center gap-2 group">
        <div className="w-fit md:w-[200px] h-fit md:h-[300px] lg:h-[336px] relative flex justify-center">
          <div className="hidden md:block absolute -bottom-8 md:h-[300px] xl:h-[240px] xl:group-hover:h-[300px] xl:transition-all xl:duration-300 rounded-[35px] bg-[rgb(38,76,170)] md:w-[200px]"></div>
          <Link
            className="absolute -translate-x-1/2 left-1/2"
            to={`/lucky-book-category-list/${category.id.toLowerCase()}`}
          >
            <img
              className="hidden xl:block absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              src={category.bannerImage}
              alt="luckyBookCategoryBanner"
            />
            <div className="md:w-[175px] md:h-[280px] xl:h-[270px] text-[14px]">
              <img
                className="hidden xl:block"
                src={category.image}
                alt="luckyBookCategoryImage"
              />
              <img className="block xl:hidden" src={category.fullInfoImage} />
            </div>
            <p className="text-[14px] leading-[1.5] relative text-center xl:opacity-0 xl:group-hover:opacity-100 xl:-top-8 xl:group-hover:-top-5 font-[700] text-[rgb(153,180,248)] md:mt-[-10px] xl:mt-[25px] md:w-[175px] transition-all duration-300">
              {category.label}
            </p>
            <p className="text-[14px] leading-[1.5] relative text-center xl:opacity-0 xl:group-hover:opacity-100 xl:-top-13 xl:group-hover:-top-10 font-[700] text-[rgb(153,180,248)] md:-mt-[0px] xl:mt-[25px] md:w-[175px] transition-all duration-300">
              {`(${category.id})`}
            </p>
          </Link>
        </div>
        <Link to={`/lucky-book-category-list/${category.id.toLowerCase()}`}>
          <button className="w-[116px] xl:w-[50px] md:w-[116px]  h-[40px] md:h-[50px] xl:group-hover:w-[116px] rounded-full bg-[rgb(255,184,2)] flex items-center justify-center xl:group-hover:justify-between gap-2 mt-[50px] px-4 xl:transition-all xl:duration-300">
            <p className="xl:opacity-0 xl:hidden xl:group-hover:opacity-100 xl:group-hover:block text-[rgb(130,39,0)] text-[22px] font-[900]">
              Enter
            </p>
            <img
              className="w-[20px] h-[20px] xl:w-[30px] xl:h-[30px] xl:group-hover:w-[20px] xl:group-hover:h-[20px]"
              src={"https://4dnum.com/assets/Icon-8b265033.svg"}
            />
          </button>
        </Link>
      </div>
    </>
  );
};

export default LuckyBook;
