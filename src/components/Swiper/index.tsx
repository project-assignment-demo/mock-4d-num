import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import React, { memo, PropsWithChildren, useEffect, useRef, useState } from "react";
import { useSwiperContext } from "../../context/SwiperContext";

interface SwiperWrapperProps extends PropsWithChildren {}

const SwiperWrapper = (props: SwiperWrapperProps) => {
  const { children } = props;

  const { setSwiper } = useSwiperContext();

  console.log('swiper rebuild');

  return (
    <div className="h-screen w-screen">
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
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
