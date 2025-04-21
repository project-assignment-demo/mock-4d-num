import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const DIGITS = Array.from({ length: 10 }, (_, i) => i.toString());
const ITEM_HEIGHT = 60;

const SPIN_DURATION = 0.3; // time per loop cycle
const SPIN_CYCLES = 20;

interface SlotProps {
    finalDigit: number;
    stopDelay: number;
    rollingKey: number;
  }
  
//   const SpinSlot: React.FC<SlotProps> = ({ finalDigit, stopDelay, rollingKey }) => {
//     const controls = useAnimation();
//     const [list, setList] = useState<string[]>([]);
  
//     useEffect(() => {
//       const spinningList = Array.from({ length: SPIN_CYCLES }, () => DIGITS).flat();
//       const finalList = [...spinningList, finalDigit.toString()];
//       setList(finalList);
  
//       // Start infinite rolling
//       controls.start({
//         y: [0, -ITEM_HEIGHT * DIGITS.length],
//         transition: {
//           repeat: Infinity,
//           repeatType: "loop",
//           ease: "linear",
//           duration: SPIN_DURATION,
//         },
//       });
  
//       // Stop with spring effect
//       const stopTimeout = setTimeout(() => {
//         const targetY = -ITEM_HEIGHT * (finalList.length - 1);
//         controls.start({
//           y: targetY,
//           transition: {
//             type: "spring",
//             stiffness: 200,
//             damping: 18,
//           },
//         });
//       }, stopDelay * 1000);
  
//       return () => clearTimeout(stopTimeout);
//     }, [rollingKey]);
  
//     return (
//       <div
//         style={{
//           height: ITEM_HEIGHT,
//           width: 60,
//           overflow: "hidden",
//           border: "2px solid #333",
//           borderRadius: 10,
//           fontSize: 32,
//           fontWeight: "bold",
//           background: "#fff",
//         }}
//       >
//         <motion.div animate={controls}>
//           {list.map((item, i) => (
//             <div
//               key={i}
//               style={{
//                 height: ITEM_HEIGHT,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               {item}
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     );
//   };


const SpinSlot: React.FC<SlotProps> = ({ finalDigit, stopDelay, rollingKey }) => {
    const controls = useAnimation();
    const [list, setList] = useState<string[]>([]);
  
    useEffect(() => {
      const spinningList = Array.from({ length: SPIN_CYCLES }, () => DIGITS).flat();
      const finalList = [...spinningList, finalDigit.toString()];
      setList(finalList);
  
      // Start spinning loop
      controls.start({
        y: [0, -ITEM_HEIGHT * DIGITS.length],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: SPIN_DURATION,
        },
      });
  
      // Stop with spring
      const stopTimeout = setTimeout(() => {
        const targetY = -ITEM_HEIGHT * (finalList.length - 1);
        controls.start({
          y: targetY,
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 18,
          },
        });
      }, stopDelay * 1000);
  
      return () => clearTimeout(stopTimeout);
    }, [rollingKey]);
  
    return (
      <div
        style={{
          height: ITEM_HEIGHT,
          width: 60,
          overflow: "hidden",
          border: "2px solid #333",
          borderRadius: 10,
          fontSize: 32,
          fontWeight: "bold",
          background: "#fff",
          position: "relative",
        }}
      >
        <motion.div
          animate={controls}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          {list.map((item, i) => (
            <div
              key={i}
              style={{
                height: ITEM_HEIGHT,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    );
  };


  export default SpinSlot;