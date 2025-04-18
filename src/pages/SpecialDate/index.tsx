import { useSiteStore } from "../../store";
import LuckyBookContainer from "../LuckyBook/components/LuckyBookContainer";

const SpecialDate = () => {

  const updateDrawer = useSiteStore(state => state.updateDrawer);

  return (    
    <div className="w-full max-w-[760px] md:w-fit h-full flex justify-center items-center mx-auto">
      <LuckyBookContainer
        title="Special Date Draw"
        className="bg-white h-full"
        navIcon={
          <button className="md:hidden" onClick={() => updateDrawer(true)}>
            <img src="https://4dnum.com/assets/menu-696a0cd6.svg" />
          </button>
        }
        action={
          <div
            style={{ boxShadow: "0px 3.5px 3px rgba(0, 0, 0, 0.15)" }}
            className="relative -top-10 left-1/2 -translate-x-1/2 w-[85%] rounded-[14px] max-w-[700px]  bg-white font-light text-[12px] md:text-[14px] leading-[20px] text-[rgb(92,92,92)] px-[37px] py-[18px]"
          >
            Special Draws fall on Tuesday and it is indeed special because these
            draws need to be approved and granted by the Government of Malaysia.
            The total number of special draws approved per year now is 8 and one
            of the main reasons for this special draw is to increase government
            coffers.
          </div>
        }
      >
        <SpecialDrawDateBoard />
      </LuckyBookContainer>
    </div>
  );
};

const SpecialDrawDateBoard = () => {
  const specialDrawResults = useSiteStore((state) => state.specialDrawResults);

  return (
    <div className="bg-white w-full h-full">
      <div className="w-[50px] h-[30px] md:h-[35px] flex items-center justify-center rounded-t-[14px] border-[2px] border-[rgb(255,184,2)] bg-[rgb(255,184,2)] mx-auto mt-[10px] relative z-1">
        <img
          src="https://4dnum.com/assets/calendar-9de3d468.svg"
          className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]"
        />
      </div>
      <div className="relative w-[140px] h-9 md:h-10 flex justify-center items-center mx-auto bg-[rgb(38,76,170)] rounded-[49px] z-2">
        <p className="text-white font-[900] leading-[35.16px] md:text-[25px]">
          2025
        </p>
      </div>
      <div className="relative flex items-center justify-center mb-[20px] -top-5">
        <div className="p-[35px] rounded-[16px] border-[2px] border-[rgb(255,184,2)] bg-[rgb(255,184,2)]">
          <div className="w-full md:w-[180px] bg-white p-[9px] border-[2px] border-[rgb(102,102,102)] rounded-[16px] flex flex-col ">
            {specialDrawResults.map((result) => {
              return (
                <p className="w-[152px] h-[21px] my-[5px] text-center leading-[21px] text-[13px] font-bold text-black">
                  {result}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialDate;
