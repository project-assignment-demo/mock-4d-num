import { ReactElement, useEffect, useRef, useState } from "react";
import type { HotFourDSelectionWrapperProps } from "./type";
import cs from 'classnames';
import React from "react";


const HotFourDSelectionWrapper = ({
    children,
    title,
  }: HotFourDSelectionWrapperProps) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
  
    const handleToggle = () => setOpen(!open);
    const handleClose = () => setOpen(false);
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      };
  
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);
  
    const imageClassnames = cs(
      "w-[23px] transform transition-transform duration-300",
      {
        "-rotate-180": open,
      }
    );
  
    const dropdownClassnames = cs(
      "absolute z-999 left-1/2 top-full mt-2 bg-[rgb(245,245,245)] max-h-[420px] overflow-y-auto border border-gray-400 shadow-lg rounded transform -translate-x-1/2",
      {
        block: open,
        hidden: !open,
      }
    );
  
    return (
      <div className="flex flex-col items-center relative">
        <div className="relative group">
          <button
            ref={buttonRef}
            onClick={handleToggle}
            className="flex flex-col justify-center items-center"
          >
            <b>{title}</b>
            <img
              className={imageClassnames}
              src="https://4dnum.com/assets/4dtypeDown-eb87f545.svg"
              alt="dropdown icon"
            />
          </button>
  
          <div ref={dropdownRef} className={dropdownClassnames}>
            <div className="p-2 space-y-2">
              {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                  const newChild = child as ReactElement<
                    React.HTMLProps<HTMLDivElement>
                  >;
                  return React.cloneElement(
                    newChild,
                    {
                      onClick: (
                        e: React.MouseEvent<HTMLDivElement, MouseEvent>
                      ) => {
                        if (newChild.props.onClick) {
                          newChild.props.onClick(e);
                        }
                        handleClose();
                      },
                    }
                  );
                }
                return child;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default HotFourDSelectionWrapper;
  