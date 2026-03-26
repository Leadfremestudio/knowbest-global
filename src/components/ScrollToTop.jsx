import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, don't scroll to top instantly to allow id scrolling
    if (hash) return;

    // Disable native scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Reset scroll to top instantly
    window.scrollTo(0, 0);
    
    // Clear any existing ScrollTriggers to be safe, or just refresh
    // This allows new triggers to calculate from the top of the page
    ScrollTrigger.refresh();
    
    // Double refresh with a slight delay to ensure dynamic content has loaded
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
