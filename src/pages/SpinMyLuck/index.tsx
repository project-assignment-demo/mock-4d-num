import SlotMachine from "./components/FourDNumberMachine";



const SpinMyLuck = () => {
  return <div className="flex flex-col items-center justify-center gap-2">
    <SlotMachine slotNumbers={4} />
    <SlotMachine slotNumbers={6} />
  </div>
};

export default SpinMyLuck;
