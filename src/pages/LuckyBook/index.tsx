import { useNavigate } from "react-router";

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
      image:
        "https://share.4dnum.com/assets/lucky-book/GuanYinQian.png",
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

  return <div className="w-full h-full bg-red-200">
    <div className="flex justify-center items-center gap-10">
        {
            books.map(book => {
                return (
                    <div onClick={() => navigate(`/lucky-book-category-list/${book.id.toLowerCase()}`)} className="w-[200px] h-[336px] bg-blue-400">
                        <img src={book.image} alt="" />
                        <p>{book.label}</p>
                        <p>{book.id}</p>
                    </div>
                )
            })
        }
    </div>
  </div>;
};

export default LuckyBook;
