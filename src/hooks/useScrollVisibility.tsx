import { useState, useEffect, useCallback, RefObject } from "react";

interface useScrollVisibilityProps {
  scrollRef: RefObject<HTMLDivElement | null>;
  threshold?: number;
}

const useScrollVisibility = ({
  scrollRef,
  threshold = 50,
}: useScrollVisibilityProps) => {
  const target = scrollRef.current ?? window;
  console.log(target);
  const [isVisible, setIsVisible] = useState(false);

  const onScroll = useCallback(() => {
    if (target === window) {
    } else {
      const t = target as HTMLDivElement;
      if (t.scrollTop > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    // if (window.scrollY > threshold) {
    //   setIsVisible(true);
    // } else {
    //   setIsVisible(false);
    // }

    // if (scrollRef.current && scrollRef.current.scrollTop > threshold) {
    //   setIsVisible(true); // Show button when scrolled past threshold
    // } else {
    //   setIsVisible(false); // Hide button when at top
    // }
  }, [threshold]); // Only depend on threshold, not isVisible

  const scrollToTop = () => {
    console.log(window.scrollY);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    console.log("useScrollVisibility binding");
    scrollRef.current!.addEventListener("scroll", () => onscroll);

    return () => {
      console.log("useScrollVisibility remove binding");
      // scrollRef.current!.removeEventListener("scroll", () => onscroll);
    };
  }, [onScroll]); // Depend on onScroll (which is memoized)

  return {
    isButtonVisible: isVisible,
    scrollToTop,
  };
};

export default useScrollVisibility;
