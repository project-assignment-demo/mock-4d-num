import { createContext, PropsWithChildren, useContext, useRef } from "react";
import { Swiper } from "swiper/types";

const SwiperContext = createContext<{
  getSwiper: () => Swiper | null;
  setSwiper: (swiper: Swiper) => Swiper | null;
} | null>(null);

interface SwiperProviderProps extends PropsWithChildren {}

export const SwiperProvider = ({ children }: SwiperProviderProps) => {
  const swiperRef = useRef<Swiper | null>(null);
  return (
    <SwiperContext.Provider
      value={{
        getSwiper: () => swiperRef.current,
        setSwiper: (swiper: Swiper) => {
          swiperRef.current = swiper;
          return swiperRef.current;
        },
      }}
    >
      {children}
    </SwiperContext.Provider>
  );
};

export const useSwiperContext = () => {
  const context = useContext(SwiperContext);
  if (!context)
    throw new Error("useSwiperControl must be used within SwiperProvider");
  return context;
};

export const useSwiperControl = () => {
  const { getSwiper } = useSwiperContext();

  return {
    next: () => getSwiper()?.slideNext(),
    prev: () => getSwiper()?.slidePrev(),
    goTo: (index: number) => getSwiper()?.slideTo(index),
    getActiveIndex: () => getSwiper()?.activeIndex ?? 0,
    getTotalSlides: () => getSwiper()?.slides.length ?? 0,
  };
};
