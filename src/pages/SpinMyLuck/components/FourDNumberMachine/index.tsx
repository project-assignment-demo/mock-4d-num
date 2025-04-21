import { useState } from "react";
import SpinSlot from "../SpinSlot";

// const SLOT_COUNT = 4;


const getRandomDigit = (): number => Math.floor(Math.random() * 10);


interface SlotMachineProps {
    slotNumbers: number;
}

const SlotMachine = ({slotNumbers}: SlotMachineProps) => {
  const [digits, setDigits] = useState<number[]>(Array.from({ length: slotNumbers }).map(_ => 0));
  const [rollKey, setRollKey] = useState<number>(0);

  const handleSpin = () => {
    const newDigits = Array.from({ length: slotNumbers }, getRandomDigit);
    setDigits(newDigits);
    setRollKey((prev) => prev + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 80 }}>
      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        {digits.map((digit, i) => (
          <SpinSlot
            key={i}
            finalDigit={digit}
            stopDelay={i * 0.5} // ← stops one by one
            rollingKey={rollKey}
          />
        ))}
      </div>

      <button
        onClick={handleSpin}
        style={{
          marginTop: 30,
          padding: "12px 24px",
          fontSize: 18,
          cursor: "pointer",
        }}
      >
        Spin 🔄
      </button>
    </div>
  );
};

export default SlotMachine;