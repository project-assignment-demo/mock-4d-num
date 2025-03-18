interface JackpotHeaderProps {
  title: string;
  logo: string;
}

const JackpotHeader = ({ title, logo }: JackpotHeaderProps) => {
  return (
    <div className="mb-[80px] h-[170px] w-full bg-black rounded-b-2xl rounded-t-[25px] relative">
      <div className="flex flex-col justify-start mt-[15px]">
        <div className="flex justify-center items-center">
          <div className="w-[70px] h-[70px] bg-white rounded-full p-1">
            <img src={logo} alt="" />
          </div>
        </div>
        <p className="text-center text-white font-bold my-1">{title}</p>
      </div>
      <div className="px-5 mt-[-50px] absolute top-[180px] z-10 w-full">
        <div className="rounded-lg shadow-md bg-white w-full">
          <div className=" flex items-center justify-center p-2 h-full">
            <div className="flex-1 w-full h-full">
              <p className="text-center font-extralight text-[12px]">Date</p>
              <p className="text-center font-bold">2025-03-17</p>
              <p className="text-center font-bold">(Mon)</p>
            </div>
            <div className="h-[40%] border-l border-gray-300"></div>

            <div className="flex-1 w-full h-full flex flex-col">
              <p className="text-center font-extralight text-[12px]">
                Draw No.
              </p>
              <p className="flex-grow text-center font-bold">177/25</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JackpotHeader;
