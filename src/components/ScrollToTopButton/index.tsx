import { memo, RefObject } from "react";
import useScrollVisibility from "../../hooks/useScrollVisibility";

const ScrollToTopButton = memo(
  ({ scrollRef }: { scrollRef: RefObject<HTMLDivElement | null> }) => {
    const { isButtonVisible, scrollToTop } = useScrollVisibility({ scrollRef });
    console.log("isButtonVsible", isButtonVisible)
    return (
      isButtonVisible && (
        <button onClick={scrollToTop} className="fixed bottom-20 right-20">
          <img
            className="w-12 h-auto"
            src="https://4dnum.com/assets/goToTop-107fa1fa.svg"
            alt=""
          />
        </button>
      )
    );
  }
);

export default ScrollToTopButton;
