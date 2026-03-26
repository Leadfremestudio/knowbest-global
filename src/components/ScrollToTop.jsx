import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // Disable native scroll restoration on first load or mount
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    // If there's a hash, let the browser handle it or other logic handle it
    if (hash) return;

    // Direct scroll to top with no behavior (instant)
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);

    // Clear GSAP memory if available
    if (ScrollTrigger.clearScrollMemory) {
      ScrollTrigger.clearScrollMemory();
    }
    
    // Refresh ScrollTrigger after a short delay for dynamic content
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
    }, 10);

    // One more try after suspense components might have mounted
    const longTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(longTimer);
    };
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
