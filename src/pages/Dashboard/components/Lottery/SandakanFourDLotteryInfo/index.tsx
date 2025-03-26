import BaseLotteryInfo from "../BaseLotteryInfo";
import { SandkanFourDLotteryInfoProps } from "./type";

function SandakanLotteryInfo(props: SandkanFourDLotteryInfoProps) {
    return (
        <BaseLotteryInfo {...props} />
    )
}

export default SandakanLotteryInfo;