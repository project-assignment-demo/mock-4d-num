import { PropsWithChildren } from "react";

export interface JackpotTableProps extends PropsWithChildren {
  title: string;
  primaryColor: string;
}

const JackpotTable = (props: JackpotTableProps) => {

  return (
    <>
      <div className="w-full flex justify-center flex-col">
        <div className="flex justify-center items-center w-full relative">
          <div className="w-[58px] h-[58px] rounded-full p-1 absolute" style={{backgroundColor: props.primaryColor}}>
            <div className="bg-white p-1 rounded-full">
              <img
                src="https://share.4dnum.com/site-logo/4Dlogo-01.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[70px] rounded-b-md rounded-t-[3rem] flex flex-col justify-center" style={{backgroundColor: props.primaryColor}}>
          <p className="text-center font-semibold text-white mt-4">
            {props.title}
          </p>
        </div>
        {props.children}
      </div>
    </>
  );
};

export default JackpotTable;
