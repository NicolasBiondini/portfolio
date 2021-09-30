import { useEffect, useState } from "react";

import debunce from "lodash.debounce";

// Hook
export default function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
      });
    }
    const debuncedHandleResize = debunce(handleResize, 800);
    // Add event listener
    window.addEventListener("resize", debuncedHandleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", debuncedHandleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
