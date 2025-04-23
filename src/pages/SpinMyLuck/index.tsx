import { useSiteStore } from "../../store";
import LuckyBookContainer from "../LuckyBook/components/LuckyBookContainer";
import SlotMachine from "./components/FourDNumberMachine";
import SpinSlot from "./components/SpinSlot";

const SpinMyLuck = () => {
  const updateDrawer = useSiteStore((state) => state.updateDrawer);

  const jackpotNumbers = ["6/58", "6/55", "6/50", "6/49", "6/45"];

  return (
    <div className="w-full max-w-[760px] md:w-fit md:h-full flex justify-center items-center mx-auto">
      <LuckyBookContainer
        title={"Lucky Spin"}
        className="bg-white h-full justify-start"
        navIcon={
          <button className="md:hidden" onClick={() => updateDrawer(true)}>
            <img src="https://4dnum.com/assets/menu-696a0cd6.svg" />
          </button>
        }
        action={
          <div className="relative -top-10 left-1/2 -translate-x-1/2 rounded-t-[46px] w-[85%] rounded-[14px] max-w-[700px] gap-6 bg-white pt-10 pb-2 flex flex-col justify-center items-center">
            <div className="h-full md:h-[550px] overflow-scroll">
              <SlotMachine title="4D NUMBER" totalDigit={4}>
                {({ digits, rollKey }) => (
                  <div className="flex items-center justify-center w-full font-bold scale-90">
                    {digits.map((digit, i) => (
                      <SpinSlot
                        key={i}
                        finalDigit={digit}
                        stopDelay={i}
                        rollingKey={rollKey}
                      />
                    ))}
                  </div>
                )}
              </SlotMachine>
              <SlotMachine title="6D NUMBER" totalDigit={6}>
                {({ digits, rollKey }) => (
                  <div className="flex items-center justify-center w-full font-bold scale-90">
                    {digits.map((digit, i) => (
                      <SpinSlot
                        fontSize={45}
                        key={i}
                        finalDigit={digit}
                        stopDelay={i}
                        rollingKey={rollKey}
                      />
                    ))}
                  </div>
                )}
              </SlotMachine>
              <SlotMachine title="JACKPOT NUMBER" totalDigit={6}>
                {({ digits, rollKey }) => (
                  <>
                    {" "}
                    <div className="flex items-center justify-center w-full font-bold scale-90">
                      {digits.map((digit, i) => (
                        <SpinSlot
                          twoDigit
                          fontSize={35}
                          key={i}
                          finalDigit={digit}
                          stopDelay={i}
                          rollingKey={rollKey}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between w-full items-center text-center gap-1 py-4">
                      {jackpotNumbers.map((number) => (
                        <label htmlFor={`jackpot-${number}`}>
                          <input
                            type="radio"
                            id={`jackpot-${number}`}
                            className="hidden peer"
                            name="number"
                            value={number}
                          />
                          <div
                            key={number}
                            className="bg-[rgb(239,239,239)] peer-checked:bg-red-500 peer-checked:text-white cursor-pointer border border-transparent font-semibold text-[12px] md:text-[15px] rounded-[12px] shadow-md py-0.5 px-3"
                          >
                            {number}
                          </div>
                        </label>
                      ))}
                    </div>
                  </>
                )}
              </SlotMachine>
            </div>
          </div>
        }
      ></LuckyBookContainer>
    </div>
  );
};

export default SpinMyLuck;
