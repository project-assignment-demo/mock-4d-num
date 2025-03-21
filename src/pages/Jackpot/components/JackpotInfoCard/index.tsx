import { title } from "process";
import { PropsWithChildren } from "react";

interface JackpotInfoCard extends PropsWithChildren {
  title: string | string[];
  primaryColor: string;
  textColor?: string;
}

const JackpotInfoCard = (props: JackpotInfoCard) => {
  const textColor = props.textColor ?? "black";

  return (
    <div className="bg-white rounded-[10px] flex flex-col shadow-sm">
      <div
        className="flex h-[40px] p-2 justify-center items-center rounded-t-[10px]"
        style={{ backgroundColor: props.primaryColor }}
      >
        {props.title.length > 1 && Array.isArray(props.title) ? (
          props.title.map((t) => {
            return (
              <div key={t} className="flex-1 border-r border-[rgb(94,94,94)] last:border-none">
                <p
                className="text-center font-bold text-[14px]"
                style={{ color: textColor }}
              >
                {t}
              </p>
              </div>
            );
          })
        ) : (
          <p
            className="text-center font-bold text-[14px"
            style={{ color: textColor }}
          >
            {props.title}
          </p>
        )}
      </div>
      <div className="flex flex-col h-fit">{props.children}</div>
    </div>
  );
};

export default JackpotInfoCard;
