import LotteryPrimaryPrize from "../../PrimaryPrize";
import LotterySecondaryPrize from "../../SecondaryPrize";
import LotteryInfoVideoSection from "../../VideoSection";
import { BaseLotteryInfoProps } from "./type";

const BaseLotteryInfo = (props: BaseLotteryInfoProps) => {
  const { data, primaryColor, secondaryColor, primaryPrizeLabelTextColor, isScreenshot } = props;

  const { primaryPrizes, specials, consolations, video } = data;

  return (
    <>
      { (video && !isScreenshot) && <LotteryInfoVideoSection url={video}/> }
      <LotteryPrimaryPrize
        prizes={primaryPrizes}
        backgroundColor={secondaryColor}
        labelTextColor={primaryPrizeLabelTextColor}
      />
      <LotterySecondaryPrize
        title="Special"
        prizes={specials}
        primaryColor={primaryColor}
      />
      <LotterySecondaryPrize
        title="Consolation"
        prizes={consolations}
        primaryColor={primaryColor}
      />
    </>
  );
};

export default BaseLotteryInfo;
