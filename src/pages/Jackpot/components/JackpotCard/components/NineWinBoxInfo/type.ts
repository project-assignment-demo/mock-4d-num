import { SixDJackpot } from "../../../../../../api/result/type";
import { JackpotComponentProps } from "../../type";

type NineWinBoxInfoProps = JackpotComponentProps<SixDJackpot> & {
  selectedTime: string | undefined;
};

export type { NineWinBoxInfoProps };
