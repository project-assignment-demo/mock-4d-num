import LuckyBookSearchSection from "../../LuckyBook/components/LuckBookSearchBar";
import LuckyBookFilter from "../../LuckyBook/components/LuckyBookFilter";

const Nav = () => {


// bg-[rgb(243,243,243)]
  return (
    <div className="hidden bg-red-300 w-full lg:max-w-[1250px] md:flex md:items-center md:justify-between xl:left-[206px] xl:w-[calc(100%-206px)] xl:max-w-none xl:pl-5  absolute z-[9998] top-[0px] left-[0px] px-2 gap-4 h-[65px]">
      <LuckyBookSearchSection/>
      <LuckyBookFilter/>
    </div>
  );
};

export default Nav;
