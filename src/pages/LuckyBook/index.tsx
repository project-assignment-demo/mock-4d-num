import { Link } from "react-router";
import LuckyBookSearchSection from "./components/LuckBookSearchBar";

interface LuckCategory {
  image: string;
  activeImage: string;
  bannerImage: string;
  id: string;
  label: string;
}

const LuckyBook = () => {
  const categories: LuckCategory[] = [
    {
      image:
        "https://share.4dnum.com/assets/lucky-book/TuaPekKongWanNoText.png",
      activeImage: "https://share.4dnum.com/assets/lucky-book/hoverTPKW.png",
      bannerImage: "https://share.4dnum.com/assets/lucky-book/hoverTPKW.png",
      id: "WZT",
      label: "Tua Pek Kong (Wan) Dictionary",
    },
    {
      image: "https://share.4dnum.com/assets/lucky-book/GuanYinQianNoText.png",
      activeImage: "https://share.4dnum.com/assets/lucky-book/hoverGYQ.png",
      bannerImage: "https://share.4dnum.com/assets/lucky-book/hoverGYQ.png",
      id: "GZT",
      label: "Guan Yin Ma Dictionary",
    },
    {
      image:
        "https://share.4dnum.com/assets/lucky-book/TuaPekKongQianNoText.png",
      activeImage: "https://share.4dnum.com/assets/lucky-book/hoverTPKQ.png",
      bannerImage: "https://share.4dnum.com/assets/lucky-book/hoverTPKQ.png",
      id: "QZT",
      label: "Tua Pek Kong (Qian) Dictionary",
    },
  ];

  return (
    <div className="w-fit h-[calc(-95px-0.5rem+100dvh)] max-h-[calc(1345px-0.5rem)] flex flex-col items-center bg-white mx-auto mt-[65px] xl:mt-[15px] rounded-[10px]">
      <div className="w-full md:w-[760px] 2xl:w-[900px] h-[150px] md:h-[163px] bg-[rgb(38,76,170)] rounded-t-[0px] md:rounded-t-[12px] rounded-b-[34px] md:pb-[43px] relative flex justify-center items-center">
        <p className="text-center text-white font-[700] text-[22px] md:text-[30px] leading-[26px]">
          Lucky Book
        </p>
      </div>
      <div className="flex w-[85%] relative max-w-[700px] rounded-t-[46px] bg-white md:mt-[-30px] md:pt-[100px]">
        <div className="relative md:absolute -top-[20px] left-[50%] -translate-x-[50%] w-[275px] sm:w-[315px] md:w-[400px]">
          <LuckyBookSearchSection type="all" />
        </div>
        <div className="flex justify-center items-center gap-10 h-fit w-full xl:scale-[0.8]">
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
    <div className="flex flex-col w-full items-center gap-2 group">
      {/* content */}
      <div className="w-fit md:w-[200px] h-fit md:h-[300px] lg:h-[336px] relative flex justify-center">
        <div className="absolute -bottom-8 h-[240px] group-hover:h-[300px] transition-all duration-300 rounded-[35px] bg-[rgb(38,76,170)] md:w-[200px]"></div>
        <Link
          className="absolute -translate-x-1/2 left-1/2"
          to={`/lucky-book-category-list/${category.id.toLowerCase()}`}
        >
          <img
            className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            src={category.bannerImage}
            alt="luckyBookCategoryBanner"
          />
          <div className="md:w-[175px] md:h-[280px] xl:h-[270px] text-[14px]">
            <img src={category.image} alt="luckyBookCategoryImage" />
          </div>
          {/* <img className="md:w-[175px] 2xl:w-[216px] md:h-[280px] xl:h-[270px]" src={category.image} /> */}
          <p className="relative text-center opacity-0 group-hover:opacity-100 -top-8 group-hover:-top-5 font-[700] text-[rgb(153,180,248)] md:mt-[15px] xl:mt-[25px] md:w-[175px] transition-all duration-300">
            {category.label}
          </p>
          <p className="relative text-center opacity-0 group-hover:opacity-100 -top-13 group-hover:-top-10 font-[700] text-[rgb(153,180,248)] md:-mt-[30px] xl:mt-[25px] md:w-[175px] transition-all duration-300">
            {`(${category.id})`}
          </p>
        </Link>
      </div>
      {/* button */}
      <Link to={`/lucky-book-category-list/${category.id.toLowerCase()}`}>
        <button className="w-[50px] h-[50px] group-hover:w-[116px] rounded-full bg-[rgb(255,184,2)] flex items-center justify-center group-hover:justify-between group-hover:gap-2 mt-[50px] px-4 transition-all duration-300">
          <p className="opacity-0 hidden group-hover:opacity-100 group-hover:block text-[rgb(130,39,0)] text-[22px] font-[900]">
            Enter
          </p>
          <img
            className="w-[30px] h-[30px] group-hover:w-[20px] group-hover:h-[20px]"
            src={"https://4dnum.com/assets/Icon-8b265033.svg"}
          />
        </button>
      </Link>
    </div>
  );
};

export default LuckyBook;
