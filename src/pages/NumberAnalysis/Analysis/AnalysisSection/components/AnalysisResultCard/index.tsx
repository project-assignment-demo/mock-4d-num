import { AnalysisResultCardProps } from "./type";

const AnalysisResultCard = ({ title, children }: AnalysisResultCardProps) => {
  return (
    <div className="bg-white p-[10px] xl:rounded-3xl h-full flexflex-col overflow-hidden">
      {title && (
        <div className="md:max-w-[534px] flex justify-center items-center bg-[rgb(38,76,170)] p-[7px] rounded-3xl mb-5 mx-auto">
          <p className="text-center text-white text-[15px] md:text-[23px] xl:text-[15px]">{title}</p>
        </div>
      )}
      <div className="md:max-w-[534px] mx-auto">
      {children}
      </div>
    </div>
  );
};

export default AnalysisResultCard;
