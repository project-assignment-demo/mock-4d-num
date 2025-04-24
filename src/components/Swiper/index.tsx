import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import React, { PropsWithChildren, useRef, useState } from "react";
import { Company } from "../../store/company/type";
import { Swiper as SwiperClass } from "swiper/types";
import cs from "classnames";

interface SwiperWrapperProps extends PropsWithChildren {
  companies: Company[];
}

const SwiperWrapper = (props: SwiperWrapperProps) => {
  const { children, companies } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="h-screen w-screen relative">
      <div className="h-[61px] fixed z-9999 bg-white w-full top-0 rounded-b-[20px] flex justify-evenly items-center">
        {companies.map((company, index) => {
          const itemStyle = cs(
            "flex justify-center items-center w-[30px] h-[45px] rounded-full transition-all duration-300",
            index === activeIndex
              ? "bg-gray-300 shadow-[0_1px_5px_rgba(0,0,0,0.2)]"
              : ""
          );
          return (
            <div
              className={itemStyle}
              onClick={() => {
                swiperRef.current?.slideTo(index);
              }}
            >
              <div className="aspect-square rounded-full">
                <img src={company.source} className="w-full h-full" alt="" />
              </div>
            </div>
          );
        })}
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop
        className="h-full w-full"
      >
        {React.Children.map(children, (child, index) => {
          return (
            <SwiperSlide className="flex items-center justify-center">
              {child}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperWrapper;
