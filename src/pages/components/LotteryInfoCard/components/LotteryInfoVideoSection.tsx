import { LotteryInfoVideoSectionProps } from "./type";

const LotteryInfoVideoSection = (props: LotteryInfoVideoSectionProps) => {
  console.log(props.url);
  return (
    <div className="w-full pt-[20px] pb-[15px] flex flex-col bg-blue-500 rounded-2xl">
        <p className="text-white text-[14px] font-bold"> view draw video</p>
      <iframe
        className="w-full border-0"
        height="250"
        src={props.url}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LotteryInfoVideoSection;
