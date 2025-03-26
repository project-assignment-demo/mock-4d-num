import { LotteryInfoVideoSectionProps } from "./type";

const LotteryInfoVideoSection = (props: LotteryInfoVideoSectionProps) => {
  return (
    <div className="w-full pt-[5px] pb-[15px] flex flex-col bg-blue-500 rounded-2xl aspect-[16/9]">
      <div className="flex flex-col w-full justify-center items-center">
        <p className="text-white text-[14px] font-bold my-auto"> view draw video</p>
      </div>
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
