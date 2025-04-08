import { useNavigate } from "react-router";
import LuckyBookSearchSection from "./components/LuckBookSearchBar";

interface LuckBookItem {
  image: string;
  activeImage: string;
  id: string;
  label: string;
}

const LuckyBook = () => {
  const books: LuckBookItem[] = [
    {
      image:
        "https://share.4dnum.com/assets/lucky-book/TuaPekKongWanNoText.png",
      activeImage: "https://share.4dnum.com/assets/lucky-book/hoverTPKW.png",
      id: "WZT",
      label: "Tua Pek Kong (Wan) Dictionary",
    },
    {
      image: "https://share.4dnum.com/assets/lucky-book/GuanYinQian.png",
      activeImage: "https://share.4dnum.com/assets/lucky-book/hoverGYQ.png",
      id: "GZT",
      label: "Guan Yin Ma Dictionary",
    },
    {
      image:
        "https://share.4dnum.com/assets/lucky-book/TuaPekKongQianNoText.png",
      activeImage: "https://share.4dnum.com/assets/lucky-book/hoverTPKQ.png",
      id: "QZT",
      label: "Tua Pek Kong (Qian) Dictionary",
    },
  ];

  const navigate = useNavigate();

  // return <div className="w-full h-full bg-red-200">
  //   <LuckyBookSearchSection type="all"/>
  //   <div className="flex justify-center items-center gap-10">
  //       {
  //           books.map(book => {
  //               return (
  //                   <div onClick={() => navigate(`/lucky-book-category-list/${book.id.toLowerCase()}`)} className="w-[200px] h-[336px] bg-blue-400">
  //                       <img src={book.image} alt="" />
  //                       <p>{book.label}</p>
  //                       <p>{book.id}</p>
  //                   </div>
  //               )
  //           })
  //       }
  //   </div>
  // </div>;

  return (
    <div className="w-fit h-[calc(-95px-0.5rem+100dvh)] max-h-[calc(1345px-0.5rem)] flex flex-col items-center bg-white mx-auto mt-[65px] xl:mt-[15px] rounded-[10px]">
      <div className="w-full md:w-[760px] 2xl:w-[900px] h-[150px] md:h-[163px] bg-[rgb(38,76,170)] rounded-t-[0px] md:rounded-t-[12px] rounded-b-[34px] md:pb-[43px] relative flex justify-center items-center">
        <p className="text-center text-white font-[700] text-[22px] md:text-[30px] leading-[26px]">
          Lucky Book
        </p>
      </div>
      <div className="flex w-[85%] relative max-w-[700px] rounded-t-[46px] bg-white md:mt-[-30px] md:pt-[100px]">
        <div className="bg-blue-400 relative md:absolute -top-[20px] left-[50%] -translate-x-[50%] w-[275px] sm:w-[315px] md:w-[400px]">
          <LuckyBookSearchSection type="all" />
        </div>
        <div className="flex justify-center items-center gap-10 h-fit w-full">
          {books.map((book) => {
            return (
              <div
                onClick={() =>
                  navigate(`/lucky-book-category-list/${book.id.toLowerCase()}`)
                }
                className="relative w-[200px] h-[300px]"
              >
                <img src={book.image} alt="" />
                  <p>{book.label}</p>
                  <p>{book.id}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LuckyBook;
