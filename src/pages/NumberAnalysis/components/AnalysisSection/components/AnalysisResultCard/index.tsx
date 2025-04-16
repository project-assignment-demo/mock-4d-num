import { AnalysisResultCardProps } from "./type";

const AnalysisResultCard = ({ title, children }: AnalysisResultCardProps) => {
  return (
    <div className="bg-white p-[10px] rounded-3xl w-full h-full flex flex-col overflow-hidden">
      <div className="flex justify-center items-center bg-[rgb(38,76,170)] p-[7px] rounded-3xl mb-5">
        <p className="text-center text-white text-[14px]">{title}</p>
      </div>
      {children}
    </div>
  );
};

export default AnalysisResultCard;
