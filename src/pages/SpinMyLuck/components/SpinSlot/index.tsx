import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// const DIGITS = Array.from({ length: 10 }, (_, i) => i.toString());
// const ITEM_HEIGHT = 57;
// const SPIN_CYCLES = 3;

// interface SlotProps {
//   finalDigit: number;
//   stopDelay: number;
//   rollingKey: number;
//   fontSize?: number;
// }
// const SpinSlot: React.FC<SlotProps> = ({ finalDigit, stopDelay, rollingKey, fontSize }) => {
//   const controls = useAnimation();
//   const [list, setList] = useState<string[]>([]);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       // Generate digits for spinning: 0-9 repeated + final digit
//       const spinningDigits = Array.from({ length: SPIN_CYCLES }, () => DIGITS).flat();
//       const fullList = [...spinningDigits, finalDigit.toString()];
//       setList(fullList);

//       const targetY = -ITEM_HEIGHT * (fullList.length - 1);

//       controls.set({ y: 0 });

//       controls.start({
//         y: targetY,
//         transition: {
//           duration: stopDelay,
//           ease: "linear"
//         }
//       }).then(() => {
//         controls.start({
//           y: targetY,
//           transition: {
//             type: "spring",
//             stiffness: 300,
//             damping: 20
//           }
//         });
//       });
//     }, 100); // tiny delay to visually show initial state

//     return () => clearTimeout(timeout);
//   }, [rollingKey]);

//   return (
//     <div className="flex-shrink-0 flex-1 relative w-[35px] md:w-[70px] h-[56px] md:h-[65px] overflow-hidden rounded-xl border-2 border-blue-700 bg-white mx-1">
//       <motion.div animate={controls} className="flex flex-col">
//         {list.map((digit, i) => (
//           <div
//             style={{fontSize: fontSize}}
//             key={i}
//             className="h-[57px] leading-[57px] flex items-center justify-center text-[36px] md:text-[65px] font-bold text-black"
//           >
//             {digit}
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

const DIGITS = Array.from({ length: 10 }, (_, i) => i.toString());
const ITEM_HEIGHT = 57;
const SPIN_CYCLES = 3;

interface SlotProps {
  finalDigit: number;
  stopDelay: number;
  rollingKey: number;
  fontSize?: number;
  twoDigit?: boolean;
}

const SpinSlot: React.FC<SlotProps> = ({
  finalDigit,
  stopDelay,
  rollingKey,
  fontSize = 45,
  twoDigit = false,
}) => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [list1, setList1] = useState<string[]>([]);
  const [list2, setList2] = useState<string[]>([]);

  useEffect(() => {
    if (twoDigit) {
      const timeout = setTimeout(() => {
        // Generate digits for spinning: 0-9 repeated + final digit
        const finalStr = finalDigit.toString().padStart(2, "0");
        const [tens, ones] = finalStr.split("");

        const spinDigits = Array.from(
          { length: SPIN_CYCLES },
          () => DIGITS
        ).flat();
        const fullList1 = [...spinDigits, tens];
        const fullList2 = [...spinDigits, ones];

        setList1(fullList1);
        setList2(fullList2);

        const targetY1 = -ITEM_HEIGHT * (fullList1.length - 1);
        const targetY2 = -ITEM_HEIGHT * (fullList2.length - 1);

        controls1.set({ y: 0 });
        controls2.set({ y: 0 });

        const leftStop = stopDelay + 0.5;
        const rightStop = leftStop + 0.5;
        console.log(leftStop, rightStop);
        controls1
          .start({
            y: targetY1,
            transition: {
              duration: leftStop,
              ease: "linear",
            },
          })
          .then(() => {
            controls1.start({
              y: targetY1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            });
          });

        controls2
          .start({
            y: targetY2,
            transition: {
              duration: rightStop,
              ease: "linear",
            },
          })
          .then(() => {
            controls2.start({
              y: targetY2,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            });
          });
      }, 100); // tiny delay to visually show initial state

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        // Generate digits for spinning: 0-9 repeated + final digit
        const spinningDigits = Array.from(
          { length: SPIN_CYCLES },
          () => DIGITS
        ).flat();
        const fullList = [...spinningDigits, finalDigit.toString()];
        setList1(fullList);

        const targetY = -ITEM_HEIGHT * (fullList.length - 1);

        controls1.set({ y: 0 });

        controls1
          .start({
            y: targetY,
            transition: {
              duration: stopDelay,
              ease: "linear",
            },
          })
          .then(() => {
            controls1.start({
              y: targetY,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            });
          });
      }, 100); // tiny delay to visually show initial state

      return () => clearTimeout(timeout);
    }
  }, [rollingKey]);

  return (
    <div className="w-[35px] md:w-[70px] h-[56px] md:h-[65px] overflow-hidden rounded-xl border-2 border-blue-700 bg-white mx-1 flex justify-center">
      {twoDigit ? (
        <>
          <motion.div
            animate={controls1}
            className="flex flex-col"
          >
            {list1.map((digit, i) => (
              <div
                key={`tens-${i}`}
                style={{ fontSize }}
                className="h-[57px] leading-[57px] flex items-center justify-center text-black font-bold"
              >
                {digit}
              </div>
            ))}
          </motion.div>
          <motion.div
            animate={controls2}
            className="flex flex-col"
          >
            {list2.map((digit, i) => (
              <div
                key={`ones-${i}`}
                style={{ fontSize }}
                className="h-[57px] leading-[57px] flex items-center justify-center text-black font-bold"
              >
                {digit}
              </div>
            ))}
          </motion.div>
        </>
      ) : (
        <motion.div animate={controls1} className="flex flex-col">
          {list1.map((digit, i) => (
            <div
              key={i}
              style={{ fontSize }}
              className="h-[57px] leading-[57px] flex items-center justify-center text-black font-bold"
            >
              {digit}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default SpinSlot;
