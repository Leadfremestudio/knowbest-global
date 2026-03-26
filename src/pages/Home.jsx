import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";

// Components
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import Destinations from "../components/Home/Destinations";
import Testimonials from "../components/Home/Testimonials";
import ContactForm from "../components/ContactForm";

const Home = () => {
  const mainRef = useRef(null);
  const { hash } = useLocation();

  // Centralized animation reveal hook
  useReveal(mainRef);

  // Smooth scroll to hash on load or hash change
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      
      const scrollToElement = (behavior = "smooth") => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100; // Account for navbar height
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: behavior,
          });
        }
      };

      // First attempt: Instant jump so user doesn't see the top of the page
      setTimeout(() => scrollToElement("instant"), 10);
      
      // Subsequent attempts: Smoothly adjust in case of layout shifts
      setTimeout(() => scrollToElement("smooth"), 100);
      setTimeout(() => scrollToElement("smooth"), 500);
      setTimeout(() => scrollToElement("smooth"), 1000);
    }
  }, [hash]);

  return (
    <div 
      ref={mainRef} 
      className="bg-primary min-h-screen text-light opacity-0 transition-opacity duration-700"
      style={{ opacity: 1 }}
    >
      <Hero />
      <AboutSection />
      <Destinations />
      <Testimonials />
      <ContactForm />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .border-text {
          -webkit-text-stroke: 1px var(--color-light);
          color: transparent;
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `,
        }}
      />
    </div>
  );
};

export default Home;
