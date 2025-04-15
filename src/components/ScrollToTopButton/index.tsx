import { memo, RefObject, useEffect, useState } from "react";

const ScrollToTopButton = memo(
  ({ scrollRef }: { scrollRef: RefObject<HTMLDivElement | null> }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
      const container = scrollRef.current;
      if (!container) return;

      const onScroll = () => {
        setShow(container.scrollTop > 50);
      };

      container.addEventListener("scroll", onScroll);

      // Call once initially in case it's already scrolled
      onScroll();

      return () => {
        container.removeEventListener("scroll", onScroll);
      };
    }, []); // key: need to re-run if scrollRef.current changes

    const handleClick = () => {
      const container = scrollRef.current;
      if (!container) {
        console.warn("Scroll container not ready yet.");
        return;
      }

      container.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return (
      <>
        {show && (
          <button onClick={handleClick} className="fixed bottom-20 right-20">
            <img
              className="w-12 h-auto"
              src="https://4dnum.com/assets/goToTop-107fa1fa.svg"
              alt="Scroll to top"
            />
          </button>
        )}
      </>
    );
  }
);

export default ScrollToTopButton;