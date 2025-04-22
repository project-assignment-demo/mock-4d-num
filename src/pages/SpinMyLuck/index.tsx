import { useSiteStore } from "../../store";
import LuckyBookContainer from "../LuckyBook/components/LuckyBookContainer";
import SlotMachine from "./components/FourDNumberMachine";
import SpinSlot from "./components/SpinSlot";

const SpinMyLuck = () => {
  const updateDrawer = useSiteStore((state) => state.updateDrawer);
  // return <div className="flex flex-col items-center justify-center gap-2">
  //   <SlotMachine slotNumbers={4} />
  //   <SlotMachine slotNumbers={6} />
  // </div>

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
                {({ digits, rollKey }) =>
                  digits.map((digit, i) => (
                    <SpinSlot
                      key={i}
                      finalDigit={digit}
                      stopDelay={i}
                      rollingKey={rollKey}
                    />
                  ))
                }
              </SlotMachine>
              <SlotMachine title="6D NUMBER" totalDigit={6}>
              {({ digits, rollKey }) =>
                  digits.map((digit, i) => (
                    <SpinSlot
                    fontSize={45}
                    key={i}
                    finalDigit={digit}
                    stopDelay={i * 2}
                    rollingKey={rollKey}
                  />
                  ))
                }
              </SlotMachine>
              <SlotMachine title="JACKPOT NUMBER" totalDigit={6}>
              {({ digits, rollKey }) =>
                  digits.map((digit, i) => (
                    <SpinSlot
                    twoDigit
                    fontSize={45}
                    key={i}
                    finalDigit={digit}
                    stopDelay={i}
                    rollingKey={rollKey}
                  />
                  ))
                }
              </SlotMachine>
            </div>
          </div>
        }
      ></LuckyBookContainer>
    </div>
  );
};

export default SpinMyLuck;
