import { SixDJackpot } from "../../../../../../api/result/type";
import { JackpotComponentProps } from "../../type";

type EighLuckyInfoProps  = JackpotComponentProps<SixDJackpot> & { selectedTime: string | undefined };

export type { EighLuckyInfoProps };