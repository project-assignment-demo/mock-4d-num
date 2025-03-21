import classNames from "classnames";
import { PropsWithChildren, ReactNode } from "react";

export interface JackpotTableProps extends PropsWithChildren {
  title: string;
  primaryColor: string;
  icon: string;
  extras?: ReactNode | undefined;
}

const JackpotTable = (props: JackpotTableProps) => {
  const titleCs = classNames(
    "text-center font-semibold text-white mt-4",
    props.extras ? "pb-[30px]" : ""
  );
  const titleWrapperCs = classNames(
    "w-full min-h-[70px] h-full rounded-b-[17px] rounded-t-[3rem] flex flex-col justify-center",
    props.extras ? "pt-[20px]" : ""
  );
  return (
    <>
      <div className="w-full flex justify-center flex-col">
        <div className="flex justify-center items-center w-full relative">
          <div
            className="w-[58px] h-[58px] rounded-full p-1 absolute"
            style={{ backgroundColor: props.primaryColor }}
          >
            <div className="bg-white p-1 rounded-full">
              <img
                src={props.icon}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className={titleWrapperCs}
          style={{ backgroundColor: props.primaryColor }}
        >
          <p className={titleCs}>{props.title}</p>
          {props.extras}
        </div>
        {props.children}
      </div>
    </>
  );
};

export default JackpotTable;
