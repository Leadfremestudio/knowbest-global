import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure GSAP is registered outside the component render cycle
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Higher performance text splitting for reveals.
 * Splits by words to keep smooth reveals without excessive DOM nodes.
 */
export const splitText = (element) => {
  if (!element || element.classList.contains("split-done")) return;
  element.classList.add("split-done");

  const walk = (node) => {
    if (node.nodeType === 3) {
      const text = node.nodeValue;
      if (!text.trim()) return node;
      const fragment = document.createDocumentFragment();

      const words = text.split(/(\s+)/);
      words.forEach((word) => {
        if (!word.trim()) {
          fragment.appendChild(document.createTextNode(word));
        } else {
          const span = document.createElement("span");
          span.textContent = word;
          span.style.display = "inline-block";
          span.style.opacity = "0";
          span.style.transform = "translateY(15px)";
          span.style.willChange = "transform, opacity";
          fragment.appendChild(span);
        }
      });
      return fragment;
    } else if (node.nodeType === 1) {
      if (node.nodeName === "BR") return node;
      Array.from(node.childNodes).forEach((child) => {
        const replacement = walk(child);
        if (replacement !== child) {
          node.replaceChild(replacement, child);
        }
      });
      return node;
    }
    return node;
  };

  Array.from(element.childNodes).forEach((child) => {
    const replacement = walk(child);
    if (replacement !== child) {
      element.replaceChild(replacement, child);
    }
  });
};

/**
 * Custom hook to handle all reveal animations centrally.
 * @param {React.RefObject} scopeRef - The container ref defining the scope.
 * @param {Array} dependencies - Effect dependencies for re-triggering.
 */
export const useReveal = (scopeRef, dependencies = []) => {
  useEffect(() => {
    if (!scopeRef.current) return;

    let ctx;
    
    // Using requestAnimationFrame to ensure React has finished rendering to the DOM
    const rafId = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        // Staggered fade up for sections
        const sections = gsap.utils.toArray(".fade-up-section", scopeRef.current);
        sections.forEach((section) => {
          gsap.fromTo(
            section,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            },
          );
        });

        // Individual Reveal Items
        gsap.utils.toArray(".reveal-item", scopeRef.current).forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            },
          );
        });

        // Staggered groups
        gsap.utils.toArray(".reveal-group", scopeRef.current).forEach((group) => {
          gsap.fromTo(
            group.querySelectorAll(".reveal-item-child"),
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: group,
                start: "top 85%",
              },
            },
          );
        });

        // Animated Titles with Text Splitting
        gsap.utils.toArray(".animated-title", scopeRef.current).forEach((title) => {
          splitText(title);

          gsap.to(title.querySelectorAll("span"), {
            scrollTrigger: {
              trigger: title,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.05,
          });
        });

        // Initial refresh
        ScrollTrigger.refresh();
      }, scopeRef);

      // Safe guard: refresh ScrollTrigger after intervals
      setTimeout(() => ScrollTrigger.refresh(), 100);
      setTimeout(() => ScrollTrigger.refresh(), 500);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (ctx) ctx.revert();
    };
  }, [scopeRef, ...dependencies]);
};
