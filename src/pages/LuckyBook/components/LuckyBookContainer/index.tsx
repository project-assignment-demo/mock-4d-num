import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

import cs from "classnames";

interface LuckyBookContainerProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  title: string;
  action?: ReactNode;
  navIcon?: ReactNode;
}

const LuckyBookContainer = ({
  children,
  title,
  action,
  navIcon,
  className,
}: LuckyBookContainerProps) => {
  const containerClassnames = cs(
    "w-full md:w-[760px] 2xl:w-[900px] flex items-center justify-center flex-col gap-2 relative",
    className
  );

  return (
    <div className={containerClassnames}>
      <div className="relative w-full">
        <div className="flex relative justify-center items-center overflow-hidden bg-[rgb(38,76,170)] w-full md:w-[760px] 2xl:w-[900px] h-[150px] md:h-[163px] rounded-b-[34px] md:rounded-t-[12px] md:rounded-b-[34px]">
          <p className="text-[22px] leading-[26px] font-[900] place-content-center text-white md:text-[30px]">
            {title}
          </p>
          <div className="absolute top-[20px] left-[20px] z-2">{navIcon}</div>
        </div>

        {action}
      </div>
      {children}
    </div>
  );
};

export default LuckyBookContainer;
