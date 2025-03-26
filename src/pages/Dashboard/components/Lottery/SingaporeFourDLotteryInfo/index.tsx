import BaseLotteryInfo from "../BaseLotteryInfo";
import { SingaporeFourDLotteryInfoProps } from "./type";

function SingaporeLotteryInfo(props: SingaporeFourDLotteryInfoProps) {
    return (
        <BaseLotteryInfo {...props} />
    )
}

export default SingaporeLotteryInfo;